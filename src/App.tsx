import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { SEOEnhancements } from "@/components/SEOEnhancements";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import TeamMember from "./pages/team/TeamMember";
import Clients from "./pages/Clients";
import Coverage from "./pages/Coverage";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import BlogPost from "./pages/BlogPost";
import FMCGRetailAudit from "./pages/services/FMCGRetailAudit";
import MediaAdvertising from "./pages/services/MediaAdvertising";
// Sector Pages
import FMCG from "./pages/sectors/FMCG";
import Financial from "./pages/sectors/Financial";
import Health from "./pages/sectors/Health";
import Automotive from "./pages/sectors/Automotive";
import Telecoms from "./pages/sectors/Telecoms";
import Agriculture from "./pages/sectors/Agriculture";
import MediaEducation from "./pages/sectors/MediaEducation";
import Political from "./pages/sectors/Political";
// Method Pages
import HouseholdSurveys from "./pages/methods/HouseholdSurveys";
import FocusGroups from "./pages/methods/FocusGroups";
import CentralLocationTests from "./pages/methods/CentralLocationTests";
import DataCollection from "./pages/methods/DataCollection";
import OnlinePanels from "./pages/methods/OnlinePanels";
import SurveyResearch from "./pages/methods/SurveyResearch";
import ExperimentalSurveys from "./pages/methods/ExperimentalSurveys";
import IDISSIKII from "./pages/methods/IDISSIKII";
import Ethnography from "./pages/methods/Ethnography";
import Immersion from "./pages/methods/Immersion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// Query client setup
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="light" storageKey="psi-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SEOEnhancements />
          <Toaster />
          <Sonner />
          <Loader />
          <BrowserRouter>
            <GoogleAnalytics />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/team/:memberId" element={<TeamMember />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/coverage" element={<Coverage />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
                <Route path="/services/fmcg-retail-audit" element={<FMCGRetailAudit />} />
                <Route path="/services/media-advertising" element={<MediaAdvertising />} />
                
                {/* Sector Pages */}
                <Route path="/sectors/fmcg" element={<FMCG />} />
                <Route path="/sectors/financial" element={<Financial />} />
                <Route path="/sectors/health" element={<Health />} />
                <Route path="/sectors/automotive" element={<Automotive />} />
                <Route path="/sectors/telecoms" element={<Telecoms />} />
                <Route path="/sectors/agriculture" element={<Agriculture />} />
                <Route path="/sectors/media-education" element={<MediaEducation />} />
                <Route path="/sectors/political" element={<Political />} />
                
                {/* Method Pages */}
                <Route path="/methods/household-surveys" element={<HouseholdSurveys />} />
                <Route path="/methods/focus-groups" element={<FocusGroups />} />
                <Route path="/methods/clt" element={<CentralLocationTests />} />
                <Route path="/methods/data-collection" element={<DataCollection />} />
                <Route path="/methods/online-panels" element={<OnlinePanels />} />
                <Route path="/methods/survey-research" element={<SurveyResearch />} />
                <Route path="/methods/experimental-surveys" element={<ExperimentalSurveys />} />
                <Route path="/methods/idi-ssi-kii" element={<IDISSIKII />} />
                <Route path="/methods/ethnography" element={<Ethnography />} />
                <Route path="/methods/immersion" element={<Immersion />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
