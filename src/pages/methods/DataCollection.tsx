import SEOHead from "@/components/SEOHead";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";
import {
  Phone,
  Tablet,
  Globe,
  Users,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target
} from "lucide-react";

const DataCollection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const methods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "CATI - Computer Assisted Telephone Interviewing",
      description: "Efficient telephone surveys with real-time data capture and quality monitoring.",
      features: ["Real-time monitoring", "Automated call scheduling", "Quality control systems", "Multi-language support"],
      advantages: ["Wide geographic reach", "Cost-effective", "Quick data collection", "Standardized questionnaires"]
    },
    {
      icon: <Tablet className="h-8 w-8" />,
      title: "CAPI - Computer Assisted Personal Interviewing", 
      description: "Face-to-face interviews using tablets and mobile devices for enhanced data quality.",
      features: ["Interactive questionnaires", "GPS tracking", "Photo/video capture", "Offline capability"],
      advantages: ["High response rates", "Complex questionnaires", "Visual aids support", "Data validation"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "CAWI - Computer Assisted Web Interviewing",
      description: "Online surveys accessible across devices for convenient respondent participation.",
      features: ["Responsive design", "Logic branching", "Media integration", "Progress tracking"],
      advantages: ["24/7 accessibility", "Reduced costs", "Large sample sizes", "Quick deployment"]
    }
  ];

  const capabilities = [
    {
      title: "Advanced Survey Programming",
      description: "Complex logic, branching, and validation rules for sophisticated questionnaires.",
      stat: "500+",
      label: "Surveys Programmed"
    },
    {
      title: "Multi-Mode Integration",
      description: "Seamlessly combine CATI, CAPI, and CAWI for comprehensive data collection.",
      stat: "95%",
      label: "Data Quality Score"
    },
    {
      title: "Real-Time Monitoring",
      description: "Live tracking of survey progress, response rates, and data quality metrics.",
      stat: "24/7",
      label: "Monitoring Support"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Survey Design",
      description: "Questionnaire development and programming with logic validation"
    },
    {
      step: "2",
      title: "System Setup", 
      description: "Configure CATI/CAPI/CAWI platforms and quality controls"
    },
    {
      step: "3",
      title: "Interviewer Training",
      description: "Comprehensive training on survey protocols and technology"
    },
    {
      step: "4",
      title: "Data Collection",
      description: "Execute surveys with real-time monitoring and supervision"
    },
    {
      step: "5",
      title: "Quality Assurance",
      description: "Continuous quality checks and validation procedures"
    },
    {
      step: "6",
      title: "Data Delivery",
      description: "Clean, validated datasets delivered in preferred formats"
    }
  ];

  return (
    <>
      <SEOHead 
        title="CATI, CAPI & CAWI Data Collection Services in Nigeria | PSI"
        description="Professional data collection services in Nigeria and West Africa. CATI telephone interviews, CAPI field surveys, and CAWI online surveys with advanced technology and quality assurance."
        keywords="CATI Nigeria, CAPI surveys West Africa, CAWI online surveys, data collection services Nigeria, telephone surveys Lagos, field interviews"
        canonicalUrl="/methods/data-collection"
      />

      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-4 border-background text-background">
                  Data Collection Methods
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  CATI • CAPI • CAWI
                  <span className="block text-accent-glow"> Data Collection Excellence</span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                  Advanced computer-assisted data collection methods delivering 
                  precise, reliable results across Nigeria and West Africa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="xl" className="border-background text-background hover:bg-background hover:text-primary" onClick={() => setIsModalOpen(true)}>
                    Start Data Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="xl" className="border-background/60 text-background hover:bg-background/10">
                    View Capabilities
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Methods Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Computer-Assisted Data Collection Methods
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Choose the optimal data collection approach for your research objectives
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="space-y-12">
                {methods.map((method, index) => (
                  <StaggerItem key={index}>
                    <Card className="hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          <div>
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                {method.icon}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold">{method.title.split(' - ')[0]}</h3>
                                <p className="text-sm text-muted-foreground">{method.title.split(' - ')[1]}</p>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-6">{method.description}</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold mb-2">Features</h4>
                                <div className="space-y-1">
                                  {method.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                                      <span className="text-xs">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Advantages</h4>
                                <div className="space-y-1">
                                  {method.advantages.map((advantage, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                      <Star className="h-3 w-3 text-accent flex-shrink-0" />
                                      <span className="text-xs">{advantage}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gradient-subtle rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                              {index === 0 ? "CATI" : index === 1 ? "CAPI" : "CAWI"}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {index === 0 ? "Telephone Interviews" : index === 1 ? "Personal Interviews" : "Web Interviews"}
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
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Data Collection Capabilities
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Advanced technology and expertise delivering superior data quality
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-3 gap-8">
                {capabilities.map((capability, index) => (
                  <StaggerItem key={index}>
                    <Card className="text-center hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <div className="text-4xl font-bold text-primary mb-2">{capability.stat}</div>
                        <div className="text-sm text-accent font-medium mb-4">{capability.label}</div>
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

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Data Collection Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Systematic approach ensuring high-quality data from start to finish
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
                        <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
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
                  Ready to Launch Your Data Collection?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Leverage our advanced CATI, CAPI, and CAWI capabilities for reliable, 
                  high-quality data collection across Nigeria and West Africa.
                </p>
                <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Start Your Project Today
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataCollection;