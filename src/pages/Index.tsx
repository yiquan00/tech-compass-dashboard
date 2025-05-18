
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import ContentCard from "@/components/ContentCard";
import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import { categories, contentItems, featuredItems } from "@/data/navigationData";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";

const Index: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter content items based on active category and search term
  const filteredItems = contentItems.filter(
    (item) => 
      item.category === activeCategory && 
      (searchTerm === "" || 
       item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination calculation
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1); // Reset to first page when changing category
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
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={toggleMobileSidebar}
            className="fixed top-4 left-4 z-50 p-2 rounded-xl bg-white text-gray-600 shadow-sm border border-gray-100"
          >
            <Menu size={20} />
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setShowMobileSidebar(false)}
          />
        )}

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <div className={`max-w-7xl mx-auto p-6 md:p-8 ${isMobile ? "pt-16" : ""}`}>
            {/* Page header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-1.5 h-8 bg-gradient-to-b from-tech-primary-purple to-tech-blue rounded-full mr-3"></div>
                <h1 className="text-2xl font-bold text-gradient">{activeCategoryName}</h1>
                <Badge className="ml-3 bg-tech-primary-purple/10 text-tech-primary-purple border-none">
                  {filteredItems.length} 个资源
                </Badge>
              </div>
              
              {/* Search input */}
              <div className="w-full md:w-72 relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="搜索内容..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 h-10 bg-white border-gray-100 rounded-xl focus-visible:ring-tech-primary-purple"
                />
              </div>
            </div>

            {/* Featured Section */}
            <FeaturedSection items={featuredItems} />

            {/* Content Cards */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-tech-primary-purple to-tech-blue rounded-full mr-3"></div>
                <h2 className="text-xl font-semibold text-gradient">全部资源</h2>
              </div>
              
              {currentItems.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {currentItems.map((item) => (
                    <ContentCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                      <Search className="w-7 h-7 text-gray-300" />
                    </div>
                    <p className="text-gray-500 mb-2">暂无符合条件的内容</p>
                    <p className="text-gray-400 text-sm">请尝试更换其他搜索关键词</p>
                  </div>
                </div>
              )}
              
              {/* Pagination */}
              {filteredItems.length > itemsPerPage && (
                <div className="mt-8">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) paginate(currentPage - 1);
                          }}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(page => {
                          if (totalPages <= 5) return true;
                          return page === 1 || page === totalPages || 
                                 (page >= currentPage - 1 && page <= currentPage + 1);
                        })
                        .map((page, idx, array) => (
                          <React.Fragment key={page}>
                            {idx > 0 && array[idx - 1] !== page - 1 && (
                              <PaginationItem>
                                <PaginationEllipsis />
                              </PaginationItem>
                            )}
                            <PaginationItem>
                              <PaginationLink 
                                href="#" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  paginate(page);
                                }}
                                isActive={currentPage === page}
                                className={currentPage === page ? "bg-tech-primary-purple text-white border-none hover:bg-tech-primary-purple/90" : ""}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          </React.Fragment>
                        ))
                      }
                      
                      <PaginationItem>
                        <PaginationNext 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages) paginate(currentPage + 1);
                          }}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
