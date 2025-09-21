import React from "react";
import { useState } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';

export const Project = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [carouselIndex, setCarouselIndex] = useState(0);
const prev = () => setCarouselIndex(i => (i + 3 - 1) % 3);
const next = () => setCarouselIndex(i => (i + 1) % 3);

// Swipe support
const [touchStartX, setTouchStartX] = useState<number | null>(null);
const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  setTouchStartX(e.touches[0].clientX);
};
const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
  setTouchStartX(null);
};

  const navigationItems = [
    { label: "index", opacity: "opacity-50" },
    { label: "projects", opacity: "opacity-50" },
    { label: "about", opacity: "opacity-50" },
  ];

  const textBlocks = [
    {
      text: "fruits infuse the visuals with a burst of freshness, a touch of vitality, and the soft glow of summer.",
    },
    {
      text: "fruits infuse the visuals with a burst of freshness, a touch of vitality, and the soft glow of summer.",
    },
    {
      text: "fruits infuse the visuals with a burst of freshness, a touch of vitality, and the soft glow of summer.",
    },
  ];

  return (
    <div className="bg-white w-full">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="bg-white w-full max-w-[1440px] mx-auto relative">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Content */}
          <div className="px-4 space-y-8">
            <div className="space-y-2">
              <div className="font-normal text-black text-sm">
                services
              </div>
              <div className="font-normal text-black text-xs">
                [art direction, photography, curated management]
              </div>
            </div>

            <h1 className="font-normal text-black text-4xl leading-tight">
              facial am
            </h1>

            <div className="w-full h-64">
              <img 
                src="/images/projects/FacialAM1.png" 
                alt="Facial AM project" 
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="font-normal text-black text-3xl leading-tight">
              rooted in freshness & subtle transformation
            </h2>

            <div className="space-y-4">
              <div className="font-normal text-black text-lg">
                [project info]
              </div>
              <div className="font-normal text-black text-lg">
                beauty shaped by summer sensations
              </div>
            </div>

            <p className="font-normal text-black text-sm leading-relaxed">
              we wanted to create a summer-led campaign for our client shaped by the
              sensations of the season — the dewiness of fresh fruit, the softness
              of sunlight on skin, and the calm glow that summer brings. Our task
              was to translate these feelings into a visual direction rooted in
              freshness, subtle transformation, and beauty that speaks for itself.
              The result is a campaign that sets the tone for the season, evoking
              radiance that feels effortless, natural, and timeless.
            </p>

            {/* Mobile Image Grid */}
            <div
            className="relative w-full overflow-hidden rounded-md pb-[133%]" 
            // 3:4 portrait → height = 133% of width
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-roledescription="carousel"
          >
            <img
              src={
                carouselIndex === 0
                  ? "/images/general/f2.png"
                  : carouselIndex === 1
                  ? "/images/general/f3.png"
                  : "/images/general/f4.png"
              }
              alt="Facial AM carousel"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />

            {/* Arrows */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center text-xl"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center text-xl"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              <button onClick={() => setCarouselIndex(0)} className={`h-2.5 w-2.5 rounded-full ${carouselIndex===0?'bg-white':'bg-white/50'} ring-1 ring-black/10`} />
              <button onClick={() => setCarouselIndex(1)} className={`h-2.5 w-2.5 rounded-full ${carouselIndex===1?'bg-white':'bg-white/50'} ring-1 ring-black/10`} />
              <button onClick={() => setCarouselIndex(2)} className={`h-2.5 w-2.5 rounded-full ${carouselIndex===2?'bg-white':'bg-white/50'} ring-1 ring-black/10`} />
            </div>
          </div>

            <div className="font-normal text-black text-sm leading-relaxed">
              {textBlocks[0].text}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-40">
                <img 
                  src="/images/general/f5.png" 
                  alt="Facial AM project image 5" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-40">
                <img 
                  src="/images/general/f6.png" 
                  alt="Facial AM project image 6" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="font-normal text-black text-sm leading-relaxed">
              {textBlocks[1].text}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-40">
                <img 
                  src="/images/general/f7.png" 
                  alt="Facial AM project image 5" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-40">
                <img 
                  src="/images/general/f8.png" 
                  alt="Facial AM project image 6" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="font-normal text-black text-sm leading-relaxed">
              {textBlocks[2].text}
            </div>

            <div className="space-y-4">
              <div className="font-normal text-black text-lg">
                curated management
              </div>
              <div className="w-full h-64">
                <img 
                  src="/images/general/image 7.png" 
                  alt="Facial AM curated management" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 pb-8">
              <div className="font-normal text-black text-lg">
                [next project]
              </div>
              <h3 className="font-normal text-black text-4xl leading-tight">
                espressolab
              </h3>
              <div className="w-full h-48">
                <img 
                  src="/images/general/Frame 8.png" 
                  alt="Espressolab next project preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center py-4 font-normal text-black text-xs">
              kontent haus, 2025
            </div>
          </div>
        </div>

        {/* Desktop Layout - Preserved Exactly */}
        <div className="hidden md:block relative px-2" style={{ minHeight: 'clamp(4000px, 80vw, 5781px)' }}>
          <div className="absolute top-[252px] left-0" style={{ width: 'clamp(800px, 100vw, 1440px)', height: 'clamp(400px, 41.6vw, 599px)' }}>
            <img 
              src="/images/projects/FacialAM1.png" 
              alt="Facial AM project" 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="absolute top-[56px] font-normal text-black tracking-[0] leading-[normal]" style={{ left: 'clamp(300px, 35.6vw, 513px)', fontSize: 'clamp(60px, 6.9vw, 100px)' }}>
            facial am
          </h1>

          <h2 className="absolute top-[962px] left-9 font-normal text-black tracking-[0]" style={{ width: 'clamp(700px, 75.5vw, 1087px)', fontSize: 'clamp(50px, 6.9vw, 100px)', lineHeight: 'clamp(50px, 6.9vw, 100px)' }}>
            rooted in freshness &<br />subtle transformation
          </h2>

          <div className="absolute top-[187px] left-2 font-normal text-black tracking-[0] leading-[normal]" style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
            services
          </div>

          <div className="absolute top-[1224px] left-2 font-normal text-black tracking-[0] leading-[normal]" style={{ fontSize: 'clamp(18px, 1.7vw, 24px)' }}>
            [project info]
          </div>

          <div className="absolute top-[3947px] font-normal text-black tracking-[0] leading-[normal]" style={{ left: 'clamp(350px, 41.4vw, 596px)', fontSize: 'clamp(18px, 1.7vw, 24px)' }}>
            curated management
          </div>

          <div className="absolute top-[4027px]" style={{ width: 'clamp(300px, 30vw, 432px)', height: 'clamp(400px, 40.8vw, 588px)', left: 'clamp(300px, 35vw, 504px)' }}>
            <img 
              src="/images/general/image 7.png" 
              alt="Facial AM curated management" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-[1224px] font-normal text-black tracking-[0] leading-[normal]" style={{ left: 'clamp(400px, 44.8vw, 645px)', fontSize: 'clamp(18px, 1.7vw, 24px)' }}>
            beauty shaped by summer sensations
          </div>

          <div className="absolute top-[209px] left-2 font-normal text-black tracking-[0] leading-[normal]" style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
            [art direction, photography, curated management]
          </div>

          <div className="absolute top-[209px] font-normal text-black tracking-[0] leading-[normal] right-2" style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
            kontent haus, 2025
          </div>

          <p className="absolute top-[1286px] font-normal text-black text-right tracking-[0] leading-[normal]" style={{ width: 'clamp(300px, 29.7vw, 428px)', left: 'clamp(400px, 45vw, 648px)', fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
            we wanted to create a summer-led campaign for our client shaped by the
            sensations of the season — the dewiness of fresh fruit, the softness
            of sunlight on skin, and the calm glow that summer brings. Our task
            was to translate these feelings into a visual direction rooted in
            freshness, subtle transformation, and beauty that speaks for itself.
            The result is a campaign that sets the tone for the season, evoking
            radiance that feels effortless, natural, and timeless.
          </p>

          <div className="absolute top-[2276px] font-normal text-black text-right tracking-[0] leading-[normal]" style={{ width: 'clamp(250px, 24.6vw, 354px)', left: 'clamp(550px, 72.7vw, 1047px)', fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
            {textBlocks[0].text}
          </div>

          <div className="absolute top-[2921px] font-normal text-black tracking-[0] leading-[normal]" style={{ width: 'clamp(250px, 24.6vw, 354px)', left: 'clamp(300px, 35.3vw, 508px)', fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
            {textBlocks[1].text}
          </div>

          <div className="absolute top-[3620px] left-9 font-normal text-black tracking-[0] leading-[normal]" style={{ width: 'clamp(250px, 24.6vw, 354px)', fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
            {textBlocks[2].text}
          </div>

          <section className="absolute top-[1565px] left-2" style={{ width: 'clamp(800px, 98vw, 1400px)', height: 'clamp(400px, 47.2vw, 679px)' }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0" style={{ width: 'clamp(250px, 32vw, 460px)', height: '100%' }}>
                <img 
                  src="/images/general/f2.png" 
                  alt="Facial AM project image 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0" style={{ width: 'clamp(250px, 32vw, 460px)', height: '100%', left: 'clamp(260px, 33vw, 470px)' }}>
                <img 
                  src="/images/general/f3.png" 
                  alt="Facial AM project image 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0" style={{ width: 'clamp(250px, 32vw, 460px)', height: '100%', left: 'clamp(520px, 66vw, 940px)' }}>
                <img 
                  src="/images/general/f4.png" 
                  alt="Facial AM project image 4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <div className="absolute top-[2419px] left-2" style={{ width: 'clamp(300px, 31vw, 450px)', height: 'clamp(400px, 39.1vw, 563px)' }}>
            <img 
              src="/images/general/f5.png" 
              alt="Facial AM project image 5" 
              className="w-full h-full object-cover"
            />
          </div>
         
          <div className="absolute top-[3118px]" style={{ width: 'clamp(300px, 29.9vw, 431px)', height: 'clamp(400px, 39.1vw, 563px)', left: 'clamp(550px, 67.6vw, 973px)' }}>
            <img 
              src="/images/general/f8.png" 
              alt="Facial AM project image 6" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[3118px]" style={{ width: 'clamp(300px, 29.9vw, 431px)', height: 'clamp(400px, 39.1vw, 563px)', left: 'clamp(320px, 37.1vw, 534px)' }}>
            <img 
              src="/images/general/f7.png" 
              alt="Facial AM project image 5" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-[2419px]" style={{ width: 'clamp(150px, 16vw, 230px)', height: 'clamp(200px, 20vw, 290px)', left: 'clamp(280px, 33.5vw, 485px)' }}>
            <img 
              src="/images/general/f6.png" 
              alt="Facial AM project image 5" 
              className="w-full h-full object-cover"
            />
          </div>

          <section className="absolute top-[4932px] font-normal text-black tracking-[0] leading-[normal]" style={{ left: 'clamp(400px, 44.8vw, 645px)', fontSize: 'clamp(18px, 1.7vw, 24px)' }}>
            [next project]
          </section>

          <h3 className="absolute top-[5013px] font-normal text-black tracking-[0] leading-[normal]" style={{ left: 'clamp(250px, 29.8vw, 429px)', fontSize: 'clamp(60px, 6.9vw, 100px)' }}>
            espressolab
          </h3>

          <div className="absolute top-[5188px] left-2 bg-black" style={{ width: 'clamp(700px, 98vw, 1400px)', height: 'clamp(350px, 34.4vw, 495px)' }} />
          <div className="absolute top-[5188px] left-2" style={{ width: 'clamp(700px, 98vw, 1400px)', height: 'clamp(350px, 34.4vw, 495px)' }}>
            <img 
              src="/images/general/Frame 8.png" 
              alt="Espressolab next project preview" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}