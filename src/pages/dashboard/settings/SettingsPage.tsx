
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: {
      jobAlerts: true,
      messages: true,
      applications: true,
      marketing: false
    },
    push: {
      jobAlerts: false,
      messages: true,
      applications: true,
      marketing: false
    }
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Update your personal account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" value="San Francisco, CA" />
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Delete Account</CardTitle>
              <CardDescription>
                Permanently delete your account and all of your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>
                Manage the emails you receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-job-alerts">Job Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive emails about new job opportunities</p>
                </div>
                <Switch 
                  id="email-job-alerts" 
                  checked={notifications.email.jobAlerts}
                  onCheckedChange={(checked) => {
                    setNotifications({
                      ...notifications,
                      email: {
                        ...notifications.email,
                        jobAlerts: checked
                      }
                    });
                  }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-messages">Messages</Label>
                  <p className="text-sm text-muted-foreground">Receive emails when you get a new message</p>
                </div>
                <Switch 
                  id="email-messages" 
                  checked={notifications.email.messages}
                  onCheckedChange={(checked) => {
                    setNotifications({
                      ...notifications,
                      email: {
                        ...notifications.email,
                        messages: checked
                      }
                    });
                  }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-applications">Applications</Label>
                  <p className="text-sm text-muted-foreground">Receive status updates about your applications</p>
                </div>
                <Switch 
                  id="email-applications" 
                  checked={notifications.email.applications}
                  onCheckedChange={(checked) => {
                    setNotifications({
                      ...notifications,
                      email: {
                        ...notifications.email,
                        applications: checked
                      }
                    });
                  }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-marketing">Marketing</Label>
                  <p className="text-sm text-muted-foreground">Receive marketing and promotional emails</p>
                </div>
                <Switch 
                  id="email-marketing" 
                  checked={notifications.email.marketing}
                  onCheckedChange={(checked) => {
                    setNotifications({
                      ...notifications,
                      email: {
                        ...notifications.email,
                        marketing: checked
                      }
                    });
                  }}
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Push Notifications</CardTitle>
              <CardDescription>
                Manage your mobile and browser notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-job-alerts">Job Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications about new job opportunities</p>
                </div>
                <Switch 
                  id="push-job-alerts" 
                  checked={notifications.push.jobAlerts}
                  onCheckedChange={(checked) => {
                    setNotifications({
                      ...notifications,
                      push: {
                        ...notifications.push,
                        jobAlerts: checked
                      }
                    });
                  }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-messages">Messages</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications when you get a new message</p>
                </div>
                <Switch 
                  id="push-messages" 
                  checked={notifications.push.messages}
                  onCheckedChange={(checked) => {
                    setNotifications({
                      ...notifications,
                      push: {
                        ...notifications.push,
                        messages: checked
                      }
                    });
                  }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-applications">Applications</Label>
                  <p className="text-sm text-muted-foreground">Receive status updates about your applications</p>
                </div>
                <Switch 
                  id="push-applications" 
                  checked={notifications.push.applications}
                  onCheckedChange={(checked) => {
                    setNotifications({
                      ...notifications,
                      push: {
                        ...notifications.push,
                        applications: checked
                      }
                    });
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>
                Control who can see your profile and information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="profile-visibility">Profile Visibility</Label>
                  <p className="text-sm text-muted-foreground">Who can see your profile</p>
                </div>
                <div className="w-[200px]">
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2">
                    <option>Everyone</option>
                    <option>Connections only</option>
                    <option>Private</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="profile-indexing">Profile Indexing</Label>
                  <p className="text-sm text-muted-foreground">Allow search engines to index your profile</p>
                </div>
                <Switch id="profile-indexing" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="activity-visibility">Activity Visibility</Label>
                  <p className="text-sm text-muted-foreground">Who can see your activity</p>
                </div>
                <div className="w-[200px]">
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2">
                    <option>Everyone</option>
                    <option>Connections only</option>
                    <option>Private</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>
                Manage your subscription plan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Free Plan</h3>
                    <p className="text-sm text-muted-foreground">Basic features for individuals</p>
                  </div>
                  <Badge variant="outline">Current Plan</Badge>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Apply to jobs
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Create a profile
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Basic networking features
                  </li>
                </ul>
              </div>
              <Button>Upgrade Plan</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Manage your payment methods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                No payment methods found.
              </p>
              <Button>Add Payment Method</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
