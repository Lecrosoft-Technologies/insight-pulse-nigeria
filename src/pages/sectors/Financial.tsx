import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  CreditCard,
  PieChart,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const Financial = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: CreditCard,
      title: "Banking & Credit Research",
      description:
        "Customer satisfaction, product development, and market penetration studies for banking services.",
    },
    {
      icon: PieChart,
      title: "Investment & Wealth Management",
      description:
        "Investor behavior analysis, product preference studies, and wealth management insights.",
    },
    {
      icon: Shield,
      title: "Insurance Market Research",
      description:
        "Claims experience studies, product development, and customer retention analysis.",
    },
    {
      icon: Smartphone,
      title: "Fintech & Digital Banking",
      description:
        "User experience research, adoption studies, and digital transformation insights.",
    },
    {
      icon: TrendingUp,
      title: "Financial Inclusion Studies",
      description:
        "Unbanked population research, microfinance studies, and financial literacy assessments.",
    },
    {
      icon: Users,
      title: "Customer Experience Research",
      description:
        "Journey mapping, satisfaction studies, and service quality improvement research.",
    },
  ];

  const expertise = [
    "Commercial Banking",
    "Investment Banking",
    "Insurance & Takaful",
    "Microfinance Institutions",
    "Fintech & Mobile Money",
    "Pension & Asset Management",
  ];

  return (
    <>
      <SEOHead
        title="Financial Services Market Research | Banking & Insurance Research | PSI Nigeria"
        description="Expert financial services market research in Nigeria & West Africa. Banking, insurance, fintech, and financial inclusion research for the financial sector."
        keywords="financial services research Nigeria, banking market research, insurance research, fintech research, financial inclusion, customer satisfaction banking"
        canonicalUrl="https://psi-ng.com/sectors/financial"
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
                Financial Services Research
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground leading-relaxed">
                Trusted insights for banks, insurance companies, and fintech
                innovators across Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => setIsModalOpen(true)}
                  className="group"
                >
                  Start Your Financial Research
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
                Specialized Financial Research Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From traditional banking to cutting-edge fintech, we provide the
                insights that drive financial innovation
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
                Financial Sectors We Serve
              </h2>
              <p className="text-xl text-muted-foreground">
                Deep expertise across all areas of financial services
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
                Financial Research by the Numbers
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-primary mb-4">
                  50+
                </div>
                <p className="text-xl text-muted-foreground">
                  Financial Institutions Served
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-accent mb-4">
                  2M+
                </div>
                <p className="text-xl text-muted-foreground">
                  Banking Customers Surveyed
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-primary mb-4">
                  100+
                </div>
                <p className="text-xl text-muted-foreground">
                  Financial Products Tested
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Drive Financial Innovation with Data
            </h2>
            <p className="text-xl text-muted-foreground  mb-8 max-w-2xl mx-auto">
              Partner with Nigeria's trusted financial services research
              experts. Get insights that transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => setIsModalOpen(true)}
              >
                Request Financial Research Proposal
              </Button>
              <Button variant="outline-primary" size="xl">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Financial;
