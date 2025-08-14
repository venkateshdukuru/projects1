import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectMarketplace from "./pages/ProjectMarketplace";
import CourseMarketplace from "./pages/CourseMarketplace";
import Mentoring from "./pages/Mentoring";
import Mini from "./pages/projects/Mini";
import Major from "./pages/projects/Major";
import Internship from "./pages/projects/Internship";
import Internships from "./pages/Internships";
import Auth from "./pages/Auth";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Licensing from "./pages/Licensing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectMarketplace />} />
          <Route path="/courses" element={<CourseMarketplace />} />
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/projects/mini" element={<Mini />} />
          <Route path="/projects/major" element={<Major />} />
          <Route path="/projects/internship" element={<Internship />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/licensing" element={<Licensing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
