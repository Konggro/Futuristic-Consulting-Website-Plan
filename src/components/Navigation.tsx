import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Sparkles, Globe } from 'lucide-react';
import { Button } from './ui/button';

type Language = 'en' | 'mn';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
}

export function Navigation({ currentPage, onNavigate, language, onLanguageChange, t }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.about, id: 'about' },
    { name: t.nav.services, id: 'services' },
    { name: t.nav.products, id: 'products' },
    { name: t.nav.clients, id: 'clients' },
    { name: t.nav.news, id: 'news' },
    { name: t.nav.careers, id: 'careers' },
    { name: t.nav.contact, id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <Sparkles className="w-8 h-8 text-[#00d4ff]" />
              <div className="absolute inset-0 blur-md bg-[#00d4ff] opacity-50" />
            </div>
            <span className="text-[#00d4ff]">Khimi Consulting</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-[#00d4ff]/20 text-[#00d4ff]'
                    : 'text-[#94a3b8] hover:text-[#00d4ff]'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onLanguageChange(language === 'en' ? 'mn' : 'en')}
              className="ml-2 px-4 py-2 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onLanguageChange(language === 'en' ? 'mn' : 'en')}
              className="px-3 py-2 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all flex items-center gap-1"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase text-sm">{language}</span>
            </motion.button>
            <button
              className="text-[#00d4ff]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-[#00d4ff]/20 text-[#00d4ff]'
                    : 'text-[#94a3b8] hover:text-[#00d4ff]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
