import { motion } from 'motion/react';
import { ExternalLink, Github, Star, GitFork, Circle } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      name: 'Flowwzen / identity-service',
      description: 'Enterprise-grade RBAC and authentication backend service with JWT, refresh tokens, and granular permission controls',
      tech: ['Node.js', 'Express', 'JWT', 'PostgreSQL', 'Microservices', 'Auth'],
      stars: 24,
      forks: 8,
      language: 'TypeScript',
      languageColor: '#3178C6',
      githubUrl: '#',
      liveUrl: null,
    },
    {
      name: 'Learn-With-Code',
      description: 'Full-stack e-learning platform with role-based authentication, progress tracking, interactive courses, and instructor dashboards',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST API'],
      stars: 42,
      forks: 15,
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      name: 'AI-Based-Mentor-Assigner',
      description: 'AI-powered mentor assignment system using skill-based matching algorithms and machine learning for optimal pairing',
      tech: ['React', 'Node.js', 'Express', 'AI/ML', 'MongoDB', 'Matching Algorithm'],
      stars: 31,
      forks: 12,
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      name: 'AI-Ticket-Management',
      description: 'Intelligent ticket management system with automatic assignment using Gemini API, smart workload balancing, and priority detection',
      tech: ['React', 'Node.js', 'Gemini API', 'Express', 'AI Integration', 'REST API'],
      stars: 28,
      forks: 9,
      language: 'TypeScript',
      languageColor: '#3178C6',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      name: 'Complete-Blog-Website',
      description: 'Fully responsive blog platform with rich text editor, comment system, category filtering, and optimized SEO',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'SEO'],
      stars: 18,
      forks: 6,
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-[#58A6FF] to-[#3FB950] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12">Building with passion, shipping with purpose</p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-[#161B22] border border-[#30363D] rounded-lg p-6 transition-all duration-300 hover:border-[#58A6FF] hover:shadow-xl hover:shadow-[#58A6FF]/10">
                  {/* Repo Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 flex-1">
                      <Github className="w-5 h-5 text-gray-400" />
                      <h3 className="font-semibold text-[#58A6FF] group-hover:underline">
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 min-h-[60px]">
                    {project.description}
                  </p>

                  {/* Language & Tech Stack */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Circle 
                        className="w-3 h-3" 
                        fill={project.languageColor}
                        color={project.languageColor}
                      />
                      <span className="text-sm text-gray-400">{project.language}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#0D1117] border border-[#30363D] rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 bg-[#0D1117] border border-[#30363D] rounded text-xs text-gray-400">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4 pt-4 border-t border-[#30363D]">
                    <a
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#0D1117] border border-[#30363D] rounded-lg text-sm font-semibold hover:border-[#58A6FF] hover:text-[#58A6FF] transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#58A6FF] text-white rounded-lg text-sm font-semibold hover:bg-[#4A95E5] transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#161B22] border border-[#30363D] rounded-lg text-sm font-semibold hover:border-[#58A6FF] hover:text-[#58A6FF] transition-all"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
