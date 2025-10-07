import { useState } from "react";
import { Link } from "react-router-dom";
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
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import RequestProposalModal from "./RequestProposalModal";
import logo from "@/assets/psi-logo-transparent.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { name: "Market Research", href: "/services/market-research" },
    { name: "Social & Opinion Research", href: "/services/social-research" },
    // {
    //   name: "Customer Satisfaction & NPS",
    //   href: "/services/customer-satisfaction",
    // },
    // { name: "FMCG & Retail Audit", href: "/services/fmcg-retail-audit" },
    // { name: "Media & Advertising", href: "/services/media-advertising" },
    // { name: "Mystery Shopping", href: "/services/mystery-shopping" },
  ];

  const sectors = [
    { name: "FMCG", href: "/sectors/fmcg" },
    { name: "Financial Services", href: "/sectors/financial" },
    { name: "Health & Pharma", href: "/sectors/health" },
    { name: "Automotive", href: "/sectors/automotive" },
    { name: "Telecoms & IT", href: "/sectors/telecoms" },
    { name: "Agriculture", href: "/sectors/agriculture" },
    { name: "Media & Education", href: "/sectors/media-education" },
  ];

  const methods = [
    { 
      name: "Quantitative Research", 
      href: "/methods/household-surveys",
      submenu: [
        { name: "Survey Research", href: "/methods/survey-research" },
        { name: "Experimental Surveys", href: "/methods/experimental-surveys" }
      ]
    },
    { 
      name: "Qualitative Research", 
      href: "/methods/focus-groups",
      submenu: [
        { name: "In-depth Interview (IDI)/Semi Structured Interview (SSI)/Key Informant Interview (KII)", href: "/methods/idi-ssi-kii" },
        { name: "Focus Group Discussions (FGD)", href: "/methods/focus-groups" },
        { name: "Ethnography", href: "/methods/ethnography" },
        { name: "Immersion", href: "/methods/immersion" }
      ]
    },
    { name: "Desk Research/Secondary Research", href: "/methods/clt" },
  ];

  return (
    <>
      <RequestProposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Utility Header */}
        <div className="bg-primary text-primary-foreground py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a
                href="tel:+234-802-324-7863"
                className="flex items-center gap-2 hover:text-primary-glow transition-smooth"
              >
                <Phone className="h-4 w-4" />
                +234-802-324-7863
              </a>
              <a
                href="https://wa.me/+234-802-324-7863"
                className="flex items-center gap-2 hover:text-primary-glow transition-smooth"
              >
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
              {/* <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  PSI
                </span>
              </div> */}
              <div>
                <img src={logo} className=" h-16" />

                {/* <p className="text-xs text-muted-foreground">
                  Market Research Excellence
                </p> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="space-x-6">
                  <NavigationMenuItem>
                    <Link
                      to="/"
                      className="font-medium text-foreground hover:text-primary transition-smooth"
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-96 p-4">
                        <div className="grid gap-3">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium">
                      Sectors
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-4">
                        <div className="grid gap-3">
                          {sectors.map((sector) => (
                            <Link
                              key={sector.name}
                              to={sector.href}
                              className="block p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
                            >
                              {sector.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium">
                      Methods
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="overflow-visible">
                      <div className="w-[500px] p-4 overflow-visible">
                        <div className="grid gap-2 overflow-visible">
                          {methods.map((method) => (
                            <div key={method.name} className="relative group/item overflow-visible">
                              {method.submenu ? (
                                <>
                                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth font-semibold cursor-pointer">
                                    <span className="flex-1">{method.name}</span>
                                    <ChevronDown className="h-4 w-4 -rotate-90" />
                                  </div>
                                  {/* Hover bridge - must stay visible */}
                                  <div className="absolute left-full top-0 w-4 h-full pointer-events-auto z-[200]" />
                                  {/* Nested dropdown */}
                                  <div className="absolute left-full top-0 ml-1 w-[450px] bg-popover border border-border rounded-lg shadow-lg p-3 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-auto z-[200]">
                                    <div className="space-y-1">
                                      {method.submenu.map((subitem) => (
                                        <Link
                                          key={subitem.name}
                                          to={subitem.href}
                                          className="block p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth text-sm"
                                        >
                                          {subitem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  to={method.href}
                                  className="block p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth font-semibold"
                                >
                                  {method.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium">
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-4">
                        <div className="grid gap-3">
                          <Link
                            to="/about"
                            className="block p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
                          >
                            Company Overview
                          </Link>
                          <Link
                            to="/team"
                            className="block p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
                          >
                            Management Team
                          </Link>
                          <Link
                            to="/clients"
                            className="block p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
                          >
                            Our Clients
                          </Link>
                          <Link
                            to="/coverage"
                            className="block p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
                          >
                            Coverage & Offices
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/insights"
                      className="font-medium text-foreground hover:text-primary transition-smooth"
                    >
                      Insights
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/contact"
                      className="font-medium text-foreground hover:text-primary transition-smooth"
                    >
                      Contact
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button, Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="cta"
                size="lg"
                className="hidden md:flex"
                onClick={() => setIsModalOpen(true)}
              >
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
            <motion.div
              className="lg:hidden mt-4 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block py-2 text-foreground hover:text-primary transition-smooth"
                >
                  Home
                </Link>

                <details className="group">
                  <summary className="py-2 cursor-pointer text-foreground hover:text-primary transition-smooth flex items-center justify-between">
                    Services
                    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block py-1 text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {service.name}
                      </Link>
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
                      <Link
                        key={sector.name}
                        to={sector.href}
                        className="block py-1 text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {sector.name}
                      </Link>
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
                      <Link
                        key={method.name}
                        to={method.href}
                        className="block py-1 text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {method.name}
                      </Link>
                    ))}
                  </div>
                </details>

                <details className="group">
                  <summary className="py-2 cursor-pointer text-foreground hover:text-primary transition-smooth flex items-center justify-between">
                    About
                    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/about"
                      className="block py-1 text-muted-foreground hover:text-primary transition-smooth"
                    >
                      Company Overview
                    </Link>
                    <Link
                      to="/team"
                      className="block py-1 text-muted-foreground hover:text-primary transition-smooth"
                    >
                      Management Team
                    </Link>
                    <Link
                      to="/clients"
                      className="block py-1 text-muted-foreground hover:text-primary transition-smooth"
                    >
                      Our Clients
                    </Link>
                    <Link
                      to="/coverage"
                      className="block py-1 text-muted-foreground hover:text-primary transition-smooth"
                    >
                      Coverage & Offices
                    </Link>
                  </div>
                </details>
                <Link
                  to="/insights"
                  className="block py-2 text-foreground hover:text-primary transition-smooth"
                >
                  Insights
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 text-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </Link>
              </div>

              <Button
                variant="cta"
                size="lg"
                className="w-full"
                onClick={() => setIsModalOpen(true)}
              >
                Request Proposal
              </Button>
            </motion.div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
