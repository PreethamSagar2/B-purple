
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock } from "lucide-react";

interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: string;
  postedAt: string;
  applicants: number;
  status: "Active" | "Paused" | "Closed";
}

export const ActiveJobsSection = () => {
  const [jobs] = useState<JobPosting[]>([
    {
      id: "1",
      title: "Senior Backend Developer",
      location: "Remote",
      type: "Full-time",
      postedAt: "5 days ago",
      applicants: 12,
      status: "Active"
    },
    {
      id: "2",
      title: "Marketing Intern",
      location: "New York, NY",
      type: "Internship",
      postedAt: "1 week ago",
      applicants: 24,
      status: "Active"
    },
    {
      id: "3",
      title: "Product Designer",
      location: "San Francisco, CA",
      type: "Full-time",
      postedAt: "3 days ago",
      applicants: 7,
      status: "Active"
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Active Job Postings</h2>
          <p className="text-sm text-muted-foreground">Manage your current job listings</p>
        </div>
        <Link to="/dashboard/company/jobs">
          <Button variant="outline" size="sm">View All</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {jobs.map(job => (
          <Card key={job.id} className="hoverable-card">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="font-medium">{job.title}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{job.postedAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500">
                        {job.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="md:border-l md:pl-4 flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="w-3 h-3" />
                    <span>{job.applicants} applicants</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button size="sm">View Applicants</Button>
                  </div>
                </div>
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
          <h3 className="text-lg font-medium mb-2">Create New Job Posting</h3>
          <p className="text-center text-sm text-muted-foreground mb-4">Add a new job listing to find the perfect candidate</p>
          <Button>Post New Job</Button>
        </Card>
      </div>
    </div>
  );
};
