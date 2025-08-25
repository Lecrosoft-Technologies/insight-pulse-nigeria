import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, MessageSquare, Eye, Mic, Camera, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const FocusGroups = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Expert Moderation",
      description: "Skilled moderators who facilitate productive discussions and extract deep insights from participants."
    },
    {
      icon: MessageSquare,
      title: "In-Depth Discussions",
      description: "Comprehensive group discussions that uncover attitudes, perceptions, and motivations behind consumer behavior."
    },
    {
      icon: Eye,
      title: "Client Observation",
      description: "One-way mirror viewing rooms and live streaming options for real-time client observation."
    },
    {
      icon: Mic,
      title: "Professional Recording",
      description: "High-quality audio and video recording for detailed analysis and reporting."
    },
    {
      icon: Camera,
      title: "Modern Facilities",
      description: "State-of-the-art focus group facilities in major cities across Nigeria and West Africa."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Evening, weekend, and customized scheduling to accommodate diverse participant availability."
    }
  ];

  const applications = [
    "Product Development & Testing",
    "Brand Perception Studies",
    "Advertising & Creative Testing",
    "Package Design Research",
    "Service Quality Assessment",
    "Customer Journey Mapping",
    "Concept Validation",
    "Competitive Analysis"
  ];

  const process = [
    {
      step: "1",
      title: "Study Design",
      description: "We collaborate with you to define objectives, target segments, and discussion guide development."
    },
    {
      step: "2", 
      title: "Participant Recruitment",
      description: "Professional recruitment of qualified participants matching your target demographics and psychographics."
    },
    {
      step: "3",
      title: "Moderation & Recording",
      description: "Expert moderation of group discussions with professional audio/video recording and client observation."
    },
    {
      step: "4",
      title: "Analysis & Reporting",
      description: "Comprehensive analysis of discussions with actionable insights and strategic recommendations."
    }
  ];

  return (
    <>
      <SEOHead
        title="Focus Groups & IDIs | Qualitative Research Nigeria | PSI Market Research"
        description="Professional focus groups and in-depth interviews in Nigeria & West Africa. Expert moderation, modern facilities, and comprehensive qualitative research insights."
        keywords="focus groups Nigeria, in-depth interviews, qualitative research, consumer insights, market research facilities, expert moderation"
        canonicalUrl="https://psi-ng.com/methods/focus-groups"
      />
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-text-reveal">
                Focus Groups & In-Depth Interviews
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
                Uncover deep consumer insights through expert-moderated qualitative research across Nigeria and West Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)} className="group">
                  Plan Your Qualitative Study
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
                Professional Qualitative Research
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Modern facilities, expert moderation, and comprehensive analysis for actionable consumer insights
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
                Research Applications
              </h2>
              <p className="text-xl text-muted-foreground">
                Focus groups and IDIs are perfect for understanding the 'why' behind consumer behavior
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
                Our Qualitative Research Process
              </h2>
              <p className="text-xl text-muted-foreground">
                From concept to insights - a proven methodology for qualitative excellence
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

        {/* Facilities Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Focus Group Facilities
              </h2>
              <p className="text-xl text-muted-foreground">
                State-of-the-art research facilities across Nigeria
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-primary mb-4">5</div>
                <p className="text-xl text-muted-foreground">Modern Facilities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-accent mb-4">12</div>
                <p className="text-xl text-muted-foreground">Discussion Rooms</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-primary mb-4">1000+</div>
                <p className="text-xl text-muted-foreground">Groups Conducted</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Uncover Deep Consumer Insights?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get rich qualitative insights with our expert-moderated focus groups and in-depth interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)}>
                Request Qualitative Research Proposal
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Tour Our Facilities
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FocusGroups;