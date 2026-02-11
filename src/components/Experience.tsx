import { motion } from 'motion/react';
import { GitCommit, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Raymoon Services',
      period: 'Mar 2025 – Present',
      type: 'Current',
      responsibilities: [
        'Architected and deployed Node.js microservices handling 10K+ daily transactions',
        'Integrated FinTech payment gateways with secure transaction processing',
        'Built comprehensive RBAC systems for government compliance projects',
        'Implemented BigQuery analytics pipeline for real-time data insights',
        'Developed cross-platform features in React Native for mobile applications',
        'Led code reviews and mentored junior developers on best practices',
      ],
      tech: ['Node.js', 'Microservices', 'BigQuery', 'React Native', 'Payment APIs', 'RBAC'],
    },
    {
      role: 'Software Engineer Trainee',
      company: 'Raymoon Services',
      period: 'Mar 2024 – Jun 2024',
      type: 'Training',
      responsibilities: [
        'Developed secure JWT-based authentication systems with refresh token rotation',
        'Integrated AI chatbot using GPT API for customer support automation',
        'Built role-based admin dashboards with granular permission controls',
        'Implemented RESTful APIs with comprehensive error handling and logging',
        'Collaborated with senior engineers on production deployment strategies',
      ],
      tech: ['JWT', 'Express', 'AI Integration', 'React', 'REST APIs', 'MongoDB'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-[#0D1117]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-[#58A6FF] to-[#3FB950] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12">My professional journey</p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-[#30363D]"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Commit dot */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#58A6FF] border-4 border-[#0D1117] z-10 shadow-lg shadow-[#58A6FF]/50"></div>

                  {/* Content Card */}
                  <motion.div
                    className="ml-8 md:ml-16 bg-[#161B22] border border-[#30363D] rounded-lg overflow-hidden cursor-pointer"
                    onHoverStart={() => setExpandedIndex(index)}
                    onHoverEnd={() => setExpandedIndex(null)}
                    whileHover={{ 
                      borderColor: '#58A6FF',
                      boxShadow: '0 0 20px rgba(88, 166, 255, 0.2)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-[#0D1117] rounded-lg border border-[#30363D]">
                            <Briefcase className="w-5 h-5 text-[#58A6FF]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <p className="text-[#58A6FF]">{exp.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.type === 'Current' 
                              ? 'bg-[#3FB950]/10 text-[#3FB950] border border-[#3FB950]/30' 
                              : 'bg-[#58A6FF]/10 text-[#58A6FF] border border-[#58A6FF]/30'
                          }`}>
                            {exp.type}
                          </div>
                          <p className="text-sm text-gray-400 mt-2 font-mono">{exp.period}</p>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <motion.ul
                        className="space-y-2 mb-4"
                        initial={false}
                        animate={{ 
                          height: expandedIndex === index ? 'auto' : '120px',
                          overflow: 'hidden' 
                        }}
                      >
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400">
                            <GitCommit className="w-4 h-4 text-[#3FB950] mt-1 flex-shrink-0" />
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </motion.ul>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tech.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            className="px-3 py-1 bg-[#0D1117] border border-[#30363D] rounded-full text-xs text-gray-300 hover:border-[#58A6FF] hover:text-[#58A6FF] transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Expand Indicator */}
                    {expandedIndex !== index && exp.responsibilities.length > 3 && (
                      <div className="px-6 pb-4 text-xs text-gray-500">
                        Hover to see more...
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
