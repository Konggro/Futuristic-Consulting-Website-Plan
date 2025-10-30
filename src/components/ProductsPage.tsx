import { motion } from 'motion/react';
import { Pickaxe, Boxes, Container } from 'lucide-react';

interface ProductsPageProps {
  t: any;
}

export function ProductsPage({ t }: ProductsPageProps) {
  const categories = [
    {
      icon: Pickaxe,
      title: t.products.miningChemicals,
      products: [
        { name: t.products.sodiumCyanide, purity: '98%', application: t.products.goldExtraction },
        { name: t.products.activatedCarbon, grade: t.products.industrial, application: t.products.metalRecovery },
        { name: t.products.lime, grade: t.products.technical, application: t.products.phAdjustment },
        { name: t.products.flocculants, type: t.products.various, application: t.products.tailingsMgmt },
      ],
    },
    {
      icon: Boxes,
      title: t.products.processingChemicals,
      products: [
        { name: t.products.sulfuricAcid, purity: '98%', application: t.products.leachingOps },
        { name: t.products.hydrochloricAcid, purity: '37%', application: t.products.mineralProcessing },
        { name: t.products.copperSulfate, grade: t.products.industrial, application: t.products.flotation },
        { name: t.products.zincDust, purity: '95%', application: t.products.precipitation },
      ],
    },
    {
      icon: Container,
      title: t.products.storageHandling,
      products: [
        { name: t.products.containers, type: t.products.ibcTotes, capacity: '1000L' },
        { name: t.products.safetyEquipment, type: t.products.ppeKits, standard: t.products.isoCertified },
        { name: t.products.spillContainment, type: t.products.various, application: t.products.emergencyResponse },
        { name: t.products.storageCabinets, type: t.products.fireRated, standard: t.products.oshaCompliant },
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
            <span className="text-[#00d4ff]">{t.products.title}</span> {t.products.titleHighlight}
          </h1>
          <p className="max-w-2xl mx-auto text-[#94a3b8]">
            {t.products.subtitle}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl overflow-hidden mb-16 h-80 glass"
        >
          <img
            src="https://images.unsplash.com/photo-1657244358898-d9e110504fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY2hlbWlzdHJ5JTIwbW9sZWN1bGVzfGVufDF8fHx8MTc2MTY2NDA1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 text-[#00d4ff]"
              >
                {t.products.premiumQuality}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[#94a3b8]"
              >
                {t.products.certifiedTested}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Product Categories */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center glow-effect">
                    <category.icon className="w-8 h-8 text-[#00d4ff]" />
                  </div>
                  <h2 className="text-[#00d4ff]">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.products.map((product, prodIndex) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: prodIndex * 0.1 }}
                      whileHover={{ scale: 1.05, rotateZ: 2 }}
                      className="bg-[#0a0a0f]/50 rounded-xl p-6 border border-[#00d4ff]/20 hover:border-[#00d4ff]/40 transition-all cursor-pointer group"
                    >
                      <h4 className="mb-3 group-hover:text-[#00d4ff] transition-colors">
                        {product.name}
                      </h4>
                      <div className="space-y-2 text-[#94a3b8]">
                        {Object.entries(product).map(([key, value]) => {
                          if (key === 'name') return null;
                          return (
                            <div key={key} className="flex justify-between items-center">
                              <span className="capitalize">{key}:</span>
                              <span className="text-[#00d4ff]">{value}</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Decorative molecule */}
                      <div className="mt-4 flex gap-2 opacity-30 group-hover:opacity-60 transition-opacity">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass rounded-3xl p-12"
        >
          <h2 className="mb-4 text-[#00d4ff]">Need a Custom Solution?</h2>
          <p className="text-[#94a3b8] mb-6 max-w-2xl mx-auto">
            We can source and supply specialized chemicals and equipment tailored to your specific requirements.
          </p>
          <div className="inline-block px-6 py-3 rounded-xl bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
            Contact our team for custom inquiries
          </div>
        </motion.div>
      </div>
    </div>
  );
}
