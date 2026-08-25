import { motion } from 'motion/react';
import { Terminal, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function About() {
  const [activeCommand, setActiveCommand] = useState(0);
  
  const commands = [
    {
      command: 'whoami',
      output: [
        'Product Specialist at Raymoon Group',
        'Freelance Full Stack Developer',
        'Founder of Sarkora.in for exam aspirants',
      ]
    },
    {
      command: 'experience --list',
      output: [
        '✓ Fastify + PostgreSQL inventory and social backends',
        '✓ Freelance lab, clinic, and e-commerce builds',
        '✓ Auth, JWT, and RBAC dashboards at Blu Parrot',
        '✓ AI chatbot and JD matching for recruitment',
        '✓ Sarkora.in — jobs, results, admit cards, and PYQs',
      ]
    },
    {
      command: 'interests --show',
      output: [
        '🤖  GenAI, Python, and LLMs — currently learning',
        '🏗️  Scalable architecture & system design',
        '⚡ Performance optimization',
        '🔐 Security & authentication systems',
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCommand((prev) => (prev + 1) % commands.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#58A6FF] to-[#3FB950] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          {/* Terminal Card */}
          <motion.div
            className="bg-[#161B22] border border-[#30363D] rounded-lg overflow-hidden shadow-2xl"
            whileHover={{ boxShadow: '0 0 30px rgba(88, 166, 255, 0.15)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Terminal Header */}
            <div className="bg-[#0D1117] border-b border-[#30363D] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Terminal className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500 font-mono">irshad@portfolio:~</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              {/* Command selector tabs */}
              <div className="flex gap-4 mb-6 border-b border-[#30363D] pb-2">
                {commands.map((cmd, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCommand(index)}
                    className={`text-sm transition-colors ${
                      activeCommand === index 
                        ? 'text-[#58A6FF] border-b-2 border-[#58A6FF]' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {cmd.command}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeCommand}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Command Line */}
                <div className="mb-4 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#3FB950]" />
                  <span className="text-[#3FB950]">$</span>
                  <span className="text-gray-300">{commands[activeCommand].command}</span>
                </div>

                {/* Output */}
                <div className="space-y-2 pl-8">
                  {commands[activeCommand].output.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="text-gray-400"
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>

                {/* Cursor */}
                <div className="mt-4 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#3FB950]" />
                  <span className="text-[#3FB950]">$</span>
                  <span className="animate-pulse">_</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* README.md style card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 bg-[#161B22] border border-[#30363D] rounded-lg p-6"
          >
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <span className="text-2xl">📖</span>
              <h3 className="font-semibold">README.md</h3>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 leading-relaxed">
                I'm a backend-focused Full Stack Software Engineer currently working as a{' '}
                <span className="text-[#58A6FF]">Product Specialist at Raymoon Group</span>. I also work independently
                as a freelancer, shipping production systems for labs, clinics, inventory operations (Fastify +
                PostgreSQL), social products (Fastify + PostgreSQL), and e-commerce. Alongside client work I built{' '}
                <a href="https://sarkora.in" target="_blank" rel="noopener noreferrer" className="text-[#3FB950] hover:underline">
                  Sarkora.in
                </a>
                , a live platform that centralizes government jobs, results, admit cards, and previous year papers for
                competitive exam aspirants.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Previously at Blu Parrot I worked on multi-level authentication, RBAC dashboards, and AI-assisted
                recruitment tooling. I am currently deepening my skills in Generative AI, Python, and large language
                models so I can ship AI-ready backends. I care about clean APIs, secure access control, and products
                people can actually use.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
