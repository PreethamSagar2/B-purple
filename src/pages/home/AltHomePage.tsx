
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, ArrowRight, Globe, Users, Briefcase, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const AltHomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-70"></div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 px-6 py-2 bg-primary/5 backdrop-blur-sm border-primary/20">
              <span className="text-primary">Welcome to the Future of Work</span>
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Where Talent Meets <span className="text-gradient">Opportunity</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the ecosystem where professionals, companies, and innovators come together 
              to shape the future of work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sign-up">
                <Button size="lg" className="w-full sm:w-auto group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Globe className="h-6 w-6 text-primary" />}
              title="Global Network"
              description="Connect with professionals and opportunities worldwide"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6 text-primary" />}
              title="Community"
              description="Join a thriving community of innovators and creators"
            />
            <FeatureCard
              icon={<Briefcase className="h-6 w-6 text-primary" />}
              title="Career Growth"
              description="Find opportunities that match your career goals"
            />
            <FeatureCard
              icon={<Target className="h-6 w-6 text-primary" />}
              title="Targeted Matches"
              description="AI-powered matching for the perfect fit"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard number="20k+" label="Active Users" />
              <StatCard number="5k+" label="Companies" />
              <StatCard number="50k+" label="Jobs Posted" />
              <StatCard number="95%" label="Success Rate" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Career?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of professionals who've already taken the next step in their careers.
            </p>
            <Link to="/sign-up">
              <Button size="lg" className="group">
                Join Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Verified Employers",
                "Secure Platform",
                "24/7 Support",
                "AI-Powered Matching",
                "Regular Updates",
                "Community Driven"
              ].map((item, i) => (
                <Badge key={i} variant="outline" className="px-4 py-2">
                  <BadgeCheck className="h-4 w-4 mr-2 text-primary" />
                  {item}
                </Badge>
              ))}
            </div>
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
  <Card className="hoverable-card bg-card/30 backdrop-blur-sm border-white/5">
    <CardHeader>
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl mb-2">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-white/5">
    <div className="text-4xl font-bold mb-2 text-gradient">{number}</div>
    <div className="text-muted-foreground">{label}</div>
  </div>
);

export default AltHomePage;
