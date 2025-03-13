
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, UserPlus } from "lucide-react";

interface Professional {
  id: string;
  name: string;
  title: string;
  location: string;
  experience: string;
  avatar?: string;
  initials: string;
  skills: string[];
}

interface CollaborationRequest {
  id: string;
  title: string;
  skills: string[];
  createdBy: {
    name: string;
    avatar?: string;
    initials: string;
  };
}

export const CoreConnectSection = () => {
  const [professionals] = useState<Professional[]>([
    {
      id: "1",
      name: "Sarah Chen",
      title: "UX/UI Designer",
      location: "San Francisco, CA",
      experience: "8 years experience",
      avatar: "/lovable-uploads/b3335331-95c3-480f-a068-ce31c7885bf9.png",
      initials: "SC",
      skills: ["UI/UX", "Product Design", "Figma", "User Research"]
    }
  ]);

  const [collaborations] = useState<CollaborationRequest[]>([
    {
      id: "1",
      title: "Looking for a UI/UX Designer for a Mobile App",
      skills: ["UI/UX", "Mobile Design", "Figma"],
      createdBy: {
        name: "Michael Johnson",
        initials: "MJ",
      }
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Core Connect</h2>
          <p className="text-sm text-muted-foreground">Connect with professionals that share your vision</p>
        </div>
        <Link to="/dashboard/individual/core">
          <Button variant="outline" size="sm" className="gap-2">
            View All
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Professional card */}
        <Card className="hoverable-card overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src={professionals[0].avatar} />
              <AvatarFallback>{professionals[0].initials}</AvatarFallback>
            </Avatar>
            
            <h3 className="font-semibold text-lg mt-4">{professionals[0].name}</h3>
            <p className="text-muted-foreground">{professionals[0].title}</p>
            
            <div className="mt-3 space-y-1 text-sm">
              <p>{professionals[0].location}</p>
              <p>{professionals[0].experience}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {professionals[0].skills.slice(0, 2).map(skill => (
                <Badge key={skill} variant="outline" className="bg-primary/10">{skill}</Badge>
              ))}
              {professionals[0].skills.length > 2 && (
                <Badge variant="outline">+{professionals[0].skills.length - 2}</Badge>
              )}
            </div>
            
            <div className="mt-6 space-x-2">
              <Button variant="outline" size="sm">View Profile</Button>
              <Button size="sm" className="gap-1">
                <MessageCircle className="h-4 w-4" /> Connect
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Collaboration request card */}
        <Card className="hoverable-card overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Collaboration Request</h3>
                <p className="text-xs text-muted-foreground">From {collaborations[0].createdBy.name}</p>
              </div>
            </div>
            
            <h4 className="font-medium text-md">{collaborations[0].title}</h4>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {collaborations[0].skills.map(skill => (
                <Badge key={skill} variant="outline" className="bg-primary/10">{skill}</Badge>
              ))}
            </div>
            
            <div className="mt-6">
              <Link to="/dashboard/individual/core?tab=collaborations">
                <Button className="w-full gap-1">
                  <UserPlus className="h-4 w-4" /> Apply Now
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Add more profiles card */}
        <Card className="hoverable-card border-dashed border-2 flex flex-col justify-center items-center p-6 h-[300px] col-span-1 md:col-span-2">
          <div className="rounded-full bg-primary/10 p-3 mb-3">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Discover More Collaborations</h3>
          <p className="text-center text-sm text-muted-foreground mb-4">Find professionals and post your collaboration requirements</p>
          <Link to="/dashboard/individual/core">
            <Button>Explore Core Connect</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};
