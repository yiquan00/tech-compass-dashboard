
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/data/navigationData";
import CategoryButton from "./CategoryButton";

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onCategoryChange }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`bg-sidebar h-screen flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <h1 className="text-lg font-bold text-sidebar-foreground">导航站</h1>
        )}
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-full bg-sidebar-accent text-sidebar-foreground hover:bg-tech-primary-purple hover:text-white transition-colors ${
            collapsed ? "mx-auto" : ""
          }`}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <div className="flex-grow p-3 overflow-y-auto">
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onClick={() => onCategoryChange(category.id)}
          />
        ))}
      </div>

      <div className="p-4 text-xs text-sidebar-foreground/70 border-t border-sidebar-border">
        {!collapsed && <div>科技导航 &copy; 2025</div>}
      </div>
    </div>
  );
};

export default Sidebar;
