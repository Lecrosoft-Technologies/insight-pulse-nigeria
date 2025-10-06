import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Award } from "lucide-react";
import heroImage from "@/assets/hero-research-team.jpg";
import dataCollectionImage from "@/assets/data-collection-urban-rural.jpg";
import { useState, useEffect } from "react";
import RequestProposalModal from "./RequestProposalModal";
import { motion, AnimatePresence } from "framer-motion";
import { apiService, handleApiError } from "@/lib/api";
import { analytics } from "@/components/GoogleAnalytics";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { toast } = useToast()

  const images = [
    { src: heroImage, alt: "Professional market research team in Nigeria analyzing data and insights" },
    { src: dataCollectionImage, alt: "Data collection in urban and rural areas across Nigeria and West Africa" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [])

  const handleNewsletterSignup = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    try {
      await apiService.subscribeNewsletter({ email, source: 'hero' })
      analytics.trackNewsletterSignup('hero')
      toast({
        title: "Success!",
        description: "Thank you! We'll send you a free study plan within 24 hours.",
      })
      setEmail("")
    } catch (error) {
      const errorMessage = handleApiError(error)
      toast({
        title: "Signup Failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBookCall = () => {
    analytics.trackCalendlyClick()
    window.open('https://calendly.com/psi-market-research', '_blank')
  }

  return (
    <>
      <RequestProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="relative overflow-hidden bg-gradient-subtle z-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_12%,hsl(var(--primary)/0.05)_12.5%,hsl(var(--primary)/0.05)_87%,transparent_87.5%,transparent)]"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-text-reveal">
                <span className="text-primary">
                  Top-tier Market & Social Research
                </span>
                <br />
                <span className="text-foreground">in Nigeria & West Africa</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                From proposals to final delivery of insights, we provide accurate and scientifically reliable research services. PSI is the contact you need to obtain the information you require in the Nigerian market and other African Countries.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>12,000+ interviews/year</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Other African Countries Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span>ISO certified</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" onClick={() => setIsModalOpen(true)} className="group">
                Request Proposal
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-primary" size="xl" onClick={handleBookCall}>
                Book a Call
              </Button>
            </div>

            {/* Secondary CTA */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">
                Get started with a free study plan
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero" onClick={handleNewsletterSignup} disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Get Free Plan"}
                </Button>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="w-full h-[500px] object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? "bg-white w-8" 
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-medium animate-pin-drop">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Studies Completed</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-medium animate-pin-drop" style={{animationDelay: '0.2s'}}>
              <div className="text-2xl font-bold text-accent">15</div>
              <div className="text-sm text-muted-foreground">Countries Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;