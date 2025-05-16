
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
      className={`bg-white border-r border-gray-100 h-screen flex flex-col transition-all duration-300 ease-in-out ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      <div className="flex items-center p-4 border-b border-gray-100">
        {!collapsed && (
          <div className="flex items-center">
            <div className="w-7 h-7 rounded-md bg-tech-primary-purple flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <h1 className="text-base font-medium text-gray-800">导航站</h1>
          </div>
        )}
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className={`text-gray-400 hover:text-gray-600 hover:bg-gray-100 ${
            collapsed ? "mx-auto" : "ml-auto"
          }`}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      {!collapsed && (
        <div className="px-3 pt-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-gray-400" />
            <Input 
              type="text" 
              placeholder="搜索分类..." 
              className="w-full h-8 text-sm bg-gray-50 border-none focus-visible:ring-1 focus-visible:ring-tech-primary-purple pl-8"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      )}

      <div className="flex-grow p-3 overflow-y-auto">
        <div className="mt-2">
          {!collapsed && (
            <div className="text-xs font-medium text-gray-400 uppercase mb-2 px-2">
              所有分类
            </div>
          )}
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

      {!collapsed && (
        <div className="p-4 text-xs text-gray-400 border-t border-gray-100">
          <div className="flex flex-col">
            <div className="mb-1">科技导航</div>
            <div className="text-gray-300">&copy; 2025 版权所有</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
