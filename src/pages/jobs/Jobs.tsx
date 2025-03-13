
import { useState } from "react";
import { JobCard, JobData } from "@/components/jobs/job-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Search, Filter, MapPin } from "lucide-react";

// Mock data
const jobListings: JobData[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    postedAt: "2 days ago",
    description: "We're looking for a frontend developer with React experience to join our dynamic team. You'll be working on cutting-edge web applications for our clients in various industries.",
    salary: "$90,000 - $120,000",
    skills: ["React", "TypeScript", "CSS", "HTML"]
  },
  {
    id: "2",
    title: "UX Design Intern",
    company: "Creative Agency",
    location: "Remote",
    type: "Internship",
    postedAt: "1 day ago",
    description: "Join our design team for a 3-month internship opportunity. You'll work closely with our senior designers on real projects for real clients.",
    skills: ["Figma", "UI/UX", "Prototyping"]
  },
  {
    id: "3",
    title: "Senior Backend Developer",
    company: "FinTech Innovations",
    location: "New York, NY",
    type: "Full-time",
    postedAt: "1 week ago",
    description: "Looking for an experienced backend developer to help scale our financial services platform. Must have experience with distributed systems and high-traffic applications.",
    salary: "$130,000 - $160,000",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS"]
  },
  {
    id: "4",
    title: "Digital Marketing Specialist",
    company: "Growth Hackers",
    location: "Chicago, IL",
    type: "Part-time",
    postedAt: "3 days ago",
    description: "We need a digital marketing specialist to help our clients grow their online presence through targeted campaigns and data-driven strategies.",
    salary: "$55,000 - $70,000",
    skills: ["SEO", "SEM", "Social Media", "Analytics"]
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "Cloud Solutions",
    location: "Remote",
    type: "Contract",
    postedAt: "5 days ago",
    description: "Join our team to help build and maintain our cloud infrastructure. You'll be responsible for improving our CI/CD pipelines and infrastructure automation.",
    salary: "$100 - $120 per hour",
    skills: ["Kubernetes", "Docker", "Terraform", "AWS"]
  }
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = locationFilter === "" || 
                           job.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-4xl font-medium tracking-tight mb-4">Find Your Perfect Job</h1>
              <p className="text-muted-foreground">
                Browse through hundreds of job opportunities for professionals at all levels
              </p>
            </div>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative col-span-1 md:col-span-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Job title, company, or keywords"
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Location"
                      className="pl-9"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-medium">
                {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"} Available
              </h2>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium">No jobs found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;
