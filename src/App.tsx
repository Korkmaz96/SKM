import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leistungen from "./pages/Leistungen";
import Sachverstaendigenleistungen from "./pages/Sachverstaendigenleistungen";
import BetreiberverantwortungOrganisation from "./pages/BetreiberverantwortungOrganisation";
import CorporateRealEstateLeanFM from "./pages/CorporateRealEstateLeanFM";
import Referenzen from "./pages/Referenzen";
import Unternehmen from "./pages/Unternehmen";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/SKM">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/leistungen/sachverstaendigenleistungen" element={<Sachverstaendigenleistungen />} />
          <Route path="/leistungen/betreiberverantwortung-organisation" element={<BetreiberverantwortungOrganisation />} />
          <Route path="/leistungen/corporate-real-estate-lean-fm" element={<CorporateRealEstateLeanFM />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/unternehmen" element={<Unternehmen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;