import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('aboutTitle')}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Developer working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-32 h-32 border-2 border-white dark:border-gray-800 rounded-lg"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cassam alias EcmosDev
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {t('aboutDescription')}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">Python</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">Django</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">Flask</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">React</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">Express</span>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
            >
              {t('contactMe')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;