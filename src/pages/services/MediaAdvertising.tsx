import SEOHead from "@/components/SEOHead";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Tv, 
  Radio, 
  Smartphone, 
  Monitor, 
  Target,
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Eye,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const MediaAdvertising = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const keyFeatures = [
    {
      icon: Eye,
      title: "Brand Awareness Tracking",
      description: "Measure aided and unaided brand recall, brand recognition, and awareness levels across different demographics."
    },
    {
      icon: Target,
      title: "Campaign Effectiveness",
      description: "Evaluate advertising campaign performance, reach, frequency, and impact on brand perception and purchase intent."
    },
    {
      icon: Users,
      title: "Audience Measurement",
      description: "Understand your target audience behavior, media consumption patterns, and channel preferences."
    },
    {
      icon: TrendingUp,
      title: "ROI Analysis",
      description: "Measure return on advertising investment and optimize media spend allocation across channels."
    }
  ];

  const serviceOfferings = [
    {
      title: "TV Advertising Research",
      icon: Tv,
      description: "Comprehensive television advertising effectiveness studies across local and satellite channels.",
      features: ["Viewership analysis", "Ad recall testing", "Channel preference", "Prime time effectiveness"]
    },
    {
      title: "Radio Advertising Studies",
      icon: Radio,
      description: "Radio advertising impact measurement across FM, AM, and online radio platforms.",
      features: ["Listenership patterns", "Audio brand recall", "Station loyalty", "Time slot analysis"]
    },
    {
      title: "Digital Advertising Research",
      icon: Smartphone,
      description: "Digital media effectiveness across social media, mobile apps, and online platforms.",
      features: ["Social media ROI", "Mobile ad performance", "Online engagement", "Influencer impact"]
    },
    {
      title: "Print & OOH Studies",
      icon: Monitor,
      description: "Traditional media effectiveness including newspapers, magazines, and outdoor advertising.",
      features: ["Print readership", "Billboard impact", "Transit advertising", "Point-of-sale effectiveness"]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Optimize Media Mix",
      description: "Identify the most effective media channels for your target audience and budget."
    },
    {
      icon: BarChart3,
      title: "Maximize ROI",
      description: "Allocate advertising budget efficiently based on channel performance data."
    },
    {
      icon: Users,
      title: "Understand Audiences",
      description: "Deep insights into consumer media consumption and advertising response patterns."
    },
    {
      icon: CheckCircle,
      title: "Improve Creative",
      description: "Test and optimize advertising creative elements for maximum impact and recall."
    }
  ];

  const mediaChannels = [
    "Television (Local & Satellite)", "Radio (FM/AM/Online)", "Social Media Platforms", 
    "Mobile Applications", "Newspapers & Magazines", "Outdoor/Billboard", 
    "Transit Advertising", "Cinema Advertising"
  ];

  const methodologies = [
    {
      title: "Pre-Campaign Testing",
      description: "Test advertising concepts and creative elements before launch to optimize effectiveness."
    },
    {
      title: "Campaign Tracking",
      description: "Monitor advertising performance in real-time during campaign execution."
    },
    {
      title: "Post-Campaign Analysis",
      description: "Comprehensive evaluation of advertising impact on brand metrics and consumer behavior."
    },
    {
      title: "Competitive Intelligence",
      description: "Track competitor advertising activities, spend, and effectiveness across media channels."
    }
  ];

  return (
    <>
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SEOHead 
        title="Media & Advertising Research Services Nigeria — Campaign Effectiveness & ROI | PSI"
        description="Professional media and advertising research in Nigeria. Measure campaign effectiveness, brand awareness, audience analysis, ROI tracking across TV, radio, digital, and print media."
        keywords="media research Nigeria, advertising effectiveness, campaign tracking, brand awareness study, TV advertising research, digital media ROI, radio advertising analysis Nigeria"
        canonicalUrl="/services/media-advertising"
      />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Badge variant="outline" className="mb-4 text-primary border-primary">
                    Media & Advertising Research
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                    <span className="text-primary">Maximize Your </span>
                    Advertising Impact
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Measure campaign effectiveness, optimize media spend, and understand audience engagement 
                    across TV, radio, digital, and traditional media channels in Nigeria and West Africa.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="cta" size="xl" onClick={() => setIsModalOpen(true)}>
                      Start Media Research
                    </Button>
                    <Button variant="outline" size="xl">
                      View Sample Reports
                    </Button>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Comprehensive Media Intelligence</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From traditional media to digital platforms, we provide complete advertising effectiveness insights.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {keyFeatures.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <Card className="hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <feature.icon className="h-12 w-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Media Research Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Specialized research solutions for different media channels and advertising formats.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {serviceOfferings.map((service) => (
                  <StaggerItem key={service.title}>
                    <Card className="h-full hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <service.icon className="h-12 w-12 text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Methodologies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Research Methodologies</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive approach to measuring advertising effectiveness at every stage.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {methodologies.map((method) => (
                  <StaggerItem key={method.title}>
                    <Card className="hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-3">{method.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{method.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose PSI Media Research?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Drive advertising success with data-driven insights and strategic recommendations.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit) => (
                  <StaggerItem key={benefit.title}>
                    <Card className="text-center hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-6">
                        <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="font-bold mb-3">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Media Channels */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Media Channels We Cover</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive coverage across traditional and digital media platforms.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                {mediaChannels.map((channel) => (
                  <Badge key={channel} variant="secondary" className="px-4 py-2">
                    {channel}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Optimize Your Media Strategy?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Get actionable insights to maximize your advertising ROI and reach your target audience effectively.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="glass" size="xl" onClick={() => setIsModalOpen(true)}>
                    Request Proposal
                  </Button>
                  <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                    Schedule Media Consultation
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default MediaAdvertising;