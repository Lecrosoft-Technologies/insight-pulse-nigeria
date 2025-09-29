import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, TrendingUp, Users, Target, CheckCircle, BarChart } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const SurveyResearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: FileText,
      title: "Structured Questionnaires",
      description: "Standardized survey instruments designed for reliable and valid data collection."
    },
    {
      icon: Users,
      title: "Large Sample Sizes",
      description: "Capability to survey thousands of respondents for statistically significant insights."
    },
    {
      icon: Target,
      title: "Representative Sampling",
      description: "Random probability sampling ensuring results can be generalized to target populations."
    },
    {
      icon: BarChart,
      title: "Quantitative Analysis",
      description: "Statistical analysis providing measurable insights and trend identification."
    },
    {
      icon: TrendingUp,
      title: "Tracking Studies",
      description: "Longitudinal research to measure changes in attitudes, behaviors, and market dynamics."
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Multi-level validation processes ensuring data accuracy and reliability."
    }
  ];

  const applications = [
    "Market Size & Share Studies",
    "Brand Awareness & Perception",
    "Customer Satisfaction Measurement",
    "Product Usage & Attitude Studies",
    "Media Consumption Analysis",
    "Price Sensitivity Research",
    "Demographic Profiling",
    "Baseline & Impact Studies"
  ];

  const methodologies = [
    {
      title: "Face-to-Face Surveys",
      description: "In-person interviews for detailed responses and complex questionnaires"
    },
    {
      title: "Telephone Surveys",
      description: "Computer-Assisted Telephone Interviews (CATI) for quick nationwide reach"
    },
    {
      title: "Online Surveys",
      description: "Web-based surveys for urban, tech-savvy populations with rich multimedia"
    },
    {
      title: "Intercept Surveys",
      description: "Location-based surveys at malls, markets, or events for targeted sampling"
    }
  ];

  return (
    <>
      <SEOHead
        title="Survey Research | Quantitative Market Research | PSI Nigeria"
        description="Professional survey research services in Nigeria & West Africa. Large-scale quantitative studies with representative sampling and statistical analysis."
        keywords="survey research Nigeria, quantitative research, market surveys, customer satisfaction surveys, brand tracking studies"
        canonicalUrl="https://psi-ng.com/methods/survey-research"
      />
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-text-reveal">
                Survey Research Excellence
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Robust quantitative research through structured surveys delivering statistically significant insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)} className="group">
                  Start Your Survey Project
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
                Survey Research Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive survey methodologies delivering reliable, actionable market intelligence
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

        {/* Methodologies */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Survey Methodologies
              </h2>
              <p className="text-xl text-muted-foreground">
                Multiple data collection approaches tailored to your research objectives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {methodologies.map((method, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                    <p className="text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Survey Research Applications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth text-center"
                >
                  <h3 className="text-lg font-semibold text-foreground">{app}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready for Reliable Survey Insights?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let our expert team design and execute your survey research project
            </p>
            <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)}>
              Request Survey Proposal
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SurveyResearch;
