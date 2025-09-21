import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-light">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section (image) */}
      <div className="relative overflow-hidden">
  {/* Mobile: 16:9 landscape box with object-contain (no cropping) */}
        <div className="block md:hidden relative w-full" style={{ paddingBottom: "56.25%" }}>
          <img
            src="/images/Group 17 (3)-min.png"
            alt="kontent haus — studio mood"
            className="absolute inset-0 w-full h-full object-contain "
            loading="lazy"
          />
        </div>

        {/* Desktop: fill screen with object-cover */}
        <div className="hidden md:block relative h-screen">
          <img
            src="/images/Group 17 (3)-min.png"
            alt="kontent haus — studio mood"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 " />
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 md:px-16 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-black text-lg md:text-xl font-light leading-relaxed">
            at kontent haus, creativity is more than a service — it's a practice, a mindset, and a way of 
            showing up for the world to us, every project is an opportunity to craft something meaningful, 
            something that resonates, and something that lasts.
          </p>
          
          <p className="text-black text-lg md:text-xl font-light leading-relaxed">
            we believe the best ideas grow from curiosity, care, and a relentless attention to detail. every 
            campaign, every concept, every story we tell carries the essence of that belief — our 
            commitment to doing work that matters, not just for clients, but for the people behind every 
            brief.
          </p>
          
          <p className="text-black text-lg md:text-xl font-light leading-relaxed">
            at kontent haus, we see ourselves as more than a creative agency. we are collaborators, 
            problem-solvers, and a community that thrives on shared vision and shared purpose. and 
            through it all, we promise to bring our full dedication, our sharpest ideas, and our genuine love 
            for the visual.
          </p>
        </div>
      </div>

      {/* Quote Section with image “ mark */}
      <div className="px-8 md:px-16 py-16 md:py-24 text-center">
  <img
    src="/images/logo kontenthaus-min.png"  // ✅ renamed (recommended)
    alt="kontent haus logo"
    className="mx-auto w-64 sm:w-56 md:w-72 lg:w-100 h-auto mb-6"
  />
  {/* optional quote text
  <h3 className="text-2xl md:text-4xl font-light text-black max-w-3xl mx-auto">
    craft work that resonates & lasts
  </h3>
  */}
</div>

      {/* Video Section */}
      <div className="px-8 md:px-16 py-16 md:py-24">
        <div className="text-center mb-8">
          <p className="text-black text-lg font-light">VIDEO</p>
        </div>
        <div className="w-full h-96 md:h-[600px] bg-black mb-16"></div>
        {/* Replace the black box above with a <video> if you have the file ready */}
        {/* 
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl bg-black">
          <video className="w-full h-auto" controls playsInline poster="/images/posters/about-reel.jpg">
            <source src="/videos/about-reel.mp4" type="video/mp4" />
          </video>
        </div>
        */}
      </div>

      {/* Call to Action Section */}
      <div className="px-8 md:px-16 py-16 md:py-32 text-center">
        <h2 className="text-black text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
          let's work<br />
          together
        </h2>
        <div className="mt-12">
          <Link 
            to="/contact" 
            className="text-black text-lg font-light hover:text-gray-600 transition-colors underline"
          >
            send us a message
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;