import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Home, MapPin, Users, BarChart3, Clock, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const HouseholdSurveys = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Home,
      title: "In-Home Interviews",
      description: "Face-to-face interviews conducted in respondents' homes for natural, comfortable settings."
    },
    {
      icon: MapPin,
      title: "National Coverage",
      description: "Comprehensive sampling across urban and rural areas in Nigeria and West Africa."
    },
    {
      icon: Users,
      title: "Multi-Demographic Reach",
      description: "Access to diverse population segments including hard-to-reach demographics."
    },
    {
      icon: BarChart3,
      title: "Large Sample Sizes",
      description: "Capability to conduct studies with thousands of households for statistical significance."
    },
    {
      icon: Clock,
      title: "Extended Interview Time",
      description: "Longer interview duration possible for complex studies and detailed insights."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous field supervision and quality control measures ensure data integrity."
    }
  ];

  const applications = [
    "Consumer Behavior Studies",
    "Socio-Economic Research",
    "Market Penetration Analysis",
    "Brand Awareness Studies",
    "Living Standards Surveys",
    "Health & Nutrition Studies",
    "Financial Inclusion Research",
    "Agricultural & Rural Studies"
  ];

  const process = [
    {
      step: "1",
      title: "Sampling Design",
      description: "We design representative sampling frameworks using latest census data and geographic information systems."
    },
    {
      step: "2", 
      title: "Interviewer Training",
      description: "Comprehensive training of field interviewers on survey protocols, cultural sensitivity, and quality standards."
    },
    {
      step: "3",
      title: "Field Execution",
      description: "Systematic field data collection with real-time monitoring and quality control supervision."
    },
    {
      step: "4",
      title: "Data Processing",
      description: "Advanced data processing, cleaning, and analysis using statistical software and quality checks."
    }
  ];

  return (
    <>
      <SEOHead
        title="Household Surveys | In-Home Interviews | Market Research Nigeria | PSI"
        description="Professional household surveys and in-home interviews across Nigeria & West Africa. Large-scale consumer research with representative sampling and quality assurance."
        keywords="household surveys Nigeria, in-home interviews, consumer research, demographic studies, market research methodology, household data collection"
        canonicalUrl="https://psi-ng.com/methods/household-surveys"
      />
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-text-reveal">
                Household Surveys Excellence
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Comprehensive in-home data collection across Nigeria and West Africa with unmatched quality and coverage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)} className="group">
                  Plan Your Household Survey
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Our Household Surveys
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional, reliable, and comprehensive household data collection with proven methodologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Survey Applications
              </h2>
              <p className="text-xl text-muted-foreground">
                Household surveys are ideal for a wide range of research objectives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth text-center"
                >
                  <h3 className="text-lg font-semibold text-foreground">{application}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Survey Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Systematic approach ensuring quality data and reliable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Household Survey Capabilities
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-primary mb-4">500K+</div>
                <p className="text-xl text-muted-foreground">Households Surveyed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-accent mb-4">200+</div>
                <p className="text-xl text-muted-foreground">Trained Interviewers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-primary mb-4">36</div>
                <p className="text-xl text-muted-foreground">States Covered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-accent mb-4">95%</div>
                <p className="text-xl text-muted-foreground">Response Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Launch Your Household Survey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get comprehensive household data with our proven survey methodology and extensive field network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)}>
                Request Survey Proposal
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HouseholdSurveys;