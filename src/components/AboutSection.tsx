const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            About the Hackathon
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            The Rosebank Women in ICT Hackathon is a 48-hour innovation challenge 
            designed to showcase the incredible talent of women in technology. 
            Participants will work in teams to develop solutions addressing real-world 
            challenges while fostering collaboration and creativity.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Innovation</h3>
              <p className="text-muted-foreground">
                Develop cutting-edge solutions using the latest technologies
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Collaboration</h3>
              <p className="text-muted-foreground">
                Work with talented women from diverse backgrounds and institutions
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Impact</h3>
              <p className="text-muted-foreground">
                Create solutions that address meaningful challenges in our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;