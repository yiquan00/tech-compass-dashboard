
import React from "react";
import { ContentItem } from "@/data/navigationData";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ContentCardProps {
  item: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-fade-in"
    >
      {item.image && (
        <div className="w-12 h-12 flex items-center justify-center absolute top-6 left-6 bg-gray-50 rounded-md">
          <img src={item.image} alt={item.title} className="w-7 h-7" />
        </div>
      )}
      
      <div className="p-6 pl-24">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-tech-primary-purple transition-colors duration-200">
          {item.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {item.tags?.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50 text-xs font-normal text-gray-500">
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {item.platforms?.map((platform, index) => (
            <span key={index} className="text-xs text-gray-400 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-1"></span>
              {platform}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute right-3 top-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink size={14} />
      </div>
    </a>
  );
};

export default ContentCard;
