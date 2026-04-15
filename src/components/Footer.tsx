import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Icônes avec couleurs plus contrastées */}
        <div className="space-x-6 mb-6 flex justify-center">
          <a
            href="https://github.com/Ecmosplasmidou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/cassam-mahadawoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
          {t('footerText')}
        </p>

        <p className="text-gray-400 dark:text-gray-600 text-xs mt-2 tracking-wide">
          &copy; {currentYear} <span className="font-bold text-gray-900 dark:text-white">EcmosDev</span>. {t('allRightsReserved')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;