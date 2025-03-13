
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const ProfilePage = () => {
  const [profile] = useState({
    name: "John Doe",
    title: "Senior Frontend Developer",
    avatar: "",
    initials: "JD",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Experienced frontend developer with 7+ years of experience building responsive and accessible web applications. Passionate about user experience and clean code.",
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "UI/UX", "Figma", "Next.js"],
    education: [
      {
        degree: "B.S. Computer Science",
        school: "University of California, Berkeley",
        year: "2015 - 2019"
      }
    ],
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2021 - Present",
        description: "Lead frontend development for multiple projects, mentored junior developers, and established coding standards."
      },
      {
        title: "Frontend Developer",
        company: "Creative Web Agency",
        period: "2019 - 2021",
        description: "Developed interactive web applications for clients in various industries using React and related technologies."
      }
    ]
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Profile</h1>
        <p className="text-muted-foreground mt-2">Manage your profile information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={profile.avatar} />
                <AvatarFallback>{profile.initials}</AvatarFallback>
              </Avatar>
              
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-muted-foreground">{profile.title}</p>
              <p className="text-sm mt-1">{profile.location}</p>
              
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">Edit Profile</Button>
                <Button size="sm">View Public</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm">{profile.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-sm">{profile.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="flex flex-wrap gap-2">
                {profile.skills.map(skill => (
                  <Badge key={skill} variant="outline" className="bg-primary/10">{skill}</Badge>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="mt-4 w-full">
                Add Skills
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">About Me</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <Textarea 
                value={profile.bio} 
                className="min-h-[120px] resize-none"
                readOnly
              />
              <Button variant="ghost" size="sm" className="mt-4">
                Edit
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Experience</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                Add
              </Button>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-6">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exp.period}
                      </div>
                    </div>
                    <p className="mt-2 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Education</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                Add
              </Button>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-6">
                {profile.education.map((edu, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {edu.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
