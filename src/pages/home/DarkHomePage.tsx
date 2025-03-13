
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Users, Lightbulb, Building } from "lucide-react";

const DarkHomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-70"></div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 text-sm text-muted-foreground">
              Introducing bcommune
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Connect, Collaborate, <span className="text-blue-500">Grow</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              The integrated ecosystem for professionals, companies, and investors to 
              find opportunities and build meaningful connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto group bg-blue-500 hover:bg-blue-600">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 bg-primary/5 text-primary">
              Features
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Everything You Need in One Place</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              bcommune integrates multiple services to create a seamless professional ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Briefcase className="h-8 w-8 text-blue-500" />}
              title="Jobs & Internships"
              description="Find or post job opportunities and internships in your field."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-blue-500" />}
              title="CORE Connect"
              description="Build your core team with like-minded professionals."
            />
            <FeatureCard
              icon={<Lightbulb className="h-8 w-8 text-blue-500" />}
              title="Ideas & Invest"
              description="Share ideas and connect with potential investors."
            />
            <FeatureCard
              icon={<Building className="h-8 w-8 text-blue-500" />}
              title="B2B Space"
              description="Secure company-to-company projects and collaborations."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <div className="glass-card-dark rounded-xl p-6 text-center flex flex-col items-center">
    <div className="rounded-full bg-card/40 p-4 mb-4 backdrop-blur-sm">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default DarkHomePage;
