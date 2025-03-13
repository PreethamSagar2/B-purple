
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, Search, DollarSign, Clock, SlidersHorizontal, Trash2, Bookmark, PlusCircle } from "lucide-react";

interface FreelanceProject {
  id: string;
  title: string;
  description: string;
  budget: string;
  deadline: string;
  proposals: number;
  skills: string[];
  status: "Open" | "In progress" | "Completed";
}

interface SavedProject {
  id: string;
  title: string;
  company: string;
  savedDate: string;
  budget: string;
  deadline: string;
  skills: string[];
}

const FreelancePage = () => {
  const navigate = useNavigate();
  
  const [projects] = useState<FreelanceProject[]>([
    {
      id: "1",
      title: "E-commerce Website Redesign",
      description: "Looking for an experienced designer to refresh our online store with a modern look and improved UX. The project includes redesigning the homepage, product pages, and checkout process.",
      budget: "$3,000 - $5,000",
      deadline: "3 weeks",
      proposals: 12,
      skills: ["UI/UX", "Shopify", "Figma", "Web Design"],
      status: "Open"
    },
    {
      id: "2",
      title: "Mobile App Development",
      description: "Need to develop a cross-platform mobile app for our service business with booking functionality. The app should have user authentication, service listings, booking calendar, and payment processing.",
      budget: "$8,000 - $12,000",
      deadline: "2 months",
      proposals: 8,
      skills: ["React Native", "Firebase", "API Integration", "Mobile Development"],
      status: "Open"
    },
    {
      id: "3",
      title: "Content Creation for Blog",
      description: "Looking for a content writer to create 10 blog posts for our tech company. Topics will be related to software development, AI, and tech industry trends.",
      budget: "$500 - $1,000",
      deadline: "1 month",
      proposals: 24,
      skills: ["Content Writing", "SEO", "Research", "Tech Knowledge"],
      status: "Open"
    },
    {
      id: "4",
      title: "Video Editing for Marketing Campaign",
      description: "Need a video editor to create a 2-minute promotional video for our new product launch. Raw footage and brand assets will be provided.",
      budget: "$800 - $1,500",
      deadline: "2 weeks",
      proposals: 15,
      skills: ["Video Editing", "After Effects", "Motion Graphics"],
      status: "Open"
    }
  ]);

  const [myProposals] = useState([
    {
      id: "1",
      project: "Brand Identity Development for StartupX",
      client: "StartupX",
      bidAmount: "$4,200",
      status: "Under Review",
      submittedDate: "2 days ago"
    },
    {
      id: "2",
      project: "Website Development for Local Business",
      client: "Corner Cafe",
      bidAmount: "$2,800",
      status: "Accepted",
      submittedDate: "1 week ago"
    }
  ]);

  const [savedProjects] = useState<SavedProject[]>([
    {
      id: "1",
      title: "AI-Powered Chatbot Development",
      company: "TechCorp Solutions",
      savedDate: "2 days ago",
      budget: "$4,000 - $6,000",
      deadline: "1 month",
      skills: ["Python", "NLP", "Machine Learning"]
    },
    {
      id: "2",
      title: "Social Media Marketing Campaign",
      company: "Digital Marketing Pro",
      savedDate: "1 week ago",
      budget: "$2,000 - $3,000",
      deadline: "2 weeks",
      skills: ["Social Media", "Content Creation", "Analytics"]
    }
  ]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Freelance</h1>
          <p className="text-muted-foreground mt-2">Find freelance projects and manage your proposals</p>
        </div>
        <Button className="gap-2" onClick={() => navigate('/dashboard/freelance/post')}>
          <PlusCircle className="h-4 w-4" />
          Post Freelance Project
        </Button>
      </div>

      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Find Projects</TabsTrigger>
          <TabsTrigger value="proposals">My Proposals</TabsTrigger>
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="saved">Saved Projects</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects by title or skill"
                className="pl-9"
              />
            </div>
            <Button variant="outline" className="md:w-auto w-full gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {projects.map(project => (
              <Card key={project.id} className="hoverable-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-xl font-medium">{project.title}</h3>
                        <Badge variant="outline" className="md:ml-auto w-fit">
                          {project.status}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.skills.map(skill => (
                          <Badge key={skill} variant="outline" className="bg-primary/10">{skill}</Badge>
                        ))}
                      </div>
                      
                      <p className="mt-4 text-muted-foreground">{project.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Budget</p>
                          <div className="flex items-center mt-1">
                            <DollarSign className="w-3 h-3 mr-1 text-muted-foreground" />
                            <p className="text-sm font-medium">{project.budget}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Deadline</p>
                          <div className="flex items-center mt-1">
                            <Clock className="w-3 h-3 mr-1 text-muted-foreground" />
                            <p className="text-sm">{project.deadline}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Proposals</p>
                          <p className="text-sm mt-1">{project.proposals}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 md:w-48 w-full">
                      <Button className="w-full">Submit Proposal</Button>
                      <Button variant="outline" className="w-full">Save</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="proposals" className="space-y-6">
          {myProposals.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {myProposals.map(proposal => (
                <Card key={proposal.id} className="hoverable-card">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="font-medium">{proposal.project}</h3>
                            <p className="text-sm text-muted-foreground">{proposal.client}</p>
                          </div>
                          <Badge 
                            className={proposal.status === "Accepted" ? "bg-green-500/10 text-green-500 md:ml-auto w-fit" : "w-fit md:ml-auto"}
                            variant="outline"
                          >
                            {proposal.status}
                          </Badge>
                        </div>
                        
                        <div className="flex gap-6 mt-3 text-sm">
                          <div>
                            <p className="text-muted-foreground">Your Bid</p>
                            <p className="font-medium">{proposal.bidAmount}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Submitted</p>
                            <p>{proposal.submittedDate}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 md:justify-end">
                        <Button variant="outline" size="sm">View</Button>
                        {proposal.status !== "Accepted" && (
                          <Button variant="outline" size="sm">Edit</Button>
                        )}
                        {proposal.status === "Accepted" && (
                          <Button size="sm">Start Work</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="py-12">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-muted p-4 mb-4">
                  <svg className="h-8 w-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">No proposals yet</h3>
                <p className="text-muted-foreground max-w-md">
                  You haven't submitted any proposals yet. Browse available projects and start bidding.
                </p>
                <Button className="mt-6">Find Projects</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="active" className="space-y-6">
          <Card className="py-12">
            <CardContent className="flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-muted p-4 mb-4">
                <svg className="h-8 w-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">No active projects</h3>
              <p className="text-muted-foreground max-w-md">
                You don't have any active freelance projects at the moment. Check your proposals or browse new projects.
              </p>
              <div className="flex gap-4 mt-6">
                <Button variant="outline">View Proposals</Button>
                <Button>Find Projects</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saved" className="space-y-6">
          {savedProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {savedProjects.map(project => (
                <Card key={project.id} className="hoverable-card">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="font-medium">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">{project.company}</p>
                          </div>
                          <Badge variant="outline" className="w-fit">
                            Saved {project.savedDate}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 my-3">
                          {project.skills.map(skill => (
                            <Badge key={skill} variant="outline" className="bg-primary/10">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{project.budget}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{project.deadline}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 md:justify-center">
                        <Button>Apply Now</Button>
                        <Button variant="outline" className="gap-2">
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="py-12">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-muted p-4 mb-4">
                  <Bookmark className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">No saved projects</h3>
                <p className="text-muted-foreground max-w-md">
                  You haven't saved any projects yet. Browse available projects and save the ones you're interested in.
                </p>
                <Button className="mt-6" onClick={() => document.querySelector('[value="projects"]')?.click()}>
                  Browse Projects
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FreelancePage;
