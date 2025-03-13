
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMatch {
  id: string;
  title: string;
  members: Array<{
    name: string;
    role: string;
    initials: string;
  }>;
  skills: string[];
  matchPercentage: number;
}

export const CompanyCoreConnectSection = () => {
  const [teams] = useState<TeamMatch[]>([
    {
      id: "1",
      title: "Mobile App Development Team",
      members: [
        { name: "Alex Johnson", role: "React Native Developer", initials: "AJ" },
        { name: "Maria Garcia", role: "UI/UX Designer", initials: "MG" },
        { name: "David Kim", role: "iOS Developer", initials: "DK" },
      ],
      skills: ["React Native", "UI/UX", "Mobile Development"],
      matchPercentage: 92
    },
    {
      id: "2",
      title: "Web Development Squad",
      members: [
        { name: "Sarah Chen", role: "Frontend Developer", initials: "SC" },
        { name: "James Wilson", role: "Backend Developer", initials: "JW" },
        { name: "Olivia Martinez", role: "UI Designer", initials: "OM" },
      ],
      skills: ["React", "Node.js", "UI Design"],
      matchPercentage: 88
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Core Connect</h2>
          <p className="text-sm text-muted-foreground">Find pre-assembled teams for your projects</p>
        </div>
        <Link to="/dashboard/company/core">
          <Button variant="outline" size="sm">View All</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map(team => (
          <Card key={team.id} className="hoverable-card">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium">{team.title}</h3>
                <Badge variant="outline" className="bg-primary/10">
                  {team.matchPercentage}% Match
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {team.skills.map(skill => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Team Members</p>
                <div className="flex flex-col gap-3">
                  {team.members.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="w-1/2">Team Details</Button>
                <Button className="w-1/2">Contact Team</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
