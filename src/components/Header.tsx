import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
      <Link to="/" className="text-black font-normal text-lg hover:text-gray-600 transition-colors">
        kontent haus
      </Link>
      
      <nav className="hidden md:flex space-x-12">
        <Link 
          to="/" 
          className={`font-medium transition-colors ${
            location.pathname === '/' ? 'text-black' : 'text-gray-500 hover:text-black'
          }`}
        >
          index
        </Link>
        <Link 
          to="/projects" 
          className={`font-medium transition-colors ${
            location.pathname === '/projects' ? 'text-black' : 'text-gray-500 hover:text-black'
          }`}
        >
          projects
        </Link>
        <Link 
          to="/about" 
          className={`font-medium transition-colors ${
            location.pathname === '/about' ? 'text-black' : 'text-gray-500 hover:text-black'
          }`}
        >
          about
        </Link>
      </nav>
      
      {/* Hamburger Menu Button */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span 
          className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span 
          className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span 
          className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>
      
      <div className="hidden md:block text-gray-500">
        <Link to="/contact" className="hover:text-black transition-colors">
          send us a message
        </Link>
      </div>
    </header>
  );
};

export default Header;