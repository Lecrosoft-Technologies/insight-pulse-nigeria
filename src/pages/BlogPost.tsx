import { useParams, Link, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import SEOHead from "@/components/SEOHead"
import { ScrollReveal } from "@/components/ScrollEffects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, User, Share2, BookmarkPlus, ArrowRight } from "lucide-react"

// This would typically come from your Laravel API
const mockBlogPosts = {
  "nigeria-consumer-behavior-trends-2024": {
    title: "Nigeria Consumer Behavior Trends 2024: Post-COVID Market Shifts",
    slug: "nigeria-consumer-behavior-trends-2024",
    excerpt: "Comprehensive analysis of how Nigerian consumers have adapted their purchasing behaviors in the post-pandemic era, with implications for FMCG brands.",
    content: `
      <p>The Nigerian consumer landscape has undergone significant transformation since the COVID-19 pandemic, with lasting implications for brands and retailers across the country. Our comprehensive analysis of consumer behavior trends reveals five key shifts that are reshaping the market.</p>

      <h2>1. Digital-First Shopping Behaviors</h2>
      <p>Nigerian consumers have embraced digital channels at an unprecedented rate. Our research shows that 68% of urban consumers now regularly use e-commerce platforms, compared to just 23% in 2019. This shift is particularly pronounced among millennials and Gen Z consumers.</p>

      <blockquote>
        <p>"The pandemic accelerated digital adoption by at least 3-4 years. What we expected to see by 2025 happened by 2022." - PSI Consumer Research Director</p>
      </blockquote>

      <h2>2. Value-Conscious Purchasing</h2>
      <p>Economic pressures have made Nigerian consumers increasingly price-sensitive. Our studies indicate that 74% of consumers now actively compare prices across multiple channels before making purchases, and 58% have switched to more affordable alternatives in at least one product category.</p>

      <h3>Key Value Behaviors:</h3>
      <ul>
        <li>Increased adoption of bulk purchasing (45% increase)</li>
        <li>Greater reliance on promotions and discounts</li>
        <li>Shift toward own-label and local brands</li>
        <li>Extended product comparison shopping</li>
      </ul>

      <h2>3. Health and Wellness Focus</h2>
      <p>Health consciousness has become a primary driver of consumer choices. Categories showing significant growth include organic foods (+34%), immunity-boosting products (+67%), and fitness-related purchases (+29%).</p>

      <h2>4. Community and Social Shopping</h2>
      <p>Despite digital adoption, Nigerian consumers still value community recommendations highly. Social commerce and group buying have emerged as significant trends, with 42% of consumers participating in community-organized group purchases.</p>

      <h2>5. Sustainability Awareness</h2>
      <p>Environmental consciousness is growing, particularly among educated urban consumers. While still early-stage, 31% of consumers now consider environmental impact when making purchasing decisions.</p>

      <h2>Implications for Brands</h2>
      <p>These behavioral shifts present both challenges and opportunities for brands operating in Nigeria:</p>

      <ol>
        <li><strong>Digital Strategy is Essential:</strong> Brands without strong digital presence risk losing market share</li>
        <li><strong>Value Communication:</strong> Clear value proposition communication is critical</li>
        <li><strong>Health Positioning:</strong> Health benefits should be prominently featured</li>
        <li><strong>Community Engagement:</strong> Brands should leverage community networks and social proof</li>
        <li><strong>Sustainability Messaging:</strong> Early movers in sustainability can build competitive advantage</li>
      </ol>

      <h2>Research Methodology</h2>
      <p>This analysis is based on PSI's quarterly consumer tracking study conducted among 2,500 Nigerian consumers across urban and rural areas between January and December 2024. The study employed a mixed-methods approach combining quantitative surveys, focus group discussions, and in-home ethnographic research.</p>
    `,
    category: "Consumer Insights",
    readTime: "8 min read",
    publishedDate: "2024-08-15",
    author: {
      name: "PSI Research Team",
      role: "Consumer Insights Division",
      avatar: "/assets/team/psi-research-team.jpg"
    },
    image: "/assets/insights/consumer-trends-2024.jpg",
    tags: ["Consumer Behavior", "Nigeria", "Post-COVID", "FMCG", "Digital Shopping"],
    metaDescription: "Comprehensive analysis of Nigerian consumer behavior trends in 2024, revealing key post-COVID market shifts and implications for FMCG brands.",
    keywords: "Nigeria consumer behavior 2024, post-COVID shopping trends Nigeria, Nigerian consumer insights, FMCG trends Nigeria, digital shopping Nigeria"
  },
  "west-africa-digital-payment-adoption": {
    title: "West Africa Digital Payment Adoption: Regional Comparison Study",
    slug: "west-africa-digital-payment-adoption",
    excerpt: "Cross-country analysis of digital payment preferences and barriers across 8 West African markets, revealing key opportunities for fintech expansion.",
    content: `
      <p>Digital payment adoption across West Africa shows significant variation by country, with Nigeria leading in volume but Ghana showing the highest per-capita adoption rates. Our comprehensive regional study reveals the factors driving adoption and persistent barriers across eight markets.</p>

      <h2>Regional Overview</h2>
      <p>West Africa's digital payment landscape is characterized by rapid growth but uneven development. Mobile money solutions dominate in Francophone countries, while Nigeria's market is led by bank-backed solutions and international players.</p>

      <h2>Country Rankings by Adoption</h2>
      <ol>
        <li><strong>Ghana:</strong> 78% adoption rate, strong regulatory support</li>
        <li><strong>Nigeria:</strong> 67% adoption rate, largest absolute volume</li>
        <li><strong>Senegal:</strong> 61% adoption rate, mobile money focus</li>
        <li><strong>Ivory Coast:</strong> 54% adoption rate, growing urban usage</li>
        <li><strong>Burkina Faso:</strong> 43% adoption rate, rural challenges</li>
        <li><strong>Mali:</strong> 39% adoption rate, security concerns</li>
        <li><strong>Togo:</strong> 36% adoption rate, infrastructure limitations</li>
        <li><strong>Benin:</strong> 32% adoption rate, early stage development</li>
      </ol>

      <h2>Key Success Factors</h2>
      <h3>1. Regulatory Environment</h3>
      <p>Countries with clear, supportive regulatory frameworks show higher adoption rates. Ghana's National Payment Systems Act and Nigeria's Payment Service Banks regulations have been particularly effective.</p>

      <h3>2. Agent Network Density</h3>
      <p>The availability of cash-in/cash-out agents strongly correlates with adoption rates. Ghana averages one agent per 530 people, compared to Benin's one per 2,100 people.</p>

      <h3>3. Mobile Network Coverage</h3>
      <p>Reliable 3G/4G coverage is essential for digital payment success. Countries with coverage below 70% show significantly lower adoption rates.</p>

      <h2>Persistent Barriers</h2>
      <ul>
        <li><strong>Trust Issues:</strong> 34% of non-users cite security concerns</li>
        <li><strong>Digital Literacy:</strong> 28% lack confidence in digital transactions</li>
        <li><strong>Cash Preference:</strong> 41% prefer cash for cultural reasons</li>
        <li><strong>Infrastructure:</strong> Poor internet connectivity affects 23% of potential users</li>
        <li><strong>Cost Concerns:</strong> 19% find transaction fees too high</li>
      </ul>

      <h2>Opportunities for Fintech Expansion</h2>
      <p>Our analysis identifies several high-potential opportunities:</p>

      <h3>1. Rural Markets</h3>
      <p>Rural adoption lags urban by 23 percentage points on average, representing significant untapped potential. Success requires agent network expansion and user education.</p>

      <h3>2. Cross-Border Payments</h3>
      <p>Intra-regional trade volumes suggest strong demand for seamless cross-border payment solutions. Current solutions are fragmented and costly.</p>

      <h3>3. Merchant Payment Solutions</h3>
      <p>Small business payment acceptance remains low at 31% regionally. Simplified POS solutions and merchant education could accelerate adoption.</p>

      <h3>4. Government Payment Digitization</h3>
      <p>Government salary and benefit payments represent a major opportunity for driving adoption and building trust in digital systems.</p>

      <h2>Recommendations for Market Entry</h2>
      <ol>
        <li><strong>Start with High-Adoption Markets:</strong> Ghana and Nigeria offer the best immediate opportunities</li>
        <li><strong>Partner Locally:</strong> Local partnerships are essential for agent network development</li>
        <li><strong>Focus on Education:</strong> User education programs significantly improve adoption rates</li>
        <li><strong>Solve Real Problems:</strong> Successful solutions address specific local pain points</li>
        <li><strong>Plan for Scale:</strong> Regional expansion strategies should consider varying regulatory environments</li>
      </ol>

      <h2>Research Methodology</h2>
      <p>This study surveyed 4,800 consumers across eight West African countries, combining quantitative consumer research with qualitative stakeholder interviews and regulatory analysis. Fieldwork was conducted between March and July 2024.</p>
    `,
    category: "Financial Services",
    readTime: "12 min read",
    publishedDate: "2024-08-10",
    author: {
      name: "Dr. Adebayo Oladele",
      role: "Senior Research Director",
      avatar: "/assets/team/dr-adebayo-oladele.jpg"
    },
    image: "/assets/insights/digital-payments-africa.jpg",
    tags: ["Digital Payments", "West Africa", "Fintech", "Mobile Money", "Cross-border"],
    metaDescription: "Regional comparison study of digital payment adoption across 8 West African markets, revealing opportunities for fintech expansion and key success factors.",
    keywords: "West Africa digital payments, fintech expansion Africa, mobile money adoption, digital payment barriers Africa, cross-border payments West Africa"
  }
}

const BlogPost = () => {
  const { slug } = useParams()
  const [emailSubscribe, setEmailSubscribe] = useState("")
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real application, this would be an API call to your Laravel backend
    const fetchPost = async () => {
      setLoading(true)
      try {
        // Simulate API call
        const foundPost = mockBlogPosts[slug as keyof typeof mockBlogPosts]
        if (foundPost) {
          setPost(foundPost)
          // Get related posts (excluding current post)
          const allPosts = Object.values(mockBlogPosts).filter(p => p.slug !== slug)
          setRelatedPosts(allPosts.slice(0, 3))
        }
      } catch (error) {
        console.error("Error fetching post:", error)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your Laravel API for newsletter subscription
    console.log("Newsletter subscription:", emailSubscribe)
    setEmailSubscribe("")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!post) {
    return <Navigate to="/404" replace />
  }

  return (
    <>
      <SEOHead 
        title={`${post.title} — PSI Research Insights`}
        description={post.metaDescription}
        keywords={post.keywords}
        canonicalUrl={`/insights/${post.slug}`}
        article={true}
        author={post.author.name}
        publishedTime={post.publishedDate}
        modifiedTime={post.modifiedDate}
      />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Back Navigation */}
        <div className="bg-background border-b">
          <div className="container mx-auto px-4 py-4">
            <Link 
              to="/insights" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-8">
                  <Badge variant="outline" className="mb-4">
                    {post.category}
                  </Badge>
                  <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="font-medium">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookmarkPlus className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Featured Image */}
              <ScrollReveal>
                <div className="relative rounded-2xl overflow-hidden shadow-strong mb-12">
                  <div className="h-64 lg:h-96 bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">PSI Research Insights</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <ScrollReveal>
                    <div 
                      className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:bg-secondary/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </ScrollReveal>

                  {/* Tags */}
                  <ScrollReveal>
                    <div className="mt-12 pt-8 border-t">
                      <h3 className="font-semibold mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag: string) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Author Bio */}
                  <ScrollReveal>
                    <Card className="mt-8">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                            {post.author.name.split(' ').map((n: string) => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{post.author.name}</h4>
                            <p className="text-muted-foreground mb-2">{post.author.role}</p>
                            <p className="text-sm text-muted-foreground">
                              Part of PSI's expert research team, specializing in consumer insights 
                              and market analysis across Nigeria and West Africa.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-8">
                    {/* Newsletter Signup */}
                    <ScrollReveal>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="font-semibold mb-3">Get Market Insights</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to our newsletter for the latest research findings and market analysis.
                          </p>
                          <form onSubmit={handleEmailSubmit} className="space-y-3">
                            <Input
                              type="email"
                              placeholder="Your email"
                              value={emailSubscribe}
                              onChange={(e) => setEmailSubscribe(e.target.value)}
                              required
                            />
                            <Button type="submit" variant="cta" className="w-full">
                              Subscribe
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    </ScrollReveal>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                      <ScrollReveal>
                        <Card>
                          <CardContent className="p-6">
                            <h3 className="font-semibold mb-4">Related Insights</h3>
                            <div className="space-y-4">
                              {relatedPosts.map((relatedPost) => (
                                <div key={relatedPost.slug}>
                                  <Link 
                                    to={`/insights/${relatedPost.slug}`}
                                    className="block hover:text-primary transition-colors"
                                  >
                                    <h4 className="font-medium text-sm leading-tight mb-2">
                                      {relatedPost.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                      <Badge variant="outline" className="text-xs">
                                        {relatedPost.category}
                                      </Badge>
                                      <span>{relatedPost.readTime}</span>
                                    </div>
                                  </Link>
                                  <Separator className="mt-4" />
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </ScrollReveal>
                    )}

                    {/* CTA */}
                    <ScrollReveal>
                      <Card className="bg-primary text-primary-foreground">
                        <CardContent className="p-6 text-center">
                          <h3 className="font-semibold mb-3">Need Custom Research?</h3>
                          <p className="text-sm mb-4 opacity-90">
                            Get insights tailored to your specific business needs.
                          </p>
                          <Button variant="secondary" size="sm" className="w-full">
                            Request Proposal
                          </Button>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Insights CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Explore More Insights
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover more research findings and market analysis from PSI's expert team.
                </p>
                <Button variant="outline-primary" size="lg" asChild>
                  <Link to="/insights">
                    View All Insights
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost