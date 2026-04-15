import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Code2, Layers, Database, Wrench, Sparkles } from 'lucide-react';

const SkillCategory: React.FC<{
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
}> = ({ title, skills, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="group relative p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none overflow-hidden"
    >
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-colors" />

      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700/50 rounded-xl text-xs font-bold hover:border-primary-500 hover:text-primary-500 transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillsData = [
    { 
      id: 'languages', 
      title: t('languages'), 
      skills: ['Python', 'JavaScript', 'HTML', 'CSS'], 
      icon: <Code2 size={24} />, 
      delay: 0.1 
    },
    { 
      id: 'frameworks', 
      title: t('frameworks'), 
      skills: ['Django', 'React', 'Express', 'NestJs'], 
      icon: <Layers size={24} />, 
      delay: 0.2 
    },
    { 
      id: 'databases', 
      title: t('databases'), 
      skills: ['PostgreSQL', 'SQLite', 'MongoDB', 'Firebase'], 
      icon: <Database size={24} />, 
      delay: 0.3 
    },
    { 
      id: 'tools', 
      title: t('tools'), 
      skills: ['VSCode', 'GitHub', 'AWS', 'Shopify', 'WebFlow', 'Figma'], 
      icon: <Wrench size={24} />, 
      delay: 0.4 
    },
    { 
      id: 'ai', 
      title: t('aiTools'), 
      skills: ['Bolt', 'Google AI Studio', 'Cloud code'], 
      icon: <Sparkles size={24} />, 
      delay: 0.5 
    },
  ];

  return (
    <section id="skills" className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            {t('skillsTitle1')}<span className="text-primary-500">{t('skillsTitle2')}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('skillsSubTitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <SkillCategory 
              key={category.id}
              title={category.title} 
              skills={category.skills} 
              icon={category.icon}
              delay={category.delay} 
            />
          ))}
          
          {/* Carte spéciale "Open to Learn" pour remplir le grid si besoin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="p-8 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center text-center group hover:border-primary-500/50 transition-colors"
          >
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 text-gray-400 group-hover:text-primary-500 transition-colors">
              <Sparkles size={24} />
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium italic">
              Toujours en train d'apprendre de nouvelles technologies...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;