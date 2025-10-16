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
  MapPin,
  Users,
  Clock,
  Target,
  TrendingUp,
  Shield,
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Eye,
  ThumbsUp,
} from "lucide-react";

const CentralLocationTests = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const advantages = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Controlled Environment",
      description:
        "Standardized testing conditions ensure consistent and reliable results across all participants.",
      features: [
        "Standardized setup",
        "Controlled variables",
        "Professional facilities",
        "Reduced bias",
      ],
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Direct Observation",
      description:
        "Real-time observation of consumer behavior and reactions to products or concepts.",
      features: [
        "Behavioral insights",
        "Emotional responses",
        "Usage patterns",
        "Interaction analysis",
      ],
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Versatile Testing",
      description:
        "Suitable for various research objectives from product testing to concept evaluation.",
      features: [
        "Product trials",
        "Taste testing",
        "Concept evaluation",
        "Packaging assessment",
      ],
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Efficient",
      description:
        "Conduct multiple tests simultaneously with faster data collection and immediate feedback.",
      features: [
        "Rapid execution",
        "Immediate results",
        "Multiple sessions",
        "Quick turnaround",
      ],
    },
  ];

  const applications = [
    {
      category: "FMCG Testing",
      description:
        "Product trials for food, beverages, personal care, and household products.",
      examples: [
        "New product taste tests",
        "Packaging preferences",
        "Brand comparisons",
        "Usage trials",
      ],
    },
    {
      category: "Concept Testing",
      description:
        "Evaluate new product concepts, advertising materials, and brand positioning.",
      examples: [
        "Ad concept testing",
        "Brand positioning",
        "Campaign evaluation",
        "Message testing",
      ],
    },
    {
      category: "Sensory Research",
      description:
        "Detailed sensory analysis using controlled testing environments.",
      examples: [
        "Taste profiling",
        "Texture analysis",
        "Aroma testing",
        "Visual assessment",
      ],
    },
    {
      category: "Technology Testing",
      description:
        "User experience testing for digital products and applications.",
      examples: [
        "App usability",
        "Website navigation",
        "Interface design",
        "Feature testing",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Study Design",
      description:
        "Define objectives, target audience, and testing methodology",
    },
    {
      step: "2",
      title: "Facility Setup",
      description: "Prepare standardized testing environment and materials",
    },
    {
      step: "3",
      title: "Recruitment",
      description:
        "Screen and recruit qualified participants matching target profile",
    },
    {
      step: "4",
      title: "Testing Sessions",
      description:
        "Conduct structured testing sessions with direct observation",
    },
    {
      step: "5",
      title: "Data Analysis",
      description: "Analyze quantitative and qualitative feedback for insights",
    },
    {
      step: "6",
      title: "Reporting",
      description:
        "Deliver comprehensive findings with actionable recommendations",
    },
  ];

  return (
    <>
      <SEOHead
        title="Central Location Testing (CLT) Services in Nigeria & West Africa | PSI"
        description="Professional Central Location Testing services in Nigeria and West Africa. Product testing, concept evaluation, sensory analysis, and consumer research in controlled environments by PSI experts."
        keywords="central location testing Nigeria, CLT services West Africa, product testing Lagos, consumer research facility, taste testing Nigeria, concept testing services"
        canonicalUrl="/methods/central-location-tests"
      />

      <RequestProposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge
                  variant="outline"
                  className="mb-4 border-background text-background"
                >
                  Research Methods
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Central Location Testing
                  <span className="block text-accent-glow">
                    {" "}
                    for Precise Insights
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                  Conduct controlled product testing and concept evaluation in
                  professional facilities across Nigeria and West Africa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-background text-primary hover:bg-background hover:text-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Request CLT Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  {/* <Button
                    variant="outline"
                    size="xl"
                    className="border-background/60 text-background hover:bg-background/10"
                  >
                    View Capabilities
                  </Button> */}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Choose Central Location Testing?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  CLT provides controlled, standardized environments for
                  reliable consumer research
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {advantages.map((advantage, index) => (
                  <StaggerItem key={index}>
                    <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                          {advantage.icon}
                        </div>
                        <CardTitle className="text-xl mb-2">
                          {advantage.title}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {advantage.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {advantage.features.map((feature, idx) => (
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

        {/* Applications Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  CLT Applications & Use Cases
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Versatile testing solutions for various research objectives
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-2 gap-8">
                {applications.map((app, index) => (
                  <StaggerItem key={index}>
                    <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold mb-3">
                          {app.category}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {app.description}
                        </p>
                        <div className="space-y-2">
                          {app.examples.map((example, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <ThumbsUp className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm">{example}</span>
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

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our CLT Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Systematic approach ensuring reliable and actionable results
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((step, index) => (
                  <StaggerItem key={index}>
                    <Card className="text-center hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                          {step.step}
                        </div>
                        <h3 className="text-lg font-semibold mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
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
                  Ready to Start Your CLT Study?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Get precise consumer insights through our professional Central
                  Location Testing services. Contact PSI today to design your
                  perfect study.
                </p>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => setIsModalOpen(true)}
                  className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
                >
                  Launch Your CLT Project
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default CentralLocationTests;
