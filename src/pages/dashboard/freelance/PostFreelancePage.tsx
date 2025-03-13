import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const PostFreelancePage = () => {
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('development');
  const [description, setDescription] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('entry-level');
  const [location, setLocation] = useState('');
  const [attachments, setAttachments] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const projectData = {
      id: Date.now(),
      title,
      category,
      description,
      skills: skills.split(',').map(skill => skill.trim()),
      duration,
      budget,
      paymentTerms,
      experienceLevel,
      location,
      client: 'Your Company',
      posted: 'Just now',
      logoUrl: 'https://via.placeholder.com/40',
    };

    try {
      const existingProjects = JSON.parse(localStorage.getItem('postedFreelanceProjects') || '[]');
      const updatedProjects = [projectData, ...existingProjects];
      localStorage.setItem('postedFreelanceProjects', JSON.stringify(updatedProjects));
      
      toast({
        title: "Freelance project posted successfully!",
        description: "Your project has been published and is now visible to freelancers.",
      });
      
      navigate('/dashboard/freelance');
    } catch (error) {
      toast({
        title: "Error posting project",
        description: "There was an error posting your freelance project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="glass-card rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-semibold mb-2">Post a Freelance Project</h1>
        <p className="text-muted-foreground">Fill in the details below to post your project and find the perfect freelancer.</p>
      </div>

      <div className="glass-card rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First Grid: Basic Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium">Project Title</Label>
              <Input
                id="title"
                placeholder="e.g. Website Redesign"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="bg-card/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-card/50">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="development">Web/Software Development</SelectItem>
                  <SelectItem value="design">Design & Creative</SelectItem>
                  <SelectItem value="writing">Writing & Translation</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="admin">Admin Support</SelectItem>
                  <SelectItem value="finance">Accounting & Finance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-medium">Budget</Label>
              <Input
                id="budget"
                placeholder="e.g. $1,000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
                className="bg-card/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm font-medium">Estimated Duration</Label>
              <Input
                id="duration"
                placeholder="e.g. 2 weeks"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                className="bg-card/50"
              />
            </div>
          </div>
          
          {/* Project Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">Project Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the project, what you need, and any important details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="min-h-[150px] bg-card/50"
            />
          </div>
          
          {/* Required Skills */}
          <div className="space-y-2">
            <Label htmlFor="skills" className="text-sm font-medium">Required Skills</Label>
            <Input
              id="skills"
              placeholder="e.g. React, Figma, TypeScript (comma-separated)"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
              className="bg-card/50"
            />
          </div>
          
          {/* Second Grid: Payment Terms & Experience Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="paymentTerms" className="text-sm font-medium">Payment Terms</Label>
              <Input
                id="paymentTerms"
                placeholder="e.g. Fixed Price, Hourly, Milestone"
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
                required
                className="bg-card/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="experienceLevel" className="text-sm font-medium">Experience Level</Label>
              <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                <SelectTrigger className="bg-card/50">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry-level">Entry-level</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Third Grid: Location & Attachments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium">Location</Label>
              <Input
                id="location"
                placeholder="e.g. Remote, San Francisco, CA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="bg-card/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="attachments" className="text-sm font-medium">Attachments</Label>
              <Input
                id="attachments"
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setAttachments(e.target.files[0]);
                  }
                }}
                className="bg-card/50"
              />
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="flex gap-4 justify-end pt-4 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/dashboard/freelance')}
              disabled={isLoading}
              className="min-w-[100px]"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="min-w-[200px]"
            >
              {isLoading ? "Posting..." : "Post Freelance Project"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostFreelancePage;