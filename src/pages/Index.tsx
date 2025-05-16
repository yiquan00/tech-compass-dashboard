
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import ContentCard from "@/components/ContentCard";
import FeaturedSection from "@/components/FeaturedSection";
import { categories, contentItems, featuredItems } from "@/data/navigationData";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useIsMobile();

  // Filter content items based on active category and search term
  const filteredItems = contentItems.filter(
    (item) => 
      item.category === activeCategory && 
      (searchTerm === "" || 
       item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (isMobile) {
      setShowMobileSidebar(false);
    }
  };

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  // Close sidebar when window resizes from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setShowMobileSidebar(false);
    }
  }, [isMobile]);

  const activeCategoryName = categories.find(cat => cat.id === activeCategory)?.name || "内容";

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={toggleMobileSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-xl bg-tech-primary-purple text-white shadow-lg"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar - only visible on desktop or when toggled on mobile */}
      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-40 transform ${
                showMobileSidebar ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out`
            : "relative"
        }`}
      >
        <Sidebar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobile && showMobileSidebar && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
          onClick={() => setShowMobileSidebar(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className={`max-w-7xl mx-auto ${isMobile ? "pt-12" : ""}`}>
          {/* Page header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-3xl font-bold text-tech-dark-purple mb-4 md:mb-0">
              {activeCategoryName}
            </h1>
            
            {/* Search input */}
            <div className="w-full md:w-72 relative">
              <Input
                type="text"
                placeholder="搜索内容..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 h-10 border-gray-200 focus-visible:ring-tech-primary-purple"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Featured Section (Ads) */}
          <FeaturedSection items={featuredItems} />

          {/* Content Cards */}
          <div className="mb-6">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-tech-dark-purple">所有内容</h2>
              <span className="ml-3 bg-gray-100 text-gray-600 text-sm px-2.5 py-1 rounded-full">
                {filteredItems.length} 个结果
              </span>
            </div>
            
            {filteredItems.length > 0 ? (
              <div className="card-grid">
                {filteredItems.map((item) => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-xl">
                <p className="text-gray-500">没有找到符合条件的内容</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
