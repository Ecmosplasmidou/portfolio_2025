import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext'; 
import { Github, Globe, Instagram } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const { language, t } = useLanguage(); 
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    return <div className="text-center text-red-500">Projet non trouvé</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-12">
        {project.title[language]}
      </h1>
      <img src={project.image} alt={project.title[language]} className="w-full max-w-lg mx-auto rounded-lg shadow-lg mb-6" />
      <p className="text-gray-700 dark:text-gray-300">
        {project.description[language]} 
      </p>
        <div className="flex flex-wrap gap-2 mt-6">
        {project.githubLink && (
            <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
            <Github size={16} className="mr-1" />
            {t('viewGithub')}
            </a>
        )}
        {project.websiteLink && (
            <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
            <Globe size={16} className="mr-1" />
            {t('viewWebsite')}
            </a>
        )}
        {project.socialLink && (
            <a
            href={project.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
            <Instagram size={16} className="mr-1" />
            {t('viewSocial')}
            </a>
        )}
        </div>
    </div>
  );
};

export default ProjectDetail;
