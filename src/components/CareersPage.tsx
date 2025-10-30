import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, Users, Zap, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';

export function CareersPage() {
  const positions = [
    {
      title: 'Senior Chemical Engineer',
      department: 'Engineering',
      location: 'Ulaanbaatar, Mongolia',
      type: 'Full-time',
      description: 'Lead chemical process design and optimization projects for major mining operations.',
      requirements: ['5+ years experience', 'Chemical Engineering degree', 'Mining industry experience'],
    },
    {
      title: 'Safety Consultant',
      department: 'Safety & Compliance',
      location: 'Ulaanbaatar, Mongolia',
      type: 'Full-time',
      description: 'Develop and implement safety protocols for chemical handling and storage.',
      requirements: ['3+ years in safety', 'Industry certifications', 'Training experience'],
    },
    {
      title: 'Laboratory Technician',
      department: 'Laboratory',
      location: 'Ulaanbaatar, Mongolia',
      type: 'Full-time',
      description: 'Conduct chemical analysis and quality control testing using advanced equipment.',
      requirements: ['Chemistry degree', '2+ years lab experience', 'Analytical skills'],
    },
    {
      title: 'Logistics Coordinator',
      department: 'Operations',
      location: 'Ulaanbaatar, Mongolia',
      type: 'Full-time',
      description: 'Manage chemical transportation and supply chain operations.',
      requirements: ['Logistics experience', 'Regulatory knowledge', 'Strong communication'],
    },
    {
      title: 'Junior Process Engineer',
      department: 'Engineering',
      location: 'Ulaanbaatar, Mongolia',
      type: 'Full-time',
      description: 'Support process design and optimization under senior engineer guidance.',
      requirements: ['Engineering degree', 'Fresh graduates welcome', 'Strong analytical skills'],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Innovation Culture',
      description: 'Work with cutting-edge technology and AI-powered solutions',
    },
    {
      icon: GraduationCap,
      title: 'Professional Growth',
      description: 'Continuous learning and development opportunities',
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Join a diverse team of industry experts',
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
            <span className="text-[#00d4ff]">Join the Future</span> of Chemistry
          </h1>
          <p className="max-w-2xl mx-auto text-[#94a3b8]">
            Build your career with Mongolia's leading chemical consulting company
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl overflow-hidden mb-16 h-80 glass"
        >
          <img
            src="https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2MTU5ODUxMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Careers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="mb-4 text-[#00d4ff]">Shape Tomorrow's Solutions</h2>
              <p className="text-[#94a3b8]">
                Be part of a team driving sustainable innovation in chemical consulting
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 text-[#00d4ff]"
          >
            Why Work With Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-4 glow-effect">
                  <benefit.icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-[#94a3b8]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 text-[#00d4ff]"
          >
            Open Positions
          </motion.h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-6 cursor-pointer group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0 glow-effect">
                        <Briefcase className="w-6 h-6 text-[#00d4ff]" />
                      </div>
                      <div>
                        <h3 className="mb-2 group-hover:text-[#00d4ff] transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-[#94a3b8]">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-[#94a3b8] mb-4">{position.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req) => (
                        <span
                          key={req}
                          className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff]"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a0a0f] glow-effect lg:self-start">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-12 text-center"
        >
          <h2 className="mb-4 text-[#00d4ff]">Don't See Your Role?</h2>
          <p className="text-[#94a3b8] mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and
            we'll keep you in mind for future opportunities.
          </p>
          <Button className="bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a0a0f] glow-effect">
            Send General Application
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
