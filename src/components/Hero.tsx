import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Software Engineer | Backend | Building Sarkora.in';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Experience', value: '1.5+ Years' },
    { label: 'Projects', value: '20+' },
    { label: 'GitHub Repos', value: '43' },
  ];

  const handleSearchClick = () => {
    const event = new CustomEvent('openChatbot');
    window.dispatchEvent(event);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16" aria-labelledby="hero-heading">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#58A6FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#3FB950] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Name */}
          <p className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#3FB950]/10 text-[#3FB950] border border-[#3FB950]/30">
            Currently learning GenAI · Python · LLMs
          </p>
          <motion.h1
            id="hero-heading"
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Md Irshad
          </motion.h1>
          <p className="sr-only">
            Full Stack Software Engineer specializing in backend development, Fastify, PostgreSQL, React, and
            Generative AI. Founder of Sarkora.in.
          </p>

          {/* Typing animation subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl text-[#58A6FF] font-mono min-h-[2rem]">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Backend-focused full stack engineer shipping Fastify and PostgreSQL client systems, plus{' '}
            <a href="https://sarkora.in" className="text-[#3FB950] hover:underline">Sarkora.in</a>{' '}
            for government exam aspirants. Currently upskilling in GenAI, Python, and LLMs.
          </motion.p>

          {/* AI Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12 max-w-2xl mx-auto"
          >
            <button
              onClick={handleSearchClick}
              className="w-full group relative"
            >
              <div className="relative flex items-center gap-3 px-6 py-4 bg-[#161B22] border-2 border-[#30363D] rounded-full hover:border-[#58A6FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#58A6FF]/20">
                <Search className="w-5 h-5 text-[#58A6FF]" />
                <span className="flex-1 text-left text-gray-400 group-hover:text-gray-300">
                  Ask AI Irshad anything... (experience, projects, skills)
                </span>
                <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#58A6FF] to-[#3FB950] rounded-full">
                  <span className="text-white text-sm font-semibold">AI 🤖</span>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#58A6FF] to-[#3FB950] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              💡 Try: "What's your backend experience?" or "Tell me about AI projects"
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#161B22] border border-[#30363D] rounded-lg p-6 backdrop-blur-sm hover:border-[#58A6FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#58A6FF]/20"
              >
                <div className="text-3xl font-bold text-[#58A6FF] mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#58A6FF] text-white rounded-lg font-semibold hover:bg-[#4A95E5] transition-all duration-300 shadow-lg shadow-[#58A6FF]/30 hover:shadow-[#58A6FF]/50 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#161B22] border border-[#30363D] text-white rounded-lg font-semibold hover:border-[#3FB950] hover:bg-[#1C2128] transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5 text-[#3FB950]" />
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex gap-6 justify-center mt-12"
          >
            <motion.a
              href="https://github.com/mdirshad9211"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-[#58A6FF] transition-colors"
              aria-label="GitHub profile of Md Irshad"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/itsmdirshad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-[#58A6FF] transition-colors"
              aria-label="LinkedIn profile of Md Irshad"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:irshadmd.edu@gmail.com"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-[#58A6FF] transition-colors"
              aria-label="Email Md Irshad"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}