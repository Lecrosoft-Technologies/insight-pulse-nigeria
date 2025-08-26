import SEOHead from "@/components/SEOHead";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";
import {
  Users,
  Globe,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Filter,
  BarChart3
} from "lucide-react";

const OnlinePanels = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Quality Panelists",
      description: "Pre-screened, verified respondents representing diverse demographics across Nigeria and West Africa.",
      features: ["Identity verification", "Profile validation", "Quality scoring", "Regular updates"]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Rapid Deployment",
      description: "Launch surveys quickly and collect responses faster than traditional methods.",
      features: ["Instant deployment", "Real-time responses", "Quick turnaround", "24/7 availability"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precise Targeting",
      description: "Access specific demographics, psychographics, and behavioral segments with precision.",
      features: ["Advanced filtering", "Behavioral targeting", "Custom segments", "Dynamic profiling"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Quality",
      description: "Multiple quality control measures ensure reliable, consistent data collection.",
      features: ["Fraud detection", "Attention checks", "Consistency validation", "Response quality scoring"]
    }
  ];

  const panelCoverage = [
    {
      region: "Nigeria",
      population: "220M+",
      panelists: "50,000+",
      coverage: "All 36 States",
      demographics: ["Urban & Rural", "All age groups", "Income levels", "Education levels"]
    },
    {
      region: "Ghana", 
      population: "32M+",
      panelists: "12,000+",
      coverage: "All 16 Regions",
      demographics: ["Greater Accra", "Ashanti Region", "Northern Region", "Regional centers"]
    },
    {
      region: "West Africa",
      population: "400M+", 
      panelists: "75,000+",
      coverage: "7 Countries",
      demographics: ["Multi-country", "Cross-cultural", "Francophone", "Anglophone"]
    }
  ];

  const capabilities = [
    {
      title: "Panel Size",
      stat: "75,000+",
      description: "Active panelists across Nigeria and West Africa"
    },
    {
      title: "Response Rate",
      stat: "85%+",
      description: "Average response rate across all studies"
    },
    {
      title: "Quality Score",
      stat: "95%+", 
      description: "Data quality score with validation checks"
    },
    {
      title: "Turnaround Time",
      stat: "24-48hrs",
      description: "From launch to preliminary results"
    },
    {
      title: "Countries Covered",
      stat: "7+",
      description: "West African countries in our network"
    },
    {
      title: "Languages Supported",
      stat: "15+",
      description: "Local languages for survey deployment"
    }
  ];

  const applications = [
    "Brand awareness and tracking studies",
    "Product concept testing and validation", 
    "Customer satisfaction and NPS surveys",
    "Market segmentation research",
    "Advertising effectiveness studies",
    "Price sensitivity analysis",
    "Usage and attitude studies",
    "Political and social research"
  ];

  return (
    <>
      <SEOHead 
        title="Online Panels & Digital Surveys in Nigeria & West Africa | PSI"
        description="Access premium online panels in Nigeria and West Africa. Quality pre-screened respondents, rapid survey deployment, and reliable data collection for market research excellence."
        keywords="online panels Nigeria, digital surveys West Africa, market research panels Lagos, online respondents Nigeria, survey panels West Africa"
        canonicalUrl="/methods/online-panels"
      />

      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-4 border-background text-background">
                  Digital Research Methods
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Online Panels
                  <span className="block text-accent-glow"> for Digital Excellence</span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                  Access 75,000+ verified respondents across Nigeria and West Africa 
                  for rapid, reliable market research insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="xl" className="border-background text-background hover:bg-background hover:text-primary" onClick={() => setIsModalOpen(true)}>
                    Access Online Panels
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="xl" className="border-background/60 text-background hover:bg-background/10">
                    View Panel Coverage
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Choose Our Online Panels?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Premium panel quality meets advanced targeting capabilities for superior research outcomes
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                          {benefit.icon}
                        </div>
                        <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {benefit.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Panel Coverage Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Panel Coverage & Demographics
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive coverage across Nigeria and West Africa with diverse demographics
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-3 gap-8">
                {panelCoverage.map((region, index) => (
                  <StaggerItem key={index}>
                    <Card className="hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-4">{region.region}</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Population</span>
                            <span className="font-semibold text-primary">{region.population}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Panelists</span>
                            <span className="font-semibold text-accent">{region.panelists}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Coverage</span>
                            <span className="font-semibold">{region.coverage}</span>
                          </div>
                          <div className="pt-4 border-t">
                            <h4 className="font-semibold mb-2">Demographics</h4>
                            <div className="space-y-1">
                              {region.demographics.map((demo, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <Star className="h-3 w-3 text-primary flex-shrink-0" />
                                  <span className="text-xs">{demo}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Panel Capabilities & Performance
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Industry-leading performance metrics and capabilities
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {capabilities.map((capability, index) => (
                  <StaggerItem key={index}>
                    <Card className="text-center hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <div className="text-4xl font-bold text-primary mb-2">{capability.stat}</div>
                        <h3 className="text-lg font-semibold mb-3">{capability.title}</h3>
                        <p className="text-muted-foreground text-sm">{capability.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Online Panel Applications
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Versatile research solutions for diverse business objectives
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((application, index) => (
                  <StaggerItem key={index}>
                    <Card className="text-center hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-6">
                        <BarChart3 className="h-8 w-8 text-primary mx-auto mb-4" />
                        <p className="text-sm font-medium">{application}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Access Our Premium Panels?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Connect with 75,000+ verified respondents across Nigeria and West Africa. 
                  Launch your online research project today with PSI's premium panels.
                </p>
                <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Launch Your Panel Study
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default OnlinePanels;