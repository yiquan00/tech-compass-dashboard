
import React from "react";
import { FeaturedItem } from "@/data/navigationData";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeaturedSectionProps {
  items: FeaturedItem[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ items }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">推荐广告位</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            {item.image ? (
              <div className="w-full h-44 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    {item.isAd && (
                      <Badge variant="outline" className="bg-white/20 text-xs font-normal text-white border-none">
                        广告
                      </Badge>
                    )}
                  </div>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-gradient-to-r from-gray-50 to-white h-44">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  {item.isAd && (
                    <Badge variant="outline" className="bg-gray-100 text-xs font-normal text-gray-500 border-none">
                      广告
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
