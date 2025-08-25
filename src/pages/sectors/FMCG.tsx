import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, TrendingUp, Users, BarChart3, Target, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const FMCG = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: ShoppingCart,
      title: "Brand Health Tracking",
      description: "Monitor brand performance, awareness, and consumer perception across key FMCG categories."
    },
    {
      icon: TrendingUp,
      title: "Market Share Analysis",
      description: "Comprehensive market share studies with competitive landscape analysis and growth opportunities."
    },
    {
      icon: Users,
      title: "Consumer Behavior Studies",
      description: "Deep-dive into consumer purchase drivers, shopping habits, and brand loyalty patterns."
    },
    {
      icon: BarChart3,
      title: "Retail Audit & Distribution",
      description: "Track product availability, pricing, promotion effectiveness, and shelf visibility."
    },
    {
      icon: Target,
      title: "Product Launch Research",
      description: "Pre-launch testing, concept validation, and post-launch performance tracking."
    },
    {
      icon: Zap,
      title: "Price Sensitivity Analysis",
      description: "Optimize pricing strategies through elasticity studies and competitive price tracking."
    }
  ];

  const expertise = [
    "Food & Beverages",
    "Personal Care & Cosmetics", 
    "Household Products",
    "Baby Care & Health",
    "Alcoholic & Non-Alcoholic Drinks",
    "Snacks & Confectionery"
  ];

  const caseStudies = [
    {
      title: "Major Beverage Brand Launch",
      challenge: "A global beverage company needed to understand Nigerian consumer preferences for a new product category",
      solution: "Conducted nationwide consumer research with 5,000+ interviews across urban and rural markets",
      result: "Successful product launch with 15% market share in year one, exceeding projections by 40%"
    },
    {
      title: "Personal Care Market Entry",
      challenge: "International cosmetics brand required market entry strategy for Nigerian women",
      solution: "Multi-phase research including cultural insights, beauty routines analysis, and competitive positioning",
      result: "Strategic positioning led to #3 market position within 18 months"
    }
  ];

  return (
    <>
      <SEOHead
        title="FMCG Market Research Services | Fast-Moving Consumer Goods | PSI Nigeria"
        description="Expert FMCG market research in Nigeria & West Africa. Brand health tracking, consumer behavior studies, retail audits & market share analysis for fast-moving consumer goods."
        keywords="FMCG market research, consumer goods research Nigeria, brand health tracking, retail audit, consumer behavior, market share analysis, product launch research"
        canonicalUrl="https://psi-ng.com/sectors/fmcg"
      />
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-text-reveal">
                FMCG Market Research Excellence
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Deep consumer insights for fast-moving consumer goods across Nigeria and West Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)} className="group">
                  Start Your FMCG Research
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Case Studies
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
                Comprehensive FMCG Research Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From brand health to retail execution, we provide the insights you need to succeed in competitive FMCG markets
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
                    <p className="text-muted-foreground">{service.description}</p>
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
                FMCG Categories We Cover
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialized expertise across all major fast-moving consumer goods categories
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((category, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth text-center"
                >
                  <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                FMCG Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results from our FMCG research projects across West Africa
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Result:</h4>
                      <p className="text-primary font-semibold">{study.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Accelerate Your FMCG Success?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Partner with Nigeria's leading FMCG research specialists. Get actionable insights that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)}>
                Request FMCG Research Proposal
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FMCG;