
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Clock, Users, Briefcase, Handshake, LightbulbIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ActiveJobsSection } from "@/components/dashboard/company/ActiveJobsSection";
import { CompanyFreelanceSection } from "@/components/dashboard/company/CompanyFreelanceSection";
import { CompanyCoreConnectSection } from "@/components/dashboard/company/CompanyCoreConnectSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const CompanyDashboard = () => {
  const [statistics] = useState([
    { title: "Active Job Postings", value: 5, icon: Briefcase },
    { title: "Total Applicants", value: 38, icon: Users },
    { title: "Freelance Projects", value: 3, icon: Handshake },
    { title: "Team Matches", value: 7, icon: Users }
  ]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Welcome, Acme Corp</h1>
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

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statistics.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className="p-2 rounded-md bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Applications */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Recent Applications</h2>
            <p className="text-sm text-muted-foreground">Latest candidates who applied to your postings</p>
          </div>
          <Link to="/dashboard/company/applications">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="hoverable-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {item === 1 ? "JD" : item === 2 ? "AL" : "RK"}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="font-medium">
                          {item === 1 ? "John Doe" : item === 2 ? "Alice Lee" : "Robert Kim"}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item === 1 ? "Frontend Developer" : item === 2 ? "UX Designer" : "Product Manager"}
                        </p>
                      </div>
                      <div className="text-sm">
                        <Badge variant="outline">
                          {item === 1 ? "Senior Frontend Developer" : item === 2 ? "UI/UX Designer" : "Product Manager"}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(item === 1 ? ["React", "TypeScript", "Node.js"] : 
                        item === 2 ? ["Figma", "UI Design", "Prototyping"] : 
                        ["Product Strategy", "Agile", "Growth"]).map(skill => (
                        <Badge key={skill} variant="outline" className="bg-primary/10">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="shrink-0 flex items-center gap-2">
                    <Button variant="outline" size="sm">View</Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ActiveJobsSection />
      
      <CompanyFreelanceSection />
      
      <CompanyCoreConnectSection />
    </div>
  );
};

export default CompanyDashboard;
