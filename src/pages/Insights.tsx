import SEOHead from "@/components/SEOHead"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, ArrowRight, TrendingUp, Users, BarChart3 } from "lucide-react"
import { useState, useMemo } from "react"
import { Link } from "react-router-dom"

// Article images
import questionsAgencyImage from "@/assets/blog/questions-research-agency-nigeria.jpg"
import youthDemographicsImage from "@/assets/blog/youth-demographics-west-africa.jpg"
import electionPollingImage from "@/assets/blog/election-polling-methodology-nigeria.jpg"
import ruralSurveysImage from "@/assets/blog/rural-household-surveys-africa.jpg"
import focusGroupImage from "@/assets/blog/focus-group-best-practices.jpg"

const Insights = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Articles")

  const mockArticles = [
    {
      id: 1,
      title: "Top 10 Questions to Ask a Market Research Agency in Nigeria",
      excerpt: "Essential questions to evaluate research agencies and ensure quality insights for your business decisions.",
      category: "Research Tips",
      readTime: "5 min read",
      date: "2024-01-15",
      author: "PSI Research Team",
      slug: "questions-research-agency-nigeria",
      image: questionsAgencyImage,
      featured: true
    },
    {
      id: 2,
      title: "Understanding Youth Demographics in West Africa: A 2024 Analysis",
      excerpt: "Deep dive into the growing youth population across Ghana, Nigeria, and Senegal and their market implications.",
      category: "Market Trends",
      readTime: "7 min read",
      date: "2024-01-10",
      author: "Dr. Amina Kone",
      slug: "youth-demographics-west-africa",
      image: youthDemographicsImage,
      featured: false
    },
    {
      id: 3,
      title: "Election Polling Methodology: Best Practices from Nigeria's 2023 Elections",
      excerpt: "Lessons learned from political polling in Nigeria's recent elections and methodology improvements.",
      category: "Opinion Research",
      readTime: "6 min read",
      date: "2024-01-05",
      author: "Samuel Adebayo",
      slug: "election-polling-methodology-nigeria",
      image: electionPollingImage,
      featured: true
    }
  ]

  const recentArticles = [
    {
      id: 4,
      title: "Rural Household Surveys: Overcoming Challenges in Remote African Communities",
      excerpt: "Practical strategies for conducting high-quality household surveys in rural West African settings.",
      category: "Research Methods",
      readTime: "8 min read",
      date: "2024-08-01",
      author: "Field Operations Team",
      slug: "rural-household-surveys-africa",
      image: ruralSurveysImage,
      featured: false
    },
    {
      id: 5,
      title: "Focus Group Best Practices: Conducting Effective Sessions in West Africa",
      excerpt: "Cultural considerations and practical tips for running successful focus group discussions across diverse West African markets.",
      category: "Research Methods",
      readTime: "6 min read",
      date: "2024-07-28",
      author: "Qualitative Research Team",
      slug: "focus-group-best-practices",
      image: focusGroupImage,
      featured: false
    },
    {
      id: 6,
      title: "Retail Audit Best Practices: Lessons from 500+ Store Visits",
      excerpt: "Key insights and common pitfalls in retail audit execution across Nigerian markets.",
      category: "Retail Research",
      readTime: "9 min read",
      date: "2024-07-25",
      author: "PSI Field Operations",
      slug: "retail-audit-best-practices-nigeria-500-store-visits",
      featured: false
    },
    {
      id: 7,
      title: "Opinion Polling in Nigeria: Ensuring Representative Samples",
      excerpt: "Technical deep-dive into sampling methodologies for accurate political and social opinion research.",
      category: "Opinion Research",
      readTime: "11 min read",
      date: "2024-07-20",
      author: "Dr. Funmi Adeyemi",
      slug: "opinion-polling-nigeria-representative-samples",
      featured: false
    },
    {
      id: 8,
      title: "Customer Satisfaction Benchmarks: What 'Good' Looks Like in West Africa",
      excerpt: "Industry benchmarks and NPS standards across different sectors in West African markets.",
      category: "Customer Experience",
      readTime: "8 min read",
      date: "2024-07-15",
      author: "PSI CX Team",
      slug: "customer-satisfaction-benchmarks-west-africa",
      featured: false
    }
  ]

  const categories = [
    { name: "All Articles", count: 45, icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Consumer Insights", count: 12, icon: <Users className="h-4 w-4" /> },
    { name: "Methodology", count: 8, icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Industry Guide", count: 15, icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Market Trends", count: 10, icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Financial Services", count: 6, icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Urban Studies", count: 4, icon: <Users className="h-4 w-4" /> },
    { name: "Retail Research", count: 7, icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Opinion Research", count: 5, icon: <Users className="h-4 w-4" /> },
    { name: "Customer Experience", count: 9, icon: <BarChart3 className="h-4 w-4" /> }
  ]

  // Combine all articles for filtering
  const allArticles = [...mockArticles, ...recentArticles]

  // Filter articles based on search term and category
  const filteredArticles = useMemo(() => {
    let filtered = allArticles

    // Filter by category
    if (selectedCategory !== "All Articles") {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }, [searchTerm, selectedCategory, allArticles])

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
                  <span className="text-primary"> Insights </span>
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
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-smooth ${
                      selectedCategory === category.name
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background border-border hover:border-primary hover:text-primary'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    {category.icon}
                    <span className="font-medium">{category.name}</span>
                    <Badge variant={selectedCategory === category.name ? "secondary" : "secondary"} className="text-xs">
                      {category.count}
                    </Badge>
                  </motion.button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {(searchTerm || selectedCategory !== "All Articles") && (
              <ScrollReveal>
                <div className="text-center mb-8">
                  <p className="text-muted-foreground">
                    {searchTerm && selectedCategory !== "All Articles" 
                      ? `Showing results for "${searchTerm}" in ${selectedCategory}`
                      : searchTerm 
                      ? `Search results for "${searchTerm}"`
                      : `Articles in ${selectedCategory}`
                    } • {filteredArticles.length} articles found
                  </p>
                </div>
              </ScrollReveal>
            )}

            {filteredArticles.length === 0 ? (
              <ScrollReveal>
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                  <p className="text-muted-foreground mb-8">
                    Try adjusting your search or browse all articles
                  </p>
                  <Button 
                    variant="outline-primary" 
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("All Articles")
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </ScrollReveal>
            ) : (
              <StaggerContainer>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article, index) => (
                    <StaggerItem key={article.id || article.slug}>
                      <Link to={`/insights/${article.slug}`}>
                        <Card className="h-full hover-lift group cursor-pointer">
                           <div className="relative overflow-hidden rounded-t-lg">
                             {article.image ? (
                               <img 
                                 src={article.image} 
                                 alt={article.title}
                                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                               />
                             ) : (
                               <div className="h-48 bg-gradient-primary flex items-center justify-center">
                                 <span className="text-white font-bold text-xl">PSI Research</span>
                               </div>
                             )}
                            {article.featured !== undefined && article.featured && (
                              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                                Featured
                              </Badge>
                            )}
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
                      </Link>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            )}
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