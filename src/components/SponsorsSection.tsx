import { motion } from "framer-motion";

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Varsity Genie",
      image: "/VarsityGeniepic.jpg",
      alt: "Varsity Genie Logo"
    },
    {
      name: "eTain",
      image: "/eTain.jpg",
      alt: "eTain Logo"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are grateful for the support of our sponsors who make this hackathon possible
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 flex items-center justify-center mb-4">
                <img 
                  src={sponsor.image} 
                  alt={sponsor.alt}
                  className="h-48 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{sponsor.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
