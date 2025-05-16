
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { categories } from "@/data/navigationData";
import CategoryButton from "./CategoryButton";
import { Input } from "@/components/ui/input";

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onCategoryChange }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`bg-sidebar h-screen flex flex-col transition-all duration-300 ease-in-out ${
        collapsed ? "w-16" : "w-72"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg bg-tech-primary-purple flex items-center justify-center mr-2">
              <span className="text-white font-bold">N</span>
            </div>
            <h1 className="text-xl font-bold text-sidebar-foreground">导航站</h1>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-lg bg-sidebar-accent text-sidebar-foreground hover:bg-tech-primary-purple hover:text-white transition-colors ${
            collapsed ? "mx-auto" : ""
          }`}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {!collapsed && (
        <div className="px-4 py-4">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="搜索分类..." 
              className="w-full h-9 bg-sidebar-accent text-sidebar-foreground border-none focus-visible:ring-1 focus-visible:ring-tech-primary-purple pl-9"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-sidebar-foreground/50" />
          </div>
        </div>
      )}

      <div className="flex-grow p-3 overflow-y-auto">
        {filteredCategories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onClick={() => onCategoryChange(category.id)}
          />
        ))}
      </div>

      <div className="p-4 text-xs text-sidebar-foreground/70 border-t border-sidebar-border">
        {!collapsed && (
          <div className="flex flex-col">
            <div className="mb-1">科技导航</div>
            <div className="text-sidebar-foreground/50">&copy; 2025 版权所有</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
