
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { JobCard } from "@/components/jobs/job-card";
import { Briefcase, MapPin, Clock, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { RecommendedJobsSection } from "@/components/dashboard/RecommendedJobsSection";
import { CoreConnectSection } from "@/components/dashboard/CoreConnectSection";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const IndividualDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Welcome, mvcharan7009</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening in your bcommune ecosystem</p>
        </div>
        <div className="relative w-64">
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 bg-background/50 border-muted"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <RecommendedJobsSection />
      
      <CoreConnectSection />
      
      <FreelanceProjectsSection />
      
      <IdeasSection />
    </div>
  );
};

const FreelanceProjectsSection = () => {
  const [projects] = useState([
    {
      id: "1",
      title: "E-commerce Website Redesign",
      budget: "$3,000 - $5,000",
      deadline: "3 weeks",
      bids: 12,
      description: "Looking for an experienced designer to refresh our online store with a modern look and improved UX.",
      skills: ["UI/UX", "Shopify", "Figma"]
    },
    {
      id: "2",
      title: "Mobile App Development",
      budget: "$8,000 - $12,000",
      deadline: "2 months",
      bids: 8,
      description: "Need to develop a cross-platform mobile app for our service business with booking functionality.",
      skills: ["React Native", "Firebase", "API Integration"]
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Freelance Projects</h2>
          <p className="text-sm text-muted-foreground">Available projects matching your skills</p>
        </div>
        <Link to="/dashboard/individual/freelance">
          <Button variant="outline" size="sm" className="gap-2">
            View All
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map(project => (
          <Card key={project.id} className="hoverable-card overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-primary/10">{skill}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Budget</p>
                  <p className="font-medium">{project.budget}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Deadline</p>
                  <p>{project.deadline}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Proposals</p>
                  <p>{project.bids}</p>
                </div>
              </div>
              <Button className="w-full mt-4">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const IdeasSection = () => {
  const navigate = useNavigate();
  const [ideas] = useState([
    {
      id: "1",
      title: "AI-Powered Content Generator",
      category: "SaaS",
      stage: "Concept",
      interests: 5,
      funding: "$0 of $150,000",
      progress: 0,
      image: "/images/ai-content.jpg", // Add your image path
      description: "An AI-powered platform that generates engaging content for various platforms automatically."
    },
    {
      id: "2",
      title: "Sustainable Energy Solution",
      category: "CleanTech",
      stage: "Development",
      interests: 8,
      funding: "$50,000 of $200,000",
      progress: 25,
      image: "/images/clean-energy.jpg", // Add your image path
      description: "Revolutionary clean energy solution for residential buildings."
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Ideas & Invest</h2>
          <p className="text-sm text-muted-foreground">Share ideas and find investors</p>
        </div>
        <Link to="/dashboard/individual/ideas">
          <Button variant="outline" size="sm" className="gap-2">
            View All
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ideas.map(idea => (
          <Card key={idea.id} className="hoverable-card">
            <div className="relative h-48 w-full">
              <img
                src={idea.image}
                alt={idea.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
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
            
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{idea.title}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">{idea.description}</p>
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
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Card 
          className="hoverable-card border-dashed border-2 flex flex-col justify-center items-center p-6 h-[220px] cursor-pointer"
          onClick={() => navigate('/dashboard/individual/ideas/post')}
        >
          <div className="rounded-full bg-primary/10 p-3 mb-3">
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Share Your Idea</h3>
          <p className="text-center text-sm text-muted-foreground mb-4">Get feedback and connect with potential investors</p>
          <Button>Create New Idea</Button>
        </Card>
      </div>
    </div>
  );
};

export default IndividualDashboard;
