
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, ThumbsUp, MessageSquare, Bookmark, Filter, Lightbulb, TrendingUp, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Idea {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar?: string;
    initials: string;
    title: string;
  };
  postedAt: string;
  likes: number;
  comments: number;
  category: string;
  tags: string[];
  saved?: boolean;
  image: string;
  funding: string;
  progress: number;
  stage: string;
  interests: number;
}

const IdeasPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  const ideas: Idea[] = [
    {
      id: "1",
      title: "AI-Powered Resume Feedback System",
      description: "Create a system that uses AI to analyze resumes and provide personalized feedback for job seekers. The system would highlight strengths, identify gaps, and suggest improvements based on industry standards and job descriptions.",
      author: {
        name: "Elena Rodriguez",
        initials: "ER",
        title: "Product Manager"
      },
      postedAt: "2 days ago",
      likes: 24,
      comments: 8,
      category: "product",
      tags: ["AI", "Career", "Product"],
      image: "/images/ai-resume.jpg",
      funding: "$50,000 of $150,000",
      progress: 33,
      stage: "Seed",
      interests: 15
    },
    {
      id: "2",
      title: "Community-Driven Skill Verification",
      description: "Build a peer-to-peer skill verification system where professionals can endorse each other's skills through practical challenges and collaborative projects rather than simple endorsements.",
      author: {
        name: "Michael Johnson",
        initials: "MJ",
        title: "Tech Lead"
      },
      postedAt: "5 days ago",
      likes: 18,
      comments: 12,
      category: "community",
      tags: ["EdTech", "Community", "Skills"],
      image: "/images/skill-verification.jpg",
      funding: "$75,000 of $200,000",
      progress: 37,
      stage: "Pre-seed",
      interests: 22
    },
    {
      id: "3",
      title: "Sustainable Workplace Certification Program",
      description: "Develop a certification program for companies committed to sustainable practices in their workplace. This would include remote work policies, green office initiatives, and carbon footprint reduction strategies.",
      author: {
        name: "Priya Patel",
        initials: "PP",
        title: "Marketing Specialist"
      },
      postedAt: "3 days ago",
      likes: 18,
      comments: 6,
      category: "sustainability",
      tags: ["Sustainability", "Workplace", "Certification"]
    },
    {
      id: "4",
      title: "Mentorship Matchmaking Algorithm",
      description: "Design an algorithm that matches professionals with mentors based not just on industry and skills, but also on communication styles, career goals, and learning preferences to ensure more effective mentorship relationships.",
      author: {
        name: "David Kim",
        initials: "DK",
        title: "Frontend Developer"
      },
      postedAt: "5 days ago",
      likes: 31,
      comments: 12,
      category: "career",
      tags: ["Mentorship", "Algorithm", "Career Development"]
    },
    {
      id: "5",
      title: "Virtual Reality Workspace Platform",
      description: "Create a VR platform designed specifically for distributed teams to collaborate in immersive virtual workspaces. The platform would enable teams to interact as if they were in the same physical space while maintaining the benefits of remote work.",
      author: {
        name: "Sarah Chen",
        avatar: "/lovable-uploads/b3335331-95c3-480f-a068-ce31c7885bf9.png",
        initials: "SC",
        title: "UX/UI Designer"
      },
      postedAt: "1 day ago",
      likes: 56,
      comments: 23,
      category: "technology",
      tags: ["VR", "Remote Work", "Collaboration"]
    },
    {
      id: "6",
      title: "Job Skills Forecasting Tool",
      description: "Develop a tool that analyzes industry trends, job postings, and economic data to forecast which skills will be in high demand in the next 2-5 years, helping professionals plan their learning and career paths.",
      author: {
        name: "James Wilson",
        initials: "JW",
        title: "Data Scientist"
      },
      postedAt: "4 days ago",
      likes: 37,
      comments: 14,
      category: "career",
      tags: ["Skills", "Forecasting", "Career Planning"],
      saved: true
    }
  ];
  
  // Filter ideas based on search term and category
  const filteredIdeas = ideas.filter(idea => {
    const matchesSearch = !searchTerm || 
                         idea.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === "all" || idea.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get ideas for different tabs
  const trendingIdeas = [...ideas].sort((a, b) => b.likes - a.likes).slice(0, 3);
  const savedIdeas = ideas.filter(idea => idea.saved);

  const handleIdeaClick = (ideaId: string) => {
    navigate(`/dashboard/individual/ideas/${ideaId}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Ideas Exchange</h1>
        <p className="text-muted-foreground mt-2">Discover, share, and collaborate on innovative ideas</p>
      </div>
      
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <TabsList>
            <TabsTrigger value="all">All Ideas</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
          
          <Button 
            className="gap-2"
            onClick={() => navigate('/dashboard/individual/ideas/post')}
          >
            <Plus className="h-4 w-4" />
            <span>Post Idea</span>
          </Button>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative col-span-1 md:col-span-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search ideas by title, description, or tags"
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <select 
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="product">Product</option>
                  <option value="community">Community</option>
                  <option value="career">Career</option>
                  <option value="technology">Technology</option>
                  <option value="sustainability">Sustainability</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map(idea => (
              <Card 
                key={idea.id}
                className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{ height: 'fit-content', minHeight: '280px' }}
                onClick={() => handleIdeaClick(idea.id)}
              >
                {/* Base Card Content (Always Visible) */}
                <div className="relative h-48 w-full">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x400/png?text=Idea+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge 
                    variant="outline" 
                    className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm border-white/20 text-white"
                  >
                    {idea.category}
                  </Badge>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <h3 className="text-lg font-semibold text-white line-clamp-2">
                    {idea.title}
                  </h3>
                </div>

                {/* Expanded Content (Visible on Hover) */}
                <div className="absolute inset-0 bg-card translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{idea.title}</CardTitle>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className={`h-4 w-4 ${idea.saved ? 'fill-primary text-primary' : ''}`} />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{idea.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {idea.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="bg-primary/10">{tag}</Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Stage:</span>
                        <span className="text-sm">{idea.stage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Interested:</span>
                        <span className="text-sm">{idea.interests} people</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Funding:</span>
                        <span className="text-sm">{idea.funding}</span>
                      </div>
                      <div className="space-y-2">
                        <Progress value={idea.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground text-right">{idea.progress}% funded</p>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="absolute bottom-0 left-0 right-0 pt-0 border-t bg-card">
                    <div className="flex justify-between items-center w-full py-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={idea.author.avatar} />
                          <AvatarFallback>{idea.author.initials}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{idea.author.name}</p>
                          <p className="text-xs text-muted-foreground">{idea.author.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{idea.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{idea.comments}</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="trending" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trendingIdeas.map(idea => (
              <Card key={idea.id} className="hoverable-card">
                <CardHeader className="pb-3 relative">
                  <div className="absolute top-4 right-6">
                    <Badge className="bg-orange-500">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{idea.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="capitalize">{idea.category}</Badge>
                    <span className="text-xs text-muted-foreground">{idea.postedAt}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{idea.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {idea.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-primary/10">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={idea.author.avatar} />
                      <AvatarFallback>{idea.author.initials}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{idea.author.name}</p>
                      <p className="text-xs text-muted-foreground">{idea.author.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{idea.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{idea.comments}</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {savedIdeas.length > 0 ? (
              savedIdeas.map(idea => (
                <Card key={idea.id} className="hoverable-card">
                  <CardHeader className="pb-3 relative">
                    <CardTitle className="text-xl">{idea.title}</CardTitle>
                    <div className="absolute top-4 right-6">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className="h-4 w-4 fill-primary text-primary" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="capitalize">{idea.category}</Badge>
                      <span className="text-xs text-muted-foreground">{idea.postedAt}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{idea.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {idea.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="bg-primary/10">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={idea.author.avatar} />
                        <AvatarFallback>{idea.author.initials}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{idea.author.name}</p>
                        <p className="text-xs text-muted-foreground">{idea.author.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{idea.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{idea.comments}</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <Card className="col-span-full py-12">
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-muted p-4 mb-4">
                    <Bookmark className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No saved ideas</h3>
                  <p className="text-muted-foreground max-w-md">
                    You haven't saved any ideas yet. Browse the ideas and click the bookmark icon to save them for later.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => {
                      setSearchTerm('');
                      setCategoryFilter('all');
                    }}
                  >
                    Browse Ideas
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IdeasPage;
