
export interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  isAd: boolean;
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "recommended", name: "推荐", icon: "star" },
  { id: "tools", name: "工具", icon: "layout-template" },
  { id: "design", name: "设计", icon: "compass" },
  { id: "dev", name: "开发", icon: "layout-dashboard" },
  { id: "social", name: "社交", icon: "layout-list" },
  { id: "news", name: "资讯", icon: "zap" },
];

export const featuredItems: FeaturedItem[] = [
  {
    id: "f1",
    title: "专业云服务器",
    description: "高性能云主机，为您的网站和应用提供稳定支持",
    url: "https://example.com/cloud",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    isAd: true,
  },
  {
    id: "f2",
    title: "AI驱动设计工具",
    description: "使用人工智能简化您的设计工作流程",
    url: "https://example.com/ai-design",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    isAd: true,
  },
  {
    id: "f3",
    title: "编程学习平台",
    description: "通过互动课程掌握最新编程技能",
    url: "https://example.com/learn-coding",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    isAd: true,
  },
];

export const contentItems: ContentItem[] = [
  // 推荐
  {
    id: "r1",
    title: "GitHub",
    description: "代码托管和开发协作平台",
    url: "https://github.com",
    category: "recommended",
  },
  {
    id: "r2",
    title: "Stack Overflow",
    description: "程序员问答社区",
    url: "https://stackoverflow.com",
    category: "recommended",
  },
  {
    id: "r3",
    title: "Figma",
    description: "协作设计工具",
    url: "https://figma.com",
    category: "recommended",
  },
  {
    id: "r4",
    title: "VS Code",
    description: "流行的代码编辑器",
    url: "https://code.visualstudio.com",
    category: "recommended",
  },
  {
    id: "r5",
    title: "Notion",
    description: "多合一笔记和项目管理工具",
    url: "https://notion.so",
    category: "recommended",
  },
  {
    id: "r6",
    title: "ChatGPT",
    description: "AI对话和内容创作工具",
    url: "https://chat.openai.com",
    category: "recommended",
  },

  // 工具
  {
    id: "t1",
    title: "Photopea",
    description: "在线图片编辑工具",
    url: "https://photopea.com",
    category: "tools",
  },
  {
    id: "t2",
    title: "Convertio",
    description: "文件格式转换工具",
    url: "https://convertio.co",
    category: "tools",
  },
  {
    id: "t3",
    title: "TinyPNG",
    description: "图片压缩工具",
    url: "https://tinypng.com",
    category: "tools",
  },
  {
    id: "t4",
    title: "Grammarly",
    description: "英语写作助手",
    url: "https://grammarly.com",
    category: "tools",
  },
  {
    id: "t5",
    title: "Canva",
    description: "在线设计和编辑工具",
    url: "https://canva.com",
    category: "tools",
  },
  {
    id: "t6",
    title: "Trello",
    description: "项目管理工具",
    url: "https://trello.com",
    category: "tools",
  },

  // 设计
  {
    id: "d1",
    title: "Dribbble",
    description: "设计师作品展示平台",
    url: "https://dribbble.com",
    category: "design",
  },
  {
    id: "d2",
    title: "Behance",
    description: "创意作品展示平台",
    url: "https://behance.net",
    category: "design",
  },
  {
    id: "d3",
    title: "Awwwards",
    description: "网页设计奖项和灵感",
    url: "https://awwwards.com",
    category: "design",
  },
  {
    id: "d4",
    title: "Coolors",
    description: "配色方案生成器",
    url: "https://coolors.co",
    category: "design",
  },
  {
    id: "d5",
    title: "Unsplash",
    description: "免费高质量图片",
    url: "https://unsplash.com",
    category: "design",
  },
  {
    id: "d6",
    title: "Adobe Color",
    description: "色彩主题创建工具",
    url: "https://color.adobe.com",
    category: "design",
  },

  // 开发
  {
    id: "dev1",
    title: "MDN Web Docs",
    description: "Web开发文档",
    url: "https://developer.mozilla.org",
    category: "dev",
  },
  {
    id: "dev2",
    title: "CodePen",
    description: "前端代码分享平台",
    url: "https://codepen.io",
    category: "dev",
  },
  {
    id: "dev3",
    title: "React",
    description: "用户界面库",
    url: "https://reactjs.org",
    category: "dev",
  },
  {
    id: "dev4",
    title: "TypeScript",
    description: "JavaScript的超集",
    url: "https://typescriptlang.org",
    category: "dev",
  },
  {
    id: "dev5",
    title: "Node.js",
    description: "JavaScript运行时",
    url: "https://nodejs.org",
    category: "dev",
  },
  {
    id: "dev6",
    title: "PostgreSQL",
    description: "开源关系型数据库",
    url: "https://postgresql.org",
    category: "dev",
  },

  // 社交
  {
    id: "s1",
    title: "Twitter",
    description: "实时社交网络平台",
    url: "https://twitter.com",
    category: "social",
  },
  {
    id: "s2",
    title: "LinkedIn",
    description: "专业社交网络",
    url: "https://linkedin.com",
    category: "social",
  },
  {
    id: "s3",
    title: "Discord",
    description: "社区和语音聊天平台",
    url: "https://discord.com",
    category: "social",
  },
  {
    id: "s4",
    title: "Reddit",
    description: "社区驱动的内容聚合平台",
    url: "https://reddit.com",
    category: "social",
  },
  {
    id: "s5",
    title: "YouTube",
    description: "视频分享平台",
    url: "https://youtube.com",
    category: "social",
  },
  {
    id: "s6",
    title: "Instagram",
    description: "图片和视频分享平台",
    url: "https://instagram.com",
    category: "social",
  },

  // 资讯
  {
    id: "n1",
    title: "Hacker News",
    description: "科技和创业新闻",
    url: "https://news.ycombinator.com",
    category: "news",
  },
  {
    id: "n2",
    title: "TechCrunch",
    description: "科技新闻和分析",
    url: "https://techcrunch.com",
    category: "news",
  },
  {
    id: "n3",
    title: "The Verge",
    description: "科技和文化新闻",
    url: "https://theverge.com",
    category: "news",
  },
  {
    id: "n4",
    title: "InfoQ",
    description: "软件开发新闻和文章",
    url: "https://infoq.com",
    category: "news",
  },
  {
    id: "n5",
    title: "Product Hunt",
    description: "新产品发现平台",
    url: "https://producthunt.com",
    category: "news",
  },
  {
    id: "n6",
    title: "Wired",
    description: "科技和创新报道",
    url: "https://wired.com",
    category: "news",
  },
];
