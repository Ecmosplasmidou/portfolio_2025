import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('skills'), href: '#skills' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (window.location.pathname.startsWith('/projects/')) {
      navigate(`/${href}`);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 px-4 sm:px-8 lg:px-12 ${
        isScrolled ? 'top-4' : 'top-0'
      }`}
    >
      <div 
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl ${
          isScrolled 
          ? 'bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 dark:border-gray-800/50 py-2' 
          : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => handleNavClick('#home')}
          >
            <img
              src={isDarkMode 
                ? "https://www.dropbox.com/scl/fi/aum8xm6wvfddjhkkj297s/Dimensions_personnalis-es_1582x396_px-removebg-preview.png?rlkey=cc0lyjxtuxu8go952gu3ex8fa&st=5qzemj2i&raw=1" 
                : "https://www.dropbox.com/scl/fi/bs0er3ax1ysc9w63g8smh/Logo_500x500_px-removebg-preview.png?rlkey=sfchwmw78yazksjvdf0kbih3k&st=b91ygy6g&raw=1"
              }
              alt="Logo"
              className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'} object-contain`}
            />
          </motion.div>
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
              >
                {link.name}
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-gray-100/50 dark:bg-gray-800/50 rounded-xl p-1 border border-gray-200/50 dark:border-gray-700/50">
              <button
                onClick={toggleLanguage}
                className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-all flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <Globe size={16} />
                <span className="text-xs font-bold">{language.toUpperCase()}</span>
              </button>

              <div className="w-[1px] h-4 bg-gray-300 dark:bg-gray-600 mx-1" />
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-all text-gray-700 dark:text-gray-300"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/20"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 md:hidden bg-white/90 dark:bg-gray-950/90 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-gray-800 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-primary-500"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;