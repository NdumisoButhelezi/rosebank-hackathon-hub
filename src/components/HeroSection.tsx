import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration-form');
    if (registrationSection) {
      registrationSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover object-center z-[-1]"
        style={{ minHeight: '100vh', minWidth: '100vw' }}
      >
        <source src="/Hailuo_Video_close-up%20shot%20of%20a%20black%20girl,_397034285584900105.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-br from-primary via-pink-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="block"
          >Rosebank Women in ICT</motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-primary drop-shadow-md"
          >Hackathon 2025</motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-semibold max-w-3xl mx-auto bg-gradient-to-r from-red-400 via-pink-300 to-yellow-200 bg-clip-text text-transparent animate-pulse drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          Empowering the next generation of women technologists through innovation, collaboration, and cutting-edge solutions.
        </motion.p>
        <Button 
          onClick={scrollToRegistration}
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl mb-12"
        >
          Register Now
        </Button>
        {/* Mouse Scroll Icon at the bottom of the section */}
        <motion.div 
          className="flex flex-col items-center z-20 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <div className="w-7 h-12 rounded-full border-2 border-white/80 flex items-start justify-center relative">
            <motion.div 
              className="w-2 h-2 rounded-full bg-white/80 mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            />
          </div>
          <span className="mt-2 text-white/80 text-xs tracking-widest uppercase opacity-80">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;