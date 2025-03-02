import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="space-x-4 mb-4 flex justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://github.com/Ecmosplasmidou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/cassam-mahadawoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-500 transition-colors"
            aria-label="Twitter"
          >
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          {t('footerText')}
        </p>
        <p className="text-gray-500 text-xs mt-1">
          &copy; {currentYear} EcmosDev. {t('allRightsReserved')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;