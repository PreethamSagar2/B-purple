import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { FileText, Users, Download, PlayCircle, Image as ImageIcon, Video, X } from 'lucide-react';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaUrl: string;
  type: 'image' | 'video';
}

const MediaModal: React.FC<MediaModalProps> = ({ isOpen, onClose, mediaUrl, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-2 -right-2 bg-white rounded-full"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        {type === 'image' ? (
          <img src={mediaUrl} alt="Preview" className="w-full rounded-lg" />
        ) : (
          <video controls className="w-full rounded-lg">
            <source src={mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

interface IdeaDetails {
  id: string;
  title: string;
  patentNumber?: string;
  patentApplicationNumber?: string;
  briefDescription: string;
  problemStatement: string;
  solution: string;
  visibility: 'public' | 'private';
  category: string;
  requiredFund: string;
  otherDetails?: string;
  photos?: string[];
  videos?: string[];
  teamInfo?: string;
  pitchDeckDocuments?: string[];
  pitchDeckVideo?: string;
  author: {
    name: string;
    avatar?: string;
    initials: string;
    title: string;
  };
  progress: number;
  interests: number;
  stage: string;
}

const IdeaDetailsPage = () => {
  const { id } = useParams();
  const [selectedMedia, setSelectedMedia] = useState<{ url: string; type: 'image' | 'video' } | null>(null);
  
  // Mock data with URLs instead of local files
  const ideaDetails: IdeaDetails = {
    id: "1",
    title: "AI-Powered Resume Feedback System",
    patentNumber: "US123456789",
    patentApplicationNumber: "APP987654321",
    briefDescription: "Create a system that uses AI to analyze resumes and provide personalized feedback for job seekers.",
    problemStatement: "Job seekers struggle to create effective resumes that stand out to employers and ATS systems.",
    solution: "Our AI-powered system analyzes resumes against industry standards and job requirements, providing actionable feedback.",
    visibility: "public",
    category: "Technology",
    requiredFund: "$150,000",
    otherDetails: "We have a working prototype and are seeking funding for full development.",
    photos: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800", // Workspace with laptop
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800", // AI visualization
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800", // Team meeting
    ],
    videos: [
      "https://storage.googleapis.com/your-bucket/demo-video1.mp4",
      "https://storage.googleapis.com/your-bucket/demo-video2.mp4",
    ],
    teamInfo: "Our team consists of AI experts and HR professionals with combined experience of 20+ years.",
    pitchDeckDocuments: [
      "pitch-deck-v1.pdf",
      "technical-specs.pdf"
    ],
    pitchDeckVideo: "https://storage.googleapis.com/your-bucket/pitch-deck.mp4",
    author: {
      name: "Elena Rodriguez",
      initials: "ER",
      title: "Product Manager",
      avatar: "https://ui-avatars.com/api/?name=Elena+Rodriguez&background=random"
    },
    progress: 33,
    interests: 15,
    stage: "Seed"
  };

  // Add error handling for media loading
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(ideaDetails.title)}&size=400`;
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const target = e.target as HTMLVideoElement;
    target.parentElement?.classList.add('video-error');
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      {selectedMedia && (
        <MediaModal
          isOpen={true}
          onClose={() => setSelectedMedia(null)}
          mediaUrl={selectedMedia.url}
          type={selectedMedia.type}
        />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{ideaDetails.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge>{ideaDetails.category}</Badge>
                    <Badge variant="outline">{ideaDetails.visibility}</Badge>
                    <Badge variant="secondary">{ideaDetails.stage}</Badge>
                  </div>
                </div>
                <Avatar className="h-12 w-12">
                  <AvatarImage src={ideaDetails.author.avatar} />
                  <AvatarFallback>{ideaDetails.author.initials}</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Patent Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Patent Number</p>
                      <p>{ideaDetails.patentNumber || 'Not Available'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Patent Application Number</p>
                      <p>{ideaDetails.patentApplicationNumber || 'Not Available'}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Brief Description</h3>
                  <p className="text-sm">{ideaDetails.briefDescription}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Problem Statement</h3>
                  <p className="text-sm">{ideaDetails.problemStatement}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <p className="text-sm">{ideaDetails.solution}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Other Details</h3>
                  <p className="text-sm">{ideaDetails.otherDetails || 'No additional details provided'}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Media & Supporting Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Photos Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  <h4 className="font-medium">Photos</h4>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {ideaDetails.photos?.map((photo, index) => (
                    <div 
                      key={index}
                      className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => setSelectedMedia({ url: photo, type: 'image' })}
                    >
                      <img 
                        src={photo} 
                        alt={`Project photo ${index + 1}`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform hover:scale-105"
                        onError={handleImageError}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Videos Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  <h4 className="font-medium">Videos</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {ideaDetails.videos?.map((video, index) => (
                    <div 
                      key={index}
                      className="relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-black/5"
                      onClick={() => setSelectedMedia({ url: video, type: 'video' })}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="h-12 w-12 text-primary" />
                      </div>
                      <video 
                        className="h-full w-full object-cover opacity-50"
                        onError={handleVideoError}
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Information */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4" />
                  <h4 className="font-medium">Team Information</h4>
                </div>
                <p className="text-sm">{ideaDetails.teamInfo}</p>
              </div>

              {/* Documents and Pitch Deck */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <h4 className="font-medium">Pitch Deck Documents</h4>
                  </div>
                  {ideaDetails.pitchDeckDocuments?.map((doc, index) => (
                    <Button key={index} variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download {doc}
                    </Button>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <PlayCircle className="h-4 w-4" />
                    <h4 className="font-medium">Pitch Deck Video</h4>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => ideaDetails.pitchDeckVideo && setSelectedMedia({ 
                      url: ideaDetails.pitchDeckVideo, 
                      type: 'video' 
                    })}
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Watch Pitch
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Required Funding</p>
                  <p className="text-xl font-semibold">{ideaDetails.requiredFund}</p>
                </div>
                <Progress value={ideaDetails.progress} className="h-2" />
                <p className="text-sm text-muted-foreground text-right">{ideaDetails.progress}% funded</p>
                <Button className="w-full">Invest Now</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={ideaDetails.author.avatar} />
                    <AvatarFallback>{ideaDetails.author.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{ideaDetails.author.name}</p>
                    <p className="text-sm text-muted-foreground">{ideaDetails.author.title}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Contact Creator</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetailsPage;