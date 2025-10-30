import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

interface NewsPageProps {
  t: any;
}

export function NewsPage({ t }: NewsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: t.news.all },
    { id: 'industry', label: t.news.industry },
    { id: 'company', label: t.news.company },
    { id: 'technology', label: t.news.technology },
    { id: 'safety', label: t.news.safety }
  ];

  const articles = [
    {
      title: t.news.article1Title,
      category: 'safety',
      date: 'October 15, 2025',
      excerpt: t.news.article1Excerpt,
      image: 'https://images.unsplash.com/photo-1584291527908-033f4d6542c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzYxNTk1OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Khimi Consulting Expands Laboratory Facilities',
      category: 'company',
      date: 'September 28, 2025',
      excerpt: 'Investment in state-of-the-art analytical equipment to enhance testing capabilities and service quality.',
      image: 'https://images.unsplash.com/photo-1705871433057-4bf8911f136f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbGFib3JhdG9yeSUyMG5lb24lMjBibHVlfGVufDF8fHx8MTc2MTY2MzgyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Mongolia Mining Industry Outlook 2025',
      category: 'industry',
      date: 'September 10, 2025',
      excerpt: 'Analysis of growth trends, sustainability initiatives, and technological advancements in Mongolian mining.',
      image: 'https://images.unsplash.com/photo-1675093022653-59233299f8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwY2hlbWljYWx8ZW58MXx8fHwxNzYxNjY0MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'AI-Powered Chemical Process Optimization',
      category: 'technology',
      date: 'August 22, 2025',
      excerpt: 'How artificial intelligence is revolutionizing chemical engineering and process design in mining.',
      image: 'https://images.unsplash.com/photo-1512686096451-a15c19314d59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaG5vbG9neSUyMGJsdWV8ZW58MXx8fHwxNzYxNjY0MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Sustainable Chemical Management Practices',
      category: 'industry',
      date: 'August 5, 2025',
      excerpt: 'Environmental best practices and sustainable solutions for chemical handling in industrial operations.',
      image: 'https://images.unsplash.com/photo-1657244358898-d9e110504fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY2hlbWlzdHJ5JTIwbW9sZWN1bGVzfGVufDF8fHx8MTc2MTY2NDA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Partnership Announcement with Major Mining Corporation',
      category: 'company',
      date: 'July 18, 2025',
      excerpt: 'Khimi Consulting signs multi-year agreement to provide comprehensive chemical consulting services.',
      image: 'https://images.unsplash.com/photo-1633155561838-9b372f906787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYnVzaW5lc3MlMjBtZWV0aW5nfGVufDF8fHx8MTc2MTY2NDA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredArticles =
    selectedCategory === 'all'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

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
            <span className="text-[#00d4ff]">{t.news.title}</span> {t.news.titleHighlight}
          </h1>
          <p className="max-w-2xl mx-auto text-[#94a3b8]">
            {t.news.subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-[#00d4ff] text-[#0a0a0f] glow-effect'
                  : 'glass text-[#94a3b8] hover:text-[#00d4ff] hover:border-[#00d4ff]/40'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#00d4ff] text-[#0a0a0f] border-none">
                  {article.category}
                </Badge>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-[#94a3b8] mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>

                <h3 className="mb-3 group-hover:text-[#00d4ff] transition-colors">
                  {article.title}
                </h3>

                <p className="text-[#94a3b8] mb-4">{article.excerpt}</p>

                <div className="flex items-center gap-2 text-[#00d4ff] group-hover:gap-4 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 text-[#00d4ff]">Stay Informed</h2>
            <p className="text-[#94a3b8] mb-6">
              Subscribe to our newsletter for the latest industry insights and company updates
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-[#00d4ff]/20 text-[#e0e7ff] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#00d4ff]"
              />
              <button className="px-6 py-3 rounded-xl bg-[#00d4ff] text-[#0a0a0f] hover:bg-[#00b8e6] transition-colors glow-effect">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
