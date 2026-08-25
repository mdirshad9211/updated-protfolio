import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Copy, Check, Globe } from 'lucide-react';
import { SITE_URL } from '../seo';
import { useState } from 'react';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'irshadmd.edu@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socials = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/mdirshad9211',
      color: '#FFFFFF',
      username: '@mdirshad9211',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/itsmdirshad/',
      color: '#0A66C2',
      username: 'Md Irshad',
    },
    {
      name: 'Sarkora',
      icon: Globe,
      url: 'https://sarkora.in',
      color: '#3FB950',
      username: 'sarkora.in',
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${email}`,
      color: '#EA4335',
      username: email,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-[#0D1117]" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="contact-heading" className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-[#58A6FF] to-[#3FB950] bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Open to opportunities, collaborations, and interesting conversations
          </p>

          {/* Social Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socials.map((social, index) => {
              const Icon = social.icon;
              const isEmail = social.name === 'Email';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <a
                    href={social.url}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="block bg-[#161B22] border border-[#30363D] rounded-lg p-6 hover:border-[#58A6FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#58A6FF]/10"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div 
                        className="p-4 rounded-full mb-4"
                        style={{ backgroundColor: `${social.color}15` }}
                      >
                        <Icon 
                          className="w-8 h-8" 
                          style={{ color: social.color }}
                        />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{social.name}</h3>
                      <p className="text-sm text-gray-400 break-all">{social.username}</p>
                    </div>
                  </a>
                  
                  {/* Copy button for email */}
                  {isEmail && (
                    <motion.button
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopyEmail();
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-4 right-4 p-2 bg-[#0D1117] border border-[#30363D] rounded-lg hover:border-[#58A6FF] transition-all"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-[#3FB950]" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </motion.button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center pt-12 border-t border-[#30363D]"
          >
            {/* <p className="text-gray-500 text-sm mb-4">
              Built with React, Tailwind CSS, and Motion
            </p> */}
            <p className="text-gray-600 text-sm font-mono">
              © {new Date().getFullYear()} Md Irshad · Full Stack Software Engineer ·{' '}
              <a href={SITE_URL} className="hover:text-[#58A6FF]">{SITE_URL.replace('https://', '')}</a>
              {' · '}
              <a href="https://sarkora.in" className="hover:text-[#3FB950]">sarkora.in</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
