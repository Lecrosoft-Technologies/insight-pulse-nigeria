import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Shield,
  Stethoscope,
  Pill,
  Users,
  TrendingUp,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const Health = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Heart,
      title: "Patient Experience Research",
      description:
        "Understanding patient journeys, satisfaction levels, and healthcare service quality improvements.",
    },
    {
      icon: Shield,
      title: "Health Insurance Studies",
      description:
        "Market research for health insurance products, coverage preferences, and enrollment barriers.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Provider Research",
      description:
        "Physician and hospital studies, medical practice insights, and healthcare professional surveys.",
    },
    {
      icon: Pill,
      title: "Pharmaceutical Market Research",
      description:
        "Drug efficacy studies, patient compliance research, and pharmaceutical market analysis.",
    },
    {
      icon: Users,
      title: "Public Health Studies",
      description:
        "Community health assessments, disease awareness campaigns, and health behavior research.",
    },
    {
      icon: TrendingUp,
      title: "Health Technology Research",
      description:
        "Digital health adoption, telemedicine usage, and health app user experience studies.",
    },
  ];

  const expertise = [
    "Pharmaceuticals & Biotechnology",
    "Medical Devices & Equipment",
    "Health Insurance & HMOs",
    "Hospitals & Healthcare Facilities",
    "Public Health Programs",
    "Digital Health & Telemedicine",
  ];

  return (
    <>
      <SEOHead
        title="Health & Pharma Market Research | Healthcare Research Nigeria | PSI"
        description="Expert health and pharmaceutical market research in Nigeria & West Africa. Patient experience, healthcare provider insights, and pharmaceutical market analysis."
        keywords="health market research Nigeria, pharmaceutical research, healthcare research, patient experience, medical research, health insurance research"
        canonicalUrl="https://psi-ng.com/sectors/health"
      />
      <RequestProposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-text-reveal text-foreground">
                Health & Pharma Research
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground leading-relaxed">
                Evidence-based healthcare insights for better health outcomes
                across Nigeria and West Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => setIsModalOpen(true)}
                  className="group"
                >
                  Start Your Healthcare Research
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Healthcare Research Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive research solutions for healthcare providers,
                pharmaceutical companies, and health organizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Healthcare Sectors We Serve
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialized expertise across all areas of healthcare and
                pharmaceutical industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((sector, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth text-center"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {sector}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Healthcare Research Impact
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-primary mb-4">
                  100+
                </div>
                <p className="text-xl text-muted-foreground">
                  Healthcare Studies
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-accent mb-4">
                  500K+
                </div>
                <p className="text-xl text-muted-foreground">
                  Patients Surveyed
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-primary mb-4">
                  50+
                </div>
                <p className="text-xl text-muted-foreground">
                  Healthcare Partners
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Advance Healthcare with Research
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with Nigeria's leading healthcare research specialists.
              Drive better health outcomes with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => setIsModalOpen(true)}
              >
                Request Healthcare Research Proposal
              </Button>
              <Button
                variant="outline-primary"
                size="xl"

              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Health;
