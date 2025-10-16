import SEOHead from "@/components/SEOHead";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollEffects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";
import {
  Smartphone,
  Wifi,
  Globe,
  Signal,
  Users,
  TrendingUp,
  Target,
  BarChart3,
  Network,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

const Telecoms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Experience Research",
      description:
        "Measure and improve customer satisfaction across all touchpoints in the telecoms journey.",
      features: [
        "Net Promoter Score tracking",
        "Service quality assessment",
        "Churn analysis",
        "Customer journey mapping",
      ],
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Network Quality Studies",
      description:
        "Assess network performance perception and identify areas for infrastructure improvement.",
      features: [
        "Coverage satisfaction",
        "Speed perception studies",
        "Quality benchmarking",
        "Service reliability tracking",
      ],
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Market Share Analysis",
      description:
        "Track competitive positioning and market dynamics in the telecommunications sector.",
      features: [
        "Brand penetration tracking",
        "Competitor analysis",
        "Market share monitoring",
        "Usage pattern analysis",
      ],
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Product Launch Research",
      description:
        "Support successful launches of new telecoms services and products with market insights.",
      features: [
        "Concept testing",
        "Pricing optimization",
        "Feature prioritization",
        "Launch impact measurement",
      ],
    },
  ];

  const insights = [
    {
      title: "Mobile Penetration Rate",
      description:
        "Nigeria has one of the highest mobile penetration rates in West Africa with continued growth.",
      stat: "104%",
      label: "Mobile Penetration",
    },
    {
      title: "Internet Usage Growth",
      description:
        "Rapid increase in internet usage driven by smartphone adoption and improved network coverage.",
      stat: "85%",
      label: "Internet Users",
    },
    {
      title: "Data Service Priority",
      description:
        "Data services have become the primary revenue driver for telecoms operators in Nigeria.",
      stat: "67%",
      label: "Revenue from Data",
    },
  ];

  const caseStudies = [
    {
      client: "Major Telecoms Operator",
      challenge: "Understanding customer churn and improving retention rates",
      solution:
        "Comprehensive customer satisfaction and churn analysis across all service touchpoints",
      results: [
        "35% reduction in customer churn",
        "Improved customer satisfaction by 40%",
        "New retention strategy implemented",
      ],
    },
    {
      client: "Regional Network Provider",
      challenge: "Launching 5G services in competitive Nigerian market",
      solution:
        "Market readiness assessment and pricing strategy optimization study",
      results: [
        "Optimal 5G pricing identified",
        "Target segments prioritized",
        "25% faster market adoption",
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Telecoms & IT Market Research Services in Nigeria | PSI"
        description="Expert telecommunications and IT market research in Nigeria and West Africa. Customer experience studies, network quality research, market share analysis, and product launch support for telecoms companies."
        keywords="telecoms market research Nigeria, telecommunications research West Africa, mobile network research, internet usage studies, 5G research Nigeria"
        canonicalUrl="/sectors/telecoms"
      />

      <RequestProposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge
                  variant="outline"
                  className="mb-4 text-primary border-primary"
                >
                  Telecoms & IT Sector
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Connect with Your Customers in the
                  <span className="text-primary"> Digital </span>
                  Age
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Navigate Nigeria's rapidly evolving telecommunications
                  landscape with research that drives network excellence,
                  customer satisfaction, and market leadership.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="cta"
                    size="xl"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Request Telecoms Research
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-foreground text-foreground hover:bg-foreground hover:text-background"
                  >
                    View Market Insights
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
                  Telecoms Research Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive research solutions for telecommunications
                  companies in Nigeria and West Africa
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
                        <CardTitle className="text-xl mb-2">
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
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
                  Nigerian Telecoms Market Data
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Latest statistics and trends from Nigeria's telecommunications
                  industry
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-3 gap-8">
                {insights.map((insight, index) => (
                  <StaggerItem key={index}>
                    <Card className="text-center hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <div className="text-4xl font-bold text-primary mb-2">
                          {insight.stat}
                        </div>
                        <div className="text-sm text-accent font-medium mb-4">
                          {insight.label}
                        </div>
                        <h3 className="text-lg font-semibold mb-3">
                          {insight.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {insight.description}
                        </p>
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
                  Telecoms Success Stories
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  How our research has helped telecoms companies achieve their
                  goals in Nigeria
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <StaggerItem key={index}>
                    <Card className="hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <Badge variant="outline" className="mb-4">
                          {study.client}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-4">
                          Challenge
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {study.challenge}
                        </p>

                        <h3 className="text-xl font-semibold mb-4">
                          Our Solution
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {study.solution}
                        </p>

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
                  Stay Ahead in the Digital Revolution
                </h2>
                <p className="text-lg mb-8 text-background/90">
                  Get the insights you need to thrive in Nigeria's competitive
                  telecoms market. Partner with PSI for research that drives
                  digital success.
                </p>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => setIsModalOpen(true)}
                  className="border-background text-primary hover:bg-background hover:text-primary"
                >
                  Start Your Telecoms Research
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default Telecoms;
