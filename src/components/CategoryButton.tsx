
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
        "flex items-center w-full px-4 py-3 rounded-xl mb-3 transition-all duration-300",
        "hover:bg-tech-primary-purple hover:text-white hover:shadow-md",
        isActive
          ? "bg-gradient-to-r from-tech-primary-purple to-tech-secondary-purple text-white shadow-md"
          : "bg-sidebar-accent text-sidebar-foreground"
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-8 h-8 rounded-lg mr-3",
        isActive ? "bg-white/20" : "bg-sidebar-accent-foreground/10"
      )}>
        <IconComponent className="w-5 h-5" />
      </div>
      <span className="font-medium">{category.name}</span>
    </button>
  );
};

export default CategoryButton;
