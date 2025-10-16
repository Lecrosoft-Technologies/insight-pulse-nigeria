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
  Wheat,
  Sprout,
  TrendingUp,
  Users,
  BarChart3,
  Target,
  Truck,
  Cloud,
  Droplets,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
} from "lucide-react";

const Agriculture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Farmer Behavior Studies",
      description:
        "Understand farming practices, decision-making processes, and adoption of new agricultural technologies.",
      features: [
        "Crop selection patterns",
        "Technology adoption",
        "Input usage analysis",
        "Seasonal behavior tracking",
      ],
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Agricultural Market Analysis",
      description:
        "Track market trends, pricing dynamics, and supply chain insights in Nigeria's agricultural sector.",
      features: [
        "Price trend analysis",
        "Market demand forecasting",
        "Supply chain mapping",
        "Export potential assessment",
      ],
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Product Acceptance Testing",
      description:
        "Test acceptance of new agricultural products, seeds, fertilizers, and farming equipment.",
      features: [
        "Seed variety testing",
        "Equipment evaluation",
        "Input product trials",
        "Adoption likelihood assessment",
      ],
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Value Chain Research",
      description:
        "Analyze the complete agricultural value chain from farm to market to identify optimization opportunities.",
      features: [
        "Post-harvest handling",
        "Storage solutions",
        "Distribution channels",
        "Market access barriers",
      ],
    },
  ];

  const insights = [
    {
      title: "Smallholder Farmers",
      description:
        "Nigeria's agriculture is dominated by smallholder farmers cultivating an average of 1-4 hectares.",
      stat: "70%",
      label: "Agricultural Output",
    },
    {
      title: "Youth in Agriculture",
      description:
        "Growing interest among Nigerian youth in modern agricultural practices and agribusiness.",
      stat: "32%",
      label: "Under 35 Years",
    },
    {
      title: "Technology Adoption",
      description:
        "Mobile technology is transforming how farmers access information and financial services.",
      stat: "58%",
      label: "Use Mobile Tech",
    },
  ];

  const caseStudies = [
    {
      client: "Agricultural Input Company",
      challenge:
        "Understanding farmer preferences for seed varieties across different regions",
      solution:
        "Multi-state farmer survey covering 2,000 smallholder farmers across 6 agricultural zones",
      results: [
        "Regional preferences mapped",
        "Optimal product mix identified",
        "15% increase in farmer adoption",
      ],
    },
    {
      client: "International Development Organization",
      challenge:
        "Assessing impact of agricultural training programs on farming practices",
      solution:
        "Pre-post evaluation study tracking behavior change among 1,500 trained farmers",
      results: [
        "40% improvement in yields",
        "Increased income by 35%",
        "Enhanced food security metrics",
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Agricultural Market Research Services in Nigeria & West Africa | PSI"
        description="Expert agricultural market research in Nigeria and West Africa. Farmer behavior studies, agricultural market analysis, product acceptance testing, and value chain research for agribusiness success."
        keywords="agricultural market research Nigeria, farming behavior studies, agricultural surveys West Africa, smallholder farmer research, agribusiness insights Nigeria"
        canonicalUrl="/sectors/agriculture"
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
                  Agriculture Sector
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Cultivate Success in
                  <span className="text-primary"> Nigeria's </span>
                  Agricultural Market
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Drive agricultural innovation and growth with insights from
                  Nigeria's largest farming communities. Understanding that
                  feeds the nation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="cta"
                    size="xl"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Request Agricultural Research
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-foreground text-foreground hover:bg-foreground hover:text-background"
                  >
                    View Farming Insights
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
                  Agricultural Research Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive research solutions for the agricultural sector
                  in Nigeria and West Africa
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
                  Nigerian Agriculture Insights
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Key findings from our agricultural research across Nigeria's
                  farming communities
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
                  Agricultural Success Stories
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  How our research has supported agricultural development and
                  farmer success in Nigeria
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
                  Grow Your Agricultural Impact
                </h2>
                <p className="text-lg mb-8 text-background/90">
                  Unlock the potential of Nigeria's agricultural sector with
                  research-driven insights. Partner with PSI to cultivate
                  success.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsModalOpen(true)}
                  size="xl"
                  className="border-background text-primary hover:bg-background hover:text-primary"
                >
                  Start Your Agricultural Research
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default Agriculture;
