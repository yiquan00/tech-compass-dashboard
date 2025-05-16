
import React from "react";
import { FeaturedItem } from "@/data/navigationData";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturedSectionProps {
  items: FeaturedItem[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ items }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-tech-primary-purple/10 mr-3">
          <Star className="w-5 h-5 text-tech-primary-purple" />
        </div>
        <h2 className="text-2xl font-bold text-tech-dark-purple">推荐广告位</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
          >
            {item.image ? (
              <div 
                className="w-full h-40 bg-cover bg-center" 
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 group-hover:from-black/40 group-hover:to-black/70 transition-all duration-300"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    {item.isAd && (
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                        广告
                      </span>
                    )}
                  </div>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-gradient-to-br from-tech-primary-purple to-tech-blue">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  {item.isAd && (
                    <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                      广告
                    </span>
                  )}
                </div>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
