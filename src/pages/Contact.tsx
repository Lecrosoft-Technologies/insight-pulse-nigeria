import SEOHead from "@/components/SEOHead";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollEffects";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Calendar,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+234-802-324-7863",
      subtitle: "Mon-Fri, 8:00 AM - 6:00 PM WAT",
      action: "Call Now",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "WhatsApp",
      details: "+234-803-834-5509",
      subtitle: "Quick responses, file sharing",
      action: "Chat Now",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "hello@psi-research.net",
      subtitle: "Response within 2 hours",
      action: "Send Email",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Book a Meeting",
      details: "15-min consultation",
      subtitle: "Discuss your research needs",
      action: "Schedule Now",
    },
  ];

  const offices = [
    {
      city: "Nigeria",
      address: "118b, Bisi Obadina Street, Omole Phase 1 Lagos, Nigeria",
      phone: "+234-802-324-7863",
      email: "lagos@psi-research.net",
    },
    {
      city: "Ghana",
      address: "33 Troas Street, Osu. Accra Ghana",
      phone: "+233-273-717-136",
      email: "ghana@psi-research.net",
    },
  ];

  const faqs = [
    {
      question: "How quickly can you start a research project?",
      answer:
        "Most projects can begin within 1-2 weeks, depending on complexity and sample requirements.",
    },
    {
      question: "Do you cover rural areas in Nigeria?",
      answer:
        "Yes, we have extensive rural coverage across all 36 states and FCT through our field network.",
    },
    {
      question: "What's included in your research proposals?",
      answer:
        "Methodology, timeline, sample design, questionnaire, deliverables, and detailed pricing.",
    },
    {
      question: "Can you handle multi-country studies?",
      answer:
        "Absolutely. We coordinate studies across West Africa through our regional partners.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact PSI — Get Your Market Research Quote | Nigeria & West Africa"
        description="Contact Practical Sampling International for market research services in Nigeria and West Africa. Request proposal, book consultation, get quotes. Response within 2 hours."
        keywords="contact PSI Nigeria, market research quote Nigeria, research proposal Nigeria, PSI contact information, market research consultation Nigeria, Top market research company in Nigeria, West Africa market research services, PSI research offices, request research quote, book research consultation, market research services Nigeria, West Africa,"
        canonicalUrl="/contact"
      />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge
                  variant="outline"
                  className="mb-4 text-primary border-primary"
                >
                  Get In Touch
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Let's Discuss Your
                  <span className="text-primary"> Research </span>
                  Needs
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Ready to unlock market insights? Get a free consultation and
                  detailed proposal tailored to your research objectives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="xl">
                    Request Proposal
                  </Button>
                  <Button variant="outline-primary" size="xl">
                    Book 15-min Call
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Multiple Ways to Reach Us
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose your preferred communication method. We respond quickly
                  across all channels.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => (
                  <StaggerItem key={method.title}>
                    <Card className="h-full hover-lift group cursor-pointer text-center">
                      <CardContent className="p-6">
                        <div className="mb-4 flex justify-center">
                          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                            {method.icon}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {method.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {method.details}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {method.subtitle}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group-hover:text-primary"
                        >
                          {method.action}
                        </Button>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Tell us about your research needs and we'll get back to you
                    within 2 hours with a detailed response.
                  </p>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          type="text"
                          placeholder="Your Name *"
                          className="h-12"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address *"
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          type="text"
                          placeholder="Company"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        type="text"
                        placeholder="Project Title"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <Textarea
                        placeholder="Tell us about your research objectives, target audience, timeline, and any specific requirements..."
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button variant="cta" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground">
                      * Required fields. We'll respond within 2 hours during
                      business hours.
                    </p>
                  </form>
                </div>
              </ScrollReveal>

              {/* Office Information */}
              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Visit Our Offices
                  </h2>

                  <div className="space-y-6 mb-8">
                    {offices.map((office, index) => (
                      <motion.div
                        key={office.city}
                        className="p-6 bg-background rounded-xl border border-border"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                      >
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {office.city} Office
                        </h3>
                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{office.email}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Business Hours */}
                  <div className="p-6 bg-card rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Business Hours
                      </h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">
                          8:00 AM - 6:00 PM WAT
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">
                          9:00 AM - 2:00 PM WAT
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Quick answers to common questions about our research services.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <StaggerItem key={index}>
                    <Card className="hover-lift">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
