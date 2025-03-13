
import { Button } from "@/components/ui/button";
import { Search, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-70"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="px-4 py-1.5 mb-6 border-primary/20 bg-primary/5 backdrop-blur-sm">
            <TrendingUp className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Welcome to bCommune</span>
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Your Gateway to <span className="text-gradient">Professional Growth</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Here's what's happening in your bcommune ecosystem - from full-time positions, 
            freelance projects, to innovative ideas and meaningful connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Explore Opportunities
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              <Users className="mr-2 h-5 w-5" />
              Find Your Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
