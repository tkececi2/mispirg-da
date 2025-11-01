import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
import AboutPage from "@/pages/AboutPage";
import GIPage from "@/pages/GIPage";
import ContactPage from "@/pages/ContactPage";
import KVKKPage from "@/pages/KVKKPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/urunler" component={ProductsPage} />
      <Route path="/kurumsal" component={AboutPage} />
      <Route path="/cografi-isaret" component={GIPage} />
      <Route path="/iletisim" component={ContactPage} />
      <Route path="/kvkk" component={KVKKPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
