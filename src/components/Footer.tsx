import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import logo from "@/assets/psi-logo-white.png";
const Footer = () => {
  const services = [
    { name: "Market Research", href: "/services/market-research" },
    { name: "Social & Opinion Research", href: "/services/social-research" },
    { name: "Customer Satisfaction", href: "/services/customer-satisfaction" },
    { name: "FMCG & Retail Audit", href: "/services/retail-audit" },
    { name: "Mystery Shopping", href: "/services/mystery-shopping" },
    { name: "Product Testing & CLT", href: "/services/product-testing" },
  ];

  const sectors = [
    { name: "FMCG", href: "/sectors/fmcg" },
    { name: "Financial Services", href: "/sectors/financial" },
    { name: "Health & Pharma", href: "/sectors/health" },
    { name: "Automotive", href: "/sectors/automotive" },
    { name: "Telecoms & IT", href: "/sectors/telecoms" },
    { name: "Agriculture", href: "/sectors/agriculture" },
  ];

  const company = [
    { name: "About PSI", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights & Blog", href: "/insights" },
    { name: "Contact Us", href: "/contact" },
  ];

  const coverage = [
    "Nigeria (HQ)",
    "Ghana",
    "Senegal",
    "Ivory Coast",
    "Burkina Faso",
    "Mali",
    "Togo",
    "Benin",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {/* <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    PSI
                  </span>
                </div> */}
                <div>
                  <img src={logo} className=" h-14 w-200" />
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Practical Sampling International (PSI) is a full-service
                research agency based in Nigeria with a trusted network across
                West Africa. We deliver marketing, social and opinion
                research—from proposal to final insights—so you can act with
                confidence.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">
                  118b, Bisi Obadina Street, Omole Phase 1 Lagos, Nigeria
                  (Headquarters)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">+234-802-324-7863</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">hello@psi-research.net</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-smooth"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-semibold mb-4">Sectors</h4>
            <ul className="space-y-2">
              {sectors.map((sector) => (
                <li key={sector.name}>
                  <a
                    href={sector.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                  >
                    {sector.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Coverage */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Coverage</h4>
              <ul className="space-y-1">
                {coverage.map((country) => (
                  <li key={country} className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-primary-foreground/80 text-sm">
                      {country}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2">Get Insights & Reports</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Subscribe to receive our latest market insights and research
              reports.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 placeholder:text-primary-foreground/60 text-primary-foreground"
              />
              <Button variant="glass" size="default" className="group">
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
              <a
                href="/privacy"
                className="hover:text-primary-foreground transition-smooth"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-primary-foreground transition-smooth"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="hover:text-primary-foreground transition-smooth"
              >
                Cookie Policy
              </a>
              <a
                href="/sitemap.xml"
                className="hover:text-primary-foreground transition-smooth"
              >
                Sitemap
              </a>
            </div>

            <div className="text-sm text-primary-foreground/80">
              © 2025 Practical Sampling International. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Strip */}
      <div className="bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-semibold mb-1">
                Ready to commission a study?
              </h5>
              <p className="text-accent-foreground/90 text-sm">
                Get a custom proposal in 24 hours
              </p>
            </div>
            <Button
              variant="outline"
              className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
            >
              Start Here
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
