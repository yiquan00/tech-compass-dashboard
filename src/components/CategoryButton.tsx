
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
        "flex items-center w-full px-3 py-2.5 rounded-lg mb-1.5 transition-all duration-200",
        isActive
          ? "bg-tech-primary-purple/10 text-tech-primary-purple font-medium"
          : "bg-transparent text-gray-600 hover:bg-gray-100"
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-6 h-6 mr-2.5",
        isActive ? "text-tech-primary-purple" : "text-gray-400"
      )}>
        <IconComponent className="w-4 h-4" />
      </div>
      <span>{category.name}</span>
    </button>
  );
};

export default CategoryButton;
