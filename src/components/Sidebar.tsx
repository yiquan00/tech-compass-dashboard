
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { categories } from "@/data/navigationData";
import CategoryButton from "./CategoryButton";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

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
      className={`bg-gradient-to-b from-white to-gray-50 border-r border-gray-100 h-screen flex flex-col transition-all duration-300 ease-in-out backdrop-blur-lg ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center p-4 border-b border-gray-100 bg-white">
        {!collapsed && (
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tech-primary-purple to-tech-blue flex items-center justify-center mr-2.5 shadow-md">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <h1 className="text-base font-semibold bg-gradient-to-r from-tech-primary-purple to-tech-blue bg-clip-text text-transparent">科技导航</h1>
          </div>
        )}
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className={`text-gray-400 hover:text-tech-primary-purple hover:bg-gray-50 ${
            collapsed ? "mx-auto" : "ml-auto"
          }`}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      {!collapsed && (
        <div className="px-3 pt-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input 
              type="text" 
              placeholder="搜索分类..." 
              className="w-full h-10 text-sm bg-white rounded-xl border-gray-100 focus-visible:ring-1 focus-visible:ring-tech-primary-purple pl-9"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      )}

      <div className="flex-grow p-3 overflow-y-auto">
        <div className="mt-2">
          {!collapsed && (
            <div className="flex items-center px-2 mb-3 text-xs font-medium text-gray-500 uppercase">
              <div className="w-1 h-3 bg-tech-primary-purple rounded-full mr-2"></div>
              所有分类
            </div>
          )}
          <div className="space-y-1">
            {filteredCategories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => onCategoryChange(category.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {!collapsed && (
        <div className="p-4 text-xs bg-white border-t border-gray-100">
          <div className="flex flex-col">
            <div className="mb-1 text-tech-primary-purple font-medium">科技导航</div>
            <div className="text-gray-400">&copy; 2025 全新呈现</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
