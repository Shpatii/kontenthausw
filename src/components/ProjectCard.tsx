import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  year: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, year, slug }) => {
  return (
    <Link to={`/project/${slug}`} className="group cursor-pointer block">
      <div className="aspect-[4/5] overflow-hidden mb-4">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-black font-medium text-lg">{title}</h3>
        <p className="text-gray-500 font-light text-sm">{category}</p>
        <p className="text-gray-400 font-light text-xs">{year}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;