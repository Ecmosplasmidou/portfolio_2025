import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID!
      );
  
      if (response.status === 200) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (err) {
      setError("Impossible d'envoyer l'email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            {t('contactTitle1')}<span className="text-primary-500">{t('contactTitle2')}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('contactDescription')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Bloc Informations - On utilise un fond blanc pur pour contraster avec le fond gris clair de la section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full"
          >
            <div className="p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-none">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50">
                  <div className="bg-primary-500 p-3 rounded-xl text-white">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white font-bold text-sm break-all">ecmosdev@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50">
                  <div className="bg-primary-500 p-3 rounded-xl text-white">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Téléphone</p>
                    <p className="text-gray-900 dark:text-white font-bold text-sm">+33 6 95 10 47 42</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bloc Formulaire - Blanc pur sur fond gris clair */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/3 w-full"
          >
            <div className="p-8 md:p-12 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-none">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">{t('nameLabel')}</label>
                    <input
                      {...register('name', { required: t('nameRequired') })}
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:bg-white outline-none transition-all dark:text-white"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">{t('emailLabel')}</label>
                    <input
                      {...register('email', { required: true })}
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:bg-white outline-none transition-all dark:text-white"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">{t('messageLabel')}</label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={5}
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:bg-white outline-none transition-all resize-none dark:text-white"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-4 bg-primary-500 hover:bg-primary-600 text-white font-black rounded-2xl shadow-lg shadow-primary-500/30 transition-all flex items-center justify-center gap-3"
                >
                  {isSubmitting ? "Envoi..." : t('sendButton')}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;