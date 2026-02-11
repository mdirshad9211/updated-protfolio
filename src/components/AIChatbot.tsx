import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "👋 Hi! I'm AI Irshad. Ask me anything about Md Irshad's experience, projects, or technical expertise!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChatbot', handleOpenChatbot);
    return () => window.removeEventListener('openChatbot', handleOpenChatbot);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "What's your backend experience?",
    "Tell me about AI projects",
    "Best project for a startup?",
    "What technologies do you know?",
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Helper function to check multiple keywords
    const containsAny = (keywords: string[]) => 
      keywords.some(keyword => lowerMessage.includes(keyword));

    // Skills and Technologies - Enhanced with multiple variations
    if (containsAny(['skill', 'skills', 'technology', 'technologies', 'tech stack', 'programming language', 'what can you', 'what do you know', 'proficient', 'expertise in', 'tools', 'frameworks'])) {
      return "🚀 **Irshad's Comprehensive Tech Stack:**\n\n💻 **Languages**\n• JavaScript (Expert) - 3+ years\n• TypeScript (Expert) - 2+ years\n• C/C++ (Proficient) - DSA & Competitive Programming\n• SQL - Advanced queries & optimization\n\n⚙️ **Backend Technologies**\n• Node.js - Production-grade microservices\n• NestJS - Enterprise architecture & DI\n• Express.js - RESTful API development\n• JWT & OAuth - Authentication systems\n• RBAC - Role-based access control\n• WebSockets - Real-time communication\n\n🎨 **Frontend Technologies**\n• React.js - Component architecture & hooks\n• Next.js - SSR, SSG, App Router\n• React Native - Cross-platform mobile apps\n• Tailwind CSS - Modern UI development\n• Framer Motion - Advanced animations\n• Shadcn/UI - Component libraries\n\n🗄️ **Databases & Storage**\n• MongoDB - NoSQL, aggregations, indexing\n• PostgreSQL - Relational, complex queries\n• Redis - Caching & session management\n• VectorDB - AI embeddings storage\n• BigQuery - Analytics & data warehousing\n\n☁️ **DevOps & Tools**\n• Docker - Containerization\n• Git & GitHub - Version control\n• CI/CD - Automated deployments\n• Postman - API testing\n• Linux - Server management\n\n🤖 **AI & Integration**\n• OpenAI GPT APIs\n• Google Gemini API\n• RAG (Retrieval Augmented Generation)\n• ML algorithms for matching & recommendations\n• Vector embeddings & semantic search\n\n💳 **Payment & Third-party APIs**\n• Stripe, Razorpay, PayU integration\n• RESTful API consumption\n• Webhook handling\n\nAsk me about any specific technology for more details! 💡";
    }

    // Education - Enhanced with more details
    if (containsAny(['education', 'degree', 'college', 'university', 'graduate', 'qualification', 'academic', 'studied', 'learning', 'courses', 'certification'])) {
      return "🎓 **Irshad's Educational Background:**\n\n**🏛️ B.Tech in Computer Science & Engineering**\n• University: AKTU (Dr. A.P.J. Abdul Kalam Technical University)\n• Graduation: 2024\n• Focus Areas: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering\n• Achievements: Strong foundation in CS fundamentals and problem-solving\n\n**📚 Professional Development**\n• Full Stack Web Development Bootcamp (Udemy) - Completed\n• Node.js & NestJS Advanced Patterns - Self-taught\n• System Design & Microservices Architecture - Continuous learning\n• AI & Machine Learning Integration - Hands-on projects\n\n**💡 Continuous Learning Journey**\n• Actively stays updated with latest tech trends\n• Contributes to open-source projects\n• Builds personal projects to experiment with new technologies\n• Follows industry best practices and design patterns\n• Strong believer in learning by building\n\n**🏆 Key Competencies Developed**\n• Problem-solving with DSA (C/C++)\n• Full-stack development expertise\n• Microservices architecture design\n• Database design & optimization\n• API development & integration\n• Team collaboration & Agile methodologies\n\nEducation is just the beginning - Irshad's real expertise comes from building 15+ production projects! 🚀";
    }

    // Backend - Enhanced
    if (containsAny(['backend', 'server', 'api', 'rest', 'microservice', 'nodejs', 'nestjs', 'express'])) {
      return "⚙️ **Irshad's Backend Engineering Expertise:**\n\n🏗️ **Core Technologies**\n• Node.js - Event-driven, non-blocking architecture\n• NestJS - Scalable enterprise applications with dependency injection\n• Express.js - Lightweight, flexible API development\n\n💼 **Professional Experience @ Raymoon Services**\n• Built microservices handling 10K+ daily transactions\n• Designed RBAC systems for government projects (500K+ users)\n• Integrated FinTech payment gateways (Stripe, Razorpay, PayU)\n• Developed BigQuery analytics pipelines for data insights\n• Implemented JWT-based authentication & authorization\n• Created RESTful APIs with comprehensive documentation\n\n🛠️ **Technical Capabilities**\n• Database Design: MongoDB, PostgreSQL, Redis\n• Authentication: JWT, OAuth, Session management\n• Architecture: Microservices, Monolithic, Serverless\n• API Design: REST, Webhooks, Real-time (WebSockets)\n• Security: RBAC, encryption, input validation, XSS/CSRF prevention\n• Performance: Caching strategies, query optimization, load balancing\n• Testing: Unit tests, integration tests, API testing\n\n📦 **Notable Backend Projects**\n• identity-service: Enterprise RBAC with multi-tenant support\n• Learn-With-Code: E-learning platform backend with role-based auth\n• AI Ticket Management: Smart assignment with workload balancing\n\nIrshad builds backends that scale, secure, and perform! 💪";
    }

    // AI Projects - Enhanced
    if (containsAny(['ai', 'artificial intelligence', 'machine learning', 'ml', 'gpt', 'gemini', 'chatbot', 'smart', 'intelligent'])) {
      return "🤖 **Irshad's AI & Intelligent Systems Portfolio:**\n\n**1️⃣ AI-Based Mentor Assigner**\n• Smart skill-matching algorithm using ML techniques\n• Analyzes mentor expertise & student requirements\n• Optimal pairing with availability & workload balancing\n• Technologies: Node.js, ML algorithms, Vector similarity\n• Impact: Improved mentorship quality by 40%\n\n**2️⃣ AI Ticket Management System**\n• Leverages Google Gemini API for intelligent routing\n• Automatic ticket categorization & priority assignment\n• Smart workload distribution across team members\n• Technologies: NestJS, Gemini API, Redis queue\n• Impact: Reduced response time by 60%\n\n**3️⃣ AI Customer Support Chatbot**\n• GPT-powered conversational AI for customer queries\n• Context-aware responses with company knowledge base\n• Seamless handoff to human agents when needed\n• Technologies: OpenAI API, RAG, Vector embeddings\n• Impact: Handled 70% of common queries autonomously\n\n**4️⃣ AI Portfolio Assistant (This Chat!)**\n• Intelligent Q&A about professional experience\n• Natural language understanding\n• Context-aware responses with personality\n• Built with: React, TypeScript, Pattern matching\n\n🔬 **AI Integration Skills**\n• OpenAI GPT API integration\n• Google Gemini API implementation\n• RAG (Retrieval Augmented Generation)\n• Vector embeddings & semantic search\n• Prompt engineering & optimization\n• AI model selection based on use case\n\nIrshad doesn't just use AI - he builds intelligent solutions that solve real problems! 🚀";
    }

    // Projects - Enhanced
    if (containsAny(['project', 'projects', 'built', 'portfolio', 'work sample', 'showcase', 'startup', 'best project'])) {
      return "🚀 **Irshad's Featured Projects (15+ Total):**\n\n**⭐ Top Production Projects**\n\n**1. Learn-With-Code** (Full-stack E-Learning Platform)\n• Tech: Next.js, NestJS, MongoDB, Redis, AWS\n• Features: Role-based auth, course management, progress tracking, instructor dashboards, video streaming\n• Scale: Supports 1000+ concurrent users\n• Highlights: Payment integration, automated certificates, analytics\n\n**2. Flowwzen identity-service** (Enterprise RBAC System)\n• Tech: NestJS, PostgreSQL, Redis, JWT\n• Features: Multi-tenant architecture, dynamic role management, API authentication, session handling\n• Scale: 500K+ users, 100+ roles/permissions\n• Highlights: Production-ready, scalable, secure\n\n**3. AI Ticket Management** (Intelligent Support System)\n• Tech: NestJS, Gemini API, MongoDB, Redis\n• Features: Auto-assignment, smart routing, workload balancing, analytics dashboard\n• Impact: 60% faster resolution, 40% reduced manual work\n\n**4. AI Mentor Assigner** (Smart Matching System)\n• Tech: Node.js, ML algorithms, PostgreSQL\n• Features: Skill matching, availability management, performance tracking\n• Impact: 40% better mentorship outcomes\n\n**5. HealthCare Dashboard** (Patient Management)\n• Tech: React, Node.js, MongoDB\n• Features: Appointment scheduling, medical records, billing\n\n**💡 For Startups, I Recommend:**\n• **EdTech**: Learn-With-Code - Complete e-learning infrastructure\n• **Auth/Security**: identity-service - Enterprise-grade authentication\n• **AI Solutions**: AI Ticket System - Intelligent automation\n\n**🔧 Tech Diversity:**\nIrshad has built projects in FinTech, EdTech, HealthTech, GovTech, and AI - demonstrating versatility across domains!\n\nWant details about a specific project? Just ask! 📊";
    }

    // Work Experience - Enhanced
    if (containsAny(['experience', 'work', 'job', 'company', 'position', 'role', 'raymoon', 'professional', 'career', 'employed'])) {
      return "💼 **Irshad's Professional Journey:**\n\n**🏢 Current Role: Software Engineer**\n📍 Raymoon Services\n📅 March 2025 - Present (Active)\n\n**Key Responsibilities & Achievements:**\n\n🎯 **FinTech Development**\n• Integrated multiple payment gateways (Stripe, Razorpay, PayU)\n• Built transaction processing systems handling 10K+ daily transactions\n• Implemented secure payment flows with PCI compliance\n• Developed financial reporting & analytics dashboards\n\n🏛️ **GovTech Solutions**\n• Architected RBAC system for government project (500K+ users)\n• Implemented multi-level approval workflows\n• Built audit logging & compliance features\n• Ensured data security & privacy standards\n\n📊 **Data & Analytics**\n• Developed BigQuery integration for data warehousing\n• Built real-time analytics pipelines\n• Created custom reporting dashboards\n• Optimized query performance for large datasets\n\n📱 **Mobile Development**\n• Developed React Native applications\n• Implemented offline-first architecture\n• Built real-time sync mechanisms\n• Published apps to production\n\n🤖 **AI Integration**\n• Implemented GPT-powered customer support chatbot\n• Built intelligent ticket routing system\n• Developed AI-based automation tools\n\n**🎓 Previous: Software Engineer Trainee**\n📍 Raymoon Services\n📅 March 2024 - June 2024\n\n• Learned microservices architecture\n• Contributed to production codebases\n• Developed REST APIs & backend services\n• Participated in code reviews & agile sprints\n\n**📈 Career Growth:**\n• 2+ years of development experience\n• 15+ projects shipped to production\n• Full-stack expertise across multiple domains\n• Strong track record of delivery & impact\n\n**💡 Work Philosophy:**\nIrshad focuses on writing clean, scalable, and maintainable code. He's passionate about solving real-world problems with technology and continuously learning new skills! 🚀";
    }

    // Contact & Hiring - Enhanced
    if (containsAny(['contact', 'hire', 'email', 'reach', 'connect', 'linkedin', 'github', 'resume', 'cv', 'available', 'opportunity'])) {
      return "📬 **Let's Connect!**\n\nIrshad is open to opportunities, collaborations, and interesting conversations!\n\n**📧 Direct Contact**\nEmail: irshad.dev@example.com\n• Response time: Usually within 24 hours\n• Best for: Job opportunities, project inquiries\n\n**💼 Professional Network**\nLinkedIn: linkedin.com/in/mdirshad\n• Full professional profile\n• Recommendations & endorsements\n• Connect for networking\n\n**🐙 Code Portfolio**\nGitHub: github.com/mdirshad\n• 15+ open-source projects\n• Active contributions\n• Code quality showcase\n\n**🎯 Open To:**\n✅ Full-time Software Engineering roles\n✅ Backend/Full-stack positions\n✅ Freelance/Contract projects\n✅ Technical collaborations\n✅ Open-source contributions\n✅ Mentorship opportunities\n\n**💡 Best Fit For:**\n• Startups needing full-stack expertise\n• Companies building scalable microservices\n• Teams working on AI-powered products\n• FinTech, EdTech, or GovTech projects\n\n**🚀 What You Get:**\n• Clean, production-ready code\n• Strong problem-solving skills\n• Quick learner & self-starter\n• Team player with good communication\n• 2+ years of proven track record\n\nDon't hesitate to reach out - Irshad loves discussing technology and building great products! 🤝";
    }

    // Frontend - New detailed section
    if (containsAny(['frontend', 'front-end', 'react', 'nextjs', 'next.js', 'ui', 'interface', 'design', 'responsive', 'tailwind'])) {
      return "🎨 **Irshad's Frontend Development Expertise:**\n\n**⚛️ React Ecosystem**\n• React.js - Hooks, Context API, Custom hooks, Performance optimization\n• Next.js - App Router, SSR, SSG, ISR, API routes, Middleware\n• React Native - Cross-platform mobile apps with native performance\n\n**💅 Styling & UI**\n• Tailwind CSS - Utility-first, responsive design, custom configurations\n• Shadcn/UI - Accessible, customizable component library\n• Framer Motion - Advanced animations & micro-interactions\n• CSS-in-JS - Styled-components, Emotion\n\n**🛠️ Frontend Skills**\n• Responsive Design - Mobile-first approach\n• Performance Optimization - Code splitting, lazy loading, memoization\n• State Management - Context API, Zustand, Redux\n• Form Handling - React Hook Form, validation\n• API Integration - Axios, Fetch, SWR, React Query\n• TypeScript - Type-safe React applications\n\n**🎯 Notable Frontend Projects**\n• Learn-With-Code: Next.js e-learning platform with rich UI\n• AI Portfolio: This interactive chatbot you're using!\n• Healthcare Dashboard: Complex data visualization\n• Admin Panels: Multiple RBAC-based dashboards\n\n**📱 Mobile Development**\n• React Native apps for iOS & Android\n• Navigation, state management, native modules\n• Offline-first architecture\n• App store deployment experience\n\nIrshad creates beautiful, performant, and user-friendly interfaces! ✨";
    }

    // Database - New detailed section
    if (containsAny(['database', 'db', 'mongodb', 'postgresql', 'postgres', 'sql', 'nosql', 'redis', 'data modeling', 'schema'])) {
      return "🗄️ **Irshad's Database Expertise:**\n\n**📊 MongoDB (NoSQL)**\n• Schema design & data modeling\n• Aggregation pipelines for complex queries\n• Indexing strategies for performance\n• Mongoose ODM with TypeScript\n• Replication & sharding concepts\n• Used in: Learn-With-Code, AI Ticket System, Healthcare Dashboard\n\n**🐘 PostgreSQL (Relational)**\n• Normalized database design\n• Complex SQL queries with JOINs, subqueries\n• Indexes, views, stored procedures\n• TypeORM & Prisma ORMs\n• Transaction management\n• Used in: identity-service, GovTech projects\n\n**⚡ Redis (Caching & Sessions)**\n• Session storage & management\n• Caching frequently accessed data\n• Pub/Sub for real-time features\n• Rate limiting implementation\n• Queue management (Bull/BullMQ)\n• Performance boost: 10x faster response times\n\n**📈 BigQuery (Analytics)**\n• Data warehousing & analytics\n• Complex analytical queries\n• Integration with Node.js backend\n• Large-scale data processing\n• Used in: Raymoon Services analytics pipeline\n\n**🧠 VectorDB (AI/ML)**\n• Storing AI embeddings\n• Semantic search implementation\n• RAG (Retrieval Augmented Generation)\n• Used in: AI chatbot projects\n\n**💡 Database Skills**\n• Choosing the right database for use case\n• Data modeling & schema design\n• Query optimization & indexing\n• Migration strategies\n• Backup & recovery planning\n• Security & access control\n\nIrshad knows that great applications are built on great data architecture! 🏗️";
    }

    // Greetings - Enhanced
    if (containsAny(['hello', 'hi', 'hey', 'greetings', 'howdy', 'sup', 'yo'])) {
      return "👋 **Hello! I'm AI Irshad - your personal assistant!**\n\nI'm here to answer any questions about **Md Irshad's** professional background, skills, and projects.\n\n**🎯 What You Can Ask Me:**\n\n💻 **Technical Skills**\n\"What technologies does Irshad know?\"\n\"Tell me about his backend expertise\"\n\n🎓 **Education**\n\"What's his educational background?\"\n\"Where did he study?\"\n\n💼 **Work Experience**\n\"What's his current role?\"\n\"Tell me about his experience at Raymoon Services\"\n\n🚀 **Projects**\n\"What projects has he built?\"\n\"Show me his best work\"\n\n🤖 **AI Work**\n\"What AI projects has he done?\"\n\"Does he work with machine learning?\"\n\n📬 **Contact**\n\"How can I hire him?\"\n\"What's his email?\"\n\n**💡 Try one of the quick questions below or ask me anything!**\n\nI'm powered by intelligent pattern matching and comprehensive knowledge about Irshad's expertise. Let's chat! 🚀";
    }

    // Thank you responses
    if (containsAny(['thank', 'thanks', 'appreciate', 'helpful', 'great', 'awesome', 'perfect'])) {
      return "You're very welcome! 😊 I'm glad I could help!\n\nFeel free to ask me anything else about Irshad's:\n• Technical skills & expertise\n• Work experience & projects\n• Education & learning journey\n• How to get in touch\n\nI'm here to help you learn more! 🚀";
    }

    // Default response - Enhanced
    return "🤔 **Interesting question!** Let me help you find the right information.\n\n**I'm an expert on Irshad's professional background. Here's what I can tell you about:**\n\n💻 **Technical Expertise**\n• Programming skills & tech stack\n• Backend development (Node.js, NestJS)\n• Frontend skills (React, Next.js)\n• Database knowledge (MongoDB, PostgreSQL, Redis)\n• AI & Machine Learning projects\n\n🎓 **Education & Learning**\n• Academic qualifications\n• Professional certifications\n• Continuous learning journey\n\n💼 **Professional Experience**\n• Current role at Raymoon Services\n• Previous positions & responsibilities\n• Key achievements & impact\n\n🚀 **Projects & Portfolio**\n• 15+ production projects\n• Open-source contributions\n• Best projects for startups\n\n📬 **Contact & Opportunities**\n• How to reach Irshad\n• Availability for roles\n• Collaboration opportunities\n\n**💡 Try asking something like:**\n• \"What are Irshad's skills?\"\n• \"Tell me about his education\"\n• \"What projects has he built?\"\n• \"What's his backend experience?\"\n• \"How can I contact him?\"\n\nWhat would you like to know? 😊";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(input),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Chat Panel - Fixed position */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            
            {/* Chat Panel */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] md:w-[600px] lg:w-[700px] h-[80vh] max-h-[700px] bg-[#161B22] border-2 border-[#58A6FF] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#58A6FF] to-[#3FB950] p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                      <Bot className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#3FB950] rounded-full border-2 border-white animate-pulse"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg flex items-center gap-2">
                      AI Irshad
                      <Sparkles className="w-4 h-4" />
                    </h3>
                    <p className="text-xs text-white/90">Your personal assistant • Always available</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#0D1117]">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-[#58A6FF] to-[#4A95E5] text-white shadow-lg'
                          : 'bg-[#161B22] border border-[#30363D] text-gray-300 shadow-md'
                      }`}
                    >
                      {message.type === 'user' ? (
                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                      ) : (
                        <div className="text-sm leading-relaxed prose prose-invert max-w-none">
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                              strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                              em: ({ children }) => <em className="italic">{children}</em>,
                              ul: ({ children }) => <ul className="list-disc list-inside mb-2">{children}</ul>,
                              ol: ({ children }) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
                              li: ({ children }) => <li className="mb-1">{children}</li>,
                              h1: ({ children }) => <h1 className="font-bold text-lg mb-2">{children}</h1>,
                              h2: ({ children }) => <h2 className="font-bold text-base mb-2">{children}</h2>,
                              h3: ({ children }) => <h3 className="font-bold mb-1">{children}</h3>,
                              code: ({ children }) => <code className="bg-[#0D1117] px-2 py-1 rounded text-[#58A6FF]">{children}</code>,
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      )}
                      <p className="text-xs mt-2 opacity-60">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-4 shadow-md">
                      <div className="flex gap-1.5">
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2.5 h-2.5 bg-[#58A6FF] rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2.5 h-2.5 bg-[#58A6FF] rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2.5 h-2.5 bg-[#58A6FF] rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length <= 1 && (
                <div className="px-6 pb-3 bg-[#0D1117] border-t border-[#30363D]">
                  <p className="text-xs text-gray-400 mb-3 mt-3 flex items-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    Quick questions to get started:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-xs px-4 py-2.5 bg-[#161B22] border border-[#30363D] rounded-lg hover:border-[#58A6FF] hover:bg-[#1C2128] transition-all text-left text-gray-300"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-5 border-t-2 border-[#30363D] bg-[#161B22]">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your question here..."
                    className="flex-1 px-5 py-3 bg-[#0D1117] border border-[#30363D] rounded-xl text-sm focus:outline-none focus:border-[#58A6FF] focus:ring-2 focus:ring-[#58A6FF]/20 text-white placeholder-gray-500 transition-all"
                    autoFocus
                  />
                  <motion.button
                    onClick={handleSend}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!input.trim()}
                    className="px-5 py-3 bg-gradient-to-r from-[#58A6FF] to-[#3FB950] text-white rounded-xl hover:shadow-lg hover:shadow-[#58A6FF]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  AI-powered responses • Try asking about experience, projects, or tech stack
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}