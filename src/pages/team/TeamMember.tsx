import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  experience: string;
  education: string[];
  specializations: string[];
  achievements: string[];
  email: string;
  linkedin?: string;
  phone?: string;
  image: string;
}

const teamMembers: Record<string, TeamMember> = {
  "adebayo-oluwaseun": {
    id: "adebayo-oluwaseun",
    name: "Mr. Adebayo A. Oluwaseun",
    title: "Managing Director & CEO",
    bio: "A seasoned market research professional with over 20 years of experience in consumer insights, brand research, and business strategy across African markets.",
    experience: "20+ years in market research and consumer insights",
    education: [
      "MBA in Marketing - Lagos Business School",
      "BSc Economics - University of Lagos"
    ],
    specializations: [
      "Consumer Behavior Analysis",
      "Brand Strategy Research",
      "Market Entry Studies",
      "Retail Audit & Trade Research"
    ],
    achievements: [
      "Led 500+ market research projects across West Africa",
      "Pioneered digital research methodologies in Nigeria",
      "Key speaker at African Marketing Research Conference 2019-2023"
    ],
    email: "adebayo@psi-ng.com",
    linkedin: "https://linkedin.com/in/adebayo-oluwaseun",
    phone: "+234-XXX-XXXX",
    image: "/api/placeholder/400/500"
  },
  "fatima-mohammed": {
    id: "fatima-mohammed",
    name: "Dr. Fatima Mohammed",
    title: "Director of Research Operations",
    bio: "Expert in quantitative research methodologies with extensive experience in large-scale household surveys and data analytics across African markets.",
    experience: "15+ years in research operations and data analytics",
    education: [
      "PhD Statistics - Ahmadu Bello University",
      "MSc Applied Statistics - University of Ibadan"
    ],
    specializations: [
      "Quantitative Research Design",
      "Survey Methodology",
      "Statistical Analysis & Modeling",
      "Quality Assurance"
    ],
    achievements: [
      "Managed household surveys covering 2M+ respondents",
      "Developed PSI's proprietary sampling methodology",
      "Published researcher in Journal of African Statistics"
    ],
    email: "fatima@psi-ng.com",
    linkedin: "https://linkedin.com/in/fatima-mohammed",
    image: "/api/placeholder/400/500"
  },
  "chukwu-emeka": {
    id: "chukwu-emeka",
    name: "Mr. Chukwu C. Emeka",
    title: "Head of Qualitative Research",
    bio: "Specialist in consumer psychology and qualitative research with deep expertise in focus group moderation and in-depth interviews across diverse African cultures.",
    experience: "12+ years in qualitative research and consumer psychology",
    education: [
      "MSc Psychology - University of Nigeria",
      "BSc Sociology - Nnamdi Azikiwe University"
    ],
    specializations: [
      "Focus Group Moderation",
      "In-Depth Interviews",
      "Consumer Psychology",
      "Cultural Anthropology"
    ],
    achievements: [
      "Conducted 1000+ focus groups across 7 countries",
      "Expert in multi-cultural consumer behavior",
      "Certified Master Moderator (QRCA)"
    ],
    email: "emeka@psi-ng.com",
    phone: "+234-XXX-XXXX",
    image: "/api/placeholder/400/500"
  }
};

const TeamMember = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const member = memberId ? teamMembers[memberId] : null;

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Team Member Not Found</h1>
          <Link to="/team">
            <Button variant="cta">Back to Team</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${member.name} | ${member.title} | PSI Team`}
        description={`Meet ${member.name}, ${member.title} at Practical Sampling International. ${member.bio}`}
        keywords={`${member.name}, PSI team, market research, ${member.title.toLowerCase()}, Nigeria research`}
        canonicalUrl={`https://psi-ng.com/team/${member.id}`}
      />
      
      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-12">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link to="/team" className="inline-flex items-center text-primary hover:text-primary-glow transition-smooth">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Team
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Image & Contact */}
            <div className="lg:col-span-1">
              <div className="bg-background rounded-2xl shadow-soft overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-foreground mb-2">{member.name}</h1>
                  <p className="text-lg text-primary font-semibold mb-6">{member.title}</p>
                  
                  {/* Contact Information */}
                  <div className="space-y-3">
                    <a href={`mailto:${member.email}`} className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                      <Mail className="h-4 w-4 mr-3" />
                      {member.email}
                    </a>
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                        <Phone className="h-4 w-4 mr-3" />
                        {member.phone}
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-smooth">
                        <Linkedin className="h-4 w-4 mr-3" />
                        LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="bg-background rounded-2xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{member.bio}</p>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-primary font-semibold">{member.experience}</p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-background rounded-2xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
                <div className="space-y-3">
                  {member.education.map((edu, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className="bg-background rounded-2xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Specializations</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {member.specializations.map((spec, index) => (
                    <div key={index} className="flex items-center p-3 bg-secondary rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                      <span className="text-foreground font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-background rounded-2xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Achievements</h2>
                <div className="space-y-4">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <span className="text-accent font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Ready to discuss your research needs?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Get in touch with {member.name.split(' ')[1]} to explore how PSI can help your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" onClick={() => window.location.href = `mailto:${member.email}`}>
                    Send Email
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Schedule Meeting
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;