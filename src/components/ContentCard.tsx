
import React from "react";
import { ContentItem } from "@/data/navigationData";

interface ContentCardProps {
  item: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-tech-primary-purple transition-all duration-200 animate-fade-in"
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold text-tech-dark-purple mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    </a>
  );
};

export default ContentCard;
