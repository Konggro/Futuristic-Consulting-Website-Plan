import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileCheck, Shield, Truck, FlaskConical, Cog, X } from 'lucide-react';
import { Button } from './ui/button';

interface ServicesPageProps {
  t: any;
}

export function ServicesPage({ t }: ServicesPageProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: FileCheck,
      title: t.services.chemicalImport,
      short: t.services.importShort,
      full: t.services.importFull,
      features: [
        t.services.regulatoryCompliance,
        t.services.importPermit,
        t.services.customsDocs,
        t.services.classificationLabeling,
      ],
    },
    {
      icon: Shield,
      title: t.services.safetyConsulting,
      short: t.services.safetyShort,
      full: t.services.safetyFull,
      features: [
        t.services.riskAssessment,
        t.services.safetyProtocol,
        t.services.emergencyPlanning,
        t.services.staffTraining,
      ],
    },
    {
      icon: Truck,
      title: t.services.logisticsCoord,
      short: t.services.logisticsShort,
      full: t.services.logisticsFull,
      features: [
        t.services.supplyChain,
        t.services.transportCoord,
        t.services.storageSolutions,
        t.services.inventoryMgmt,
      ],
    },
    {
      icon: FlaskConical,
      title: t.services.labTesting,
      short: t.services.labShort,
      full: t.services.labFull,
      features: [
        t.services.chemicalAnalysis,
        t.services.qualityControl,
        t.services.contaminationDetection,
        t.services.complianceVerification,
      ],
    },
    {
      icon: Cog,
      title: t.services.cyanideProcess,
      short: t.services.cyanideShort,
      full: t.services.cyanideFull,
      features: [
        t.services.processEngineering,
        t.services.safetyIntegration,
        t.services.efficiencyOpt,
        t.services.environmentalCompliance,
      ],
    },
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
            <span className="text-[#00d4ff]">{t.services.title}</span> {t.services.titleHighlight}
          </h1>
          <p className="max-w-2xl mx-auto text-[#94a3b8]">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl overflow-hidden mb-16 h-64 glass"
        >
          <img
            src="https://images.unsplash.com/photo-1675093022653-59233299f8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwY2hlbWljYWx8ZW58MXx8fHwxNzYxNjY0MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              onClick={() => setSelectedService(index)}
              className="glass rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
            >
              {/* Animated molecules in background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#00d4ff]/20 transition-all glow-effect">
                  <service.icon className="w-7 h-7 text-[#00d4ff]" />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-[#94a3b8] mb-4">{service.short}</p>
                <Button
                  variant="outline"
                  className="border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10 w-full"
                >
                  {t.services.learnMore}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center glow-effect">
                      {(() => {
                        const ServiceIcon = services[selectedService].icon;
                        return <ServiceIcon className="w-8 h-8 text-[#00d4ff]" />;
                      })()}
                    </div>
                    <h2 className="text-[#00d4ff]">{services[selectedService].title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-[#94a3b8] mb-6">{services[selectedService].full}</p>
                
                <div>
                  <h3 className="mb-4 text-[#00d4ff]">{t.services.keyFeatures}</h3>
                  <ul className="space-y-3">
                    {services[selectedService].features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-[#94a3b8]"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
