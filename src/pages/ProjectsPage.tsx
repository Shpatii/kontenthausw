import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const projectsData = [
  {
    title: "Proper Pizza",
    category: "Brand Identity & Photography",
    image: "/portfolio/prp-min.png",
    year: "2024",
    slug: "propar-pizza",
    link: "/projects/propar-pizza", // internal route
  },
  {
    title: "Gulliver",
    category: "Campaign & Strategy",
    image: "/portfolio/gul-min.png",
    year: "2024",
    slug: "gulliver",
    // link: "https://example.com/gulliver" // example external link
  },
  {
    title: "Facial AM",
    category: "Visual Identity",
    image: "/portfolio/fam-min.png",
    year: "2023",
    slug: "facial-am",
  },
  {
    title: "EspressoLab",
    category: "Brand Campaign",
    image: "/portfolio/elb-min.png",
    year: "2023",
    slug: "espressolab",
    link: "./components/Espressolab",
  },
  {
    title: "Sonder",
    category: "Photography & Content",
    image: "/portfolio/son-min.png",
    year: "2023",
    slug: "sondar",
    link: "/projects/sondar",
  },
  {
    title: "Tutto Capsule",
    category: "Brand Strategy",
    image: "/portfolio/tutto-min.png",
    year: "2022",
    slug: "tutto-o",
    link: "/projects/tutto-o",
  }
];

const ProjectsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-light flex flex-col">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="flex-1">
        {/* Page Intro */}
        <div className="my-12 md:my-20 px-4 md:px-8">
          <h3 className="mx-auto max-w-2xl text-center text-xl md:text-3xl font-light leading-relaxed text-black tracking-wide">
            We know you want to be nosy and take a look at what we can do, here's all the
            material you'll need. Go on.
          </h3>
        </div>

        {/* Projects Grid */}
        <section className="px-4 md:px-8 mb-12 md:mb-20">
          <div
            className="
              grid
              grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
              gap-6 md:gap-8
            "
          >
            {projectsData.map((p) => {
              const dest = p.link || `/projects/${p.slug}`;
              const isExternal = /^https?:\/\//i.test(dest);

              const Card = (
                <div className="origin-top-left scale-90 md:scale-95">
                  <ProjectCard
                    title={p.title}
                    category={p.category}
                    image={p.image}
                    year={p.year}
                    slug={p.slug}
                  />
                </div>
              );

              return isExternal ? (
                <a
                  key={p.slug}
                  href={dest}
                  target="_blank"
                  rel="noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-black/20 rounded-md"
                  aria-label={`Open ${p.title}`}
                >
                  {Card}
                </a>
              ) : (
                <Link
                  key={p.slug}
                  to={dest}
                  className="block focus:outline-none focus:ring-2 focus:ring-black/20 rounded-md"
                  aria-label={`Open ${p.title}`}
                >
                  {Card}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Bottom Video / Reel */}
        <section className="px-4 md:px-8 mb-20">
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl bg-black">
            <video
              className="w-full h-auto"
              controls
              playsInline
              poster="/images/posters/reel.jpg" /* optional */
            >
              <source src="/videos/showreel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;