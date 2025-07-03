import { Button } from "@/components/ui/button";

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
    <section className="min-h-screen bg-charcoal text-charcoal-foreground flex items-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/hackathon-video.mp4" type="video/mp4" />
          {/* Fallback gradient if video not available */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/60 to-primary/20"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Rosebank Women in ICT
          <br />
          <span className="text-primary">Hackathon 2025</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Empowering the next generation of women technologists through innovation, 
          collaboration, and cutting-edge solutions.
        </p>
        <Button 
          onClick={scrollToRegistration}
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
        >
          Register Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;