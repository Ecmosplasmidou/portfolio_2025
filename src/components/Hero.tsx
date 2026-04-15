import React from 'react';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

import CV from '../img/CV_MAHADAWOO_Cassam_DEV-FS_new.pdf';
import MaPhoto from '../img/Ma_photo.png';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950 pt-28 pb-12">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Texte Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary-600 uppercase bg-primary-50 dark:bg-primary-900/30 rounded-full"
            >
              {t('greeting')}
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6">
              Cassam <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-600">MAHADAWOO</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {t('role')}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              {t('heroDescription')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl shadow-lg shadow-primary-500/25 transition-all flex items-center gap-2"
              >
                <Mail size={20} />
                {t('contactMe')}
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={CV}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                {t('downloadCV')}
              </motion.a>
            </div>
          </motion.div>

          {/* Image Profile avec effets modernes */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 flex justify-center relative"
          >
            <div className="relative group">
              {/* Le halo lumineux derrière l'image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500 to-blue-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Conteneur de l'image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] overflow-hidden rounded-[2.5rem] border-2 border-white/50 dark:border-gray-800 shadow-2xl">
                <img
                  src={MaPhoto}
                  alt="Cassam Mahadawoo"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Badge flottant Style Glassmorphism */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 p-5 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700"
              >
                <p className="text-gray-900 dark:text-white font-extrabold tracking-tight">{t('role')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="text-primary-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;