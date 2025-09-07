import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/blogs";   // ✅ Fixed to PascalCase

// Services (dropdown items)
import ProjectMarketplace from "./pages/ProjectMarketplace";
import Mentoring from "./pages/Mentoring";

// Project Subroutes
import Mini from "./pages/projects/Mini";
import Major from "./pages/projects/Major";
import Internship from "./pages/projects/Internship";

import CourseMarketplace from "./pages/CourseMarketplace";
import Internships from "./pages/Internships";
import Auth from "./pages/Auth";

import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Licensing from "./pages/Licensing";
import NotFound from "./pages/NotFound";

import { useEffect } from "react";

const queryClient = new QueryClient();

// ✅ Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <ScrollToTop />
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectMarketplace />} /> {/* ✅ direct path */}
          <Route path="/mentoring" element={<Mentoring />} /> {/* ✅ direct path */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Project Subpages */}
          <Route path="/projects/mini" element={<Mini />} />
          <Route path="/projects/major" element={<Major />} />
          <Route path="/projects/internship" element={<Internship />} />

          {/* Other Pages */}
          <Route path="/courses" element={<CourseMarketplace />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/auth" element={<Auth />} />

          {/* Legal */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/licensing" element={<Licensing />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
