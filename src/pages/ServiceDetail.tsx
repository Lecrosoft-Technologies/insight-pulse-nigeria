import { useParams, Link, Navigate } from "react-router-dom"
import SEOHead from "@/components/SEOHead"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, Users, BarChart3, CheckCircle, Download, Phone } from "lucide-react"
import { useState } from "react"
import RequestProposalModal from "@/components/RequestProposalModal"

const ServiceDetail = () => {
  const { serviceSlug } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = {
    "market-research": {
      title: "Market Research Services in Nigeria & West Africa",
      description: "Comprehensive quantitative and qualitative studies to understand your market, customers, and opportunities across Nigeria and West Africa",
      keywords: "Nigeria market research, West Africa consumer insights, quantitative surveys Nigeria, qualitative research Nigeria, market analysis West Africa",
      hero: {
        subtitle: "Quantitative & Qualitative Studies",
        description: "Deep market insights through rigorous research methodologies, from consumer behavior to competitive analysis across Nigeria and West Africa.",
        features: ["CAPI/CATI/CAWI Surveys", "Focus Groups & IDIs", "U&A Studies", "Brand Tracking", "Segmentation Research"]
      },
      overview: {
        description: "Our market research services provide the actionable insights you need to make informed business decisions. We combine international best practices with deep local knowledge to deliver research that truly understands your market.",
        timeline: "2-8 weeks",
        sampleSize: "300-3,000+ respondents",
        methodology: "Mixed methods approach"
      },
      services: [
        {
          title: "Consumer Research",
          description: "Understanding consumer behavior, preferences, and decision-making processes",
          deliverables: ["Consumer profiles", "Purchase journey mapping", "Needs analysis", "Preference drivers"]
        },
        {
          title: "Brand Studies",
          description: "Brand awareness, perception, and positioning research",
          deliverables: ["Brand health tracking", "Competitive positioning", "Brand equity measurement", "Communication effectiveness"]
        },
        {
          title: "Product Research",
          description: "Product development, testing, and optimization studies",
          deliverables: ["Concept testing", "Product optimization", "Pricing research", "Launch readiness assessment"]
        },
        {
          title: "Market Sizing",
          description: "Market size, growth potential, and opportunity assessment",
          deliverables: ["Market size estimation", "Growth forecasting", "Opportunity mapping", "Competitive landscape"]
        }
      ],
      process: [
        { step: "Research Design", description: "Methodology selection and questionnaire development" },
        { step: "Sampling", description: "Representative sample selection across target markets" },
        { step: "Data Collection", description: "CAPI/CATI/CAWI execution with quality controls" },
        { step: "Analysis", description: "Statistical analysis and insight generation" },
        { step: "Reporting", description: "Actionable insights with strategic recommendations" }
      ],
      faqs: [
        {
          question: "What's the typical timeline for a market research study in Nigeria?",
          answer: "Most studies take 2-8 weeks depending on sample size, methodology, and geographic coverage. We provide detailed timelines during the proposal stage."
        },
        {
          question: "Do you cover rural areas in Nigeria?",
          answer: "Yes, we have extensive rural coverage across all 36 states in Nigeria, with trained field teams and quality assurance protocols."
        },
        {
          question: "Can you conduct multi-country studies across West Africa?",
          answer: "Absolutely. We coordinate multi-country studies across West Africa through our regional network of partners and field teams."
        },
        {
          question: "What quality controls do you have in place?",
          answer: "We employ multiple quality control measures including GPS tracking, audio recording (with consent), back-checks, and statistical validation of all data."
        }
      ]
    },
    "social-research": {
      title: "Social & Opinion Research in Nigeria & West Africa",
      description: "Accurate political polling, social attitudes research, and public opinion measurement across Nigeria and West Africa with representative sampling",
      keywords: "Nigeria opinion polls, political polling Nigeria, social research West Africa, public opinion Nigeria, election polling Nigeria",
      hero: {
        subtitle: "Political Polling & Social Attitudes",
        description: "Accurate measurement of public opinion, political preferences, and social attitudes through representative sampling and rigorous methodology.",
        features: ["Political Polling", "Social Attitude Studies", "Public Opinion Research", "Exit Polls", "Referendum Research"]
      },
      overview: {
        description: "Our social and opinion research provides accurate insights into public sentiment, political preferences, and social attitudes. We use scientifically rigorous sampling methods to ensure representative results.",
        timeline: "1-6 weeks",
        sampleSize: "800-5,000+ respondents",
        methodology: "Probability sampling"
      },
      services: [
        {
          title: "Political Polling",
          description: "Pre-election polls, candidate approval ratings, and political preference tracking",
          deliverables: ["Voting intention analysis", "Candidate performance metrics", "Issue importance ranking", "Demographic breakdowns"]
        },
        {
          title: "Social Attitudes",
          description: "Public opinion on social issues, policy preferences, and cultural trends",
          deliverables: ["Attitude measurement", "Social trend analysis", "Policy support assessment", "Cultural insight reports"]
        },
        {
          title: "Public Opinion",
          description: "General public sentiment tracking and opinion monitoring",
          deliverables: ["Opinion trend analysis", "Sentiment tracking", "Issue perception studies", "Public mood assessment"]
        },
        {
          title: "Exit Polls",
          description: "Election day polling for media and election monitoring",
          deliverables: ["Real-time results", "Demographic voting patterns", "Issue-based voting analysis", "Projection models"]
        }
      ],
      process: [
        { step: "Sample Design", description: "Probability-based sampling across demographics and geography" },
        { step: "Questionnaire", description: "Unbiased question development and pre-testing" },
        { step: "Field Training", description: "Specialized training for political and social research" },
        { step: "Data Collection", description: "Careful monitoring and quality assurance" },
        { step: "Analysis", description: "Statistical weighting and margin of error calculation" }
      ],
      faqs: [
        {
          question: "How accurate are your political polls?",
          answer: "Our polls typically have a margin of error of ±3-4% at 95% confidence level. We use probability sampling and proper weighting to ensure accuracy."
        },
        {
          question: "Do you conduct exit polls on election day?",
          answer: "Yes, we provide exit polling services for media organizations and election monitoring groups, with real-time reporting capabilities."
        },
        {
          question: "Can you poll at state and local levels?",
          answer: "Yes, we conduct polls at national, state, and local government area levels, adjusting sample sizes to ensure statistical significance."
        },
        {
          question: "How do you ensure unbiased polling?",
          answer: "We use neutral question wording, random sampling, proper weighting, and transparent methodology to minimize bias in all our polling work."
        }
      ]
    },
    "customer-satisfaction": {
      title: "Customer Satisfaction & NPS Research in Nigeria",
      description: "Measure customer loyalty, satisfaction drivers, and churn risk through comprehensive NPS and satisfaction studies across Nigeria and West Africa",
      keywords: "customer satisfaction research Nigeria, NPS surveys Nigeria, customer loyalty research, satisfaction measurement West Africa",
      hero: {
        subtitle: "NPS & Satisfaction Measurement",
        description: "Measure customer loyalty, identify satisfaction drivers, and predict churn risk through comprehensive satisfaction research and NPS studies.",
        features: ["NPS Benchmarking", "Satisfaction Tracking", "Driver Analysis", "Churn Prediction", "Journey Mapping"]
      },
      overview: {
        description: "Our customer satisfaction research helps you understand what drives loyalty, satisfaction, and retention. We provide actionable insights to improve customer experience and reduce churn.",
        timeline: "2-6 weeks",
        sampleSize: "400-2,000+ customers",
        methodology: "Customer experience measurement"
      },
      services: [
        {
          title: "NPS Studies",
          description: "Net Promoter Score measurement and benchmarking",
          deliverables: ["NPS scores", "Industry benchmarks", "Promoter/Detractor analysis", "Improvement recommendations"]
        },
        {
          title: "Satisfaction Tracking",
          description: "Ongoing customer satisfaction measurement and monitoring",
          deliverables: ["Satisfaction trends", "Performance metrics", "Alert systems", "Dashboard reporting"]
        },
        {
          title: "Driver Analysis",
          description: "Identifying key drivers of satisfaction and loyalty",
          deliverables: ["Driver importance ranking", "Impact analysis", "Priority matrix", "Action planning"]
        },
        {
          title: "Journey Mapping",
          description: "Customer experience mapping across touchpoints",
          deliverables: ["Journey maps", "Pain point identification", "Moment of truth analysis", "Experience optimization"]
        }
      ],
      process: [
        { step: "Study Design", description: "Customer touchpoint mapping and survey design" },
        { step: "Sample Selection", description: "Customer database sampling or intercept methodology" },
        { step: "Data Collection", description: "Multi-channel survey deployment (phone, online, in-person)" },
        { step: "Analysis", description: "Statistical driver analysis and segmentation" },
        { step: "Action Planning", description: "Priority recommendations and improvement roadmap" }
      ],
      faqs: [
        {
          question: "What's a good NPS score for companies in Nigeria?",
          answer: "NPS benchmarks vary by industry, but generally scores above 30 are good, above 50 are excellent. We provide industry-specific benchmarks for context."
        },
        {
          question: "How often should we measure customer satisfaction?",
          answer: "We recommend quarterly tracking for most businesses, with monthly measurement for high-touch industries or during improvement initiatives."
        },
        {
          question: "Can you integrate with our CRM system?",
          answer: "Yes, we can work with your customer database for sampling and can provide results in formats compatible with most CRM and business intelligence systems."
        },
        {
          question: "Do you offer real-time satisfaction monitoring?",
          answer: "Yes, we provide dashboard solutions for real-time satisfaction monitoring with automated alerts for significant changes in scores."
        }
      ]
    },
    "retail-audit": {
      title: "FMCG & Retail Audit Services in Nigeria",
      description: "Track product availability, market share, pricing, and shelf dynamics across Nigeria's retail landscape with comprehensive audit services",
      keywords: "retail audit Nigeria, FMCG research Nigeria, market share tracking, price monitoring Nigeria, distribution audit",
      hero: {
        subtitle: "Market Share & Distribution Tracking",
        description: "Comprehensive retail audit services tracking availability, share, pricing, and promotional activity across Nigeria's diverse retail landscape.",
        features: ["Retail Panels", "Price Monitoring", "Share Tracking", "Distribution Analysis", "Promotion Tracking"]
      },
      overview: {
        description: "Our retail audit services provide accurate measurement of market performance through systematic tracking of products across retail channels. We cover traditional trade, modern trade, and everything in between.",
        timeline: "Ongoing monthly",
        sampleSize: "500-2,000+ outlets",
        methodology: "Systematic retail measurement"
      },
      services: [
        {
          title: "Market Share Tracking",
          description: "Accurate measurement of brand and product market shares",
          deliverables: ["Share reports", "Trend analysis", "Competitive tracking", "Category insights"]
        },
        {
          title: "Distribution Analysis",
          description: "Product availability and distribution coverage measurement",
          deliverables: ["Distribution metrics", "Gap analysis", "Channel performance", "Expansion opportunities"]
        },
        {
          title: "Price Monitoring",
          description: "Retail price tracking and competitive price analysis",
          deliverables: ["Price tracking", "Competitive analysis", "Price elasticity", "Pricing recommendations"]
        },
        {
          title: "Promotion Tracking",
          description: "Promotional activity monitoring and effectiveness measurement",
          deliverables: ["Promotion analysis", "Effectiveness metrics", "Share impact", "ROI measurement"]
        }
      ],
      process: [
        { step: "Panel Setup", description: "Representative retailer panel selection" },
        { step: "Audit Training", description: "Field team training on product identification and measurement" },
        { step: "Data Collection", description: "Regular store visits and systematic data capture" },
        { step: "Quality Control", description: "Validation checks and data quality assurance" },
        { step: "Reporting", description: "Regular reports with insights and recommendations" }
      ],
      faqs: [
        {
          question: "How often do you conduct retail audits?",
          answer: "Most clients receive monthly reports, with data collection occurring throughout the month to capture temporal variations in availability and pricing."
        },
        {
          question: "Do you cover both modern and traditional trade?",
          answer: "Yes, our panels include supermarkets, pharmacies, independent retailers, markets, and other relevant retail channels based on your category."
        },
        {
          question: "Can you track competitor promotional activities?",
          answer: "Yes, we systematically track promotional activities including discounts, displays, and special offers across all monitored brands."
        },
        {
          question: "How accurate is your market share data?",
          answer: "Our market share estimates are based on systematic retail measurement with representative panels, providing accuracy typically within ±2-3% of actual market shares."
        }
      ]
    },
    "product-testing": {
      title: "Product Testing & CLT Services in Nigeria",
      description: "Central Location Testing, sensory research, and product validation services in Lagos, Abuja, and across Nigeria for optimal product development",
      keywords: "product testing Nigeria, CLT Nigeria, sensory testing Lagos, product validation Nigeria, taste testing Lagos Abuja",
      hero: {
        subtitle: "Central Location Testing & Validation",
        description: "Professional product testing facilities in Lagos and Abuja for sensory research, concept validation, and product optimization studies.",
        features: ["Taste Testing", "Concept Validation", "Package Testing", "Sensory Research", "Usage Testing"]
      },
      overview: {
        description: "Our product testing services help you validate concepts, optimize products, and understand consumer preferences through controlled testing environments and rigorous methodology.",
        timeline: "1-4 weeks",
        sampleSize: "100-500+ testers",
        methodology: "Controlled testing environment"
      },
      services: [
        {
          title: "Taste Testing",
          description: "Food and beverage sensory evaluation and preference testing",
          deliverables: ["Preference scores", "Sensory profiles", "Optimization insights", "Launch readiness"]
        },
        {
          title: "Concept Testing",
          description: "New product concept validation and optimization",
          deliverables: ["Concept appeal", "Purchase intent", "Positioning insights", "Concept refinement"]
        },
        {
          title: "Package Testing",
          description: "Packaging design evaluation and shelf impact testing",
          deliverables: ["Design appeal", "Shelf standout", "Communication clarity", "Purchase influence"]
        },
        {
          title: "Usage Testing",
          description: "In-home product usage and satisfaction evaluation",
          deliverables: ["Usage patterns", "Satisfaction metrics", "Improvement areas", "Repurchase intent"]
        }
      ],
      process: [
        { step: "Test Design", description: "Methodology selection and protocol development" },
        { step: "Recruitment", description: "Target consumer recruitment and screening" },
        { step: "Facility Setup", description: "Controlled environment preparation" },
        { step: "Testing", description: "Systematic product evaluation with consumers" },
        { step: "Analysis", description: "Statistical analysis and actionable insights" }
      ],
      faqs: [
        {
          question: "Where are your testing facilities located?",
          answer: "We have permanent CLT facilities in Lagos and Abuja, with mobile testing capabilities for other locations across Nigeria."
        },
        {
          question: "What types of products can you test?",
          answer: "We test FMCG products including food, beverages, personal care, household products, and consumer electronics."
        },
        {
          question: "How do you recruit testers?",
          answer: "We recruit from our consumer database using specific demographic and usage criteria relevant to your product category."
        },
        {
          question: "Can you conduct blind vs branded testing?",
          answer: "Yes, we routinely conduct blind, branded, and paired comparison tests to isolate product versus brand effects."
        }
      ]
    },
    "mystery-shopping": {
      title: "Mystery Shopping Services in Nigeria & West Africa",
      description: "Professional mystery shopping and service quality audits across Nigeria and West Africa to evaluate customer experience and operational compliance",
      keywords: "mystery shopping Nigeria, service quality audit, customer experience evaluation Nigeria, compliance monitoring West Africa",
      hero: {
        subtitle: "Service Quality & Compliance Audits",
        description: "Professional mystery shopping services to evaluate customer experience, service quality, and operational compliance across your business locations.",
        features: ["Service Audits", "Compliance Monitoring", "Staff Evaluation", "Process Validation", "Competitor Analysis"]
      },
      overview: {
        description: "Our mystery shopping services provide objective evaluation of customer experience and operational performance through trained evaluators posing as regular customers.",
        timeline: "2-6 weeks",
        sampleSize: "50-500+ visits",
        methodology: "Covert evaluation"
      },
      services: [
        {
          title: "Service Quality Audits",
          description: "Customer service evaluation and experience measurement",
          deliverables: ["Service scores", "Performance benchmarks", "Training needs", "Best practices"]
        },
        {
          title: "Compliance Monitoring",
          description: "Operational compliance and policy adherence checking",
          deliverables: ["Compliance scores", "Violation reports", "Risk assessment", "Corrective actions"]
        },
        {
          title: "Staff Performance",
          description: "Individual and team performance evaluation",
          deliverables: ["Performance ratings", "Skills assessment", "Recognition opportunities", "Development plans"]
        },
        {
          title: "Competitor Analysis",
          description: "Competitive service benchmarking and analysis",
          deliverables: ["Competitive comparison", "Best practices", "Advantage areas", "Improvement opportunities"]
        }
      ],
      process: [
        { step: "Program Design", description: "Evaluation criteria and shopper profile development" },
        { step: "Shopper Training", description: "Mystery shopper recruitment and training" },
        { step: "Execution", description: "Systematic visits and data collection" },
        { step: "Quality Control", description: "Report validation and quality assurance" },
        { step: "Reporting", description: "Detailed reports with improvement recommendations" }
      ],
      faqs: [
        {
          question: "How do you ensure mystery shoppers aren't detected?",
          answer: "We carefully select and train shoppers to match your typical customer profile, with strict protocols to maintain anonymity."
        },
        {
          question: "Can you mystery shop online and phone channels?",
          answer: "Yes, we evaluate omnichannel experiences including websites, mobile apps, call centers, and social media interactions."
        },
        {
          question: "How quickly can you deploy mystery shoppers?",
          answer: "We can typically deploy within 1-2 weeks, with faster deployment possible for urgent requirements."
        },
        {
          question: "Do you provide video or audio recordings?",
          answer: "We can provide recordings where legally permissible and with appropriate consent, though most evaluations rely on detailed written reports."
        }
      ]
    }
  }

  const service = services[serviceSlug as keyof typeof services]
  
  if (!service) {
    return <Navigate to="/404" replace />
  }

  return (
    <>
      <SEOHead 
        title={service.title}
        description={service.description}
        keywords={service.keywords}
        canonicalUrl={`/services/${serviceSlug}`}
      />

      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-4 text-primary border-primary">
                  {service.hero.subtitle}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  {service.title.split(' in ')[0]}
                  <span className="text-primary"> in Nigeria </span>
                  & West Africa
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {service.hero.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {service.hero.features.map((feature) => (
                    <Badge key={feature} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="xl" onClick={() => setIsModalOpen(true)} className="group">
                    Request Proposal
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline-primary" size="xl">
                    <Phone className="h-5 w-5 mr-2" />
                    Book Consultation
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <ScrollReveal>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Typical Timeline</h3>
                    <p className="text-muted-foreground">{service.overview.timeline}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Sample Size</h3>
                    <p className="text-muted-foreground">{service.overview.sampleSize}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <BarChart3 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Methodology</h3>
                    <p className="text-muted-foreground">{service.overview.methodology}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.overview.description}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                What We Deliver
              </h2>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {service.services.map((item, index) => (
                  <StaggerItem key={item.title}>
                    <Card className="h-full hover-lift">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-primary" />
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Key Deliverables:</h4>
                          <ul className="space-y-1">
                            {item.deliverables.map((deliverable) => (
                              <li key={deliverable} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                Our Research Process
              </h2>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              {service.process.map((step, index) => (
                <ScrollReveal key={step.step} delay={index * 0.1}>
                  <div className="flex items-start gap-6 mb-8 last:mb-0">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                Frequently Asked Questions
              </h2>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <Accordion type="single" collapsible className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get a detailed proposal tailored to your specific research needs. 
                  We typically respond within 24 hours with timeline and pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="xl" onClick={() => setIsModalOpen(true)} className="group">
                    Request Detailed Proposal
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline-primary" size="xl">
                    <Download className="h-5 w-5 mr-2" />
                    Download Service Guide
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

export default ServiceDetail