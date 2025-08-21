import SEOHead from "@/components/SEOHead";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Building, 
  Users, 
  Globe,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Coverage = () => {
  const offices = [
    {
      country: "Nigeria",
      city: "Lagos",
      flag: "🇳🇬",
      status: "Headquarters",
      address: "123 Victoria Island, Lagos State, Nigeria",
      phone: "+234-701-234-5678",
      email: "lagos@practicalsampling.com",
      description: "Our headquarters and largest office, serving all Nigerian states with comprehensive research capabilities.",
      capabilities: ["Quantitative Research", "Qualitative Research", "Field Operations", "Data Analytics"],
      languages: ["English", "Yoruba", "Igbo", "Hausa"],
      teamSize: "50+ researchers"
    },
    {
      country: "Ghana",
      city: "Accra",
      flag: "🇬🇭",
      status: "Regional Office",
      address: "45 Oxford Street, Osu, Accra, Ghana",
      phone: "+233-302-123-456",
      email: "accra@practicalsampling.com",
      description: "Covering Ghana and serving as our English-speaking West Africa coordination hub.",
      capabilities: ["Market Research", "Consumer Insights", "Rural Studies", "Cross-border Coordination"],
      languages: ["English", "Twi", "Ewe", "Ga"],
      teamSize: "25+ researchers"
    },
    {
      country: "Senegal",
      city: "Dakar",
      flag: "🇸🇳",
      status: "Regional Office",
      address: "78 Avenue Léopold Sédar Senghor, Dakar, Senegal",
      phone: "+221-338-123-456",
      email: "dakar@practicalsampling.com",
      description: "Our Francophone West Africa hub, specializing in French-speaking markets.",
      capabilities: ["Francophone Research", "Social Studies", "Political Polling", "Cultural Analysis"],
      languages: ["French", "Wolof", "Pulaar", "Serer"],
      teamSize: "20+ researchers"
    },
    {
      country: "Liberia",
      city: "Monrovia",
      flag: "🇱🇷",
      status: "Field Office",
      address: "12 Broad Street, Monrovia, Liberia",
      phone: "+231-555-123-456",
      email: "monrovia@practicalsampling.com",
      description: "Serving Liberia with focus on post-conflict development and economic research.",
      capabilities: ["Development Studies", "Social Research", "Economic Analysis", "Community Surveys"],
      languages: ["English", "Local Dialects"],
      teamSize: "15+ researchers"
    },
    {
      country: "Sierra Leone",
      city: "Freetown",
      flag: "🇸🇱",
      status: "Field Office",
      address: "34 Siaka Stevens Street, Freetown, Sierra Leone",
      phone: "+232-76-123-456",
      email: "freetown@practicalsampling.com",
      description: "Comprehensive research services across Sierra Leone's diverse regions.",
      capabilities: ["Health Research", "Education Studies", "Mining Sector Research", "Rural Surveys"],
      languages: ["English", "Krio", "Temne", "Mende"],
      teamSize: "12+ researchers"
    },
    {
      country: "Cameroon",
      city: "Douala",
      flag: "🇨🇲",
      status: "Field Office",
      address: "56 Boulevard de la Liberté, Douala, Cameroon",
      phone: "+237-233-123-456",
      email: "douala@practicalsampling.com",
      description: "Bilingual research capabilities serving both French and English-speaking regions.",
      capabilities: ["Bilingual Research", "FMCG Studies", "Telecom Research", "Banking Surveys"],
      languages: ["French", "English", "Local Languages"],
      teamSize: "18+ researchers"
    },
    {
      country: "Côte d'Ivoire",
      city: "Abidjan",
      flag: "🇨🇮",
      status: "Field Office",
      address: "89 Boulevard de la République, Abidjan, Côte d'Ivoire",
      phone: "+225-20-123-456",
      email: "abidjan@practicalsampling.com",
      description: "Strategic location for FMCG and agricultural research across Francophone West Africa.",
      capabilities: ["Agricultural Research", "FMCG Studies", "Financial Services", "Trade Analysis"],
      languages: ["French", "Baoulé", "Dioula", "Bété"],
      teamSize: "22+ researchers"
    }
  ];

  const capabilities = [
    {
      icon: Users,
      title: "200+ Field Researchers",
      description: "Trained and certified across all locations"
    },
    {
      icon: Globe,
      title: "15+ Languages",
      description: "Local language capabilities in every market"
    },
    {
      icon: Building,
      title: "Urban & Rural Reach",
      description: "From megacities to remote communities"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Consistent standards across all offices"
    }
  ];

  const stats = [
    { number: "7", label: "Country Offices", description: "Direct operations" },
    { number: "200M+", label: "Population Reach", description: "Across West Africa" },
    { number: "15+", label: "Languages", description: "Research capabilities" },
    { number: "95%", label: "Coverage Rate", description: "Target demographics" }
  ];

  return (
    <>
      <SEOHead 
        title="PSI Coverage — Research Offices Across Nigeria & West Africa"
        description="PSI operates from 7 offices across West Africa. Headquarters in Lagos, Nigeria with offices in Ghana, Senegal, Liberia, Sierra Leone, Cameroon, and Côte d'Ivoire. Complete contact details and capabilities."
        keywords="PSI offices West Africa, market research Lagos Nigeria, PSI Ghana office, PSI Senegal office, research coverage Nigeria, West Africa research network, PSI contact details"
        canonicalUrl="/coverage"
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
                    Our Coverage
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                    <span className="gradient-primary bg-clip-text text-transparent">West Africa</span>
                    <br />
                    Research Network
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    PSI has its headquarters in Lagos, Nigeria and operates across Africa having offices 
                    in 7 West African countries, providing comprehensive market research coverage.
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
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Capabilities Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Regional Capabilities</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our distributed network provides unmatched research capabilities across West Africa.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {capabilities.map((capability) => (
                  <StaggerItem key={capability.title}>
                    <Card className="text-center hover-lift border-0 shadow-soft hover:shadow-medium">
                      <CardContent className="p-8">
                        <capability.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                        <p className="text-muted-foreground">{capability.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Office Locations</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategically located across West Africa to serve diverse markets and cultures.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-2 gap-8">
                {offices.map((office, index) => (
                  <StaggerItem key={office.country}>
                    <Card className="hover-lift border-0 shadow-soft hover:shadow-strong">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="text-4xl">{office.flag}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold">{office.country}</h3>
                              <Badge variant={office.status === 'Headquarters' ? 'default' : 'secondary'}>
                                {office.status}
                              </Badge>
                            </div>
                            <p className="text-lg text-muted-foreground font-medium">{office.city}</p>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {office.description}
                        </p>

                        {/* Contact Information */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-sm">
                            <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{office.address}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                            <a href={`tel:${office.phone}`} className="text-muted-foreground hover:text-primary">
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                            <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary">
                              {office.email}
                            </a>
                          </div>
                        </div>

                        {/* Capabilities */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Core Capabilities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {office.capabilities.map((capability) => (
                              <Badge key={capability} variant="outline" className="text-xs">
                                {capability}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Languages & Team Size */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Languages:</h4>
                            <p className="text-sm text-muted-foreground">
                              {office.languages.join(", ")}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Team Size:</h4>
                            <p className="text-sm text-muted-foreground">{office.teamSize}</p>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full group">
                          Contact This Office
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Start Your West Africa Research?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Whether you need insights from one market or coordinated research across multiple countries, 
                  our network is ready to deliver.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="glass" size="xl">
                    Plan Your Multi-Country Study
                  </Button>
                  <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                    Download Coverage Map
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

export default Coverage;