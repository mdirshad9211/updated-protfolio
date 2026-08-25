import { motion } from 'motion/react';
import { ExternalLink, Github, Globe, Briefcase, Sparkles } from 'lucide-react';
import { useState } from 'react';

type ProjectCategory = 'All' | 'Product' | 'Freelance' | 'Open Source';

interface Project {
  name: string;
  description: string;
  tech: string[];
  language: string;
  languageColor: string;
  githubUrl: string | null;
  liveUrl: string | null;
  category: 'Product' | 'Freelance' | 'Open Source';
  featured?: boolean;
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All');

  const projects: Project[] = [
    {
      name: 'Sarkora',
      description:
        'My product for government exam aspirants — one place for latest jobs, results, admit cards, and previous year papers. Built end to end as a live platform, with mock tests, AI study tools, and an exam calendar on the roadmap.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'SEO', 'Product'],
      language: 'TypeScript',
      languageColor: '#3178C6',
      githubUrl: null,
      liveUrl: 'https://sarkora.in',
      category: 'Product',
      featured: true,
    },
    {
      name: 'Lab Management System',
      description:
        'Freelance lab operations platform covering patient registration, test catalogs, sample tracking, report generation, billing, and staff roles so labs can run day-to-day workflows digitally.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'RBAC'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: null,
      liveUrl: null,
      category: 'Freelance',
    },
    {
      name: 'Inventory Management System',
      description:
        'Client inventory software for SKU catalogs, stock in/out, suppliers, low-stock alerts, and operational reports. Backend on Fastify with PostgreSQL so operations teams can track inventory in real time.',
      tech: ['React', 'Fastify', 'PostgreSQL', 'Node.js', 'REST API', 'Dashboards'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: null,
      liveUrl: null,
      category: 'Freelance',
    },
    {
      name: 'Social Media Backend',
      description:
        'Fastify + PostgreSQL backend for a client social product: authentication, profiles, posts, feeds, likes, comments, media handling, and moderation-ready REST APIs designed to scale with user growth.',
      tech: ['Fastify', 'PostgreSQL', 'Node.js', 'JWT', 'REST API', 'Media'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: null,
      liveUrl: null,
      category: 'Freelance',
    },
    {
      name: 'E-commerce Website',
      description:
        'Full-stack store for a retail client with product catalog, cart, checkout, order management, and an admin panel for catalog and user operations.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Admin Panel', 'RBAC'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: 'https://github.com/mdirshad9211/book-store-backend',
      liveUrl: null,
      category: 'Freelance',
    },
    {
      name: 'Clinic Website',
      description:
        'Clinic website for a healthcare client with doctor profiles, services, appointment inquiries, and a clean patient-facing layout that staff can keep updated.',
      tech: ['React', 'Node.js', 'Tailwind CSS', 'Forms', 'Responsive Design'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: null,
      liveUrl: null,
      category: 'Freelance',
    },
    {
      name: 'AI Ticket Assistant',
      description:
        'Intelligent support system with Gemini-powered assignment, skill matching, workload balancing, role-based dashboards, ticket threads, and feedback.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Inngest'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: 'https://github.com/mdirshad9211/AI-Based-Mentor-Assigner-BE',
      liveUrl: 'https://ai-based-mentor-assigner-fe.vercel.app',
      category: 'Open Source',
      featured: true,
    },
    {
      name: 'Learn With Code',
      description:
        'Learning management system with JWT auth, role-based access, course management, progress tracking, gamification, and an analytics admin panel.',
      tech: ['Next.js 15', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'JWT'],
      language: 'TypeScript',
      languageColor: '#3178C6',
      githubUrl: 'https://github.com/mdirshad9211/Learn-With-Code',
      liveUrl: 'https://learn-with-code.vercel.app',
      category: 'Open Source',
      featured: true,
    },
    {
      name: 'EventHub',
      description:
        'Production-grade event ingestion and analytics platform with clean architecture for high-volume event processing and querying.',
      tech: ['Node.js', 'Fastify', 'PostgreSQL', 'Clean Architecture', 'Analytics'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: 'https://github.com/mdirshad9211/eventhub',
      liveUrl: null,
      category: 'Open Source',
    },
    {
      name: 'MQTT Data Ingestion System',
      description:
        'High-throughput ingestion pipeline using MQTT, Node.js, and MongoDB with batching, buffering, Docker, and graceful shutdown for reliability under load.',
      tech: ['Node.js', 'MQTT', 'MongoDB', 'Docker', 'Event-Driven'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: 'https://github.com/mdirshad9211/MQTT-Based-High-Throughput-Data-Ingestion-System',
      liveUrl: null,
      category: 'Open Source',
    },
    {
      name: 'Payroll Management System',
      description:
        'Payroll backend for clients, sites, employees, attendance, and salary calculation with JWT roles, Excel bulk upload, and S3 document storage.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'AWS S3', 'Excel'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: 'https://github.com/mdirshad9211/Payroll-management-Backend-main',
      liveUrl: 'https://payroll-management-backend-main.vercel.app',
      category: 'Open Source',
    },
    {
      name: 'Student Frontend Platform',
      description:
        'Student-facing web app with a modern UI, deployed to production and wired to backend student workflows.',
      tech: ['React', 'JavaScript', 'Vercel', 'REST API'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: 'https://github.com/mdirshad9211/frontend-student',
      liveUrl: 'https://frontend-student-alpha.vercel.app',
      category: 'Open Source',
    },
    {
      name: 'Mini Admin Panel',
      description:
        'Lightweight admin backend for managing records, users, and operational views with authenticated REST endpoints.',
      tech: ['Node.js', 'Express', 'REST API', 'Admin'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: 'https://github.com/mdirshad9211/mini_admin_panel',
      liveUrl: 'https://mini-admin-panelbackend.vercel.app',
      category: 'Open Source',
    },
    {
      name: 'meetAI',
      description:
        'AI-assisted meeting application exploring conversational workflows and TypeScript-first product structure.',
      tech: ['TypeScript', 'AI Integration', 'Node.js'],
      language: 'TypeScript',
      languageColor: '#3178C6',
      githubUrl: 'https://github.com/mdirshad9211/meetAI',
      liveUrl: null,
      category: 'Open Source',
    },
    {
      name: 'Book Review System',
      description:
        'Backend for cataloging books, collecting reviews, and exposing REST APIs for a reading/review product.',
      tech: ['Node.js', 'Express', 'MongoDB', 'REST API'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: 'https://github.com/mdirshad9211/Book-Review-System-BE',
      liveUrl: null,
      category: 'Open Source',
    },
    {
      name: 'Complete Blog Website',
      description:
        'Responsive blog platform with rich content layout, categories, and a focus on clean frontend structure.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: 'https://github.com/mdirshad9211/Complete-blog-website',
      liveUrl: null,
      category: 'Open Source',
    },
    {
      name: 'Real Estate Website',
      description:
        'Property listing frontend for browsing listings with a marketing-focused layout for real-estate use cases.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      language: 'JavaScript',
      languageColor: '#F1E05A',
      githubUrl: 'https://github.com/mdirshad9211/Real-E-state-Website',
      liveUrl: null,
      category: 'Open Source',
    },
  ];

  const filters: ProjectCategory[] = ['All', 'Product', 'Freelance', 'Open Source'];
  const visible = projects.filter((p) => filter === 'All' || p.category === filter);

  const categoryStyles: Record<Project['category'], string> = {
    Product: 'bg-[#3FB950]/10 text-[#3FB950] border-[#3FB950]/30',
    Freelance: 'bg-[#D29922]/10 text-[#D29922] border-[#D29922]/30',
    'Open Source': 'bg-[#58A6FF]/10 text-[#58A6FF] border-[#58A6FF]/30',
  };

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
              Software Engineering Projects
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Product work, freelance client builds, and open-source projects — including Fastify and PostgreSQL backends,
            AI tooling, and Sarkora.in
          </p>

          <motion.a
            href="https://sarkora.in"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 block rounded-xl border border-[#3FB950]/40 bg-gradient-to-r from-[#161B22] to-[#0D1117] p-6 hover:border-[#3FB950] hover:shadow-xl hover:shadow-[#3FB950]/10 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#3FB950]" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#3FB950]">
                    Featured product
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Sarkora.in</h3>
                <p className="text-gray-400 max-w-3xl">
                  A live platform I built for competitive exam aspirants — government jobs, results,
                  admit cards, and PYQs in one place. Visit the site to see the product in production.
                </p>
              </div>
              <span className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#3FB950] text-[#0D1117] rounded-lg text-sm font-semibold shrink-0">
                <Globe className="w-4 h-4" />
                Visit sarkora.in
              </span>
            </div>
          </motion.a>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  filter === item
                    ? 'bg-[#58A6FF] border-[#58A6FF] text-white'
                    : 'bg-[#161B22] border-[#30363D] text-gray-400 hover:border-[#58A6FF] hover:text-[#58A6FF]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visible.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.06, 0.4), duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <article className="h-full bg-[#161B22] border border-[#30363D] rounded-lg p-6 transition-all duration-300 hover:border-[#58A6FF] hover:shadow-xl hover:shadow-[#58A6FF]/10 flex flex-col">
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      {project.category === 'Freelance' ? (
                        <Briefcase className="w-5 h-5 text-gray-400 shrink-0" />
                      ) : project.liveUrl && !project.githubUrl ? (
                        <Globe className="w-5 h-5 text-gray-400 shrink-0" />
                      ) : (
                        <Github className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                      <h3 className="font-semibold text-[#58A6FF] group-hover:underline truncate">
                        {project.name}
                      </h3>
                    </div>
                    <span
                      className={`shrink-0 px-2 py-1 rounded-full text-[10px] font-semibold border ${categoryStyles[project.category]}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 min-h-[72px]">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: project.languageColor }}
                      />
                      <span className="text-sm text-gray-400">{project.language}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
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

                  <div className="flex gap-3 mt-auto pt-4 border-t border-[#30363D]">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#0D1117] border border-[#30363D] rounded-lg text-sm font-semibold hover:border-[#58A6FF] hover:text-[#58A6FF] transition-all"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    ) : (
                      <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#0D1117] border border-[#30363D] rounded-lg text-sm text-gray-500">
                        {project.category === 'Freelance' ? 'Client work' : 'Private'}
                      </span>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#58A6FF] text-white rounded-lg text-sm font-semibold hover:bg-[#4A95E5] transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/mdirshad9211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#161B22] border border-[#30363D] rounded-lg text-sm font-semibold hover:border-[#58A6FF] hover:text-[#58A6FF] transition-all"
            >
              <Github className="w-5 h-5" />
              View all 43 repositories on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
