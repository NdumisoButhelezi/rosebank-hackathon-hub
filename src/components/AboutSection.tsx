import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            About the Boot Camp
          </h2>
          <motion.p 
            className="text-lg mb-6 leading-relaxed font-semibold text-red-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Women are still significantly underrepresented in tech, with only 13% of ICT graduates in South Africa being women (Stats SA, 2022).
          </motion.p>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            This bootcamp is designed not only to upskill participants but to inspire them to become creators of inclusive digital solutions. 
            Your club or society is invited to nominate a team of five (5) female students to take part in this structured development programme.
          </p>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="p-6 rounded-xl shadow-lg bg-card border hover:scale-105 transition-transform duration-300"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">Innovation</h3>
              <p className="text-muted-foreground">
                Develop cutting-edge solutions using the latest technologies
              </p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl shadow-lg bg-card border hover:scale-105 transition-transform duration-300"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">Collaboration</h3>
              <p className="text-muted-foreground">
                Work with talented women from diverse backgrounds and institutions
              </p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl shadow-lg bg-card border hover:scale-105 transition-transform duration-300"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">Impact</h3>
              <p className="text-muted-foreground">
                Create solutions that address meaningful challenges in our community
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;