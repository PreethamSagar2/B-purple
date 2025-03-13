
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, Building } from "lucide-react";

export interface JobData {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
  postedAt: string;
  description: string;
  salary?: string;
  skills?: string[];
  industry?: string;
  experienceLevel?: string;
  minimumExperience?: number;
  requiredQualification?: string;
}

interface JobCardProps {
  job: JobData;
  compact?: boolean;
}

export function JobCard({ job, compact = false }: JobCardProps) {
  return (
    <Card className={compact ? "hoverable-card" : ""}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <div className="flex items-center mt-1 text-muted-foreground">
              <Building className="w-4 h-4 mr-1" />
              <span className="text-sm">{job.company}</span>
            </div>
          </div>
          <Badge variant={getBadgeVariant(job.type)}>{job.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            <span>{job.postedAt}</span>
          </div>
          {job.salary && (
            <div className="flex items-center font-medium">
              {job.salary}
            </div>
          )}
        </div>
        
        {!compact && (
          <>
            <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
            {job.skills && (
              <div className="flex flex-wrap gap-2 mt-3">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            )}
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button variant={compact ? "ghost" : "default"} className="w-full">
          {compact ? "View Details" : "Apply Now"}
        </Button>
      </CardFooter>
    </Card>
  );
}

function getBadgeVariant(type: string) {
  switch (type) {
    case "Full-time":
      return "default";
    case "Part-time":
      return "secondary";
    case "Contract":
      return "outline";
    case "Internship":
      return "destructive";
    case "Remote":
      return "default";
    default:
      return "default";
  }
}
