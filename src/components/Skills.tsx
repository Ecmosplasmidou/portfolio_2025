import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const SkillCategory: React.FC<{
  title: string;
  skills: string[];
  delay?: number;
}> = ({ title, skills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillsData = {
    languages: ['Python', 'JavaScript', 'PHP', 'HTML', 'CSS'],
    frameworks: ['Django', 'React', 'Angular'],
    databases: ['PostgreSQL', 'SQLite', 'MongoDB'],
    tools: ['VSCode', 'GitHub', 'AWS', 'Shopify', 'Canva', 'Figma', 'Adobe XD', 'Premiere Pro', 'Trello'],
    aiTools: ['ChatGPT', 'Bolt', 'Cursor']
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('skillsTitle')}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title={t('languages')} skills={skillsData.languages} delay={0.1} />
          <SkillCategory title={t('frameworks')} skills={skillsData.frameworks} delay={0.2} />
          <SkillCategory title={t('databases')} skills={skillsData.databases} delay={0.3} />
          <SkillCategory title={t('tools')} skills={skillsData.tools} delay={0.4} />
          <SkillCategory title={t('aiTools')} skills={skillsData.aiTools} delay={0.5} />
        </div>
      </div>
    </section>
  );
};

export default Skills;