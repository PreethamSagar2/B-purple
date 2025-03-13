
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Jobs from "./pages/jobs/Jobs";
import { DashboardLayout } from "./components/dashboard/dashboard-layout";
import IndividualDashboard from "./pages/dashboard/IndividualDashboard";
import CompanyDashboard from "./pages/dashboard/CompanyDashboard";
import NotFound from "./pages/NotFound";
import IndividualHome from "./pages/home/IndividualHome";
import AltHomePage from "./pages/home/AltHomePage";
import DarkHomePage from "./pages/home/DarkHomePage";
import JobsPage from "./pages/dashboard/jobs/JobsPage";
import ProfilePage from "./pages/dashboard/profile/ProfilePage";
import SettingsPage from "./pages/dashboard/settings/SettingsPage";
import FreelancePage from "./pages/dashboard/freelance/FreelancePage";
import CoreConnectPage from "./pages/dashboard/core/CoreConnectPage";
import IdeasPage from "./pages/dashboard/ideas/IdeasPage";
import B2BPage from "./pages/dashboard/b2b/B2BPage";
import IndividualOnboarding from "./pages/onboarding/IndividualOnboarding";
import CompanyOnboarding from "./pages/onboarding/CompanyOnboarding";
import PostFreelancePage from "./pages/dashboard/freelance/PostFreelancePage";
import PostIdeaPage from '@/pages/dashboard/ideas/PostIdeaPage';
import PostJobPage from "./pages/dashboard/jobs/PostJobPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/jobs" element={<Jobs />} />
          
          {/* Onboarding Routes */}
          <Route path="/onboarding/individual" element={<IndividualOnboarding />} />
          <Route path="/onboarding/company" element={<CompanyOnboarding />} />
          
          {/* Individual Dashboard Routes */}
          <Route path="/dashboard/individual" element={<DashboardLayout userType="individual" />}>
            <Route index element={<IndividualDashboard />} />
            <Route path="jobs" element={<JobsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="freelance" element={<FreelancePage />} />
            <Route path="core" element={<CoreConnectPage />} />
            <Route path="ideas" element={<IdeasPage />} />
            <Route path="ideas/post" element={<PostIdeaPage />} />
          </Route>
          
          {/* Company Dashboard Routes */}
          <Route path="/dashboard/company" element={<DashboardLayout userType="company" />}>
            <Route index element={<CompanyDashboard />} />
            <Route path="jobs" element={<JobsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="freelance" element={<FreelancePage />} />
            <Route path="core" element={<CoreConnectPage />} />
            <Route path="ideas" element={<IdeasPage />} />
            <Route path="b2b" element={<B2BPage />} />
          </Route>
          
          <Route path="/home/individual" element={<IndividualHome />} />
          <Route path="/alt-home" element={<AltHomePage />} />
          <Route path="/dark-home" element={<DarkHomePage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/dashboard/freelance/post" element={<PostFreelancePage />} />
          <Route path="/dashboard/company/jobs/post" element={<PostJobPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
