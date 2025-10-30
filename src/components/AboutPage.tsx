import { motion } from 'motion/react';
import { Target, Eye, Award, Calendar } from 'lucide-react';

interface AboutPageProps {
  t: any;
}

export function AboutPage({ t }: AboutPageProps) {
  const timeline = [
    { year: '2018', event: t.about.founded, description: t.about.foundedDesc },
    { year: '2019', event: t.about.firstContract, description: t.about.firstContractDesc },
    { year: '2021', event: t.about.labExpansion, description: t.about.labExpansionDesc },
    { year: '2023', event: t.about.regionalGrowth, description: t.about.regionalGrowthDesc },
    { year: '2025', event: t.about.innovationLeader, description: t.about.innovationLeaderDesc },
  ];

  const values = [
    {
      icon: Target,
      title: t.about.ourMission,
      description: t.about.missionDescription,
    },
    {
      icon: Eye,
      title: t.about.ourVision,
      description: t.about.visionDescription,
    },
    {
      icon: Award,
      title: t.about.ourValues,
      description: t.about.valuesDescription,
    },
  ];

  const team = [
    { name: t.about.team1Name, role: t.about.team1Role, specialty: t.about.team1Specialty },
    { name: t.about.team2Name, role: t.about.team2Role, specialty: t.about.team2Specialty },
    { name: t.about.team3Name, role: t.about.team3Role, specialty: t.about.team3Specialty },
    { name: t.about.team4Name, role: t.about.team4Role, specialty: t.about.team4Specialty },
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
            <span className="text-[#00d4ff]">{t.about.title}</span> {t.about.khimiConsulting}
          </h1>
          <p className="max-w-2xl mx-auto text-[#94a3b8]">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 text-[#00d4ff]"
          >
            {t.about.ourJourney}
          </motion.h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#00d4ff] to-transparent hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-2 justify-start md:justify-end">
                        <Calendar className="w-5 h-5 text-[#00d4ff]" />
                        <span className="text-[#00d4ff]">{item.year}</span>
                      </div>
                      <h3 className="mb-2">{item.event}</h3>
                      <p className="text-[#94a3b8]">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-[#00d4ff] items-center justify-center glow-effect flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#0a0a0f]" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center mb-6 glow-effect">
                  <value.icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <h3 className="mb-4 text-[#00d4ff]">{value.title}</h3>
                <p className="text-[#94a3b8]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-[#00d4ff]">{t.about.leadershipTeam}</h2>
            <p className="text-[#94a3b8]">
              {t.about.teamDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-[#00d4ff] to-[#a855f7] p-0.5"
                >
                  <div className="w-full h-full rounded-full bg-[#0f0f1a] flex items-center justify-center">
                    <span className="text-[#00d4ff]">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                </div>
                <h4 className="mb-1">{member.name}</h4>
                <p className="text-[#00d4ff] mb-2">{member.role}</p>
                <p className="text-[#94a3b8]">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
