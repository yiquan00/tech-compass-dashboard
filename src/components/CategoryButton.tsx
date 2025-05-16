
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
        "flex items-center w-full px-4 py-3 rounded-md mb-2 transition-all duration-200",
        "hover:bg-tech-primary-purple hover:text-white",
        isActive
          ? "bg-tech-primary-purple text-white"
          : "bg-sidebar-accent text-sidebar-foreground"
      )}
    >
      <IconComponent className="w-5 h-5 mr-3" />
      <span className="font-medium">{category.name}</span>
    </button>
  );
};

export default CategoryButton;
