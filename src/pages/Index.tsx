
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/home/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Handshake, LightbulbIcon, Users, Building, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar transparent />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
          <HeroSection />
        </section>

        {/* For Individuals Section */}
        <section className="py-28 relative overflow-hidden" id="for-individuals">
          {/* Background decorative elements */}
          <div className="absolute -bottom-24 right-0 w-1/2 h-96 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60 blur-3xl"></div>
          <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-purple-600/5 blur-3xl"></div>
          
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
              <div className="space-y-8 animate-fade-in order-2 md:order-1">
                <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4 mr-2" />
                  For Professionals
                </div>
                
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Discover opportunities <span className="text-gradient">tailored to your career goals</span>
                </h2>
                
                <p className="text-muted-foreground text-lg">
                  bcommune helps individuals find their next opportunity, whether it's a full-time position, 
                  freelance gig, or a startup team. Take control of your professional journey.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Find full-time positions and internships",
                    "Bid on freelance projects",
                    "Join startup teams through CORE Connect",
                    "Share and get funding for your ideas",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-3" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div>
                  <Link to="/sign-up">
                    <Button size="lg" className="group">
                      Join as an Individual
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="rounded-xl border border-white/5 glass-card p-8 animate-scale-in order-1 md:order-2">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Card className="hoverable-card bg-card/70 border-white/5">
                    <CardHeader className="pb-2">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg">Job Search</CardTitle>
                      <CardDescription>Find roles matching your skills</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="hoverable-card bg-card/70 border-white/5">
                    <CardHeader className="pb-2">
                      <Handshake className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg">Freelance</CardTitle>
                      <CardDescription>Bid on flexible projects</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="hoverable-card bg-card/70 border-white/5">
                    <CardHeader className="pb-2">
                      <Users className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg">Team Building</CardTitle>
                      <CardDescription>Find or join a core team</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="hoverable-card bg-card/70 border-white/5">
                    <CardHeader className="pb-2">
                      <LightbulbIcon className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg">Ideas & Funds</CardTitle>
                      <CardDescription>Share ideas or get funding</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Companies Section */}
        <section className="py-28 relative overflow-hidden" id="for-companies">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-40"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl"></div>
          
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1 rounded-xl border border-white/5 glass-card p-8 animate-scale-in">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Card className="hoverable-card bg-card/70 border-white/5">
                    <CardHeader className="pb-2">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg">Recruitment</CardTitle>
                      <CardDescription>Find the perfect candidates</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="hoverable-card bg-card/70 border-white/5">
                    <CardHeader className="pb-2">
                      <Handshake className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg">Outsourcing</CardTitle>
                      <CardDescription>Post projects for freelancers</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="hoverable-card bg-card/70 border-white/5">
                    <CardHeader className="pb-2">
                      <Building className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg">B2B Projects</CardTitle>
                      <CardDescription>Secure business collaboration</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="hoverable-card bg-card/70 border-white/5">
                    <CardHeader className="pb-2">
                      <LightbulbIcon className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg">Innovation</CardTitle>
                      <CardDescription>Discover promising ideas</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="order-1 md:order-2 space-y-8 animate-fade-in">
                <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4 mr-2" />
                  For Companies
                </div>
                
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Streamline your hiring and <span className="text-gradient">business collaboration</span> needs
                </h2>
                
                <p className="text-muted-foreground text-lg">
                  bcommune provides companies with tools to find the right talent, outsource projects efficiently, 
                  and collaborate securely with other businesses.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Post job openings and internship opportunities",
                    "Find specialized freelancers for projects",
                    "Discover innovative ideas and startup teams",
                    "Engage in secure B2B collaborations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-3" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div>
                  <Link to="/sign-up">
                    <Button size="lg" className="group">
                      Join as a Company
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/15 via-primary/5 to-transparent"></div>
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-2 rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">The Future of Work</span>
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to join the <span className="text-gradient">ecosystem</span>?
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Create your account today and start connecting with opportunities in our revolutionary platform.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/sign-up" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full relative group overflow-hidden">
                    <span className="relative z-10">Create Account</span>
                    <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
