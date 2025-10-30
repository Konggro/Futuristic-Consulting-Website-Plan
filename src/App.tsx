import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { ParticleBackground } from './components/ParticleBackground';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ProductsPage } from './components/ProductsPage';
import { ClientsPage } from './components/ClientsPage';
import { NewsPage } from './components/NewsPage';
import { CareersPage } from './components/CareersPage';
import { ContactPage } from './components/ContactPage';
import { translations } from './translations';

type PageType = 'home' | 'about' | 'services' | 'products' | 'clients' | 'news' | 'careers' | 'contact';
type Language = 'en' | 'mn';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[language];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} t={t} />;
      case 'about':
        return <AboutPage t={t} />;
      case 'services':
        return <ServicesPage t={t} />;
      case 'products':
        return <ProductsPage t={t} />;
      case 'clients':
        return <ClientsPage t={t} />;
      case 'news':
        return <NewsPage t={t} />;
      case 'careers':
        return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} t={t} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 border-4 border-[#00d4ff]/20 border-t-[#00d4ff] rounded-full mx-auto mb-6"
            />
            <div className="absolute inset-0 blur-xl bg-[#00d4ff] opacity-30" />
          </div>
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#00d4ff]"
          >
            Khimi Consulting
          </motion.h2>
          <p className="text-[#94a3b8] mt-2">{t.loading.text}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e7ff] relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={setLanguage}
        t={t}
      />

      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#00d4ff]/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="mb-4 text-[#00d4ff]">Khimi Consulting LLC</h4>
              <p className="text-[#94a3b8]">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-[#00d4ff]">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                {(
                  [
                    { key: 'about', label: t.nav.about },
                    { key: 'services', label: t.nav.services },
                    { key: 'products', label: t.nav.products },
                    { key: 'clients', label: t.nav.clients }
                  ] as { key: PageType; label: string }[]
                ).map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => handleNavigate(link.key)}
                      className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[#00d4ff]">{t.footer.resources}</h4>
              <ul className="space-y-2">
                {(
                  [
                    { key: 'news', label: t.nav.news },
                    { key: 'careers', label: t.nav.careers },
                    { key: 'contact', label: t.nav.contact }
                  ] as { key: PageType; label: string }[]
                ).map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => handleNavigate(link.key)}
                      className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[#00d4ff]">{t.footer.connect}</h4>
              <ul className="space-y-2 text-[#94a3b8]">
                <li>info@khimiconsulting.mn</li>
                <li>+976 7000 1234</li>
                <li>{t.contact.location}</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#00d4ff]/20 text-center text-[#94a3b8]">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#00d4ff] text-[#0a0a0f] flex items-center justify-center glow-effect z-50 shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
}
