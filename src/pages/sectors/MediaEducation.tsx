import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Radio,
  Tv,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const MediaEducation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Tv,
      title: "Media Consumption Studies",
      description:
        "Track audience behavior, media preferences, and content consumption patterns across TV, radio, digital, and print media.",
    },
    {
      icon: Radio,
      title: "Advertising Effectiveness",
      description:
        "Measure ad recall, brand lift, and campaign ROI across multiple media channels and platforms.",
    },
    {
      icon: GraduationCap,
      title: "Education Market Research",
      description:
        "Student enrollment trends, parent preferences, learning outcomes assessment, and institutional reputation studies.",
    },
    {
      icon: Users,
      title: "Audience Measurement",
      description:
        "Comprehensive audience analytics including demographics, psychographics, and viewing/listening habits.",
    },
    {
      icon: TrendingUp,
      title: "Content Performance Analysis",
      description:
        "Evaluate content effectiveness, audience engagement, and programming strategies for media companies.",
    },
    {
      icon: BookOpen,
      title: "EdTech & E-Learning Research",
      description:
        "Digital learning adoption, online education platforms, and technology integration in educational institutions.",
    },
  ];

  const expertise = [
    "Television & Broadcasting",
    "Radio & Audio Streaming",
    "Digital Media & Social Platforms",
    "Print Media & Publishing",
    "Higher Education Institutions",
    "K-12 Schools & Academies",
    "EdTech Companies",
    "Training & Development",
  ];

  const caseStudies = [
    {
      title: "National TV Network Audience Study",
      challenge:
        "Major broadcasting network needed to understand changing viewer preferences and optimize programming schedule",
      solution:
        "Conducted comprehensive audience measurement study with 10,000+ respondents across Nigeria, analyzing viewing patterns and content preferences",
      result:
        "Programming adjustments led to 25% increase in prime-time viewership and improved advertiser confidence",
    },
    {
      title: "Private University Market Positioning",
      challenge:
        "New private university required market entry strategy and brand positioning in competitive education landscape",
      solution:
        "Multi-phase research including parent surveys, student focus groups, and competitive analysis across 5 states",
      result:
        "Strategic positioning led to 150% enrollment target achievement in first academic year",
    },
  ];

  return (
    <>
      <SEOHead
        title="Media & Education Research Services | Market Insights | PSI Nigeria"
        description="Specialized media and education market research in Nigeria & West Africa. Audience measurement, advertising effectiveness, education trends, and content performance analysis."
        keywords="media research Nigeria, education market research, audience measurement, advertising effectiveness, EdTech research, TV ratings, radio audience, student enrollment"
        canonicalUrl="https://psi-ng.com/sectors/media-education"
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
                Media & Education Research Excellence
              </h1>
              <p className="text-xl lg:text-2xl mb-8  text-muted-foreground leading-relaxed">
                Strategic insights for media companies and educational
                institutions across Nigeria and West Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => setIsModalOpen(true)}
                  className="group"
                >
                  Start Your Research Project
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline-primary" size="xl">
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
                Comprehensive Media & Education Research Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From audience measurement to educational market trends, we
                provide the insights that drive success in media and education
                sectors
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
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialized expertise across media and education sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((category, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth text-center"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {category}
                  </h3>
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
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results from our media and education research projects
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Challenge:
                      </h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Solution:
                      </h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Result:
                      </h4>
                      <p className="text-primary font-semibold">
                        {study.result}
                      </p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Ready to Unlock Media & Education Insights?
            </h2>
            <p className="text-xl  text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with Nigeria's trusted research experts for actionable
              insights in media and education sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => setIsModalOpen(true)}
              >
                Request Research Proposal
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

export default MediaEducation;
