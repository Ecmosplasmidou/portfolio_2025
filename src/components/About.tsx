import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Globe2 } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { name: 'Python', icon: <Terminal size={14} /> },
    { name: 'Django', icon: <Globe2 size={14} /> },
    { name: 'Flask', icon: <Cpu size={14} /> },
    { name: 'JavaScript', icon: <Code2 size={14} /> },
    { name: 'React', icon: <Code2 size={14} /> },
    { name: 'Express', icon: <Terminal size={14} /> },
  ];

  return (
    <section id="about" className="py-12 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {t('aboutTitle')}<span className="text-primary-500">.</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-1.5 bg-primary-500 rounded-full"></div>
            <div className="w-4 h-1.5 bg-primary-500/30 rounded-full"></div>
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 group">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary-500/20 rounded-[2rem] -z-10 group-hover:-top-4 group-hover:-left-4 transition-all duration-500" />
              
              <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary-500/10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
                  alt="Developer working"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Cassam <span className="text-primary-500 underline decoration-primary-500/20 underline-offset-8">alias EcmosDev</span>
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>
            
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Stack technique favorite</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:border-primary-500 transition-colors"
                  >
                    <span className="text-primary-500">{skill.icon}</span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl transition-all shadow-lg hover:shadow-primary-500/20"
            >
              <span>{t('contactMe')}</span>
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;