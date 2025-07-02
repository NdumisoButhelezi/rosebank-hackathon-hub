import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-charcoal text-charcoal-foreground flex items-center">
      <div className="container mx-auto px-4 text-center">
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
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-full font-semibold"
        >
          Register Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;