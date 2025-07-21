import { motion } from "framer-motion";

const TimelineSection = () => {
  const timelineEvents = [
    {
      title: "e-Bootcamp Micro-Credential Course (Online)",
      date: "28 July – 07 August 2025",
      description: "Participants will receive virtual training in:",
      points: [
        "Web Development (React, TypeScript)",
        "Firebase and backend systems",
        "OpenAI API integration",
        "System design and presentation skills"
      ]
    },
    {
      title: "Virtual Bootcamp Development Sprint",
      date: "11 – 14 August 2025",
      description: "Using platforms such as Zoom, Google Meet, GitHub, and Go4toro, students will work in teams on projects aligned to real-world themes including:",
      points: [
        "HerStart – Women entrepreneurship",
        "SafeSpace – Emergency response",
        "CodeSister – Gamified coding education",
        "FemmeFinance – Financial literacy",
        "HerVoice – Mental health & wellness"
      ]
    },
    {
      title: "In-Person Presentation & Awards Day",
      date: "15 August 2025",
      description: "Rosebank College – Durban Campus",
      points: [
        "Teams will present their solutions to a panel of industry professionals",
        "Certificate handovers and trophy presentations",
        "Networking opportunities"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Boot Camp Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive three-phase programme designed to take you from learning to presenting
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              className="relative flex flex-col md:flex-row mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-8 bottom-0 w-0.5 bg-primary/30 hidden md:block last:hidden"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
              
              {/* Content */}
              <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm font-medium text-red-600 mb-4">
                    {event.date}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {event.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className={`inline-block w-2 h-2 bg-primary rounded-full mr-3 ${index % 2 === 0 ? 'md:order-2 md:ml-3 md:mr-0' : ''}`}></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;