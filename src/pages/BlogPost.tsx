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

// Blog post images
import consumerBehaviorImage from "@/assets/blog/nigeria-consumer-behavior-trends-2024.jpg"
import fmcgInsightsImage from "@/assets/blog/west-africa-fmcg-insights-2024.jpg"
import digitalBankingImage from "@/assets/blog/digital-banking-adoption-nigeria.jpg"

// This would typically come from your Laravel API
const mockBlogPosts = {
  "nigeria-consumer-behavior-trends-2024": {
    title: "Nigeria Consumer Behavior Trends 2024: Post-COVID Market Shifts",
    slug: "nigeria-consumer-behavior-trends-2024",
    excerpt: "Comprehensive analysis of how Nigerian consumers have adapted their purchasing behaviors in the post-pandemic era, with implications for FMCG brands.",
    image: consumerBehaviorImage,
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
    tags: ["Consumer Behavior", "Nigeria", "Post-COVID", "FMCG", "Digital Shopping"],
    metaDescription: "Comprehensive analysis of Nigerian consumer behavior trends in 2024, revealing key post-COVID market shifts and implications for FMCG brands.",
    keywords: "Nigeria consumer behavior 2024, post-COVID shopping trends Nigeria, Nigerian consumer insights, FMCG trends Nigeria, digital shopping Nigeria"
  },
  "west-africa-fmcg-insights-2024": {
    title: "West Africa FMCG Market Insights 2024: Growth Opportunities & Challenges",
    slug: "west-africa-fmcg-insights-2024",
    excerpt: "Deep dive into the Fast-Moving Consumer Goods landscape across Ghana, Nigeria, and Senegal, highlighting key growth drivers and market challenges.",
    image: fmcgInsightsImage,
    content: `
      <p>The West African FMCG market presents a dynamic landscape of growth opportunities and operational challenges. Our comprehensive analysis across Ghana, Nigeria, and Senegal reveals key insights for brands looking to expand or optimize their regional presence.</p>
      <h2>Market Overview</h2>
      <p>The West African FMCG market is valued at $180 billion and growing at 6.2% annually, driven by population growth, urbanization, and rising disposable incomes.</p>
    `,
    category: "Market Analysis",
    readTime: "10 min read",
    publishedDate: "2024-08-12",
    author: {
      name: "Dr. Amina Kone",
      role: "Senior Market Analyst",
      avatar: "/assets/team/dr-amina-kone.jpg"
    },
    tags: ["FMCG", "West Africa", "Market Analysis", "Growth Opportunities"],
    metaDescription: "Deep dive into West Africa's FMCG market with insights on growth opportunities and challenges across Ghana, Nigeria, and Senegal.",
    keywords: "West Africa FMCG market, FMCG growth opportunities Africa, West Africa consumer goods market"
  },
  "digital-banking-adoption-nigeria": {
    title: "Digital Banking Adoption in Nigeria: Consumer Preferences and Usage Patterns",
    slug: "digital-banking-adoption-nigeria",
    excerpt: "Analysis of how Nigerian consumers are embracing digital banking solutions, with insights for financial service providers.",
    image: digitalBankingImage,
    content: `
      <p>Nigerian consumers are rapidly adopting digital banking solutions, with mobile banking usage increasing by 154% since 2022. Our analysis reveals key adoption drivers and usage patterns.</p>
      <h2>Adoption Statistics</h2>
      <p>73% of banked Nigerians now use mobile banking, with mobile transfers accounting for 68% of all transactions.</p>
    `,
    category: "Financial Services",
    readTime: "8 min read",
    publishedDate: "2024-08-08",
    author: {
      name: "Samuel Adebayo",
      role: "Fintech Research Specialist",
      avatar: "/assets/team/samuel-adebayo.jpg"
    },
    tags: ["Digital Banking", "Nigeria", "Fintech", "Consumer Behavior"],
    metaDescription: "Analysis of digital banking adoption trends in Nigeria, revealing consumer preferences and usage patterns for financial service providers.",
    keywords: "Nigeria digital banking adoption, mobile banking Nigeria, fintech adoption Nigeria"
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
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 lg:h-96 object-cover"
                    />
                  ) : (
                    <div className="h-64 lg:h-96 bg-gradient-primary flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">PSI Research Insights</span>
                    </div>
                  )}
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