import { motion } from 'motion/react';
import { Code2, Server, Layout, Database, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: '#58A6FF',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'C/C++', level: 75 },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      color: '#3FB950',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'NestJS', level: 85 },
        { name: 'Express', level: 95 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Frontend',
      icon: Layout,
      color: '#58A6FF',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'React Native', level: 80 },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: '#3FB950',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'SQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'VectorDB', level: 75 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: '#58A6FF',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Git & GitHub', level: 95 },
        { name: 'Postman', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-[#58A6FF] to-[#3FB950] bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12">My technical expertise</p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#161B22] border border-[#30363D] rounded-lg p-6 hover:border-[#58A6FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#58A6FF]/10"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: category.color }}
                      />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-300">{skill.name}</span>
                          <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-[#0D1117] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1, 
                              duration: 0.8,
                              ease: "easeOut" 
                            }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}CC 100%)`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-xl font-bold text-center mb-6 text-gray-300">Also Working With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Microservices',
                'JWT Auth',
                'RBAC',
                'BigQuery',
                'Payment APIs',
                'AI Integration',
                'WebSockets',
                'GraphQL',
                'Prisma',
                'Stripe',
                'AWS',
                'CI/CD',
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-[#161B22] border border-[#30363D] rounded-full text-sm text-gray-300 hover:border-[#58A6FF] hover:text-[#58A6FF] hover:shadow-lg hover:shadow-[#58A6FF]/20 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
