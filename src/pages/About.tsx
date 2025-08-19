import SEOHead from "@/components/SEOHead"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Users, Target, Award, Globe, CheckCircle, ArrowRight } from "lucide-react"

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "12", label: "West African Countries" },
    { number: "50,000+", label: "Interviews Conducted" },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Precision & Accuracy",
      description: "Rigorous methodologies and quality controls ensure reliable, actionable insights."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Local Expertise",
      description: "Deep understanding of Nigerian and West African markets, cultures, and business environments."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Professional Excellence",
      description: "Certified researchers, industry best practices, and commitment to ethical standards."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Regional Coverage",
      description: "Extensive network across Nigeria and West Africa for comprehensive market intelligence."
    }
  ]

  const certifications = [
    "ESOMAR Member",
    "Nigeria Marketing Research Association (NMRA)",
    "ISO 20252 Certified",
    "Data Protection Compliant"
  ]

  return (
    <>
      <SEOHead 
        title="About PSI — Leading Market Research Agency in Nigeria & West Africa"
        description="Learn about Practical Sampling International (PSI), Nigeria's trusted market research partner. 15+ years experience, 500+ projects, comprehensive West Africa coverage."
        keywords="about PSI, market research Nigeria history, research agency Nigeria, West Africa research company, Nigerian research experts"
        canonicalUrl="/about"
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
                  className="mb-8"
                >
                  <Badge variant="outline" className="mb-4 text-primary border-primary">
                    About PSI
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                    Market Research
                    <span className="gradient-primary bg-clip-text text-transparent"> Excellence </span>
                    Since 2009
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Practical Sampling International (PSI) has been Nigeria's trusted market research partner, 
                    delivering accurate, actionable insights across West Africa for over 15 years.
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission & Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    To empower businesses and organizations across Nigeria and West Africa with 
                    precise, actionable market intelligence that drives informed decision-making 
                    and sustainable growth.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Founded in 2009, PSI emerged from a recognition that the West African market 
                    needed research partners who truly understand local contexts, cultural nuances, 
                    and business environments. Today, we're proud to be the go-to research agency 
                    for leading brands across the region.
                  </p>
                  <Button variant="outline-primary" size="lg">
                    Our Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 gradient-primary rounded-2xl transform rotate-3"></div>
                  <img 
                    src="/assets/about-team.jpg" 
                    alt="PSI research team in Nigeria"
                    className="relative rounded-2xl shadow-strong w-full h-96 object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide our work and define our commitment to excellence.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <StaggerItem key={value.title}>
                    <Card className="h-full hover-lift">
                      <CardContent className="p-8">
                        <div className="mb-4">
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Certifications & Memberships
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Our commitment to professional standards and ethical research practices.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      className="flex items-center p-4 bg-card rounded-lg border border-border"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="font-medium text-foreground">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Partner with PSI?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Let's discuss how our market research expertise can drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="glass" size="xl">
                    Request Proposal
                  </Button>
                  <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  )
}

export default About