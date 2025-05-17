
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search, Zap } from "lucide-react";
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
      className={`bg-gradient-to-b from-white to-gray-50 border-r border-gray-100 h-screen flex flex-col transition-all duration-300 ease-in-out backdrop-blur-lg relative ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* 添加科技感装饰元素 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-primary-purple/80 via-tech-blue/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-tech-blue/30 to-tech-primary-purple/50"></div>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-tech-primary-purple/50 via-transparent to-tech-blue/30"></div>
      
      <div className="flex items-center p-4 border-b border-gray-100 bg-white relative">
        {!collapsed && (
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-tech-primary-purple to-tech-blue flex items-center justify-center mr-2.5 shadow-md relative overflow-hidden group">
              <span className="text-white font-bold text-sm z-10">N</span>
              {/* 添加高科技效果 */}
              <div className="absolute -inset-px bg-gradient-to-tr from-white/0 via-white/10 to-white/30"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white/20 rounded-full"></div>
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-white/20 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-base font-semibold bg-gradient-to-r from-tech-primary-purple to-tech-blue bg-clip-text text-transparent flex items-center">
                科技导航
                <Zap size={14} className="ml-1 text-tech-blue" />
              </h1>
              <div className="h-0.5 w-14 bg-gradient-to-r from-tech-primary-purple/80 to-tech-blue/50 rounded-full mt-0.5 opacity-70"></div>
            </div>
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
            <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-tech-primary-purple/0 via-tech-primary-purple/20 to-tech-primary-purple/0"></div>
          </div>
        </div>
      )}

      <div className="flex-grow p-3 overflow-y-auto scrollbar-thin scrollbar-thumb-tech-primary-purple/10 scrollbar-track-transparent">
        <div className="mt-2">
          {!collapsed && (
            <div className="flex items-center px-2 mb-4 text-xs font-medium uppercase relative">
              <div className="flex items-center gap-1">
                <div className="w-1 h-3 bg-tech-primary-purple rounded-full"></div>
                <div className="w-2 h-3 bg-gradient-to-r from-tech-primary-purple to-tech-blue rounded-full"></div>
              </div>
              <span className="ml-2 text-gray-500">所有分类</span>
              <div className="ml-2 flex-1 h-px bg-gradient-to-r from-tech-primary-purple/20 to-transparent"></div>
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
        <div className="p-4 text-xs bg-white border-t border-gray-100 relative">
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-tech-primary-purple/10 via-tech-primary-purple/20 to-tech-primary-purple/10"></div>
          <div className="flex flex-col">
            <div className="mb-1 text-tech-primary-purple font-medium flex items-center">
              科技导航
              <div className="ml-1 w-1 h-1 rounded-full bg-tech-primary-purple"></div>
              <div className="ml-1 w-1 h-1 rounded-full bg-tech-blue"></div>
            </div>
            <div className="text-gray-400">&copy; 2025 全新呈现</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
