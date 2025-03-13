
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Building, MapPin, Users, Calendar, Briefcase, Filter } from "lucide-react";

interface Company {
  id: string;
  name: string;
  logo?: string;
  initials: string;
  location: string;
  industry: string;
  size: string;
  founded: string;
  description: string;
  connections: number;
  partnership?: string;
  tags: string[];
}

const B2BPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  
  const companies: Company[] = [
    {
      id: "1",
      name: "TechCorp Inc.",
      initials: "TC",
      location: "San Francisco, CA",
      industry: "Technology",
      size: "500-1000 employees",
      founded: "2010",
      description: "Leading provider of enterprise software solutions specializing in AI and machine learning applications for business intelligence.",
      connections: 15,
      partnership: "Integration Partner",
      tags: ["Software", "AI", "Enterprise", "SaaS"]
    },
    {
      id: "2",
      name: "GreenEco Solutions",
      initials: "GE",
      location: "Portland, OR",
      industry: "Sustainability",
      size: "100-250 employees",
      founded: "2015",
      description: "Innovative sustainability consulting firm helping businesses reduce their environmental impact through technology and process optimization.",
      connections: 8,
      tags: ["Sustainability", "Consulting", "Green Technology"]
    },
    {
      id: "3",
      name: "FinEdge Capital",
      initials: "FE",
      location: "New York, NY",
      industry: "Finance",
      size: "250-500 employees",
      founded: "2008",
      description: "Fintech company providing cutting-edge financial services and investment solutions for businesses and high-net-worth individuals.",
      connections: 12,
      partnership: "Research Partner",
      tags: ["Fintech", "Investment", "Financial Services"]
    },
    {
      id: "4",
      name: "MediHealth Systems",
      initials: "MH",
      location: "Boston, MA",
      industry: "Healthcare",
      size: "1000-5000 employees",
      founded: "2000",
      description: "Healthcare technology provider developing solutions for hospitals, clinics, and healthcare professionals to improve patient care and operational efficiency.",
      connections: 7,
      tags: ["Healthcare", "MedTech", "Patient Care", "EMR"]
    },
    {
      id: "5",
      name: "Creative Design Studio",
      initials: "CD",
      location: "Austin, TX",
      industry: "Design",
      size: "50-100 employees",
      founded: "2018",
      description: "Award-winning design studio specializing in UX/UI design, branding, and digital marketing for startups and established companies.",
      connections: 20,
      partnership: "Design Partner",
      tags: ["Design", "UX/UI", "Branding", "Marketing"]
    },
    {
      id: "6",
      name: "Global Logistics Co.",
      initials: "GL",
      location: "Chicago, IL",
      industry: "Logistics",
      size: "5000+ employees",
      founded: "1995",
      description: "International logistics and supply chain management company offering comprehensive solutions for businesses of all sizes across various industries.",
      connections: 5,
      tags: ["Logistics", "Supply Chain", "International", "Shipping"]
    }
  ];
  
  // Filter companies based on search term and industry
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = !searchTerm || 
                         company.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = !industryFilter || 
                           company.industry.toLowerCase() === industryFilter.toLowerCase();
    
    return matchesSearch && matchesIndustry;
  });
  
  // Get companies for different tabs
  const partnerCompanies = companies.filter(company => company.partnership);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">B2B Partnerships</h1>
        <p className="text-muted-foreground mt-2">Discover and connect with businesses for partnership opportunities</p>
      </div>
      
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <TabsList>
            <TabsTrigger value="all">All Companies</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
          </TabsList>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative col-span-1 md:col-span-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search companies by name, description, or tags"
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <select 
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                >
                  <option value="">All Industries</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="design">Design</option>
                  <option value="sustainability">Sustainability</option>
                  <option value="logistics">Logistics</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map(company => (
                <Card key={company.id} className="hoverable-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={company.logo} />
                          <AvatarFallback>{company.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">{company.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{company.location}</span>
                          </div>
                        </div>
                      </div>
                      {company.partnership && (
                        <Badge className="bg-primary">{company.partnership}</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">{company.industry}</Badge>
                      {company.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="bg-primary/10">{tag}</Badge>
                      ))}
                      {company.tags.length > 2 && (
                        <Badge variant="outline">+{company.tags.length - 2}</Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{company.description}</p>
                    
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-3 w-3" />
                          <span>Size</span>
                        </div>
                        <p>{company.size}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Founded</span>
                        </div>
                        <p>{company.founded}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-3 w-3" />
                          <span>Connections</span>
                        </div>
                        <p>{company.connections}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <div className="w-full flex items-center gap-3">
                      <Button variant="outline" className="flex-1">View Profile</Button>
                      <Button className="flex-1">Connect</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <Card className="col-span-full py-12">
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-muted p-4 mb-4">
                    <Building className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No companies found</h3>
                  <p className="text-muted-foreground max-w-md">
                    We couldn't find any companies matching your criteria. Try adjusting your filters or search terms.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => {
                      setSearchTerm('');
                      setIndustryFilter('');
                    }}
                  >
                    Reset Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="partners" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {partnerCompanies.length > 0 ? (
              partnerCompanies.map(company => (
                <Card key={company.id} className="hoverable-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={company.logo} />
                          <AvatarFallback>{company.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">{company.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{company.location}</span>
                          </div>
                        </div>
                      </div>
                      {company.partnership && (
                        <Badge className="bg-primary">{company.partnership}</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">{company.industry}</Badge>
                      {company.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="bg-primary/10">{tag}</Badge>
                      ))}
                      {company.tags.length > 2 && (
                        <Badge variant="outline">+{company.tags.length - 2}</Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{company.description}</p>
                    
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-3 w-3" />
                          <span>Size</span>
                        </div>
                        <p>{company.size}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Founded</span>
                        </div>
                        <p>{company.founded}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-3 w-3" />
                          <span>Connections</span>
                        </div>
                        <p>{company.connections}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <div className="w-full flex items-center gap-3">
                      <Button variant="outline" className="flex-1">View Partnership</Button>
                      <Button className="flex-1">Message</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <Card className="col-span-full py-12">
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-muted p-4 mb-4">
                    <Building className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No partners found</h3>
                  <p className="text-muted-foreground max-w-md">
                    You don't have any established partnerships yet. Browse the companies and connect with them to establish partnerships.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => {
                      setSearchTerm('');
                      setIndustryFilter('');
                    }}
                  >
                    Browse Companies
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

export default B2BPage;
