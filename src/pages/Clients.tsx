import SEOHead from "@/components/SEOHead";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building, Star, Users, TrendingUp, Globe, ArrowRight } from "lucide-react";

const Clients = () => {
  const featuredClients = [
    {
      name: "MTN Nigeria",
      logo: "🟡",
      sector: "Telecommunications",
      projects: "25+ projects",
      description: "Consumer satisfaction surveys, brand tracking, and market penetration studies across Nigeria.",
      testimonial: "PSI's insights have been instrumental in our customer retention strategies.",
      services: ["Brand Tracking", "Customer Satisfaction", "Market Penetration"]
    },
    {
      name: "Dangote Group",
      logo: "🟢",
      sector: "FMCG & Manufacturing",
      projects: "30+ projects",
      description: "Market research for cement, sugar, and consumer goods across West Africa.",
      testimonial: "Reliable data and actionable insights that drive our expansion decisions.",
      services: ["Market Analysis", "Consumer Behavior", "Distribution Studies"]
    },
    {
      name: "First Bank Nigeria",
      logo: "🔵",
      sector: "Financial Services",
      projects: "20+ projects",
      description: "Customer experience studies, digital banking research, and SME market analysis.",
      testimonial: "PSI helps us understand our customers better than any other research partner.",
      services: ["Customer Experience", "Digital Banking", "SME Research"]
    },
    {
      name: "Unilever Nigeria",
      logo: "🔸",
      sector: "FMCG",
      projects: "35+ projects",
      description: "Product testing, brand positioning, and consumer insights for personal care and home care brands.",
      testimonial: "Their deep local knowledge combined with international standards is unmatched.",
      services: ["Product Testing", "Brand Positioning", "Consumer Insights"]
    },
    {
      name: "Nigerian Breweries",
      logo: "🟤",
      sector: "Beverages",
      projects: "18+ projects",
      description: "Market share analysis, advertising effectiveness, and consumer preference studies.",
      testimonial: "PSI's research has guided our most successful product launches.",
      services: ["Market Share", "Advertising Research", "Consumer Preferences"]
    },
    {
      name: "Access Bank",
      logo: "🟠",
      sector: "Banking",
      projects: "15+ projects",
      description: "Digital transformation research, customer journey mapping, and financial inclusion studies.",
      testimonial: "Their insights shaped our digital banking strategy across West Africa.",
      services: ["Digital Banking", "Customer Journey", "Financial Inclusion"]
    }
  ];

  const otherClients = [
    { name: "Airtel Nigeria", sector: "Telecommunications" },
    { name: "Nestlé Nigeria", sector: "FMCG" },
    { name: "PZ Cussons", sector: "Personal Care" },
    { name: "Guinness Nigeria", sector: "Beverages" },
    { name: "UBA Group", sector: "Banking" },
    { name: "Zenith Bank", sector: "Banking" },
    { name: "GTBank", sector: "Banking" },
    { name: "WAPCO (Lafarge)", sector: "Building Materials" },
    { name: "Cadbury Nigeria", sector: "Confectionery" },
    { name: "Promasidor", sector: "Food & Beverages" },
    { name: "Flour Mills Nigeria", sector: "Food Manufacturing" },
    { name: "Honeywell Group", sector: "Diversified" },
    { name: "Oando PLC", sector: "Oil & Gas" },
    { name: "Ecobank", sector: "Banking" },
    { name: "Stanbic IBTC", sector: "Banking" },
    { name: "FCMB", sector: "Banking" },
    { name: "Interswitch", sector: "Fintech" },
    { name: "Jumia Nigeria", sector: "E-commerce" },
    { name: "Konga", sector: "E-commerce" },
    { name: "Flutterwave", sector: "Fintech" },
    { name: "Paystack", sector: "Fintech" },
    { name: "Bolt (Taxify)", sector: "Transportation" },
    { name: "Uber Nigeria", sector: "Transportation" },
    { name: "Nigerian National Petroleum Corporation", sector: "Oil & Gas" },
    { name: "Shell Nigeria", sector: "Oil & Gas" },
    { name: "Total Nigeria", sector: "Oil & Gas" },
    { name: "Mobil Oil Nigeria", sector: "Oil & Gas" },
    { name: "MTN Ghana", sector: "Telecommunications" },
    { name: "Vodafone Ghana", sector: "Telecommunications" },
    { name: "Orange Senegal", sector: "Telecommunications" },
    { name: "Orange Ivory Coast", sector: "Telecommunications" },
    { name: "Standard Chartered Ghana", sector: "Banking" },
    { name: "Société Générale Ghana", sector: "Banking" },
    { name: "Ecobank Ghana", sector: "Banking" },
    { name: "Fan Milk Ghana", sector: "Food & Beverages" },
    { name: "Unilever Ghana", sector: "FMCG" },
    { name: "Guinness Ghana", sector: "Beverages" }
  ];

  const sectors = [
    { name: "Banking & Financial Services", count: 12, icon: Building },
    { name: "Telecommunications", count: 8, icon: Globe },
    { name: "FMCG & Consumer Goods", count: 15, icon: Star },
    { name: "Oil & Gas", count: 6, icon: TrendingUp },
    { name: "Food & Beverages", count: 10, icon: Users },
    { name: "Technology & Fintech", count: 7, icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Our Clients — Trusted by Nigeria's Leading Brands | PSI Market Research"
        description="See why MTN, Dangote, First Bank, Unilever and 500+ companies trust PSI for market research insights across Nigeria and West Africa. Client testimonials and case studies."
        keywords="PSI clients, MTN Nigeria research, Dangote market research, First Bank insights, Unilever Nigeria, Nigerian companies research partner, client testimonials"
        canonicalUrl="/clients"
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
                    Our Clients
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                    Trusted by
                    <span className="text-primary"> Nigeria's </span>
                    Leading Brands
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    From Fortune 500 companies to innovative startups, we've helped over 500 organizations 
                    make smarter decisions with reliable market insights.
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                <motion.div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground font-medium">Clients Served</div>
                </motion.div>
                <motion.div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">15</div>
                  <div className="text-muted-foreground font-medium">Countries</div>
                </motion.div>
                <motion.div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground font-medium">Client Retention</div>
                </motion.div>
                <motion.div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">1000+</div>
                  <div className="text-muted-foreground font-medium">Projects Delivered</div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Clients */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Featured Client Success Stories</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See how we've helped Nigeria's top brands gain competitive advantage through actionable insights.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredClients.map((client, index) => (
                  <StaggerItem key={client.name}>
                    <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-strong">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="text-4xl">{client.logo}</div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="secondary">{client.sector}</Badge>
                              <Badge variant="outline">{client.projects}</Badge>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {client.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">Services Provided:</h4>
                          <div className="flex flex-wrap gap-2">
                            {client.services.map((service) => (
                              <Badge key={service} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-6">
                          "{client.testimonial}"
                        </blockquote>

                        <Button variant="outline" className="w-full group">
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Industry Breakdown */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Industries We Serve</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our expertise spans across Nigeria's key economic sectors.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector) => (
                  <StaggerItem key={sector.name}>
                    <Card className="hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-6 text-center">
                        <sector.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">{sector.name}</h3>
                        {/* <p className="text-2xl font-bold text-accent">{sector.count}</p> */}
                        {/* <p className="text-sm text-muted-foreground">Active Clients</p> */}
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* All Clients Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">All Our Valued Clients</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive list of organizations that trust PSI for their market research needs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {otherClients.map((client, index) => (
                  <motion.div
                    key={client.name}
                    className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-soft transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02, duration: 0.5 }}
                  >
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{client.name}</h4>
                      <p className="text-xs text-muted-foreground">{client.sector}</p>
                    </div>
                  </motion.div>
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
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Let's discuss how PSI can help your organization gain competitive advantage through market insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="glass" size="xl">
                    Start Your Project
                  </Button>
                  <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                    Download Client Success Stories
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

export default Clients;