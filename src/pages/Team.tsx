import SEOHead from "@/components/SEOHead";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollEffects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Linkedin, 
  Mail, 
  Award, 
  GraduationCap, 
  MapPin, 
  Calendar,
  X,
  Phone,
  Globe
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  education: string[];
  experience: string;
  location: string;
  skills: string[];
  achievements: string[];
  contact: {
    email: string;
    linkedin?: string;
    phone?: string;
  };
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Dr. Adebayo Johnson",
      position: "Chief Executive Officer",
      department: "Executive",
      image: "/api/placeholder/300/400",
      bio: "Dr. Johnson brings over 20 years of market research experience across Nigeria and West Africa. He founded PSI with a vision to provide world-class research insights that drive business growth in emerging markets.",
      education: ["PhD Statistics, University of Lagos", "MSc Economics, London School of Economics"],
      experience: "20+ years",
      location: "Lagos, Nigeria",
      skills: ["Strategic Planning", "Market Analysis", "Statistical Modeling", "Team Leadership"],
      achievements: [
        "Founded PSI in 2009",
        "Led 500+ successful research projects",
        "ESOMAR Advisory Board Member",
        "Published 15+ research papers"
      ],
      contact: {
        email: "adebayo@practicalsampling.com",
        linkedin: "linkedin.com/in/adebayojohnson",
        phone: "+234-XXX-XXXXX"
      }
    },
    {
      id: "2",
      name: "Sarah Okafor",
      position: "Research Director",
      department: "Research",
      image: "/api/placeholder/300/400",
      bio: "Sarah leads our quantitative research division, specializing in consumer behavior and market segmentation studies. Her expertise spans FMCG, financial services, and telecommunications sectors.",
      education: ["MSc Market Research, University of Manchester", "BSc Psychology, University of Ibadan"],
      experience: "12+ years",
      location: "Lagos, Nigeria",
      skills: ["Quantitative Research", "Consumer Psychology", "Data Analysis", "Survey Design"],
      achievements: [
        "Led Nigeria's largest consumer behavior study",
        "NMRA Excellence Award 2022",
        "Certified ESOMAR Researcher",
        "Speaker at 10+ industry conferences"
      ],
      contact: {
        email: "sarah@practicalsampling.com",
        linkedin: "linkedin.com/in/sarahokafor"
      }
    },
    {
      id: "3",
      name: "Michael Asante",
      position: "Regional Manager, Ghana",
      department: "Operations",
      image: "/api/placeholder/300/400",
      bio: "Michael oversees our Ghana operations and West African expansion. He brings deep understanding of Francophone and Anglophone markets with expertise in cross-cultural research methodologies.",
      education: ["MBA, University of Ghana", "BSc Business Administration, KNUST"],
      experience: "15+ years",
      location: "Accra, Ghana",
      skills: ["Regional Management", "Cross-cultural Research", "Field Operations", "Client Relations"],
      achievements: [
        "Established PSI Ghana office",
        "Managed 200+ West African projects",
        "Fluent in English, French, Twi",
        "Ghana Market Research Association Board Member"
      ],
      contact: {
        email: "michael@practicalsampling.com",
        linkedin: "linkedin.com/in/michaelasante"
      }
    },
    {
      id: "4",
      name: "Dr. Fatima Abdullahi",
      position: "Head of Analytics",
      department: "Analytics",
      image: "/api/placeholder/300/400",
      bio: "Dr. Abdullahi leads our advanced analytics team, specializing in predictive modeling and machine learning applications in market research. She transforms complex data into actionable business insights.",
      education: ["PhD Data Science, University of Edinburgh", "MSc Statistics, Ahmadu Bello University"],
      experience: "10+ years",
      location: "Lagos, Nigeria",
      skills: ["Data Science", "Machine Learning", "Predictive Analytics", "Statistical Modeling"],
      achievements: [
        "Developed PSI's AI prediction models",
        "Published 20+ analytics papers",
        "IBM Data Science Certification",
        "Led digital transformation at PSI"
      ],
      contact: {
        email: "fatima@practicalsampling.com",
        linkedin: "linkedin.com/in/fatimaabdullahi"
      }
    },
    {
      id: "5",
      name: "James Okoye",
      position: "Field Operations Manager",
      department: "Operations",
      image: "/api/placeholder/300/400",
      bio: "James manages our extensive field network across Nigeria, ensuring quality data collection and maintaining our high standards of fieldwork excellence in both urban and rural areas.",
      education: ["MSc Sociology, University of Nigeria", "BSc Mass Communication, Unn"],
      experience: "14+ years",
      location: "Lagos, Nigeria",
      skills: ["Field Management", "Quality Control", "Team Coordination", "Rural Research"],
      achievements: [
        "Built 50+ person field team",
        "Zero quality issues in 2 years",
        "Rural research specialist",
        "Field Excellence Award 2023"
      ],
      contact: {
        email: "james@practicalsampling.com",
        phone: "+234-XXX-XXXXX"
      }
    },
    {
      id: "6",
      name: "Amina Diallo",
      position: "Qualitative Research Lead",
      department: "Research",
      image: "/api/placeholder/300/400",
      bio: "Amina heads our qualitative research division, bringing expertise in focus groups, in-depth interviews, and ethnographic studies across diverse West African cultures and languages.",
      education: ["MSc Social Anthropology, Université Cheikh Anta Diop", "BA Sociology, University of Lagos"],
      experience: "11+ years",
      location: "Lagos, Nigeria",
      skills: ["Qualitative Research", "Focus Groups", "Ethnography", "Cultural Analysis"],
      achievements: [
        "Conducted 500+ focus groups",
        "Multi-language research expert",
        "Cultural insights specialist",
        "Qualitative Excellence Award 2022"
      ],
      contact: {
        email: "amina@practicalsampling.com",
        linkedin: "linkedin.com/in/aminadiallo"
      }
    }
  ];

  const departments = ["All", "Executive", "Research", "Operations", "Analytics"];
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredMembers = selectedDepartment === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <>
      <SEOHead 
        title="Meet Our Team — Expert Market Researchers in Nigeria & West Africa | PSI"
        description="Meet the expert team behind PSI's market research excellence. Led by Dr. Adebayo Johnson, our researchers bring 20+ years experience across Nigeria and West Africa."
        keywords="PSI team, market research experts Nigeria, research team West Africa, Dr Adebayo Johnson, Nigerian researchers, market research professionals"
        canonicalUrl="/team"
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
                    Meet Our Team
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                    The Minds Behind
                    <span className="gradient-primary bg-clip-text text-transparent"> Nigeria's </span>
                    Leading Research
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Our diverse team of researchers, analysts, and field experts brings together 
                    local insights and international standards to deliver exceptional results.
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Department Filter */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3 mt-12">
                {departments.map((dept) => (
                  <Button
                    key={dept}
                    variant={selectedDepartment === dept ? "default" : "outline"}
                    onClick={() => setSelectedDepartment(dept)}
                    className="rounded-full"
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMembers.map((member, index) => (
                  <StaggerItem key={member.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card 
                        className="group cursor-pointer hover-lift border-0 shadow-soft hover:shadow-strong overflow-hidden"
                        onClick={() => setSelectedMember(member)}
                      >
                        <div className="relative">
                          <div className="aspect-[3/4] bg-gradient-primary"></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-sm opacity-90">{member.position}</p>
                            <Badge variant="secondary" className="mt-2 text-xs">
                              {member.department}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <MapPin className="h-4 w-4" />
                            {member.location}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <Calendar className="h-4 w-4" />
                            {member.experience} experience
                          </div>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {member.skills.slice(0, 2).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {member.skills.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{member.skills.length - 2} more
                              </Badge>
                            )}
                          </div>
                          <Button variant="outline" size="sm" className="w-full group">
                            View Profile
                            <motion.div
                              className="ml-2"
                              whileHover={{ x: 4 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              →
                            </motion.div>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Team Profile Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-background border-b z-10 p-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedMember(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-6">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Profile Image & Basic Info */}
                    <div className="space-y-6">
                      <div className="aspect-[3/4] bg-gradient-primary rounded-xl"></div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Contact Information</h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-primary" />
                              <a href={`mailto:${selectedMember.contact.email}`} className="hover:text-primary">
                                {selectedMember.contact.email}
                              </a>
                            </div>
                            {selectedMember.contact.phone && (
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-primary" />
                                <a href={`tel:${selectedMember.contact.phone}`} className="hover:text-primary">
                                  {selectedMember.contact.phone}
                                </a>
                              </div>
                            )}
                            {selectedMember.contact.linkedin && (
                              <div className="flex items-center gap-2 text-sm">
                                <Linkedin className="h-4 w-4 text-primary" />
                                <a href={`https://${selectedMember.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                  LinkedIn Profile
                                </a>
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Location</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {selectedMember.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Information */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{selectedMember.position}</h3>
                        <Badge variant="secondary" className="mb-4">
                          {selectedMember.department}
                        </Badge>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedMember.bio}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          Education
                        </h3>
                        <ul className="space-y-1">
                          {selectedMember.education.map((edu, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {edu}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Core Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          Key Achievements
                        </h3>
                        <ul className="space-y-1">
                          {selectedMember.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Team;