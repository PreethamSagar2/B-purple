
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Globe, Building, Plus, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  professionalHeadline: z.string().min(5, {
    message: "Professional headline must be at least 5 characters.",
  }),
  bio: z.string().min(10, {
    message: "Company bio must be at least 10 characters.",
  }),
  location: z.string().min(2, {
    message: "Location is required.",
  }),
  industry: z.string().min(2, {
    message: "Industry is required.",
  }),
  companySize: z.string().min(1, {
    message: "Company size is required.",
  }),
  website: z.string().url({
    message: "Please enter a valid website URL.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const CompanyOnboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 2;
  const [teamMembers, setTeamMembers] = useState<Array<{
    email: string;
    role: "HR" | "Ideas Admin" | "B2B Admin" | "Super Admin";
  }>>([]);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberRole, setNewMemberRole] = useState<
    "HR" | "Ideas Admin" | "B2B Admin" | "Super Admin"
  >("HR");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      professionalHeadline: "",
      bio: "",
      location: "",
      industry: "",
      companySize: "",
      website: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real app, you would save this data and team members to your backend
    console.log("Form data:", data);
    console.log("Team members:", teamMembers);
    
    toast({
      title: "Company profile created!",
      description: "Your company profile has been successfully set up.",
    });
    
    // Redirect to the company dashboard
    navigate("/dashboard/company");
  };

  const addTeamMember = () => {
    if (!newMemberEmail) {
      toast({
        title: "Email required",
        description: "Please enter an email address for the team member.",
        variant: "destructive",
      });
      return;
    }

    setTeamMembers([
      ...teamMembers,
      { email: newMemberEmail, role: newMemberRole },
    ]);
    setNewMemberEmail("");
    setNewMemberRole("HR");
    
    toast({
      title: "Team member added",
      description: `Invitation will be sent to ${newMemberEmail}`,
    });
  };

  const removeTeamMember = (index: number) => {
    const updatedMembers = [...teamMembers];
    updatedMembers.splice(index, 1);
    setTeamMembers(updatedMembers);
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-background px-4 py-8">
      <div className="mx-auto w-full max-w-2xl">
        <Card className="border-none shadow-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">Set Up Your Company</CardTitle>
            <CardDescription>
              Tell us more about your company to help connect with the right talent
            </CardDescription>
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i + 1 === step
                      ? "w-8 bg-primary"
                      : i + 1 < step
                      ? "w-8 bg-primary/60"
                      : "w-8 bg-muted"
                  }`}
                />
              ))}
            </div>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                {step === 1 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="professionalHeadline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Professional Headline</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Leading AI Solutions Provider" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Bio</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your company"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Company Location
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="City, Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="construction">Construction</SelectItem>
                              <SelectItem value="entertainment">Entertainment</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            Company Size
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="501+">501+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            Website
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourcompany.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <UserPlus className="h-5 w-5" />
                        Invite Team Members
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Add team members and assign them specific roles in your company account
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Input
                          placeholder="team.member@company.com"
                          value={newMemberEmail}
                          onChange={(e) => setNewMemberEmail(e.target.value)}
                        />
                      </div>
                      <Select
                        value={newMemberRole}
                        onValueChange={(value: any) => setNewMemberRole(value)}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="HR">HR</SelectItem>
                          <SelectItem value="Ideas Admin">Ideas Admin</SelectItem>
                          <SelectItem value="B2B Admin">B2B Admin</SelectItem>
                          <SelectItem value="Super Admin">Super Admin</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button type="button" onClick={addTeamMember} size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {teamMembers.length > 0 && (
                      <div className="space-y-2 mt-4">
                        <div className="text-sm font-medium">Team members:</div>
                        <div className="space-y-2">
                          {teamMembers.map((member, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between py-2 px-3 bg-muted/50 rounded-md"
                            >
                              <div>
                                <div>{member.email}</div>
                                <Badge variant="outline" className="mt-1">
                                  {member.role}
                                </Badge>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeTeamMember(index)}
                                className="text-destructive hover:text-destructive/80 hover:bg-destructive/10"
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-muted/30 rounded-md p-4">
                      <h4 className="font-medium mb-2">Role Permissions</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>HR</span>
                          <span className="text-muted-foreground">Manage job postings & applications</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Ideas Admin</span>
                          <span className="text-muted-foreground">Manage ideas & investments</span>
                        </div>
                        <div className="flex justify-between">
                          <span>B2B Admin</span>
                          <span className="text-muted-foreground">Manage B2B opportunities</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Super Admin</span>
                          <span className="text-muted-foreground">Full access to all features</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {step < totalSteps ? (
                  <Button type="button" onClick={nextStep}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">Complete Setup</Button>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default CompanyOnboarding;
