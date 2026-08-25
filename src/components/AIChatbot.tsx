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
      return "🚀 **Irshad's Comprehensive Tech Stack:**\n\n💻 **Languages**\n• JavaScript (Expert)\n• TypeScript (Expert)\n• Python — currently learning for GenAI / LLMs\n• C/C++ (Proficient) - DSA & Competitive Programming\n• SQL - Advanced queries & optimization\n\n⚙️ **Backend Technologies**\n• Node.js - Production-grade APIs\n• Fastify - High-performance freelance backends (inventory, social)\n• Express.js - RESTful API development\n• JWT & OAuth - Authentication systems\n• RBAC - Role-based access control\n• WebSockets - Real-time communication\n\n🎨 **Frontend Technologies**\n• React.js - Component architecture & hooks\n• Next.js - SSR, SSG, App Router\n• React Native - Cross-platform mobile apps\n• Tailwind CSS - Modern UI development\n• Framer Motion - Advanced animations\n• Shadcn/UI - Component libraries\n\n🗄️ **Databases & Storage**\n• MongoDB - NoSQL, aggregations, indexing\n• PostgreSQL - Relational, complex queries\n• Redis - Caching & session management\n• VectorDB - AI embeddings storage\n• BigQuery - Analytics & data warehousing\n\n☁️ **DevOps & Tools**\n• Docker - Containerization\n• Git & GitHub - Version control\n• CI/CD - Automated deployments\n• Postman - API testing\n• Linux - Server management\n\n🤖 **AI & Integration**\n• OpenAI GPT APIs\n• Google Gemini API\n• RAG (Retrieval Augmented Generation)\n• ML algorithms for matching & recommendations\n• Vector embeddings & semantic search\n\n💳 **Payment & Third-party APIs**\n• Stripe, Razorpay, PayU integration\n• RESTful API consumption\n• Webhook handling\n\nAsk me about any specific technology for more details! 💡";
    }

    // Education - Enhanced with more details
    if (containsAny(['education', 'degree', 'college', 'university', 'graduate', 'qualification', 'academic', 'studied', 'learning', 'courses', 'certification'])) {
              return "🎓 **Irshad's Educational Background:**\n\n**🏛️ B.Tech in Computer Science**\n• College: AXIS Institute of Technology and Management, Kanpur\n• University: AKTU\n• 2021 – 2025\n\n**📚 Certifications**\n• The Complete 2024 Web Development Bootcamp (Udemy) — Oct 2023\n\n**🌱 Currently learning**\nGenerative AI, Python, and LLMs (prompting, APIs, RAG basics).\n\nHe also ships products: Sarkora.in, freelance Fastify/PostgreSQL systems, and 43 public GitHub repositories.";
    }

    // Backend - Enhanced
    if (containsAny(['backend', 'server', 'api', 'rest', 'microservice', 'nodejs', 'nestjs', 'express', 'fastify', 'postgres', 'postgresql'])) {
      return "⚙️ **Irshad's Backend Engineering Expertise:**\n\n🏗️ **Core Technologies**\n• Node.js, Fastify, and Express for APIs\n• PostgreSQL for relational client systems (inventory, social backends)\n• MongoDB where document models fit better\n\n💼 **Professional Experience**\n• Product Specialist at Raymoon Group — product and backend delivery\n• Software Engineer at Blu Parrot — JWT auth, RBAC dashboards, AI recruitment tools\n• Freelance — lab, inventory, clinic, e-commerce, and social backends\n• JWT authentication, REST APIs, and role-based access in production\n\n🛠️ **Technical Capabilities**\n• Database Design: MongoDB, PostgreSQL, Redis\n• Authentication: JWT, OAuth, Session management\n• Architecture: Microservices, Monolithic, Serverless\n• API Design: REST, Webhooks, Real-time (WebSockets)\n• Security: RBAC, encryption, input validation, XSS/CSRF prevention\n• Performance: Caching strategies, query optimization, load balancing\n• Testing: Unit tests, integration tests, API testing\n\n📦 **Notable Backend Projects**\n• identity-service: Enterprise RBAC with multi-tenant support\n• Learn-With-Code: E-learning platform backend with role-based auth\n• AI Ticket Management: Smart assignment with workload balancing\n\nIrshad builds backends that scale, secure, and perform! 💪";
    }

    if (containsAny(['genai', 'gen ai', 'generative', 'python', 'llm', 'llms', 'langchain', 'currently learning'])) {
      return "🌱 **Currently learning: GenAI, Python, and LLMs**\n\nIrshad is actively building skills in:\n• Python for AI workflows\n• Large language models and prompting\n• Generative AI product patterns\n• RAG (retrieval-augmented generation) basics\n\nHe already ships production AI features (Gemini ticket assignment, recruitment chatbots) and is leveling up the Python/LLM side so he can own AI-ready backends end to end.";
    }

    // AI Projects - Enhanced
    if (containsAny(['ai', 'artificial intelligence', 'machine learning', 'ml', 'gpt', 'gemini', 'chatbot', 'smart', 'intelligent'])) {
      return "🤖 **Irshad's AI & Intelligent Systems:**\n\n**AI Ticket Assistant** — Gemini-powered assignment, skill matching, RBAC dashboards. Live: https://ai-based-mentor-assigner-fe.vercel.app\n\n**Recruitment chatbot & JD filtering** — built at Blu Parrot to match candidates with jobs.\n\n**Currently learning** — GenAI, Python, and LLMs (prompting, APIs, RAG basics) so he can ship AI-ready backends.";
    }

    if (containsAny(['sarkora', 'exam', 'government job', 'pyq', 'admit card'])) {
      return "🌟 **Sarkora.in** is Irshad's own product for government exam aspirants.\n\nIt brings together:\n• Latest government jobs\n• Exam results\n• Admit cards\n• Previous year question papers (PYQs)\n\nRoadmap: mock tests, AI study tools, current affairs, and an exam calendar.\n\nLive: https://sarkora.in";
    }

    if (containsAny(['freelance', 'freelancer', 'client', 'lab', 'inventory', 'clinic', 'e-commerce', 'ecommerce', 'social media'])) {
      return "💼 **Freelance client work**\n\nIrshad builds production systems for clients, including:\n\n• **Lab Management System** — patients, tests, samples, reports, billing, staff roles\n• **Inventory Management System** — Fastify + PostgreSQL for SKUs, stock movement, suppliers, alerts, reports\n• **Social Media Backend** — Fastify + PostgreSQL for auth, profiles, posts, feeds, likes, comments, media\n• **E-commerce Website** — catalog, cart, checkout, orders, admin panel\n• **Clinic Website** — doctor profiles, services, appointment inquiries";
    }

    // Projects - Enhanced
    if (containsAny(['project', 'projects', 'built', 'portfolio', 'work sample', 'showcase', 'startup', 'best project'])) {
      return "🚀 **Irshad's Projects**\n\n**🌟 Product**\n**Sarkora.in** — Live platform for government exam aspirants: jobs, results, admit cards, and PYQs. https://sarkora.in\n\n**💼 Freelance / Client**\n• **Lab Management System** — patients, tests, samples, reports, billing, staff roles\n• **Inventory Management System** — Fastify + PostgreSQL for SKUs, stock, suppliers, alerts\n• **Social Media Backend** — Fastify + PostgreSQL feeds, auth, media APIs\n• **E-commerce Website** — catalog, cart, orders, admin panel\n• **Clinic Website** — services, doctor profiles, appointment inquiries\n\n**🐙 Open Source (GitHub @mdirshad9211 — 43 repos)**\n• **AI Ticket Assistant** — Gemini assignment, RBAC, live: https://ai-based-mentor-assigner-fe.vercel.app\n• **Learn With Code** — LMS on Next.js 15: https://learn-with-code.vercel.app\n• **EventHub** — event ingestion & analytics (Fastify + PostgreSQL)\n• **MQTT Data Ingestion** — high-throughput pipeline with batching & Docker\n• **Payroll Management** — employees, attendance, salary, S3 uploads\n• meetAI, book review/store backends, blog, real estate, student frontend, admin panel\n\nAsk about any one of these for more detail.";
    }

    // Work Experience - Enhanced
    if (containsAny(['experience', 'work', 'job', 'company', 'position', 'role', 'raymoon', 'professional', 'career', 'employed'])) {
      return "💼 **Irshad's Professional Journey:**\n\n**🏢 Product Specialist — Raymoon Group**\n📅 Dec 2025 – Present\nProduct and engineering delivery for staffing, payroll, and operations platforms.\n\n**🧑‍💻 Freelance Full Stack Developer**\n📅 2024 – Present\nClient work: lab management, inventory, social media backend, e-commerce, and clinic websites.\n\n**⚙️ Software Engineer — Blu Parrot**\n📅 Jul 2025 – Dec 2025\nMulti-level JWT auth, RBAC dashboards, AI chatbot, and JD filtering for recruitment.\n\n**🎓 Software Engineer Intern — Blu Parrot**\n📅 Mar 2025 – Jul 2025\nAuth, RBAC UI, AI tooling, and frontend/backend integration.\n\n**🎓 Software Engineer Intern — TechnopediaSoft**\n📅 Feb 2025 – Mar 2025\nE-commerce RBAC, React admin panel, Node.js/Express APIs.\n\nAbout 1.5 years of professional experience, plus independent product work on Sarkora.in.";
    }

    // Contact & Hiring - Enhanced
    if (containsAny(['contact', 'hire', 'email', 'reach', 'connect', 'linkedin', 'github', 'resume', 'cv', 'available', 'opportunity'])) {
      return "📬 **Let's Connect!**\n\nIrshad is open to opportunities, collaborations, and interesting conversations!\n\n**📧 Direct Contact**\nEmail: irshadmd.edu@gmail.com\n• Response time: Usually within 24 hours\n• Best for: Job opportunities, project inquiries\n\n**💼 Professional Network**\nLinkedIn: linkedin.com/in/itsmdirshad\n• Full professional profile\n• Recommendations & endorsements\n• Connect for networking\n\n**🐙 Code Portfolio**\nGitHub: github.com/mdirshad9211\nProduct: https://sarkora.in\n• 15+ open-source projects\n• Active contributions\n• Code quality showcase\n\n**🎯 Open To:**\n✅ Full-time Software Engineering roles\n✅ Backend/Full-stack positions\n✅ Freelance/Contract projects\n✅ Technical collaborations\n✅ Open-source contributions\n✅ Mentorship opportunities\n\n**💡 Best Fit For:**\n• Startups needing full-stack expertise\n• Companies building scalable microservices\n• Teams working on AI-powered products\n• FinTech, EdTech, or GovTech projects\n\n**🚀 What You Get:**\n• Clean, production-ready code\n• Strong problem-solving skills\n• Quick learner & self-starter\n• Team player with good communication\n• 2+ years of proven track record\n\nDon't hesitate to reach out - Irshad loves discussing technology and building great products! 🤝";
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
        content: getBotResponse(userMessage.content),
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