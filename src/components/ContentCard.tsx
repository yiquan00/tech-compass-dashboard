
import React from "react";
import { ContentItem } from "@/data/navigationData";
import { ExternalLink, Star } from "lucide-react";
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
      className="group relative block rounded-xl overflow-hidden transition-all duration-300 animate-fade-in bg-white hover:shadow-lg border border-gray-100 hover:border-tech-primary-purple/20"
    >
      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-tech-primary-purple/10 to-tech-primary-purple/5 rounded-xl mr-4 border border-tech-primary-purple/10 group-hover:border-tech-primary-purple/30 transition-all">
            {/* SVG Icon with tech style */}
            <svg className="w-6 h-6 text-tech-primary-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex items-center space-x-1">
            {Array(Math.floor(Math.random() * 3) + 3).fill(0).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-tech-primary-purple transition-colors duration-200">
          {item.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-2">
          {item.category && (
            <Badge variant="outline" className="bg-gradient-to-r from-tech-primary-purple/10 to-tech-blue/10 text-xs font-normal text-tech-primary-purple border-tech-primary-purple/10">
              {item.category}
            </Badge>
          )}
          <Badge variant="outline" className="bg-gray-50 text-xs font-normal text-gray-500">
            官方
          </Badge>
        </div>
        
        <div className="pt-3 border-t border-dashed border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-400 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
            100% 在线
          </span>
          <span className="text-xs text-gray-400">更新于 2025-04-28</span>
        </div>
      </div>
      
      {/* 外部链接指示器 */}
      <div className="absolute right-3 top-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink size={14} className="group-hover:text-tech-primary-purple" />
      </div>
      
      {/* 高科技装饰元素 */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-tech-primary-purple/10 to-transparent rounded-full transition-transform duration-500 group-hover:scale-125"></div>
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br from-tech-blue/10 to-transparent rounded-full transition-transform duration-500 group-hover:scale-110"></div>
      
      {/* 悬停时显示的高亮边框效果 */}
      <div className="absolute inset-0 border-2 border-tech-primary-purple/0 rounded-xl transition-all duration-300 group-hover:border-tech-primary-purple/30 opacity-0 group-hover:opacity-100"></div>
      
      {/* 底部高亮线条动画 */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-tech-primary-purple to-tech-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </a>
  );
};

export default ContentCard;
