import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

import CV from '../img/CV_MAHADAWOO_Cassam_DEV-FS_new.pdf'

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between text-center md:text-left">
          
          {/* Texte */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <span className="text-primary-500 font-mono text-lg mb-2 block">
              {t('greeting')}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">Cassam MAHADAWOO</span>
              <span className="text-primary-500 block">{t('role')}</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-lg mx-auto md:mx-0">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
              >
                <Mail size={18} className="mr-2" />
                {t('contactMe')}
              </a>
              <a
                href={CV}
                className="px-6 py-3 border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium rounded-lg transition-colors text-center"
                target="_blank"
              >
                {t('downloadCV')}
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative md:block">
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                <img
                  src="https://www.dropbox.com/scl/fi/5zjt1b96s7s0bnl3v2x2k/20240321_183751.jpg?rlkey=5nouxbg4nfg7mye9uv498sns3&st=6t8q92ge&raw=1"
                  alt="MAHADAWOO CASSAM picture"
                  className="w-full h-full object-cover rounded-full border-4 border-primary-500 shadow-lg"
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-white dark:bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg text-sm sm:text-base">
                <div className="text-primary-500 font-bold">Développeur Junior</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Flèche scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-10 md:absolute md:bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="text-primary-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;