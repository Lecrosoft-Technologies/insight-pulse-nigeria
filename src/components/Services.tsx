import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Star, 
  TestTube, 
  Search,
  ArrowRight,
  Zap,
  Shield,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import RequestProposalModal from "./RequestProposalModal";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const services = [
    {
      icon: BarChart3,
      title: "Market Research",
      description: "Comprehensive quant & qual studies, segmentation, U&A, brand tracking.",
      features: ["Consumer & B2B studies", "Representative sampling", "Advanced analytics"],
      href: "/services/market-research"
    },
    {
      icon: Users,
      title: "Social & Opinion Research",
      description: "National & state-level polls, social attitudes, public opinion measurement.",
      features: ["Political polling", "Social trends", "Public perception"],
      href: "/services/social-research"
    },
    {
      icon: ShoppingCart,
      title: "FMCG & Retail Audit",
      description: "Track availability, share, pricing, and shelf dynamics nationwide.",
      features: ["Retail panels", "Price monitoring", "Distribution tracking"],
      href: "/services/retail-audit"
    },
    {
      icon: Star,
      title: "Customer Satisfaction & NPS",
      description: "Measure loyalty, identify drivers, and predict churn risk.",
      features: ["NPS benchmarking", "Driver analysis", "Churn prediction"],
      href: "/services/customer-satisfaction"
    },
    {
      icon: TestTube,
      title: "Product Testing & CLT",
      description: "Central Location Tests, taste tests, concept validation in Lagos & Abuja.",
      features: ["Sensory testing", "Concept validation", "Package testing"],
      href: "/services/product-testing"
    },
    {
      icon: Search,
      title: "Mystery Shopping",
      description: "Service quality audits, compliance checks, customer experience evaluation.",
      features: ["Service audits", "Compliance monitoring", "CX evaluation"],
      href: "/services/mystery-shopping"
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Agile Fieldwork",
      description: "Fast deployment with rigorous quality controls"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Double-layer data checks and validation"
    },
    {
      icon: Clock,
      title: "Transparent Timelines",
      description: "Clear milestones and insight-ready outputs"
    }
  ];

  return (
    <>
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Research Services
            </span>
            <br />
            <span className="text-foreground">Built for Nigeria & West Africa</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From quick-turn studies to comprehensive market analysis, we deliver 
            actionable insights that drive business decisions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="hover-lift border-0 shadow-soft hover:shadow-medium animate-stagger"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline-primary" className="w-full group" asChild>
                  <Link to={service.href}>
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose PSI */}
        <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Why Leading Brands Choose PSI</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine local expertise with international standards to deliver 
              research that actually drives business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={advantage.title}
                className="text-center animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{advantage.title}</h4>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="xl" onClick={() => setIsModalOpen(true)} className="group">
              Request a Custom Proposal
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;