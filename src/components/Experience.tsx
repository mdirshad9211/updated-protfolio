import { motion } from 'motion/react';
import { GitCommit, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      role: 'Product Specialist',
      company: 'Raymoon Group',
      period: 'Dec 2025 – Present',
      type: 'Current',
      responsibilities: [
        'Own product and engineering delivery for internal platforms around staffing, payroll, and operations workflows',
        'Build and ship backend services and dashboards used by operations teams across clients and sites',
        'Collaborate with stakeholders to turn business requirements into reliable APIs, RBAC, and admin tooling',
        'Improve platform stability, data quality, and day-to-day usability for recruitment and payroll products',
      ],
      tech: ['Node.js', 'React', 'MongoDB', 'REST APIs', 'RBAC', 'Product'],
    },
    {
      role: 'Freelance Full Stack Developer',
      company: 'Independent',
      period: '2024 – Present',
      type: 'Freelance',
      responsibilities: [
        'Delivered a lab management system covering patients, tests, sample tracking, reports, and staff roles',
        'Built an inventory management system on Fastify and PostgreSQL for SKUs, stock movement, suppliers, and reporting',
        'Designed a social media backend with Fastify and PostgreSQL: auth, profiles, posts, feeds, likes, comments, and media APIs',
        'Shipped an e-commerce website with catalog, cart, orders, and an admin panel for store operations',
        'Created a clinic website with services, doctor profiles, and appointment inquiry flows for patients',
        'Worked directly with clients on requirements, delivery, and production support',
      ],
      tech: ['Fastify', 'PostgreSQL', 'React', 'Node.js', 'JWT', 'Client Delivery'],
    },
    {
      role: 'Software Engineer',
      company: 'Blu Parrot',
      period: 'Jul 2025 – Dec 2025',
      type: 'Full-time',
      responsibilities: [
        'Led development of a multi-level authentication system using Node.js, Express.js, and JWT',
        'Designed RBAC dashboards in React and Tailwind CSS for users with different access levels',
        'Integrated an AI chatbot and job-description filtering tool to automate candidate-job matching',
        'Worked with backend, design, and product teams on end-to-end frontend and API integration',
        'Improved performance, code quality, and security across REST APIs and encryption flows',
      ],
      tech: ['Node.js', 'Express', 'JWT', 'React', 'Tailwind CSS', 'AI Chatbot'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Blu Parrot',
      period: 'Mar 2025 – Jul 2025',
      type: 'Internship',
      responsibilities: [
        'Contributed to multi-level authentication with Node.js, Express.js, and JWT',
        'Helped build role-based dashboards in React and Tailwind CSS',
        'Implemented an AI-driven chatbot and JD filtering to improve recruitment workflows',
        'Integrated frontend and backend services and took part in reviews, debugging, and refactors',
      ],
      tech: ['Node.js', 'React', 'JWT', 'RBAC', 'REST APIs'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'TechnopediaSoft',
      period: 'Feb 2025 – Mar 2025',
      type: 'Internship',
      responsibilities: [
        'Built RBAC for a complex e-commerce platform so permissions stayed secure and manageable',
        'Designed a React admin panel for products, orders, and users',
        'Contributed to Node.js and Express APIs and helped ship features that improved operations',
      ],
      tech: ['React', 'Node.js', 'Express', 'RBAC', 'E-commerce'],
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
          <p className="text-gray-400 text-center mb-12">
            Product, engineering, internships, and freelance client work
          </p>

          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-[#30363D]"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.role}-${exp.period}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#58A6FF] border-4 border-[#0D1117] z-10 shadow-lg shadow-[#58A6FF]/50"></div>

                  <motion.div
                    className="ml-8 md:ml-16 bg-[#161B22] border border-[#30363D] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    onHoverStart={() => setExpandedIndex(index)}
                    onHoverEnd={() => setExpandedIndex(null)}
                    whileHover={{
                      borderColor: '#58A6FF',
                      boxShadow: '0 0 20px rgba(88, 166, 255, 0.2)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3 gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-[#0D1117] rounded-lg border border-[#30363D]">
                            <Briefcase className="w-5 h-5 text-[#58A6FF]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <p className="text-[#58A6FF]">{exp.company}</p>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              exp.type === 'Current'
                                ? 'bg-[#3FB950]/10 text-[#3FB950] border border-[#3FB950]/30'
                                : exp.type === 'Freelance'
                                  ? 'bg-[#D29922]/10 text-[#D29922] border border-[#D29922]/30'
                                  : 'bg-[#58A6FF]/10 text-[#58A6FF] border border-[#58A6FF]/30'
                            }`}
                          >
                            {exp.type}
                          </div>
                          <p className="text-sm text-gray-400 mt-2 font-mono">{exp.period}</p>
                        </div>
                      </div>

                      <motion.ul
                        className="space-y-2 mb-4"
                        initial={false}
                        animate={{
                          height: expandedIndex === index ? 'auto' : '120px',
                          overflow: 'hidden',
                        }}
                      >
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400">
                            <GitCommit className="w-4 h-4 text-[#3FB950] mt-1 flex-shrink-0" />
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </motion.ul>

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

                    {expandedIndex !== index && exp.responsibilities.length > 3 && (
                      <div className="px-6 pb-4 text-xs text-gray-500">Hover or tap to see more...</div>
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
