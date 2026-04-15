import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Globe, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-12 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              {t('projectsTitle1')}<span className="text-primary-500"> {t('projectsTitle2')}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('projectsSubTitle')}
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout // Animation automatique du changement de position dans la grille
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none"
              >
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-black p-4 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                      {project.title[language]}
                    </h3>
                    <div className="flex gap-2">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                          <Github size={18} className="text-gray-500" />
                        </a>
                      )}
                      {project.websiteLink && (
                        <a href={project.websiteLink} target="_blank" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                          <Globe size={18} className="text-gray-500" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm">
                    {project.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg text-[10px] font-black uppercase tracking-widest border border-primary-500/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {projects.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl font-bold text-gray-900 dark:text-white hover:border-primary-500 transition-all shadow-lg hover:shadow-primary-500/10"
            >
              <span>{showAll ? t('viewless') : t('viewmore')}</span>
              <motion.div
                animate={{ y: showAll ? -2 : 2 }}
                transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
              >
                {showAll ? <ChevronUp size={20} className="text-primary-500" /> : <ChevronDown size={20} className="text-primary-500" />}
              </motion.div>
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;