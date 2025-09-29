import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Lightbulb, Target, Zap, Eye } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const Immersion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Living the Experience",
      description: "Researchers fully immerse themselves in consumers' lives and environments for extended periods."
    },
    {
      icon: Heart,
      title: "Empathy Building",
      description: "Deep empathy development through first-hand experience of consumer challenges and contexts."
    },
    {
      icon: Lightbulb,
      title: "Innovation Insights",
      description: "Uncover unmet needs and innovation opportunities through experiential understanding."
    },
    {
      icon: Target,
      title: "Holistic Understanding",
      description: "Comprehensive view of consumer lives, not just isolated moments or transactions."
    },
    {
      icon: Zap,
      title: "Rapid Insights",
      description: "Intensive immersion delivers deep understanding in compressed timeframes."
    },
    {
      icon: Eye,
      title: "Authentic Perspective",
      description: "See the world through consumers' eyes by living their experiences."
    }
  ];

  const approaches = [
    {
      title: "Consumer Shadowing",
      description: "Follow consumers throughout their day, observing routines, challenges, and product interactions"
    },
    {
      title: "Homestays",
      description: "Researchers stay in consumer homes to experience daily life and cultural context first-hand"
    },
    {
      title: "Role-Playing",
      description: "Researchers assume consumer roles to experience products, services, and touchpoints directly"
    },
    {
      title: "Community Living",
      description: "Extended immersion in target communities to understand social dynamics and local contexts"
    }
  ];

  const applications = [
    "New Market Entry",
    "Product Development",
    "Service Design",
    "Customer Journey Mapping",
    "Rural Market Understanding",
    "Youth Culture Research",
    "Low-Income Consumer Insights",
    "Innovation Workshops"
  ];

  const benefits = [
    {
      title: "Beyond Surface Insights",
      description: "Immersion reveals nuances and contextual factors that other methods miss, leading to breakthrough innovations and more authentic brand strategies."
    },
    {
      title: "Team Alignment",
      description: "Immersion experiences create shared understanding across teams, aligning stakeholders around real consumer needs rather than assumptions."
    },
    {
      title: "Accelerated Learning",
      description: "Intensive immersion compresses months of learning into days, rapidly building deep market understanding for decision-makers."
    }
  ];

  return (
    <>
      <SEOHead
        title="Immersion Research | Consumer Experience Studies | PSI Nigeria"
        description="Professional immersion research in Nigeria. Deep consumer understanding through experiential research and first-hand consumer life experiences."
        keywords="immersion research Nigeria, consumer immersion, experiential research, consumer shadowing, homestay research, empathy research"
        canonicalUrl="https://psi-ng.com/methods/immersion"
      />
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-text-reveal">
                Immersion Research
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Experience your consumers' world first-hand through deep experiential immersion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)} className="group">
                  Plan Your Immersion
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
                Immersion Research Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transformative experiential research that builds deep empathy and understanding
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

        {/* Approaches */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Immersion Methodologies
              </h2>
              <p className="text-xl text-muted-foreground">
                Multiple immersive approaches for comprehensive consumer empathy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {approaches.map((approach, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                    <p className="text-muted-foreground">{approach.description}</p>
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
                Research Applications
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

        {/* Benefits */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                Why Immersion Research Works
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Immersion Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "1", title: "Objective Setting", desc: "Define research goals and identify key consumer segments for immersion" },
                { step: "2", title: "Participant Recruitment", desc: "Carefully select and recruit consumers representing target audiences" },
                { step: "3", title: "Immersion Experience", desc: "Researchers spend extended time living consumers' experiences" },
                { step: "4", title: "Synthesis Workshop", desc: "Collaborative analysis translating experiences into actionable insights and innovations" }
              ].map((item) => (
                <Card key={item.step} className="hover-lift transition-smooth">
                  <CardContent className="p-6 flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
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
              Ready to Transform Your Understanding?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Experience the power of immersion research for breakthrough consumer insights
            </p>
            <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)}>
              Request Immersion Research Proposal
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Immersion;
