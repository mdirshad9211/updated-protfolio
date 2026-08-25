import { motion } from 'motion/react';
import { GraduationCap, Award, Sparkles } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'AXIS Institute of Technology and Management, Kanpur (AKTU)',
      period: '2021 – 2025',
      icon: GraduationCap,
      color: '#58A6FF',
    },
    {
      degree: 'The Complete 2024 Web Development Bootcamp',
      institution: 'Udemy',
      period: 'Issued Oct 2023',
      icon: Award,
      color: '#3FB950',
    },
    {
      degree: 'Generative AI, Python & LLMs',
      institution: 'Self-directed — APIs, prompting, RAG, and Python tooling',
      period: 'Currently learning',
      icon: Sparkles,
      color: '#A371F7',
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-[#58A6FF] to-[#3FB950] bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12">Academic background and continuous learning</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[#161B22] border border-[#30363D] rounded-lg p-6 hover:border-[#58A6FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#58A6FF]/10"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: `${edu.color}15` }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: edu.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{edu.degree}</h3>
                      <p className="text-gray-400 mb-2">{edu.institution}</p>
                      <p className="text-sm text-gray-500 font-mono">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
