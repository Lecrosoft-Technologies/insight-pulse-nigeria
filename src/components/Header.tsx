import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: "Market Research", href: "/services/market-research" },
    { name: "Social & Opinion Research", href: "/services/social-research" },
    { name: "Customer Satisfaction & NPS", href: "/services/customer-satisfaction" },
    { name: "FMCG & Retail Audit", href: "/services/fmcg-retail-audit" },
    { name: "Media & Advertising", href: "/services/media-advertising" },
    { name: "Mystery Shopping", href: "/services/mystery-shopping" },
  ];

  const sectors = [
    { name: "FMCG", href: "/sectors/fmcg" },
    { name: "Financial Services", href: "/sectors/financial" },
    { name: "Health & Pharma", href: "/sectors/health" },
    { name: "Automotive", href: "/sectors/automotive" },
    { name: "Telecoms & IT", href: "/sectors/telecoms" },
    { name: "Agriculture", href: "/sectors/agriculture" },
  ];

  const methods = [
    { name: "Household Surveys", href: "/methods/household-surveys" },
    { name: "Focus Groups & IDIs", href: "/methods/focus-groups" },
    { name: "Central Location Tests", href: "/methods/clt" },
    { name: "CATI / CAPI / CAWI", href: "/methods/data-collection" },
    { name: "Online Panels", href: "/methods/online-panels" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Utility Header */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+234-XXX-XXXXX" className="flex items-center gap-2 hover:text-primary-glow transition-smooth">
              <Phone className="h-4 w-4" />
              +234-XXX-XXXXX
            </a>
            <a href="https://wa.me/234XXXXXXXXX" className="flex items-center gap-2 hover:text-primary-glow transition-smooth">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
          <div className="hidden md:block">
            <span>Market Research Experts in Nigeria & West Africa</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PSI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Practical Sampling International</h1>
              <p className="text-xs text-muted-foreground">Market Research Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="font-medium text-foreground hover:text-primary transition-smooth"
                    href="/"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-96 p-4">
                      <div className="grid gap-3">
                        {services.map((service) => (
                          <NavigationMenuLink
                            key={service.name}
                            href={service.href}
                            className="block p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
                          >
                            {service.name}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Sectors</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-3">
                        {sectors.map((sector) => (
                          <NavigationMenuLink
                            key={sector.name}
                            href={sector.href}
                            className="block p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
                          >
                            {sector.name}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Methods</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-3">
                        {methods.map((method) => (
                          <NavigationMenuLink
                            key={method.name}
                            href={method.href}
                            className="block p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
                          >
                            {method.name}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="font-medium text-foreground hover:text-primary transition-smooth"
                    href="/about"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="font-medium text-foreground hover:text-primary transition-smooth"
                    href="/insights"
                  >
                    Insights
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="font-medium text-foreground hover:text-primary transition-smooth"
                    href="/contact"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="cta" size="lg" className="hidden md:flex">
              Request Proposal
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4 animate-fade-in-up">
            <div className="space-y-2">
              <a href="/" className="block py-2 text-foreground hover:text-primary transition-smooth">
                Home
              </a>
              
              <details className="group">
                <summary className="py-2 cursor-pointer text-foreground hover:text-primary transition-smooth flex items-center justify-between">
                  Services
                  <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block py-1 text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </details>

              <details className="group">
                <summary className="py-2 cursor-pointer text-foreground hover:text-primary transition-smooth flex items-center justify-between">
                  Sectors
                  <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 space-y-1">
                  {sectors.map((sector) => (
                    <a
                      key={sector.name}
                      href={sector.href}
                      className="block py-1 text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {sector.name}
                    </a>
                  ))}
                </div>
              </details>

              <details className="group">
                <summary className="py-2 cursor-pointer text-foreground hover:text-primary transition-smooth flex items-center justify-between">
                  Methods
                  <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 space-y-1">
                  {methods.map((method) => (
                    <a
                      key={method.name}
                      href={method.href}
                      className="block py-1 text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {method.name}
                    </a>
                  ))}
                </div>
              </details>

              <a href="/about" className="block py-2 text-foreground hover:text-primary transition-smooth">
                About
              </a>
              <a href="/insights" className="block py-2 text-foreground hover:text-primary transition-smooth">
                Insights
              </a>
              <a href="/contact" className="block py-2 text-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </div>

            <Button variant="cta" size="lg" className="w-full">
              Request Proposal
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;