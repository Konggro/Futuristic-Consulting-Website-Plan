import { motion } from 'motion/react';
import { ArrowRight, Shield, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

interface HomePageProps {
  onNavigate: (page: string) => void;
  t: any;
}

export function HomePage({ onNavigate, t }: HomePageProps) {
  const partners = [
    'Oyu Tolgoi',
    'Erdenet Mining',
    'Mongolian Copper',
    'Tavan Tolgoi',
    'Energy Resources',
  ];

  const features = [
    {
      icon: Shield,
      title: t.home.safetyFirst,
      description: t.home.safetyFirstDesc,
    },
    {
      icon: Lightbulb,
      title: t.home.innovation,
      description: t.home.innovationDesc,
    },
    {
      icon: Users,
      title: t.home.expertTeam,
      description: t.home.expertTeamDesc,
    },
    {
      icon: TrendingUp,
      title: t.home.growth,
      description: t.home.growthDesc,
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1705871433057-4bf8911f136f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbGFib3JhdG9yeSUyMG5lb24lMjBibHVlfGVufDF8fHx8MTc2MTY2MzgyNHww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/90 via-[#0a0a0f]/80 to-[#0a0a0f]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              <span className="block text-[#00d4ff] mb-2">{t.home.heroTitle1}</span>
              <span className="block">{t.home.heroTitle2}</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-[#94a3b8]">
              {t.home.heroDescription}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                onClick={() => onNavigate('services')}
                className="bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a0a0f] glow-effect"
              >
                {t.home.exploreSolutions}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10"
              >
                {t.home.getInTouch}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#00d4ff] rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-[#00d4ff] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Company Intro */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 text-[#00d4ff]">{t.home.aboutKhimi}</h2>
              <p className="text-[#94a3b8] leading-relaxed">
                {t.home.aboutDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#00d4ff]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-[#94a3b8]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center mb-12 text-[#00d4ff]">{t.home.trustedPartners}</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="glass rounded-xl px-8 py-4 cursor-pointer"
                >
                  <span className="text-[#94a3b8]">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
