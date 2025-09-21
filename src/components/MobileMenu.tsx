import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  return (
    <div 
      className={`md:hidden fixed inset-0 bg-white z-50 transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="flex justify-between items-center px-4 py-4">
        <Link to="/" className="text-black font-normal text-lg">
          kontent haus
        </Link>
        
        <button 
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="w-6 h-0.5 bg-black rotate-45 translate-y-2 transition-all duration-300 ease-in-out" />
          <span className="w-6 h-0.5 bg-black opacity-0 transition-all duration-300 ease-in-out" />
          <span className="w-6 h-0.5 bg-black -rotate-45 -translate-y-2 transition-all duration-300 ease-in-out" />
        </button>
      </div>
      
      <nav className="flex flex-col items-center justify-center h-full space-y-12 -mt-16">
        <Link 
          to="/" 
          className={`text-2xl font-medium transition-colors duration-300 ${
            location.pathname === '/' ? 'text-black' : 'text-gray-500 hover:text-black'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          index
        </Link>
        <Link 
          to="/projects" 
          className={`text-2xl font-medium transition-colors duration-300 ${
            location.pathname === '/projects' ? 'text-black' : 'text-gray-500 hover:text-black'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          projects
        </Link>
        <Link 
          to="/about" 
          className={`text-2xl font-medium transition-colors duration-300 ${
            location.pathname === '/about' ? 'text-black' : 'text-gray-500 hover:text-black'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          about
        </Link>
        
        <div className="text-gray-500 text-lg mt-8">
          <Link to="/contact" className="hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>
            send us a message
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;