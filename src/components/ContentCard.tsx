
import React from "react";
import { ContentItem } from "@/data/navigationData";
import { ExternalLink } from "lucide-react";

interface ContentCardProps {
  item: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative block bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-tech-primary-purple/5 to-tech-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6">
        <h3 className="text-lg font-semibold text-tech-dark-purple mb-3 group-hover:text-tech-primary-purple transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex justify-end">
          <span className="text-xs text-tech-primary-purple/70 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            访问链接 <ExternalLink size={12} className="ml-1" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ContentCard;
