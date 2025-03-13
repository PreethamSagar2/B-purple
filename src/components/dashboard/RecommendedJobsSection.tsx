
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Clock } from "lucide-react";

interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedAt: string;
  description: string;
  logoLetter?: string;
  skills: string[];
}

export const RecommendedJobsSection = () => {
  const [jobs] = useState<JobListing[]>([
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      postedAt: "2 days ago",
      description: "We are looking for an experienced frontend developer with React and TypeScript expertise to join our...",
      logoLetter: "T",
      skills: ["React", "TypeScript"]
    },
    {
      id: "2",
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "New York, NY",
      type: "Full-time",
      salary: "$80,000 - $100,000",
      postedAt: "1 week ago",
      description: "Join our creative team to design beautiful and intuitive user interfaces for our clients.",
      logoLetter: "D",
      skills: ["Figma", "UI Design"]
    },
    {
      id: "3",
      title: "Product Manager",
      company: "GrowthStartup",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      postedAt: "3 days ago",
      description: "We need a product manager to lead our product development efforts and drive growth.",
      logoLetter: "G",
      skills: ["Product Strategy", "Agile"]
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Recommended Jobs</h2>
          <p className="text-sm text-muted-foreground">Opportunities matching your profile</p>
        </div>
        <Link to="/dashboard/individual/jobs">
          <Button variant="outline" size="sm" className="gap-2">
            View All
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <Card key={job.id} className="hoverable-card overflow-hidden">
            <CardHeader className="pb-0 flex flex-row items-start gap-3">
              <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center text-primary font-semibold">
                {job.logoLetter}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-base">{job.title}</h3>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Building className="w-3 h-3 mr-1" />
                  <span>{job.company}</span>
                </div>
              </div>
              <Badge variant={job.type === "Full-time" ? "default" : "secondary"} className="ml-auto shrink-0">
                {job.type}
              </Badge>
            </CardHeader>
            
            <CardContent className="pt-3">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground mb-3">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{job.postedAt}</span>
                </div>
                <div className="font-medium text-foreground">
                  {job.salary}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{job.description}</p>
              
              <div className="flex gap-2 mb-4">
                {job.skills.map(skill => (
                  <Badge key={skill} variant="outline" className="bg-primary/10">{skill}</Badge>
                ))}
                {job.skills.length > 2 && <Badge variant="outline">+{job.skills.length - 2}</Badge>}
              </div>
              
              <Button className="w-full">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
