
import React from "react";
import { cn } from "@/lib/utils";
import { Category } from "@/data/navigationData";
import { Star, LayoutTemplate, Compass, LayoutDashboard, LayoutList, Zap } from "lucide-react";

interface CategoryButtonProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  star: Star,
  "layout-template": LayoutTemplate,
  compass: Compass,
  "layout-dashboard": LayoutDashboard,
  "layout-list": LayoutList,
  zap: Zap,
};

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isActive, onClick }) => {
  const IconComponent = iconComponents[category.icon] || Star;
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center w-full px-3 py-2.5 rounded-xl mb-2.5 transition-all duration-300 relative overflow-hidden",
        isActive
          ? "bg-gradient-to-r from-tech-primary-purple/20 to-tech-primary-purple/5 text-tech-primary-purple font-medium backdrop-blur-sm border border-tech-primary-purple/20"
          : "bg-white/70 text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-100"
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-8 h-8 mr-3 rounded-lg transition-all",
        isActive ? "bg-gradient-to-br from-tech-primary-purple to-tech-blue text-white shadow-md" : "bg-gray-50 text-gray-400"
      )}>
        <IconComponent className="w-4 h-4" />
      </div>
      <span className="text-sm">{category.name}</span>
      {isActive && (
        <div className="ml-auto text-xs bg-white/80 backdrop-blur-sm text-tech-primary-purple px-1.5 py-0.5 rounded-md border border-tech-primary-purple/10">
          精选
        </div>
      )}
      
      {/* 添加科技感装饰元素 */}
      {isActive && (
        <>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-tech-primary-purple/10 to-transparent"></div>
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-tech-blue/5 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-tech-primary-purple to-tech-blue"></div>
        </>
      )}
    </button>
  );
};

export default CategoryButton;
