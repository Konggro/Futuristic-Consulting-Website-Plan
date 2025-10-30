import { motion } from 'motion/react';
import { Building2, HandshakeIcon, Award, TrendingUp } from 'lucide-react';

interface ClientsPageProps {
  t: any;
}

export function ClientsPage({ t }: ClientsPageProps) {
  const partners = [
    {
      name: 'Oyu Tolgoi',
      sector: t.clients.copperGold,
      partnership: '2018 - ' + t.clients.present,
      description: t.clients.chemicalSupply,
    },
    {
      name: 'Erdenet Mining Corporation',
      sector: t.clients.copperMoly,
      partnership: '2019 - ' + t.clients.present,
      description: t.clients.labTesting,
    },
    {
      name: 'Mongolian Copper Corporation',
      sector: t.clients.copperMining,
      partnership: '2020 - ' + t.clients.present,
      description: t.clients.importConsulting,
    },
    {
      name: 'Tavan Tolgoi',
      sector: t.clients.coalMining,
      partnership: '2021 - ' + t.clients.present,
      description: t.clients.safetyTraining,
    },
    {
      name: 'Energy Resources LLC',
      sector: t.clients.energyMining,
      partnership: '2022 - ' + t.clients.present,
      description: t.clients.fullSpectrum,
    },
    {
      name: 'Boroo Gold',
      sector: t.clients.goldMining,
      partnership: '2020 - ' + t.clients.present,
      description: t.clients.cyanideDesign,
    },
  ];

  const stats = [
    { icon: Building2, value: '50+', label: t.clients.activeClients },
    { icon: HandshakeIcon, value: '200+', label: t.clients.projectsCompleted },
    { icon: Award, value: '15+', label: t.clients.industryAwards },
    { icon: TrendingUp, value: '98%', label: t.clients.clientSatisfaction },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">
            <span className="text-[#00d4ff]">{t.clients.title}</span> {t.clients.titleHighlight}
          </h1>
          <p className="max-w-2xl mx-auto text-[#94a3b8]">
            {t.clients.subtitle}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl overflow-hidden mb-16 h-64 glass"
        >
          <img
            src="https://images.unsplash.com/photo-1633155561838-9b372f906787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYnVzaW5lc3MlMjBtZWV0aW5nfGVufDF8fHx8MTc2MTY2NDA1OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Partners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-4 glow-effect">
                <stat.icon className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <div className="mb-2 text-[#00d4ff]">{stat.value}</div>
              <p className="text-[#94a3b8]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass rounded-2xl p-6 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#a855f7] flex items-center justify-center glow-effect">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-[#00d4ff]">{partner.partnership}</div>
              </div>
              
              <h3 className="mb-2 group-hover:text-[#00d4ff] transition-colors">
                {partner.name}
              </h3>
              
              <div className="inline-block px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] mb-4">
                {partner.sector}
              </div>
              
              <p className="text-[#94a3b8]">{partner.description}</p>

              {/* Decorative element */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#00d4ff] to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-6 glow-effect">
              <Award className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <h2 className="mb-6 text-[#00d4ff]">Why Companies Choose Us</h2>
            <p className="text-[#94a3b8] mb-8 leading-relaxed">
              "Khimi Consulting has been instrumental in optimizing our chemical processes and ensuring 
              compliance with safety regulations. Their expertise and dedication to excellence make them 
              an invaluable partner in our operations."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#a855f7]" />
              <div className="text-left">
                <div className="text-[#00d4ff]">Chief Operations Officer</div>
                <div className="text-[#94a3b8]">Leading Mining Corporation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
