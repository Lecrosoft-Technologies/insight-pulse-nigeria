import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  FlaskConical,
  Shuffle,
  TrendingUp,
  TestTube,
  LineChart,
  Target,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const ExperimentalSurveys = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: FlaskConical,
      title: "Controlled Testing",
      description:
        "Test hypotheses through controlled experimental designs with treatment and control groups.",
    },
    {
      icon: Shuffle,
      title: "Random Assignment",
      description:
        "Random allocation of participants to experimental conditions ensuring unbiased results.",
    },
    {
      icon: TestTube,
      title: "A/B Testing",
      description:
        "Compare multiple variations to identify optimal solutions for products, messaging, or strategies.",
    },
    {
      icon: TrendingUp,
      title: "Causal Analysis",
      description:
        "Establish cause-and-effect relationships between variables with statistical rigor.",
    },
    {
      icon: LineChart,
      title: "Impact Measurement",
      description:
        "Quantify the actual impact of interventions, campaigns, or policy changes.",
    },
    {
      icon: Target,
      title: "Pre-Post Analysis",
      description:
        "Measure changes before and after interventions to assess effectiveness.",
    },
  ];

  const applications = [
    "Product Concept Testing",
    "Price Elasticity Studies",
    "Advertising Effectiveness",
    "Package Design Testing",
    "Policy Impact Assessment",
    "Program Evaluation",
    "Message Testing",
    "Behavioral Economics Studies",
  ];

  const designs = [
    {
      title: "Randomized Controlled Trials (RCT)",
      description:
        "Gold standard for establishing causality through random assignment to treatment and control groups",
    },
    {
      title: "Quasi-Experimental Designs",
      description:
        "Natural experiments leveraging existing conditions when randomization isn't feasible",
    },
    {
      title: "Conjoint Analysis",
      description:
        "Trade-off analysis to determine optimal product features and pricing strategies",
    },
    {
      title: "Field Experiments",
      description:
        "Real-world testing in natural environments for authentic behavioral insights",
    },
  ];

  return (
    <>
      <SEOHead
        title="Experimental Surveys | A/B Testing | RCT Research | PSI Nigeria"
        description="Professional experimental survey research in Nigeria. Randomized controlled trials, A/B testing, and causal analysis for evidence-based decisions."
        keywords="experimental surveys Nigeria, A/B testing, randomized controlled trials, causal research, impact evaluation, experimental design"
        canonicalUrl="https://psi-ng.com/methods/experimental-surveys"
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
                Experimental Survey Research
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground leading-relaxed">
                Rigorous experimental designs to establish cause-and-effect and
                test interventions scientifically
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => setIsModalOpen(true)}
                  className="group"
                >
                  Design Your Experiment
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
                Experimental Research Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced experimental methodologies for testing hypotheses and
                measuring impact
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

        {/* Experimental Designs */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Experimental Design Approaches
              </h2>
              <p className="text-xl text-muted-foreground">
                Multiple experimental frameworks for rigorous hypothesis testing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {designs.map((design, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {design.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {design.description}
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
                Experimental Research Applications
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground ">
              Ready for Evidence-Based Insights?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experts design and execute rigorous experimental research
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() => setIsModalOpen(true)}
            >
              Request Experimental Research Proposal
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExperimentalSurveys;
