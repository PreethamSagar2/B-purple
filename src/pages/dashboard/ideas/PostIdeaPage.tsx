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

const PostIdeaPage = () => {
  // Basic Information
  const [title, setTitle] = useState('');
  const [patentNumber, setPatentNumber] = useState('');
  const [briefDescription, setBriefDescription] = useState('');
  const [patentApplicationNumber, setPatentApplicationNumber] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [solution, setSolution] = useState('');
  const [visibility, setVisibility] = useState('public');
  const [otherDetails, setOtherDetails] = useState('');
  const [requiredFund, setRequiredFund] = useState('');
  const [category, setCategory] = useState('technology');

  // Media & Supporting Information
  const [photos, setPhotos] = useState<FileList | null>(null);
  const [videos, setVideos] = useState<FileList | null>(null);
  const [teamInfo, setTeamInfo] = useState('');
  const [pitchDeckDocuments, setPitchDeckDocuments] = useState<FileList | null>(null);
  const [pitchDeckVideo, setPitchDeckVideo] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call - replace with actual API call in a real app
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Idea posted successfully!",
        description: "Your idea has been published and is now visible to potential investors.",
      });

      navigate('/dashboard/individual/ideas');
    } catch (error) {
      toast({
        title: "Error posting idea",
        description: "There was an error posting your idea. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Post New Idea</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information Section */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold leading-none tracking-tight">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-medium">
                    Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter your idea title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="patentNumber" className="text-sm font-medium">
                    Patent Number
                  </Label>
                  <Input
                    id="patentNumber"
                    placeholder="Already had a patent?"
                    value={patentNumber}
                    onChange={(e) => setPatentNumber(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="patentApplicationNumber" className="text-sm font-medium">
                    Patent Application Number
                  </Label>
                  <Input
                    id="patentApplicationNumber"
                    placeholder="Applied for a patent?"
                    value={patentApplicationNumber}
                    onChange={(e) => setPatentApplicationNumber(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="briefDescription" className="text-sm font-medium">
                    Brief Description
                  </Label>
                  <Textarea
                    id="briefDescription"
                    placeholder="Provide a brief description"
                    value={briefDescription}
                    onChange={(e) => setBriefDescription(e.target.value)}
                    required
                    className="min-h-[100px] w-full"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="problemStatement" className="text-sm font-medium">
                    Problem Statement
                  </Label>
                  <Textarea
                    id="problemStatement"
                    placeholder="Describe the problem"
                    value={problemStatement}
                    onChange={(e) => setProblemStatement(e.target.value)}
                    required
                    className="min-h-[100px] w-full"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="solution" className="text-sm font-medium">
                    Solution
                  </Label>
                  <Textarea
                    id="solution"
                    placeholder="Explain your solution"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    required
                    className="min-h-[100px] w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="visibility" className="text-sm font-medium">
                    Visibility
                  </Label>
                  <Select value={visibility} onValueChange={setVisibility}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Venture Capitalists/ Investors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium">
                    Idea Category
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requiredFund" className="text-sm font-medium">
                    Required Fund
                  </Label>
                  <Input
                    id="requiredFund"
                    placeholder="Enter amount"
                    value={requiredFund}
                    onChange={(e) => setRequiredFund(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="otherDetails" className="text-sm font-medium">
                    Other Details (if any)
                  </Label>
                  <Textarea
                    id="otherDetails"
                    placeholder="Any additional information"
                    value={otherDetails}
                    onChange={(e) => setOtherDetails(e.target.value)}
                    className="min-h-[80px] w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Media and Supporting Information Section */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold leading-none tracking-tight">
                Media and Supporting Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="photos" className="text-sm font-medium">
                    Photos (JPG, PNG, GIF)
                  </Label>
                  <Input
                    id="photos"
                    type="file"
                    accept="image/jpeg, image/png, image/gif"
                    onChange={(e) => setPhotos(e.target.files)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="videos" className="text-sm font-medium">
                    Videos (MP4, MOV, AVI)
                  </Label>
                  <Input
                    id="videos"
                    type="file"
                    accept="video/mp4, video/quicktime, video/avi"
                    onChange={(e) => setVideos(e.target.files)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="teamInfo" className="text-sm font-medium">
                    Team Information and Expertise
                  </Label>
                  <Textarea
                    id="teamInfo"
                    placeholder="Provide team details"
                    value={teamInfo}
                    onChange={(e) => setTeamInfo(e.target.value)}
                    className="min-h-[100px] w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pitchDeckDocuments" className="text-sm font-medium">
                    Pitch Deck Documents (PDF, PPT, PPTX, DOC, DOCX)
                  </Label>
                  <Input
                    id="pitchDeckDocuments"
                    type="file"
                    accept=".pdf,.ppt,.pptx,.doc,.docx"
                    onChange={(e) => setPitchDeckDocuments(e.target.files)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pitchDeckVideo" className="text-sm font-medium">
                    Pitch Deck Video (MP4, MOV, AVI)
                  </Label>
                  <Input
                    id="pitchDeckVideo"
                    type="file"
                    accept="video/mp4, video/quicktime, video/avi"
                    onChange={(e) =>
                      setPitchDeckVideo(e.target.files ? e.target.files[0] : null)
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/dashboard/individual/ideas')}
              disabled={isLoading}
              className="min-w-[100px]"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="min-w-[100px]"
            >
              {isLoading ? "Posting..." : "Post Idea"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostIdeaPage;