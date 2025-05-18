
import React from "react";
import { Badge } from "@/components/ui/badge";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden mb-10">
      {/* 装饰性背景元素 */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-radial from-tech-primary-purple/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute top-20 -left-20 w-40 h-40 bg-gradient-radial from-tech-blue/10 to-transparent rounded-full blur-lg"></div>
      
      {/* 科技装饰线条 */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-primary-purple/20 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-tech-blue/10 to-transparent"></div>
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-tech-primary-purple/10 to-transparent"></div>
      
      {/* Hero内容 */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* 类别标签 */}
        <div className="flex justify-center mb-6">
          <Badge className="bg-white/80 backdrop-blur-sm text-tech-primary-purple border-tech-primary-purple/20 py-1 px-4 text-sm font-medium flex items-center gap-2 tech-border">
            <span className="tech-dot"></span>
            Listing <span className="font-bold">100+</span> best directories of <span className="font-bold">20+</span> categories
          </Badge>
        </div>
        
        {/* 标题 */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className="text-gray-800">Your Ultimate </span>
            <span className="text-gradient relative">
              Directory of Directories
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tech-primary-purple to-tech-blue"></div>
            </span>
          </h1>
        </div>
        
        {/* 副标题 */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600">
            Discover the best directories in BestDirectories and launch your product with ease.
          </p>
        </div>
        
        {/* 装饰性网格背景 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full opacity-[0.03] circuit-pattern"></div>
        </div>
        
        {/* 科技装饰点 */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-tech-primary-purple/50 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-tech-blue/50 rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-tech-primary-purple/40 rounded-full animate-pulse-glow" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-tech-blue/40 rounded-full animate-pulse-glow" style={{ animationDelay: "0.5s" }}></div>
      </div>
      
      {/* 激光扫描线效果 */}
      <div className="absolute bottom-0 left-0 w-full h-1 animate-laser"></div>
    </div>
  );
};

export default Hero;
