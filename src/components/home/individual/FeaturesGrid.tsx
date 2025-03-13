
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Briefcase, Handshake, LightbulbIcon, Users, PlusCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturesGrid = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Recommended Jobs</h2>
            <p className="text-muted-foreground">Opportunities matching your profile</p>
          </div>
          <Link to="/jobs" className="text-sm text-primary flex items-center hover:underline">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hoverable-card border-white/5 overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="p-3 w-fit rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle className="mt-4">Senior Frontend Developer</CardTitle>
              <CardDescription className="flex items-center gap-2">
                TechCorp Inc. • Remote
                <Badge variant="outline" className="ml-auto py-0 text-xs">2 days ago</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-muted-foreground">Full-time</span>
                <span className="font-medium">$90,000 - $120,000</span>
              </div>
              <p className="text-sm text-muted-foreground">
                We are looking for an experienced frontend developer with React and TypeScript expertise to join our...
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none">React</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none">TypeScript</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary/80">+3</Badge>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/5 pt-4">
              <Button className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>

          <Card className="hoverable-card border-white/5 overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="p-3 w-fit rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle className="mt-4">UX/UI Designer</CardTitle>
              <CardDescription className="flex items-center gap-2">
                Design Studio • New York, NY
                <Badge variant="outline" className="ml-auto py-0 text-xs">1 week ago</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-muted-foreground">Full-time</span>
                <span className="font-medium">$80,000 - $100,000</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Join our creative team to design beautiful and intuitive user interfaces for our clients.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none">Figma</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none">UI Design</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary/80">+1</Badge>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/5 pt-4">
              <Button className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>

          <Card className="hoverable-card border-white/5 overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="p-3 w-fit rounded-lg bg-primary/10">
                  <LightbulbIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle className="mt-4">Product Manager</CardTitle>
              <CardDescription className="flex items-center gap-2">
                GrowthStartup • San Francisco, CA
                <Badge variant="outline" className="ml-auto py-0 text-xs">3 days ago</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-muted-foreground">Full-time</span>
                <span className="font-medium">$110,000 - $140,000</span>
              </div>
              <p className="text-sm text-muted-foreground">
                We need a product manager to lead our product development efforts and drive growth.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none">Product Strategy</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none">Agile</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary/80">+1</Badge>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/5 pt-4">
              <Button className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-between items-center mt-16 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Core Connect</h2>
            <p className="text-muted-foreground">Connect with professionals that share your vision</p>
          </div>
          <Link to="/core" className="text-sm text-primary flex items-center hover:underline">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="hoverable-card border-white/5 text-center">
            <CardHeader className="pb-0">
              <div className="mx-auto rounded-full overflow-hidden w-24 h-24 bg-primary/10 flex items-center justify-center">
                <img src="https://i.pravatar.cc/150?img=23" alt="Sarah Chen" className="w-full h-full object-cover" />
              </div>
              <CardTitle className="mt-4">Sarah Chen</CardTitle>
              <CardDescription>UX/UI Designer</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-center">San Francisco, CA</p>
              <p className="text-sm text-muted-foreground">8 years experience</p>
            </CardContent>
            <CardFooter className="border-t border-white/5 pt-4 flex justify-between">
              <Button size="sm" variant="outline" className="w-[48%]">Message</Button>
              <Button size="sm" className="w-[48%]">Connect</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-between items-center mt-16 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Explore Freelance</h2>
            <p className="text-muted-foreground">Find freelance opportunities matching your skills</p>
          </div>
          <Link to="/freelance" className="text-sm text-primary flex items-center hover:underline">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <Card className="hoverable-card border-white/5 mb-8">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>E-commerce Website Redesign</CardTitle>
                <CardDescription>Fashion Boutique</CardDescription>
              </div>
              <Badge variant="outline" className="py-0 text-xs">Posted 3 days ago</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-4">
              <div className="flex gap-4">
                <span className="text-muted-foreground">$3,000 - $5,000</span>
                <span className="text-muted-foreground">4 weeks</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Looking for an experienced web designer to revamp our online store with modern aesthetics and improv...
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-none">Web Design</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-none">Shopify</Badge>
              <Badge variant="outline" className="border-primary/30 text-primary/80">+1</Badge>
            </div>
          </CardContent>
          <CardFooter className="border-t border-white/5 pt-4">
            <Button className="w-full">View Details</Button>
          </CardFooter>
        </Card>

        <div className="flex justify-between items-center mt-16 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Ideas & Innovation</h2>
            <p className="text-muted-foreground">Explore innovative ideas and opportunities</p>
          </div>
          <Link to="/ideas" className="text-sm text-primary flex items-center hover:underline">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hoverable-card border-white/5">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div className="p-3 w-fit rounded-lg bg-green-500/10">
                  <LightbulbIcon className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <CardTitle className="mt-4">Sustainable Energy Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Innovative ideas for harnessing renewable energy sources.
              </p>
            </CardContent>
            <CardFooter className="border-t border-white/5 pt-4">
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardFooter>
          </Card>

          <Card className="hoverable-card border-white/5">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div className="p-3 w-fit rounded-lg bg-blue-500/10">
                  <LightbulbIcon className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <CardTitle className="mt-4">Smart Home Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ideas for integrating AI into home automation systems.
              </p>
            </CardContent>
            <CardFooter className="border-t border-white/5 pt-4">
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardFooter>
          </Card>

          <Card className="hoverable-card border-white/5">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div className="p-3 w-fit rounded-lg bg-purple-500/10">
                  <LightbulbIcon className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <CardTitle className="mt-4">Health and Wellness Apps</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Developing applications to promote mental and physical health.
              </p>
            </CardContent>
            <CardFooter className="border-t border-white/5 pt-4">
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
