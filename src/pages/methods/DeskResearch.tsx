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
  BookOpen,
  Database,
  TrendingUp,
  BarChart3,
  FileSearch,
  Globe,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Target,
  Lightbulb,
} from "lucide-react";

const DeskResearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const advantages = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Cost-Effective & Time-Efficient",
      description:
        "Access existing data quickly without the time and expense of primary research.",
      features: [
        "Lower research costs",
        "Rapid data access",
        "No fieldwork required",
        "Immediate insights",
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Comprehensive Data Sources",
      description:
        "Leverage multiple sources including government data, industry reports, and academic research.",
      features: [
        "Government statistics",
        "Industry publications",
        "Academic journals",
        "Market databases",
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Historical Perspective",
      description:
        "Analyze trends and patterns over time using archived data and historical records.",
      features: [
        "Trend analysis",
        "Historical benchmarks",
        "Pattern identification",
        "Time-series data",
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliable Information",
      description:
        "Access verified data from credible sources ensuring accuracy and reliability.",
      features: [
        "Verified sources",
        "Quality data",
        "Peer-reviewed research",
        "Official statistics",
      ],
    },
  ];

  const dataSources = [
    {
      category: "Government & Official Sources",
      description:
        "National statistical bureaus, regulatory bodies, and government publications.",
      examples: [
        "National Bureau of Statistics",
        "Central Bank reports",
        "Ministry publications",
        "Census data",
      ],
    },
    {
      category: "Industry Reports & Publications",
      description:
        "Trade associations, industry bodies, and commercial research firms.",
      examples: [
        "Market research reports",
        "Industry white papers",
        "Trade publications",
        "Sector analyses",
      ],
    },
    {
      category: "Academic & Research Institutions",
      description:
        "Universities, research centers, and scholarly publications.",
      examples: [
        "Academic journals",
        "Research papers",
        "University studies",
        "Think tank reports",
      ],
    },
    {
      category: "Media & Online Sources",
      description:
        "News outlets, digital databases, and online repositories.",
      examples: [
        "News archives",
        "Digital libraries",
        "Online databases",
        "Web analytics",
      ],
    },
  ];

  const applications = [
    {
      title: "Market Analysis",
      description: "Understand market size, growth trends, and competitive landscape",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: "Feasibility Studies",
      description: "Assess viability of new products, services, or market entry",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Background Research",
      description: "Foundation for primary research design and hypothesis development",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Trend Identification",
      description: "Identify emerging trends and industry developments",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Benchmarking",
      description: "Compare performance against industry standards",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Policy Research",
      description: "Analyze regulations, policies, and their market impact",
      icon: <FileSearch className="h-6 w-6" />,
    },
  ];

  const process = [
    {
      step: "1",
      title: "Objective Definition",
      description:
        "Clearly define research questions and information requirements",
    },
    {
      step: "2",
      title: "Source Identification",
      description: "Identify relevant and credible secondary data sources",
    },
    {
      step: "3",
      title: "Data Collection",
      description:
        "Systematically gather information from identified sources",
    },
    {
      step: "4",
      title: "Data Verification",
      description: "Cross-check data accuracy and reliability across sources",
    },
    {
      step: "5",
      title: "Analysis & Synthesis",
      description: "Analyze data to extract meaningful insights and patterns",
    },
    {
      step: "6",
      title: "Reporting",
      description:
        "Present findings with clear recommendations and implications",
    },
  ];

  return (
    <>
      <SEOHead
        title="Desk Research & Secondary Research Services in Nigeria | PSI"
        description="Professional desk research and secondary research services in Nigeria and West Africa. Market analysis, feasibility studies, and comprehensive data synthesis by PSI research experts."
        keywords="desk research Nigeria, secondary research West Africa, market analysis Lagos, data synthesis services, industry research Nigeria, feasibility studies"
        canonicalUrl="/methods/desk-research"
      />

      <RequestProposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 gradient-hero text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge
                  variant="outline"
                  className="mb-4 border-white text-white"
                >
                  Research Methods
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                  Desk Research & Secondary Research
                  <span className="block text-accent-glow">
                    {" "}
                    Data-Driven Intelligence
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-white/90">
                  Extract valuable insights from existing data sources for informed
                  decision-making across Nigeria and West Africa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Request Research
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
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
                  Benefits of Desk Research
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Leverage existing data to gain insights quickly and cost-effectively
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

        {/* Data Sources Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Secondary Data Sources
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive access to reliable data across multiple channels
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-2 gap-8">
                {dataSources.map((source, index) => (
                  <StaggerItem key={index}>
                    <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold mb-3">
                          {source.category}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {source.description}
                        </p>
                        <div className="space-y-2">
                          {source.examples.map((example, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Database className="h-4 w-4 text-accent flex-shrink-0" />
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

        {/* Applications Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Research Applications
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Versatile applications across industries and research needs
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {applications.map((app, index) => (
                  <StaggerItem key={index}>
                    <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                          {app.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {app.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {app.description}
                        </p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Research Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Systematic methodology for reliable secondary research
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
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Need Comprehensive Desk Research?
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  Let PSI's research experts synthesize valuable insights from
                  existing data sources. Contact us today to start your secondary
                  research project.
                </p>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => setIsModalOpen(true)}
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Start Your Research
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default DeskResearch;
