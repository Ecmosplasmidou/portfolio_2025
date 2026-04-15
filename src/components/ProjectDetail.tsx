import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext'; 
import { Github, Globe, Instagram, ArrowLeft, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage(); 
  const project = projects.find(p => p.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-2xl font-bold text-gray-500">Projet non trouvé</p>
        <button onClick={() => navigate('/')} className="text-primary-500 hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> {t('backButton')}
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-gray-950 pt-28 pb-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors mb-12"
        >
          <div className="p-2 rounded-full group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-all">
            <ArrowLeft size={20} />
          </div>
          <span className="font-bold uppercase tracking-widest text-xs">{t('backButton')}</span>
        </motion.button>
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:w-3/5"
          >
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title[language]} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:w-2/5 flex flex-col justify-center"
          >
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              {project.title[language]}
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-xl text-xs font-bold border border-transparent hover:border-primary-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert mb-10">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-primary-500 pl-6">
                {project.description[language]}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl shadow-lg shadow-primary-500/25 transition-all active:scale-95"
                >
                  <Globe size={20} />
                  <span>{t('viewWebsite')}</span>
                  <ExternalLink size={14} className="opacity-50" />
                </a>
              )}
              
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:bg-black dark:hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-gray-900/10 dark:shadow-none"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
              )}
            </div>
            {project.socialLink && (
              <a
                href={project.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 text-gray-400 hover:text-pink-500 transition-colors text-sm font-medium"
              >
                <Instagram size={18} />
                <span>Voir sur Instagram</span>
              </a>
            )}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 pt-12 border-t border-gray-100 dark:border-gray-800"
        >
          <div className="flex items-center gap-4 text-primary-500 mb-4">
            <Code2 size={24} />
            <h2 className="text-xl font-bold uppercase tracking-tighter">Stack & Challenge</h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
            {t('projectDetailChallenge')}
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ProjectDetail;