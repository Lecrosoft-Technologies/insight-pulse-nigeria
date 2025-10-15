import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Vote, TrendingUp, Users, BarChart3, Target, Globe } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import RequestProposalModal from "@/components/RequestProposalModal";

const Political = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Vote,
      title: "Opinion Polling & Voter Research",
      description: "Accurate pre-election polling, exit polls, and voter preference tracking across constituencies."
    },
    {
      icon: TrendingUp,
      title: "Political Campaign Analytics",
      description: "Data-driven insights for campaign strategy, message testing, and voter targeting."
    },
    {
      icon: Users,
      title: "Public Opinion Studies",
      description: "Track public sentiment on policy issues, government performance, and social matters."
    },
    {
      icon: BarChart3,
      title: "Election Monitoring & Analysis",
      description: "Independent electoral monitoring, voter behavior analysis, and election outcome prediction."
    },
    {
      icon: Target,
      title: "Constituency Profiling",
      description: "Detailed demographic, socio-economic, and political profiles of electoral districts."
    },
    {
      icon: Globe,
      title: "Conflict Resolution & Peacebuilding Research",
      description: "Evidence-based research for conflict analysis, peacebuilding programs, and community dialogue facilitation."
    }
  ];

  const expertise = [
    "Presidential & Gubernatorial Elections",
    "Legislative Races & Local Government", 
    "Party Primaries & Candidate Selection",
    "Referendum & Constitutional Issues",
    "Policy Perception & Government Rating",
    "Political Communication Testing",
    "Conflict Resolution & Peacebuilding",
    "Community Dialogue & Reconciliation"
  ];

  const caseStudies = [
    {
      title: "2023 Presidential Election Polling",
      challenge: "Conduct accurate nationwide polling ahead of Nigeria's 2023 presidential election across all 36 states and FCT",
      solution: "Deployed 3,000+ trained enumerators with multi-stage stratified sampling methodology covering urban and rural areas",
      result: "Achieved <3% margin of error with final predictions within 2.1% of actual results across all major candidates"
    },
    {
      title: "Gubernatorial Campaign Strategy",
      challenge: "Opposition candidate needed to understand voter priorities and effective messaging in swing constituencies",
      solution: "Comprehensive voter segmentation study with message testing across 15 key local government areas",
      result: "Campaign strategy adjustments led to 18% swing in target constituencies, securing election victory"
    }
  ];

  const methodology = [
    {
      title: "Rigorous Sampling",
      description: "Multi-stage stratified random sampling ensuring representative coverage across demographics and geographies"
    },
    {
      title: "Trained Enumerators",
      description: "Extensively trained field teams with local language capabilities and political neutrality protocols"
    },
    {
      title: "Quality Control",
      description: "Real-time data validation, back-checks, and supervisor verification at multiple levels"
    },
    {
      title: "Rapid Deployment",
      description: "Ability to mobilize 1,000+ field staff within 72 hours for time-sensitive political research"
    }
  ];

  return (
    <>
      <SEOHead
        title="Political Research & Election Polling Services | PSI Nigeria"
        description="Expert political research, opinion polling, and election monitoring services in Nigeria & West Africa. Accurate voter insights, campaign analytics, and constituency profiling."
        keywords="political research Nigeria, election polling Nigeria, opinion polls Nigeria, voter research, political campaign analytics, election monitoring Nigeria"
        canonicalUrl="https://psi-ng.com/sectors/political"
      />
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-text-reveal text-white">
                Political Research & Election Polling
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90">
                Accurate, independent political research and voter insights across Nigeria and West Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)} className="group">
                  Start Your Political Research
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                  View Polling Methodology
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
                Comprehensive Political Research Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From pre-election polling to policy impact assessment, we provide the insights needed to understand Nigeria's political landscape
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
                    <p className="text-muted-foreground">{service.description}</p>
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
                Political Research Expertise
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialized experience across all levels of political research and electoral studies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((category, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth text-center"
                >
                  <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Polling Methodology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Rigorous scientific methods ensuring accurate, unbiased political research
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((item, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Political Research Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Proven track record in electoral polling and political analysis
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover-lift transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Result:</h4>
                      <p className="text-primary font-semibold">{study.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Need Reliable Political Research?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with Nigeria's trusted political research specialists. Get accurate polling and voter insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)}>
                Request Political Research Proposal
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Political;