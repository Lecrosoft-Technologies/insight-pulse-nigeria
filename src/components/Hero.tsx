import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Award, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-research-team.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_12%,hsl(var(--primary)/0.05)_12.5%,hsl(var(--primary)/0.05)_87%,transparent_87.5%,transparent)]"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-text-reveal">
                <span className="gradient-primary bg-clip-text text-transparent">
                  Top-tier Market & Social Research
                </span>
                <br />
                <span className="text-foreground">in Nigeria & West Africa</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                From proposal to insights-ready delivery—quantitative, qualitative, and 
                advanced analytics you can trust.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>10,000+ interviews/year</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>West Africa coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span>ISO certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>24-72h reporting</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group">
                Request Proposal
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-primary" size="xl">
                Book a 15-min Call
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
                  className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero">Get Free Plan</Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong animate-scale-in">
              <img
                src={heroImage}
                alt="Professional market research team in Nigeria analyzing data and insights"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
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
  );
};

export default Hero;