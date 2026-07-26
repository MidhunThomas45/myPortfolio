import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  // Handle kasus ketika ProjectLink kosong
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  

  return (
    <div className="group relative w-full h-full flex">
            
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] shadow-2xl transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.15] hover:shadow-purple-500/10 hover:-translate-y-1 group-hover:scale-[1.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    
        <div className="relative p-5 z-10 flex flex-col h-full">
          <div className="flex-grow space-y-4">
            <h3 className="text-lg md:text-xl font-medium tracking-tight text-primaryText/90 group-hover:text-primaryText transition-colors duration-300">
              {Title}
            </h3>
            
            <p className="text-secondaryText/80 text-sm leading-relaxed line-clamp-3">
              {Description}
            </p>
            
            <div className="pt-4 flex items-center justify-between">
              {ProjectLink ? (
                <a
                href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-secondaryText text-sm">Demo Not Available</span>
              )}
              
     

              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-card hover:bg-cardHover text-primaryText/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-secondaryText text-sm">Details Not Available</span>
              )}
            </div>
          </div>
          
          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-2xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;