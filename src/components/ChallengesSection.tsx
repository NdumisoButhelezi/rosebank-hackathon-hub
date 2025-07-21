const ChallengesSection = () => {
  const challenges = [
    {
      title: "HerStart",
      description: "Develop solutions to support women entrepreneurs in starting and scaling their businesses.",
      icon: "🚀"
    },
    {
      title: "SafeSpace",
      description: "Create technology that promotes safety and security for women in digital and physical spaces.",
      icon: "🛡️"
    },
    {
      title: "EduTech",
      description: "Design innovative educational technology solutions that enhance learning experiences.",
      icon: "📚"
    },
    {
      title: "HealthTech",
      description: "Build applications focused on women's health and wellness needs.",
      icon: "🏥"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Boot Camp Challenges
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our exciting challenge tracks and create innovative solutions 
            that make a real difference in women's lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="text-4xl mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {challenge.title}
              </h3>
              <p className="text-muted-foreground">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;