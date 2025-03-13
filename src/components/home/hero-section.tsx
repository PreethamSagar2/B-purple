
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Handshake, Lightbulb, Users, Building, ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-70"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Revolutionizing Professional Ecosystems</span>
          </div>
          
          <h1 className="animate-fade-in mt-4 font-bold">
            <span className="text-gradient">Connect, Collaborate,</span> <br />
            <span>and Create Together</span>
          </h1>
          
          <p className="animate-fade-in mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            bcommune brings together companies, professionals, freelancers, and investors 
            in one seamless ecosystem designed for the future of work.
          </p>
          
          <div className="animate-fade-in mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/sign-up" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 group relative overflow-hidden">
                <span className="relative z-10">Join bcommune</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
            <Link to="#features" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>

        <div className="animate-fade-in mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <FeatureCard 
              icon={<Briefcase className="h-6 w-6" />}
              title="Jobs & Internships"
              description="Find your next opportunity or the perfect candidate"
              href="/jobs"
            />
            <FeatureCard 
              icon={<Handshake className="h-6 w-6" />}
              title="Freelance Bidding"
              description="Connect with skilled professionals or find projects"
              href="/freelance"
            />
            <FeatureCard 
              icon={<Users className="h-6 w-6" />}
              title="CORE Connect"
              description="Build your dream team with the right people"
              href="/core"
            />
            <FeatureCard 
              icon={<Lightbulb className="h-6 w-6" />}
              title="Ideas & Invest"
              description="Share your vision or find promising investments"
              href="/ideas"
            />
            <FeatureCard 
              icon={<Building className="h-6 w-6" />}
              title="B2B Space"
              description="Secure business-to-business collaboration platform"
              href="/b2b"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  return (
    <Link to={href} className="hoverable-card group rounded-xl border border-white/5 bg-card/50 backdrop-blur-sm p-6 glow">
      <div className="flex flex-col items-start">
        <div className="mb-4 rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
