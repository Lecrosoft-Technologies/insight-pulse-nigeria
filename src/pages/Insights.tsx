import SEOHead from "@/components/SEOHead"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, ArrowRight, TrendingUp, Users, BarChart3 } from "lucide-react"
import { useState } from "react"

const Insights = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const featuredArticles = [
    {
      id: 1,
      title: "Nigeria Consumer Behavior Trends 2024: Post-COVID Market Shifts",
      excerpt: "Comprehensive analysis of how Nigerian consumers have adapted their purchasing behaviors in the post-pandemic era, with implications for FMCG brands.",
      category: "Consumer Insights",
      readTime: "8 min read",
      date: "2024-08-15",
      author: "PSI Research Team",
      image: "/assets/insights/consumer-trends-2024.jpg",
      featured: true
    },
    {
      id: 2,
      title: "West Africa Digital Payment Adoption: Regional Comparison Study",
      excerpt: "Cross-country analysis of digital payment preferences and barriers across 8 West African markets, revealing key opportunities for fintech expansion.",
      category: "Financial Services",
      readTime: "12 min read",
      date: "2024-08-10",
      author: "Dr. Adebayo Oladele",
      image: "/assets/insights/digital-payments-africa.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Lagos vs Abuja: Urban Consumer Preferences in Nigeria's Major Cities",
      excerpt: "Detailed comparison of shopping habits, brand preferences, and lifestyle trends between Nigeria's commercial and political capitals.",
      category: "Urban Studies",
      readTime: "10 min read",
      date: "2024-08-05",
      author: "PSI Urban Research Unit",
      image: "/assets/insights/lagos-abuja-comparison.jpg",
      featured: true
    }
  ]

  const recentArticles = [
    {
      id: 4,
      title: "How to Choose a Market Research Company in Nigeria: Essential Checklist",
      excerpt: "10 critical factors to evaluate when selecting a research partner for your business in Nigeria.",
      category: "Industry Guide",
      readTime: "6 min read",
      date: "2024-08-01",
      author: "PSI Strategy Team"
    },
    {
      id: 5,
      title: "CATI vs CAPI vs CAWI in Nigeria: When to Use Each Method",
      excerpt: "Practical guide to choosing the right data collection approach for your research objectives.",
      category: "Methodology",
      readTime: "7 min read",
      date: "2024-07-28",
      author: "PSI Methodology Team"
    },
    {
      id: 6,
      title: "Retail Audit Best Practices: Lessons from 500+ Store Visits",
      excerpt: "Key insights and common pitfalls in retail audit execution across Nigerian markets.",
      category: "Retail Research",
      readTime: "9 min read",
      date: "2024-07-25",
      author: "PSI Field Operations"
    },
    {
      id: 7,
      title: "Opinion Polling in Nigeria: Ensuring Representative Samples",
      excerpt: "Technical deep-dive into sampling methodologies for accurate political and social opinion research.",
      category: "Opinion Research",
      readTime: "11 min read",
      date: "2024-07-20",
      author: "Dr. Funmi Adeyemi"
    },
    {
      id: 8,
      title: "Customer Satisfaction Benchmarks: What 'Good' Looks Like in West Africa",
      excerpt: "Industry benchmarks and NPS standards across different sectors in West African markets.",
      category: "Customer Experience",
      readTime: "8 min read",
      date: "2024-07-15",
      author: "PSI CX Team"
    }
  ]

  const categories = [
    { name: "All Articles", count: 45, icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Consumer Insights", count: 12, icon: <Users className="h-4 w-4" /> },
    { name: "Methodology", count: 8, icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Industry Guide", count: 15, icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Market Trends", count: 10, icon: <TrendingUp className="h-4 w-4" /> }
  ]

  return (
    <>
      <SEOHead 
        title="Market Research Insights & Reports — PSI Nigeria & West Africa"
        description="Latest market research insights, consumer trends, and industry reports from Nigeria and West Africa. Expert analysis on FMCG, fintech, retail, and more."
        keywords="Nigeria market insights, West Africa consumer trends, market research reports Nigeria, consumer behavior Nigeria, market analysis West Africa"
        canonicalUrl="/insights"
      />

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-4 text-primary border-primary">
                  Market Intelligence
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Research
                  <span className="gradient-primary bg-clip-text text-transparent"> Insights </span>
                  & Reports
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Stay ahead with our latest market research findings, consumer trends, 
                  and industry analysis from Nigeria and West Africa.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search insights..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 rounded-xl"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Categories */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-smooth"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    {category.icon}
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </motion.button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Featured Insights
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our most comprehensive and impactful research findings.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredArticles.map((article, index) => (
                  <StaggerItem key={article.id}>
                    <Card className="h-full hover-lift group cursor-pointer">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <div className="h-48 bg-gradient-primary flex items-center justify-center">
                          <span className="text-white font-bold text-xl">PSI Research</span>
                        </div>
                        <Badge 
                          className="absolute top-4 left-4 bg-primary text-primary-foreground"
                        >
                          Featured
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <Badge variant="outline">{article.category}</Badge>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground font-medium">
                            {article.author}
                          </span>
                          <Button variant="ghost" size="sm" className="group-hover:text-primary">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Latest Insights
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Fresh research findings and industry analysis.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {recentArticles.map((article, index) => (
                  <StaggerItem key={article.id}>
                    <Card className="hover-lift group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <Badge variant="outline">{article.category}</Badge>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground font-medium">
                            {article.author}
                          </span>
                          <Button variant="ghost" size="sm" className="group-hover:text-primary">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <ScrollReveal delay={0.4}>
              <div className="text-center mt-16">
                <Button variant="outline-primary" size="lg">
                  Load More Articles
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Stay Updated with Market Intelligence
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get our latest research findings and industry insights delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button variant="cta" size="lg">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No spam. Insights only. Unsubscribe anytime.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  )
}

export default Insights