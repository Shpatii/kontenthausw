import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white font-light">
      {/* Header */}
      <header className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6 border-b border-gray-800">
        <Link to="/" className="text-white font-normal text-lg hover:text-gray-300 transition-colors">
          kontent haus
        </Link>
        
        <nav className="hidden md:flex space-x-12">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors font-medium">
            index
          </Link>
          <Link to="/projects" className="text-gray-400 hover:text-white transition-colors font-medium">
            projects
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors font-medium">
            about
          </Link>
        </nav>
        
        <Link to="/" className="text-white hover:text-gray-300 transition-colors">
          close
        </Link>
      </header>

      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Mobile: Stacked Layout, Desktop: Side by Side */}
        <div className="flex-col md:flex-row flex w-full">
          {/* Left section - "Want to get in touch" text */}
          <div className="w-full md:flex-1 px-4 md:px-8 py-8 md:py-16 flex flex-col justify-center">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 md:mb-32">
              want to get in<br />
              touch or work<br />
              together on<br />
              your project?
            </h1>
          
            <div className="space-y-6 md:space-y-8">
              <div>
                <p className="text-base md:text-xl font-light mb-2">
                  we are open for anything,
                </p>
                <p className="text-base md:text-xl font-light mb-2">
                  so write away lorem ipsum
                </p>
                <p className="text-base md:text-xl font-light">
                  dolor sit amet
                </p>
              </div>
            
              <div className="flex flex-row space-x-8 md:space-x-16">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  instagram
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  linkedin
                </a>
              </div>
            </div>
          </div>

          {/* Right section - Contact form */}
          <div className="w-full md:flex-1 border-t md:border-t-0 md:border-l border-gray-800 px-4 md:px-8 py-8 md:py-16">
            <form onSubmit={handleSubmit} className="space-y-8 h-full flex flex-col">
              <div className="space-y-8 flex-1">
                <div className="text-center md:text-right mb-8">
                  <p className="text-lg font-light">to: kontent haus</p>
                </div>
                
                <div className="border-b border-gray-800 pb-4">
                  <label className="block text-lg font-light mb-2">from:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email here"
                    className="w-full bg-transparent text-gray-400 placeholder-gray-600 border-none outline-none text-lg"
                    required
                  />
                </div>
                
                <div className="border-b border-gray-800 pb-4">
                  <label className="block text-lg font-light mb-2">subject:</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="subject line"
                    className="w-full bg-transparent text-gray-400 placeholder-gray-600 border-none outline-none text-lg"
                    required
                  />
                </div>
                
                <div className="flex-1">
                  <label className="block text-lg font-light mb-4">message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="message here"
                    className="w-full h-32 md:h-64 bg-transparent text-gray-400 placeholder-gray-600 border-none outline-none text-lg resize-none"
                    required
                  />
                </div>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  send a message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;