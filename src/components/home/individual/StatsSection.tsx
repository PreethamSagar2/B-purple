
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Join Our Growing Community</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Connect with professionals and opportunities worldwide. Your next career move is just a click away.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-white/5">
            <div className="text-4xl font-bold mb-2 text-gradient">15k+</div>
            <div className="text-muted-foreground">Active Jobs</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-white/5">
            <div className="text-4xl font-bold mb-2 text-gradient">2.5k+</div>
            <div className="text-muted-foreground">Companies</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-white/5">
            <div className="text-4xl font-bold mb-2 text-gradient">50k+</div>
            <div className="text-muted-foreground">Professionals</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-white/5">
            <div className="text-4xl font-bold mb-2 text-gradient">8k+</div>
            <div className="text-muted-foreground">Success Stories</div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
