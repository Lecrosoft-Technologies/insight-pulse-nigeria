import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Eye,
  Home,
  Camera,
  Users,
  MapPin,
  BookOpen,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const Ethnography = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Eye,
      title: "Observational Research",
      description:
        "Direct observation of consumers in their natural environments to understand real behaviors.",
    },
    {
      icon: Home,
      title: "In-Context Studies",
      description:
        "Research conducted in homes, shops, and daily life settings for authentic insights.",
    },
    {
      icon: Camera,
      title: "Photo & Video Documentation",
      description:
        "Rich visual documentation capturing behaviors, contexts, and cultural nuances.",
    },
    {
      icon: Users,
      title: "Cultural Immersion",
      description:
        "Deep understanding of cultural contexts, rituals, and social dynamics affecting consumer behavior.",
    },
    {
      icon: MapPin,
      title: "Multiple Touchpoints",
      description:
        "Observe consumers across various contexts and situations for comprehensive understanding.",
    },
    {
      icon: BookOpen,
      title: "Thick Descriptions",
      description:
        "Detailed narratives providing context and meaning behind observed behaviors.",
    },
  ];

  const methodologies = [
    {
      title: "Participant Observation",
      description:
        "Researchers immerse themselves in consumer environments, participating while observing",
    },
    {
      title: "In-Home Ethnography",
      description:
        "Extended observation in consumers' homes to understand daily routines and product usage",
    },
    {
      title: "Shop-Along Studies",
      description:
        "Accompany shoppers to observe purchase decisions and shopping behaviors in real-time",
    },
    {
      title: "Digital Ethnography",
      description:
        "Online observation of consumer behavior across social media and digital platforms",
    },
  ];

  const applications = [
    "Product Usage Studies",
    "Cultural Consumer Insights",
    "Shopper Behavior Analysis",
    "Home Environment Research",
    "Ritual & Tradition Studies",
    "Innovation Opportunity Identification",
    "Lifestyle Segmentation",
    "Service Experience Mapping",
  ];

  return (
    <>
      <SEOHead
        title="Ethnographic Research | Consumer Observation Studies | PSI Nigeria"
        description="Professional ethnographic research in Nigeria & West Africa. In-context consumer observation revealing cultural insights and authentic behaviors."
        keywords="ethnographic research Nigeria, consumer ethnography, observational research, in-home studies, cultural research, shopper studies"
        canonicalUrl="https://psi-ng.com/methods/ethnography"
      />
      <RequestProposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-text-reveal">
                Ethnographic Research
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground">
                Immersive observation revealing authentic consumer behaviors and
                cultural insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => setIsModalOpen(true)}
                  className="group"
                >
                  Start Your Ethnographic Study
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
                Ethnographic Research Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Immersive methodologies uncovering the cultural and contextual
                factors shaping consumer behavior
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
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
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
                Ethnographic Methodologies
              </h2>
              <p className="text-xl text-muted-foreground">
                Multiple observational approaches for comprehensive consumer
                understanding
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {methodologies.map((method, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {method.description}
                    </p>
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
                  <h3 className="text-lg font-semibold text-foreground">
                    {app}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ethnography */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                Why Choose Ethnographic Research?
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Uncover Hidden Insights
                    </h3>
                    <p className="text-muted-foreground">
                      Ethnography reveals unconscious behaviors and unspoken
                      needs that consumers can't articulate in surveys or
                      interviews. By observing real behavior in context, we
                      discover insights that drive innovation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Cultural Understanding
                    </h3>
                    <p className="text-muted-foreground">
                      In Nigeria's diverse cultural landscape, ethnography
                      provides essential context for understanding how cultural
                      values, traditions, and social dynamics influence consumer
                      decisions and brand relationships.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Real vs. Stated Behavior
                    </h3>
                    <p className="text-muted-foreground">
                      What consumers say and what they actually do often differ.
                      Ethnography captures authentic behavior without the bias
                      of self-reporting, revealing the truth about product usage
                      and decision-making.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Discover Hidden Consumer Truths?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our ethnographic research reveals the authentic insights that
              transform brands
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() => setIsModalOpen(true)}
            >
              Request Ethnographic Research Proposal
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Ethnography;
