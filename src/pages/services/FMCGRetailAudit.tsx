import SEOHead from "@/components/SEOHead";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  TrendingUp, 
  MapPin, 
  Clock, 
  BarChart3,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Package
} from "lucide-react";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const FMCGRetailAudit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const keyFeatures = [
    {
      icon: ShoppingCart,
      title: "Retail Panel Tracking",
      description: "Monitor product availability, pricing, and shelf presence across traditional trade, modern trade, and e-commerce channels."
    },
    {
      icon: TrendingUp,
      title: "Market Share Analysis",
      description: "Track your brand's performance versus competitors with detailed market share and volume analysis."
    },
    {
      icon: MapPin,
      title: "Geographic Coverage",
      description: "Complete coverage across Nigeria's 36 states and FCT, from Lagos to Kano, Port Harcourt to Abuja."
    },
    {
      icon: Clock,
      title: "Real-time Reporting",
      description: "Get weekly, monthly, and quarterly reports with real-time dashboard access to track performance."
    }
  ];

  const serviceOfferings = [
    {
      title: "Traditional Trade Audit",
      description: "Monitor product availability, pricing, and distribution across traditional retail outlets.",
      features: ["Price monitoring", "Stock availability", "Shelf share analysis", "Competitor tracking"]
    },
    {
      title: "Modern Trade Tracking",
      description: "Comprehensive tracking across supermarkets, hypermarkets, and organized retail chains.",
      features: ["SKU performance", "Promotional effectiveness", "Category dynamics", "Store compliance"]
    },
    {
      title: "E-commerce Monitoring",
      description: "Track online presence, pricing, and performance across major e-commerce platforms.",
      features: ["Online availability", "Price comparison", "Review analysis", "Digital shelf optimization"]
    },
    {
      title: "Distribution Analysis",
      description: "Measure distribution reach, penetration, and identify expansion opportunities.",
      features: ["Weighted distribution", "Numeric distribution", "Gap analysis", "Route optimization"]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Optimize Pricing Strategy",
      description: "Data-driven pricing decisions based on competitive intelligence and market dynamics."
    },
    {
      icon: Users,
      title: "Improve Distribution",
      description: "Identify gaps and opportunities to expand your distribution network effectively."
    },
    {
      icon: BarChart3,
      title: "Track Market Performance",
      description: "Monitor market share, volume trends, and competitive positioning in real-time."
    },
    {
      icon: CheckCircle,
      title: "Ensure Compliance",
      description: "Monitor promotional compliance and trade marketing execution across channels."
    }
  ];

  const industries = [
    "Food & Beverages", "Personal Care", "Home Care", "Pharmaceuticals", 
    "Electronics", "Alcoholic Beverages", "Confectionery", "Dairy Products"
  ];

  return (
    <>
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SEOHead 
        title="FMCG & Retail Audit Services Nigeria — Market Share & Distribution Tracking | PSI"
        description="Professional FMCG retail audit services across Nigeria. Track market share, pricing, distribution, and competitive intelligence. Traditional trade, modern trade & e-commerce monitoring."
        keywords="FMCG retail audit Nigeria, market share tracking, distribution analysis, competitive intelligence, traditional trade monitoring, modern trade audit, retail price tracking Nigeria"
        canonicalUrl="/services/fmcg-retail-audit"
      />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Badge variant="outline" className="mb-4 text-primary border-primary">
                    FMCG & Retail Audit
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                    <span className="gradient-primary bg-clip-text text-transparent">Complete Retail </span>
                    Market Intelligence
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Track market share, pricing, distribution, and competitive dynamics across Nigeria's 
                    traditional trade, modern trade, and e-commerce channels with our comprehensive retail audit services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="cta" size="xl" onClick={() => setIsModalOpen(true)}>
                      Start Your Retail Audit
                    </Button>
                    <Button variant="outline" size="xl">
                      Download Sample Report
                    </Button>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Comprehensive Retail Intelligence</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From traditional markets to modern retail chains, we provide complete visibility into your market performance.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {keyFeatures.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <Card className="hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <feature.icon className="h-12 w-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Retail Audit Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tailored solutions for different retail channels and business needs.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {serviceOfferings.map((service, index) => (
                  <StaggerItem key={service.title}>
                    <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose PSI Retail Audit?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Drive business growth with actionable retail intelligence and competitive insights.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit) => (
                  <StaggerItem key={benefit.title}>
                    <Card className="text-center hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-6">
                        <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="font-bold mb-3">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Industries We Serve</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Specialized retail audit solutions across key FMCG categories.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((industry) => (
                  <Badge key={industry} variant="secondary" className="px-4 py-2">
                    {industry}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Optimize Your Retail Performance?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Get comprehensive retail intelligence that drives informed decisions and competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="glass" size="xl" onClick={() => setIsModalOpen(true)}>
                    Request Proposal
                  </Button>
                  <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default FMCGRetailAudit;