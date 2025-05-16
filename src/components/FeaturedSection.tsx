
import React from "react";
import { FeaturedItem } from "@/data/navigationData";
import { Star } from "lucide-react";

interface FeaturedSectionProps {
  items: FeaturedItem[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ items }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <Star className="w-5 h-5 text-tech-primary-purple mr-2" />
        <h2 className="text-xl font-semibold text-tech-dark-purple">推荐广告位</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative bg-gradient-to-br from-tech-primary-purple/5 to-tech-secondary-purple/10 rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
          >
            {item.image && (
              <div className="w-full h-32 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="w-full h-full bg-black/20 group-hover:bg-black/10 transition-all duration-200"></div>
              </div>
            )}
            <div className="p-4">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold text-tech-dark-purple">{item.title}</h3>
                {item.isAd && (
                  <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-tech-primary-purple/10 text-tech-primary-purple">
                    广告
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
