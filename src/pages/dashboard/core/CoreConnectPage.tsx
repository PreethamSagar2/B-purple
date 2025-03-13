
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  UserPlus, 
  Users, 
  Briefcase, 
  MessageCircle, 
  Filter, 
  Search,
  PlusCircle,
  Edit,
  Trash2
} from "lucide-react";

// Types for professionals and teams
interface Professional {
  id: string;
  name: string;
  title: string;
  location: string;
  avatar?: string;
  initials: string;
  skills: string[];
  experience: string;
}

interface TeamData {
  id: string;
  title: string;
  members: Array<{
    name: string;
    role: string;
    avatar?: string;
    initials: string;
  }>;
  skills: string[];
  matchPercentage?: number;
}

interface CollaborationRequest {
  id: string;
  title: string;
  description: string;
  skills: string[];
  createdBy: {
    name: string;
    avatar?: string;
    initials: string;
  };
  status?: "pending" | "accepted" | "rejected";
}

interface YourPost {
  id: string;
  title: string;
  description: string;
  skills: string[];
  status: 'active' | 'closed';
  applicants: number;
  postedDate: string;
}

export default function CoreConnectPage() {
  const [activeTab, setActiveTab] = useState("discover");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample data for professionals
  const [professionals] = useState<Professional[]>([
    {
      id: "1",
      name: "Sarah Chen",
      title: "UX/UI Designer",
      location: "San Francisco, CA",
      avatar: "/lovable-uploads/b3335331-95c3-480f-a068-ce31c7885bf9.png",
      initials: "SC",
      skills: ["UI/UX", "Product Design", "Figma", "User Research"],
      experience: "8 years experience"
    },
    {
      id: "2",
      name: "Michael Johnson",
      title: "Full Stack Developer",
      location: "New York, NY",
      initials: "MJ",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      experience: "6 years experience"
    },
    {
      id: "3",
      name: "Emma Wilson",
      title: "Project Manager",
      location: "Chicago, IL",
      initials: "EW",
      skills: ["Agile", "Scrum", "Project Planning", "Team Leadership"],
      experience: "10 years experience"
    }
  ]);

  // Sample data for teams
  const [teams] = useState<TeamData[]>([
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

  // Sample data for collaboration requests
  const [collaborationRequests] = useState<CollaborationRequest[]>([
    {
      id: "1",
      title: "Looking for a UI/UX Designer for a Mobile App",
      description: "We're developing a fitness tracking app and need an experienced UI/UX designer to join our team for a 3-month project.",
      skills: ["UI/UX", "Mobile Design", "Figma"],
      createdBy: {
        name: "Michael Johnson",
        initials: "MJ",
      },
      status: "pending"
    },
    {
      id: "2",
      title: "Backend Developer Needed for E-commerce Platform",
      description: "Seeking a backend developer with experience in Node.js and MongoDB to help build an e-commerce platform.",
      skills: ["Node.js", "MongoDB", "API Development"],
      createdBy: {
        name: "Emma Wilson",
        initials: "EW",
      },
      status: "accepted"
    }
  ]);

  const [yourPosts] = useState<YourPost[]>([
    {
      id: "1",
      title: "Frontend Developer for SaaS Platform",
      description: "Looking for an experienced frontend developer to help build our SaaS platform's user interface.",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      status: "active",
      applicants: 12,
      postedDate: "2 weeks ago"
    },
    {
      id: "2",
      title: "UI/UX Designer for Mobile App",
      description: "Need a creative UI/UX designer for our upcoming mobile application project.",
      skills: ["Figma", "Mobile Design", "UI/UX"],
      status: "closed",
      applicants: 8,
      postedDate: "1 month ago"
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CORE Connect</h1>
          <p className="text-muted-foreground">
            Connect with professionals and teams to collaborate on projects
          </p>
        </div>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Post Collaboration
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="discover">Discover</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="your-posts">Your Posts</TabsTrigger>
        </TabsList>

        <div className="flex items-center space-x-2 my-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input 
            className="flex-1" 
            placeholder="Search professionals, teams, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <TabsContent value="discover" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionals.map(professional => (
              <Card key={professional.id} className="overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 border-4 border-background mt-4">
                    {professional.avatar ? (
                      <AvatarImage src={professional.avatar} />
                    ) : null}
                    <AvatarFallback>{professional.initials}</AvatarFallback>
                  </Avatar>
                  
                  <h3 className="font-semibold text-lg mt-4">{professional.name}</h3>
                  <p className="text-muted-foreground">{professional.title}</p>
                  
                  <div className="mt-3 space-y-1 text-sm">
                    <p>{professional.location}</p>
                    <p>{professional.experience}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {professional.skills.slice(0, 2).map(skill => (
                      <Badge key={skill} variant="outline" className="bg-primary/10">{skill}</Badge>
                    ))}
                    {professional.skills.length > 2 && (
                      <Badge variant="outline">+{professional.skills.length - 2}</Badge>
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
            ))}
          </div>
        </TabsContent>

        <TabsContent value="teams" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teams.map(team => (
              <Card key={team.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-lg">{team.title}</h3>
                      {team.matchPercentage && (
                        <Badge variant="outline" className="bg-primary/10 mt-1">
                          {team.matchPercentage}% Match
                        </Badge>
                      )}
                    </div>
                    <div className="rounded-full bg-primary/10 p-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
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
                            {member.avatar ? (
                              <AvatarImage src={member.avatar} />
                            ) : null}
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
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {collaborationRequests.map(request => (
              <Card key={request.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{request.title}</h3>
                          <p className="text-xs text-muted-foreground">Posted by {request.createdBy.name}</p>
                        </div>
                        {request.status && (
                          <Badge variant={
                            request.status === "accepted" ? "default" : 
                            request.status === "rejected" ? "destructive" : "outline"
                          }>
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm mt-2">{request.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {request.skills.map(skill => (
                          <Badge key={skill} variant="outline" className="bg-primary/10">{skill}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline">View Details</Button>
                        <Button className="gap-1">
                          <UserPlus className="h-4 w-4" /> Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="your-posts" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {yourPosts.map(post => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <Badge variant={post.status === 'active' ? 'default' : 'secondary'}>
                          {post.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{post.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">Posted {post.postedDate}</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {post.applicants} applicants
                      </span>
                    </div>
                    <Button size="sm">View Applicants</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
