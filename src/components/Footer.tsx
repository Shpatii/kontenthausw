import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-8 py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-end space-y-4 md:space-y-0">
      <div>
        <p className="text-black font-light text-sm md:text-base leading-relaxed">
          a holistic creative studio shaping brands<br />
          through strategy, story, and style.
        </p>
      </div>
      
      <div className="text-left md:text-right">
        <p className="text-black font-light text-sm md:text-base">
          based in Prishtine, Kosova
        </p>
      </div>
    </footer>
  );
};

export default Footer;