import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChallengesSection from "@/components/ChallengesSection";
import RegistrationForm from "@/components/RegistrationForm";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="fixed top-4 right-4 z-50">
        <Button 
          onClick={() => navigate("/admin/login")}
          variant="outline"
          size="sm"
          className="bg-card/80 backdrop-blur-sm border-border hover:bg-accent"
        >
          Admin Login
        </Button>
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <ChallengesSection />
        <RegistrationForm />
      </main>
    </>
  );
};

export default Index;
