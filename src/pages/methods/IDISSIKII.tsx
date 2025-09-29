import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MessageSquare, UserCheck, Mic, FileText, Target, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const IDISSIKII = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: MessageSquare,
      title: "One-on-One Conversations",
      description: "Individual interviews allowing deep exploration of personal experiences and perspectives."
    },
    {
      icon: UserCheck,
      title: "Expert Moderators",
      description: "Skilled interviewers trained in probing techniques and building rapport with respondents."
    },
    {
      icon: Mic,
      title: "Flexible Structure",
      description: "Semi-structured approach allowing natural conversation while covering key topics."
    },
    {
      icon: FileText,
      title: "Rich Qualitative Data",
      description: "Detailed narratives and insights impossible to capture through structured surveys."
    },
    {
      icon: Target,
      title: "Key Informant Access",
      description: "Reach decision-makers, experts, and influential stakeholders for authoritative insights."
    },
    {
      icon: TrendingUp,
      title: "Deep Understanding",
      description: "Uncover underlying motivations, beliefs, and behaviors behind market trends."
    }
  ];

  const types = [
    {
      title: "In-Depth Interviews (IDI)",
      description: "Comprehensive one-on-one interviews exploring individual experiences, attitudes, and behaviors in detail"
    },
    {
      title: "Semi-Structured Interviews (SSI)",
      description: "Guided conversations with predetermined topics while allowing flexibility to explore emerging themes"
    },
    {
      title: "Key Informant Interviews (KII)",
      description: "Targeted interviews with experts, leaders, and stakeholders possessing specialized knowledge"
    },
    {
      title: "Elite Interviews",
      description: "Specialized approach for interviewing senior executives, government officials, and high-profile individuals"
    }
  ];

  const applications = [
    "Consumer Journey Mapping",
    "Brand Perception Deep-Dives",
    "Expert Opinion Research",
    "Policy Maker Consultations",
    "Needs Assessment",
    "Customer Experience Studies",
    "Stakeholder Analysis",
    "Innovation Research"
  ];

  return (
    <>
      <SEOHead
        title="IDI, SSI & KII Research | In-Depth Interviews | PSI Nigeria"
        description="Professional in-depth interviews, semi-structured interviews, and key informant interviews in Nigeria. Expert qualitative research for deep consumer insights."
        keywords="IDI research Nigeria, in-depth interviews, semi-structured interviews, key informant interviews, KII, qualitative research, expert interviews"
        canonicalUrl="https://psi-ng.com/methods/idi-ssi-kii"
      />
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-text-reveal">
                In-Depth Interview Research
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                IDI, SSI & KII: Deep qualitative insights through expert one-on-one conversations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)} className="group">
                  Start Your Interview Project
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
                In-Depth Interview Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert qualitative research revealing the 'why' behind consumer behaviors and decisions
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

        {/* Interview Types */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Interview Methodologies
              </h2>
              <p className="text-xl text-muted-foreground">
                Multiple interview approaches for diverse research objectives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {types.map((type, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
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

        {/* Process */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Interview Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "1", title: "Discussion Guide Development", desc: "Create comprehensive interview guides covering key topics while allowing flexibility" },
                { step: "2", title: "Respondent Recruitment", desc: "Identify and recruit appropriate participants matching your research criteria" },
                { step: "3", title: "Interview Execution", desc: "Conduct interviews in comfortable settings with expert moderators" },
                { step: "4", title: "Analysis & Reporting", desc: "Thematic analysis identifying patterns, insights, and actionable recommendations" }
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
              Ready for Deep Qualitative Insights?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our expert interviewers uncover the insights that quantitative research can't reach
            </p>
            <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)}>
              Request Interview Research Proposal
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default IDISSIKII;
