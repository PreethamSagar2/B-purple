
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { JobCard, JobData } from "@/components/jobs/job-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, Search, MapPin, Filter, SlidersHorizontal, PlusCircle } from "lucide-react";

const JobsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCompanyDashboard = location.pathname.includes('/dashboard/company/');
  
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [salaryRange, setSalaryRange] = useState([50, 150]); // in thousands
  
  const [jobTypes, setJobTypes] = useState({
    "Full-time": true,
    "Part-time": false,
    "Contract": false,
    "Internship": false,
    "Remote": false
  });
  
  const mockJobs: JobData[] = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      type: "Full-time",
      postedAt: "2 days ago",
      description: "We are looking for an experienced frontend developer with React and TypeScript expertise to join our team. You'll be working on cutting-edge web applications and collaborating with a talented team of engineers.",
      salary: "$90,000 - $120,000",
      skills: ["React", "TypeScript", "Redux", "CSS", "HTML"]
    },
    {
      id: "2",
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "New York, NY",
      type: "Full-time",
      postedAt: "1 week ago",
      description: "Join our creative team to design beautiful and intuitive user interfaces for our clients. You'll be responsible for creating wireframes, prototypes, and final designs for web and mobile applications.",
      salary: "$80,000 - $100,000",
      skills: ["Figma", "UI Design", "Wireframing", "User Research", "Prototyping"]
    },
    {
      id: "3",
      title: "Product Manager",
      company: "GrowthStartup",
      location: "San Francisco, CA",
      type: "Full-time",
      postedAt: "3 days ago",
      description: "We need a product manager to lead our product development efforts and drive growth. You'll be working closely with development, design, and marketing teams to ensure successful product launches.",
      salary: "$110,000 - $140,000",
      skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping", "Analytics"]
    },
    {
      id: "4",
      title: "Marketing Intern",
      company: "Digital Agency",
      location: "Chicago, IL",
      type: "Internship",
      postedAt: "5 days ago",
      description: "Looking for a marketing intern to join our team for a 3-month program. You'll learn about digital marketing strategies, social media management, and content creation.",
      salary: "$20 - $25/hour",
      skills: ["Social Media", "Content Creation", "Digital Marketing"]
    },
    {
      id: "5",
      title: "Backend Developer",
      company: "FinTech Solutions",
      location: "Boston, MA",
      type: "Contract",
      postedAt: "1 day ago",
      description: "We're seeking a backend developer for a 6-month contract to help build our financial services API. Strong experience with Node.js and databases required.",
      salary: "$90 - $110/hour",
      skills: ["Node.js", "MongoDB", "Express", "API Development", "AWS"]
    }
  ];
  
  // Filter jobs based on search term, location, and job types
  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = !searchTerm || 
                         job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !locationFilter || 
                           job.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    const matchesJobType = jobTypes[job.type as keyof typeof jobTypes];
    
    // Extract and parse the salary range from the string
    let matchesSalary = true;
    if (job.salary) {
      const salaryNumbers = job.salary.match(/\d+/g)?.map(Number);
      if (salaryNumbers && salaryNumbers.length >= 2) {
        const minJobSalary = salaryNumbers[0];
        const maxJobSalary = salaryNumbers[1];
        matchesSalary = 
          (minJobSalary >= salaryRange[0] * 1000 || maxJobSalary >= salaryRange[0] * 1000) && 
          (minJobSalary <= salaryRange[1] * 1000 || maxJobSalary <= salaryRange[1] * 1000);
      }
    }
    
    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Find Your Next Opportunity</h1>
          <p className="text-muted-foreground mt-2">Browse through jobs that match your skills and interests</p>
        </div>
        {isCompanyDashboard && (
          <Button 
            onClick={() => navigate('/dashboard/company/jobs/post')} 
            className="gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Post New Job
          </Button>
        )}
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative col-span-1 md:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Job title, company, or keywords"
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Location"
                className="pl-9"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters */}
        <Card className="lg:col-span-1 h-fit sticky top-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </h3>
              <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                Reset
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="space-y-6">
              {/* Job Type */}
              <div>
                <h4 className="text-sm font-medium mb-3">Job Type</h4>
                <div className="space-y-2">
                  {Object.keys(jobTypes).map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`job-type-${type}`} 
                        checked={jobTypes[type as keyof typeof jobTypes]}
                        onCheckedChange={(checked) => {
                          setJobTypes({
                            ...jobTypes,
                            [type]: !!checked
                          });
                        }}
                      />
                      <Label htmlFor={`job-type-${type}`}>{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Salary Range */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium">Salary Range</h4>
                  <span className="text-xs text-muted-foreground">
                    ${salaryRange[0]}k - ${salaryRange[1]}k
                  </span>
                </div>
                <Slider
                  defaultValue={salaryRange}
                  max={200}
                  min={0}
                  step={10}
                  onValueChange={setSalaryRange}
                  className="mt-5"
                />
              </div>
              
              {/* Experience Level */}
              <div>
                <h4 className="text-sm font-medium mb-3">Experience Level</h4>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid Level</SelectItem>
                    <SelectItem value="senior">Senior Level</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Date Posted */}
              <div>
                <h4 className="text-sm font-medium mb-3">Date Posted</h4>
                <Select defaultValue="any">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any time</SelectItem>
                    <SelectItem value="day">Past 24 hours</SelectItem>
                    <SelectItem value="week">Past week</SelectItem>
                    <SelectItem value="month">Past month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Apply button for mobile */}
              <Button className="w-full md:hidden mt-4">
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Job Listings */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
              </span>
            </div>
            
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="relevant">Most Relevant</SelectItem>
                <SelectItem value="salary-high">Highest Salary</SelectItem>
                <SelectItem value="salary-low">Lowest Salary</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <Card className="py-12">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-muted p-4 mb-4">
                  <Briefcase className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">No jobs found</h3>
                <p className="text-muted-foreground max-w-md">
                  We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => {
                    setSearchTerm('');
                    setLocationFilter('');
                    setSalaryRange([50, 150]);
                    setJobTypes({
                      "Full-time": true,
                      "Part-time": true,
                      "Contract": true,
                      "Internship": true,
                      "Remote": true
                    });
                  }}
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
