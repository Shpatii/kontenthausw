import React, { useEffect, useRef, useState } from "react";

export interface PortfolioItem {
  title: string;
  subtitle: string;
  image: string;
}

interface PortfolioCarouselProps {
  items: PortfolioItem[];
}

const ANIM_MS = 1000; // keep in sync with transition duration

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [lock, setLock] = useState(false);
  const [containerW, setContainerW] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  // 3x list so we have items on both sides
  const infiniteItems = [...items, ...items, ...items];
  const BASE = items.length;                // start in the middle copy
  const activeAbs = BASE + activeIndex;     // absolute index of the single "active" card

  // Sizes (match your UI)
  const ACTIVE_W = isMobile ? 280 : 495;
  const INACTIVE_W = isMobile ? 120 : 211;
  const ACTIVE_H = isMobile ? 350 : 607;
  const INACTIVE_H = isMobile ? 150 : 259;

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      setContainerW(containerRef.current?.clientWidth ?? 0);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const next = () => setActiveIndex((i) => (i + 1) % items.length);
  const prev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length);

  const stepWithLock = (fn: () => void) => {
    if (lock) return;
    setLock(true);
    fn();
    setTimeout(() => setLock(false), ANIM_MS);
  };

  // Wheel -> slide
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (Math.abs(delta) < 20) return;
    stepWithLock(() => (delta > 0 ? next() : prev()));
  };

  // Swipe -> slide
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    stepWithLock(() => (dx < 0 ? next() : prev()));
  };

  // --- CENTERING MATH ---
  // All items BEFORE the active absolute index are inactive width.
  const widthBefore = activeAbs * INACTIVE_W;
  // Move so the active card's center aligns with the container center.
  const translate = Math.max(0, widthBefore + ACTIVE_W / 2 - containerW / 2);

  return (
    <div
      ref={containerRef}
      className="px-2 md:px-8 mb-4 md:mb-8 overflow-hidden flex items-end"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      <div
        className="flex transition-transform duration-1000 ease-out"
        style={{
          transform: `translateX(-${translate}px)`,
          width: "max-content", // let the track size itself naturally
        }}
      >
        {infiniteItems.map((item, index) => {
          // ✅ Only the middle copy's item is active
          const isActive = index === activeAbs;

          const w = isActive ? ACTIVE_W : INACTIVE_W;
          const h = isActive ? ACTIVE_H : INACTIVE_H;

          return (
            <div
              key={`${item.title}-${index}`}
              className="flex-shrink-0 transition-all duration-1000 ease-out cursor-pointer group"
              onClick={() => stepWithLock(() => setActiveIndex(index % items.length))}
              style={{ width: `${w}px`, height: `${h}px` }}
            >
              <div className="mb-2 md:mb-4">
                <div className="text-xs md:text-sm font-light text-black mb-1 group-hover:text-gray-600 transition-colors">
                  {item.title}
                </div>
                <div className="text-xs md:text-sm font-light text-black group-hover:text-gray-600 transition-colors">
                  {item.subtitle}
                </div>
              </div>
              <div className="w-full h-full overflow-hidden group-hover:opacity-90 transition-opacity">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 ease-out"
                  style={{
                    filter: isActive ? "brightness(1.1) contrast(1.1)" : "brightness(0.8)",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioCarousel;