
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
        <div className="w-1 h-6 bg-gradient-to-b from-tech-primary-purple to-tech-blue rounded-full mr-3"></div>
        <h2 className="text-xl font-semibold bg-gradient-to-r from-tech-primary-purple to-tech-blue bg-clip-text text-transparent flex items-center">
          精选推荐
          <div className="ml-3 w-8 h-1 bg-gradient-to-r from-tech-primary-purple to-tech-blue rounded-full"></div>
          <div className="ml-1 w-2 h-1 bg-gradient-to-r from-tech-primary-purple to-tech-blue rounded-full"></div>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-tech-primary-purple/20"
          >
            {item.image ? (
              <div className="w-full h-44 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg border border-white/20">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    {item.isAd && (
                      <Badge variant="outline" className="bg-white/20 text-xs font-normal text-white border-none backdrop-blur-sm">
                        推荐
                      </Badge>
                    )}
                  </div>
                  <p className="text-white/90 text-sm backdrop-blur-sm bg-black/20 p-2 rounded-lg border border-white/10">{item.description}</p>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-gradient-to-br from-tech-primary-purple/5 to-white h-44 relative overflow-hidden">
                {/* 科技风装饰元素 */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-tech-primary-purple/10 to-transparent rounded-full"></div>
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-tech-blue/10 to-transparent rounded-full"></div>
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-tech-primary-purple/0 via-tech-primary-purple/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tech-blue/30 via-tech-blue/10 to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-tech-primary-purple/20 to-tech-primary-purple/5 rounded-lg border border-tech-primary-purple/10">
                      <Star className="w-4 h-4 text-tech-primary-purple" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    {item.isAd && (
                      <Badge variant="outline" className="bg-tech-primary-purple/5 text-xs font-normal text-tech-primary-purple border-tech-primary-purple/10">
                        推荐
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            )}
            
            {/* 高科技风格的悬停动画 */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-primary-purple to-tech-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tech-blue to-tech-primary-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300 delay-100"></div>
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-tech-primary-purple to-tech-blue transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 delay-200"></div>
            <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-tech-blue to-tech-primary-purple transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300 delay-300"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
