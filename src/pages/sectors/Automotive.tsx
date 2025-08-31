import SEOHead from "@/components/SEOHead";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";
import {
  Car,
  Users,
  TrendingUp,
  Globe,
  BarChart3,
  Target,
  Wrench,
  MapPin,
  Star,
  Calendar,
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";

const Automotive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Satisfaction Studies",
      description: "Measure satisfaction across the entire customer journey from pre-purchase to after-sales service.",
      features: ["Dealer satisfaction", "Service quality assessment", "Brand loyalty tracking", "Complaint analysis"]
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Vehicle Usage & Behavior",
      description: "Understand how consumers use their vehicles and what drives their automotive choices.",
      features: ["Usage patterns analysis", "Feature preferences", "Buying journey mapping", "Decision factors"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Market Penetration Studies",
      description: "Track market share, brand performance, and competitive positioning in the automotive sector.",
      features: ["Brand tracking", "Market share analysis", "Competitor benchmarking", "Brand health metrics"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "New Product Testing",
      description: "Test new vehicle concepts, features, and innovations before market launch.",
      features: ["Concept testing", "Feature prioritization", "Price sensitivity", "Launch optimization"]
    }
  ];

  const insights = [
    {
      title: "Nigerian Automotive Market Growth",
      description: "The Nigerian automotive market is experiencing significant growth with increasing vehicle ownership.",
      stat: "15%",
      label: "Annual Growth Rate"
    },
    {
      title: "Electric Vehicle Readiness",
      description: "Growing interest in electric vehicles among urban Nigerian consumers, especially in Lagos.",
      stat: "28%",
      label: "Consider EV Purchase"
    },
    {
      title: "After-Sales Service Priority",
      description: "Quality after-sales service is the top factor influencing brand loyalty in Nigeria.",
      stat: "73%",
      label: "Rate Service as Critical"
    }
  ];

  const caseStudies = [
    {
      client: "Leading Automotive Brand",
      challenge: "Understanding brand perception and customer journey in Nigeria",
      solution: "Comprehensive customer satisfaction and brand tracking study across 6 states",
      results: ["45% improvement in customer satisfaction", "25% increase in brand awareness", "New service center strategy"]
    },
    {
      client: "International Car Manufacturer",
      challenge: "Launching new vehicle model in West African markets",
      solution: "Multi-country concept testing and pricing optimization study",
      results: ["Optimal pricing strategy identified", "Feature preferences mapped", "Launch strategy refined"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Automotive Market Research Services in Nigeria & West Africa | PSI"
        description="Expert automotive market research in Nigeria and West Africa. Customer satisfaction studies, vehicle usage analysis, market penetration tracking, and new product testing for automotive brands."
        keywords="automotive market research Nigeria, car industry research West Africa, vehicle customer satisfaction, automotive brand tracking, Nigeria car market"
        canonicalUrl="/sectors/automotive"
      />

      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-4 text-primary border-primary">
                  Automotive Sector
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Drive Success in the
                  <span className="text-primary"> Automotive </span>
                  Market
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Navigate the dynamic automotive landscape in Nigeria and West Africa with insights 
                  that fuel growth, enhance customer satisfaction, and accelerate market penetration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="xl" onClick={() => setIsModalOpen(true)}>
                    Request Automotive Research
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="xl" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                    View Case Studies
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Automotive Research Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive research solutions tailored for the automotive industry in West Africa
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <StaggerItem key={index}>
                    <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
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

        {/* Insights Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Nigerian Automotive Market Insights
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Key findings from our latest automotive research in Nigeria and West Africa
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-3 gap-8">
                {insights.map((insight, index) => (
                  <StaggerItem key={index}>
                    <Card className="text-center hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <div className="text-4xl font-bold text-primary mb-2">{insight.stat}</div>
                        <div className="text-sm text-accent font-medium mb-4">{insight.label}</div>
                        <h3 className="text-lg font-semibold mb-3">{insight.title}</h3>
                        <p className="text-muted-foreground text-sm">{insight.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Automotive Success Stories
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Real results from our automotive research projects across Nigeria and West Africa
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <StaggerItem key={index}>
                    <Card className="hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <Badge variant="outline" className="mb-4">{study.client}</Badge>
                        <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                        <p className="text-muted-foreground mb-6">{study.challenge}</p>
                        
                        <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                        <p className="text-muted-foreground mb-6">{study.solution}</p>
                        
                        <h3 className="text-xl font-semibold mb-4">Results</h3>
                        <div className="space-y-2">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm">{result}</span>
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

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-background">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Accelerate Your Automotive Business?
                </h2>
                <p className="text-lg mb-8 text-background/90">
                  Get actionable insights that drive automotive success in Nigeria and West Africa. 
                  Partner with PSI for research excellence.
                </p>
                <Button variant="outline" size="xl" className="border-background text-background hover:bg-background hover:text-primary">
                  Start Your Automotive Research
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default Automotive;