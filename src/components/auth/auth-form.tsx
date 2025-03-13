
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, User } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

export function AuthForm({ type }: AuthFormProps) {
  const [userType, setUserType] = useState<"individual" | "company">("individual");
  const navigate = useNavigate();
  
  const isSignIn = type === "sign-in";
  const title = isSignIn ? "Sign In" : "Create Your Account";
  const description = isSignIn 
    ? "Enter your credentials to access your account" 
    : "Join bcommune and connect with opportunities";
  const buttonText = isSignIn ? "Sign In" : "Create Account";
  const footerText = isSignIn 
    ? "Don't have an account?" 
    : "Already have an account?";
  const footerLinkText = isSignIn ? "Sign up" : "Sign in";
  const footerLinkPath = isSignIn ? "/sign-up" : "/sign-in";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Form submitted for ${userType}`);
    
    if (isSignIn) {
      // In a real app, this would authenticate the user
      toast({
        title: "Signed in successfully",
        description: "Welcome back to bcommune!",
      });
      
      // Redirect to the appropriate dashboard
      if (userType === "individual") {
        navigate("/dashboard/individual");
      } else {
        navigate("/dashboard/company");
      }
    } else {
      // For sign up, redirect to the onboarding flow
      toast({
        title: "Account created!",
        description: "Let's complete your profile.",
      });
      
      if (userType === "individual") {
        navigate("/onboarding/individual");
      } else {
        navigate("/onboarding/company");
      }
    }
  };

  return (
    <Card className="w-full max-w-md shadow-sm">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs 
          defaultValue={userType} 
          className="w-full"
          onValueChange={(value) => setUserType(value as "individual" | "company")}
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="individual" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Individual</span>
            </TabsTrigger>
            <TabsTrigger value="company" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>Company</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individual">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              {!isSignIn && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
              )}
              {isSignIn && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="remember" className="text-sm font-normal">Remember me</Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
              )}
              <Button type="submit" className="w-full">{buttonText}</Button>
            </form>
          </TabsContent>

          <TabsContent value="company">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-email">Email</Label>
                <Input id="company-email" type="email" placeholder="email@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-password">Password</Label>
                <Input id="company-password" type="password" required />
              </div>
              {!isSignIn && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Acme Inc." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-size">Company Size</Label>
                    <select 
                      id="company-size" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>
                </>
              )}
              {isSignIn && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="company-remember" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="company-remember" className="text-sm font-normal">Remember me</Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
              )}
              <Button type="submit" className="w-full">{buttonText}</Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-muted-foreground">
          {footerText}{" "}
          <Link to={footerLinkPath} className="text-primary hover:underline">
            {footerLinkText}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
