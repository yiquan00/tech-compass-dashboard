
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import ContentCard from "@/components/ContentCard";
import FeaturedSection from "@/components/FeaturedSection";
import { categories, contentItems, featuredItems } from "@/data/navigationData";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";

const Index: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const isMobile = useIsMobile();

  // Filter content items based on active category
  const filteredItems = contentItems.filter(
    (item) => item.category === activeCategory
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

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={toggleMobileSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-full bg-tech-primary-purple text-white shadow-md"
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
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setShowMobileSidebar(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className={`max-w-7xl mx-auto ${isMobile ? "pt-12" : ""}`}>
          {/* Featured Section (Ads) */}
          <FeaturedSection items={featuredItems} />

          {/* Content Cards */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-tech-dark-purple mb-4">
              {categories.find((cat) => cat.id === activeCategory)?.name || "内容"}
            </h2>
            <div className="card-grid">
              {filteredItems.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
