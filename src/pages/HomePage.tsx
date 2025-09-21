import React, { useState } from "react";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import { portfolioItems } from "../data/portfolioData";
import PortfolioCarousel from "../components/PortfolioCarousel";

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white font-light min-h-screen overflow-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Wheel/Swipe controls the slides */}
      <PortfolioCarousel items={portfolioItems} />

      {/* <Footer />  // keep removed if you want zero page scroll */}
    </div>
  );
};

export default HomePage;