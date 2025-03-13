
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Users } from "lucide-react";

interface FreelanceProject {
  id: string;
  title: string;
  budget: string;
  deadline: string;
  proposals: number;
  skills: string[];
  status: "Open" | "In progress" | "Completed";
}

export const CompanyFreelanceSection = () => {
  const [projects] = useState<FreelanceProject[]>([
    {
      id: "1",
      title: "Corporate Website Redesign",
      budget: "$5,000 - $8,000",
      deadline: "1 month",
      proposals: 18,
      skills: ["Web Design", "UI/UX", "WordPress"],
      status: "Open"
    },
    {
      id: "2",
      title: "Brand Identity Development",
      budget: "$3,000 - $4,500",
      deadline: "3 weeks",
      proposals: 12,
      skills: ["Branding", "Logo Design", "Style Guide"],
      status: "Open"
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Freelance Projects</h2>
          <p className="text-sm text-muted-foreground">Manage your current freelance projects</p>
        </div>
        <Link to="/dashboard/company/freelance">
          <Button variant="outline" size="sm">View All</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <Card key={project.id} className="hoverable-card">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-medium">{project.title}</h3>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
                  {project.status}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map(skill => (
                  <Badge key={skill} variant="outline" className="bg-primary/10">{skill}</Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Budget</p>
                  <div className="flex items-center">
                    <DollarSign className="w-3 h-3 mr-1" />
                    <p className="text-sm font-medium">{project.budget}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Deadline</p>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <p className="text-sm">{project.deadline}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Proposals</p>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    <p className="text-sm">{project.proposals}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="w-1/2">Edit Project</Button>
                <Button className="w-1/2">Review Proposals</Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Card className="hoverable-card border-dashed border-2 p-6 flex flex-col items-center justify-center">
          <div className="rounded-full bg-primary/10 p-3 mb-3">
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Create New Project</h3>
          <p className="text-center text-sm text-muted-foreground mb-4">Post a new freelance project to find talent</p>
          <Button>Post New Project</Button>
        </Card>
      </div>
    </div>
  );
};
