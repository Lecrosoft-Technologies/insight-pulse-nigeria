import SEOHead from "@/components/SEOHead";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollEffects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import gbengaAdewumi from "@/assets/adewumi2-cropped.jpg";
import alaba from "@/assets/alaba-cropped.jpg";
import kehinde from "@/assets/kenny-croppped.jpg";
import leke from "@/assets/leke-cropped.jpg";
import bola from "@/assets/bola-cropped.jpg";
import {
  Linkedin,
  Mail,
  Award,
  GraduationCap,
  MapPin,
  Calendar,
  X,
  Phone,
  Globe,
} from "lucide-react";
import { url } from "inspector";

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
      name: "Gbenga Adewumi",
      position: "Director of Operations",
      department: "Executive",
      image: gbengaAdewumi,
      bio: `A Marketing graduate, Gbenga specializes in the execution and overall co-ordination of quantitative and qualitative studies, from interviews with the general public to special publics, senior executives and professionals. He had gained wide experience from several research agencies, which include Market Surveys of Nigeria (MSN), Public Opinion Poll (POP) and Starealm Research Company (SRC). Prior to joining PSI, Gbenga was the Deputy Field Operations Manager with Research and Marketing Services (RMS) now KANTAR International where he assisted in the management of the agency’s field operations for key clients including – BAT, MTN, Guinness, UNDP, Shell, Coca-Cola, Unilever, Cadbury, US Department of State, Johns Hopkins University, Management System International (MSI) among others. He is a member of Nigerian Marketing Research Association (NiMRA).\nToday, Gbenga heads a pool of professional field force (3,701 across Africa) dedicated to collecting detailed, complete and accurate information on various types of research projects including Surveys, FGDs, KIIs, Census, Mystery Shopping, Usage and Attitude, Monitoring Activities, Education, Health and Opinion Polling. In the last 20 years alone,Gbenga has executed and coordinated more than 495 large respondent surveys ranging from 500 to 540,000 samples sizes across Nigeria, including the 2006 - 2017 Afrobarometer survey, PATHS2 (Baseline, Midline and Endline) Survey, National Crime Victimization survey, NBC Coca-Cola Retail Census where more than 170,400 outlets were enumerated as well as Project Octopus (Nigeria Breweries) Retail Outlet Census where 540,000 outlets across all the states of the federation – urban, semi-urban and rural localities were enumerated.`,
      education: [
        "PhD Statistics, University of Lagos",
        "MSc Economics, London School of Economics",
      ],
      experience: "20+ years",
      location: "Lagos, Nigeria",
      skills: [
        "Strategic Planning",
        "Market Analysis",
        "Statistical Modeling",
        "Team Leadership",
      ],
      achievements: [
        "Founded PSI in 2009",
        "Led 500+ successful research projects",
        "ESOMAR Advisory Board Member",
        "Published 15+ research papers",
      ],
      contact: {
        email: "gbenga@psi-research.net",
        linkedin: "linkedin.com/in/gbengaadewumi",
        phone: "+234-XXX-XXXXX",
      },
    },
    {
      id: "2",
      name: "Alaba Uthman",
      position: "Deputy Director of Operations",
      department: "Research",
      image: alaba,
      bio: "Alaba has over 18 years research experience in various field of quantitative research. Prior to joining PSI, he was formerly a Research Manager at Research International Market Trend. His research experience span across key research techniques which includes U&A studies, pricing research, trade research, advertising research, Customer satisfaction survey, product testing amongst others. His analytical approach in reporting and project management skill makes him a popular choice in handling complex ad hoc and tracking studies. He has participated in different professional training including NIMRA professional courses. He holds a BA in philosophy. Alaba is also a member of Nigerian Market Research Association (NIMRA).",
      education: [
        "MSc Market Research, University of Manchester",
        "BSc Psychology, University of Ibadan",
      ],
      experience: "12+ years",
      location: "Lagos, Nigeria",
      skills: [
        "Quantitative Research",
        "Consumer Psychology",
        "Data Analysis",
        "Survey Design",
      ],
      achievements: [
        "Led Nigeria's largest consumer behavior study",
        "NMRA Excellence Award 2022",
        "Certified ESOMAR Researcher",
        "Speaker at 10+ industry conferences",
      ],
      contact: {
        email: "alaba@psi-reseach.net",
        linkedin: "linkedin.com/in/sarahokafor",
      },
    },
    {
      id: "3",
      name: "Kehinde Akinremi",
      position: "Field Operations Manager",
      department: "Analytics",
      image: kehinde,
      bio: "Kehinde Akinremi is a graduate of mass communication with ample knowledge in computer studies. He started his career in marketing research industry with PSI team as a quality control officer covering south west region, in which he rose to the position of field manager. He has vast experience in various capacities in field operations both in quantitative and qualitative studies. He presently co-ordinates overall PSI field operations. He has attended several trainings on leadership development and Project Management Training.",
      education: [
        "PhD Data Science, University of Edinburgh",
        "MSc Statistics, Ahmadu Bello University",
      ],
      experience: "10+ years",
      location: "Lagos, Nigeria",
      skills: [
        "Data Science",
        "Machine Learning",
        "Predictive Analytics",
        "Statistical Modeling",
      ],
      achievements: [
        "Developed PSI's AI prediction models",
        "Published 20+ analytics papers",
        "IBM Data Science Certification",
        "Led digital transformation at PSI",
      ],
      contact: {
        email: "kehinde@psi-reseach.net",
        linkedin: "linkedin.com/in/fatimaabdullahi",
      },
    },
    {
      id: "4",
      name: "Gbemileke Shodiya",
      position: "Data Processing Manager",
      department: "Operations",
      image: leke,
      bio: "Holds BSc in Computer Science and Economics. Leke has over ten years Data processing experience. He was a supervisor-Data processing with Marketing Research Consultancy Ltd (MRC) before joining PSI as senior Data Processing Officer. He has vast experience in the use of various packages EXCEL SPSS, QPSMR, CSPRO & EPI DATA/EPIINFO for data entry and data editing. Johnson has managed key accounts in the past in the area of data analysis for major clients. Leke successfully coordinated several projects for the company at all levels to several clientele be it local or international. . He is associate member of Nigerian Marketing Research Association (NiMRA). He is experienced in scripting of questionnaire into electronic format for PDAs and smartphones. He will coordinate the uploading of data and downloading from field across the study states.",
      education: [
        "MSc Sociology, University of Nigeria",
        "BSc Mass Communication, Unn",
      ],
      experience: "14+ years",
      location: "Lagos, Nigeria",
      skills: [
        "Field Management",
        "Quality Control",
        "Team Coordination",
        "Rural Research",
      ],
      achievements: [
        "Built 50+ person field team",
        "Zero quality issues in 2 years",
        "Rural research specialist",
        "Field Excellence Award 2023",
      ],
      contact: {
        email: "leke@psi-reseach.net",
        phone: "+234-XXX-XXXXX",
      },
    },
    {
      id: "5",
      name: "Bola Joseph",
      position: "Research Executive",
      department: "Research",
      image: bola,
      bio: "Holds an Msc in Information Technology and a Bsc. in Computer Science. She is a Diligent and Versatile Researcher with strong background and working experience in marketing, social and opinion research, project management, monitoring, evaluation and learning. She has several experiences leading projects in Nigeria and outside Nigeria with different categories of respondents including marginalized and displaced respondents across Africa. She has worked and managed projects for several international developmental organizations, international institutions, manufacturing companies starting from - proposal writing , design of questionnaires , facilitating and contributing to client discussion to better understand their business issues, gathering data and coordinating fieldwork execution to final analysis & interpretation of data. She is an excellent researcher who is bright and enthusiastic with a great deal of idea, conscientious, hardworking and committed with a vast experience of leadership. An effective team member who has the ability to meet deadlines. Has a thorough approach to work and will go out of her way to maintain an enjoyable and smooth working environment. With over 6 years in Marketing Research experience, she has gained a wide range of experience from quality control and coordinating several field operations for key clients.",
      education: [
        "Msc in Information Technology, Université Cheikh Anta Diop",
        "Bsc. in Computer Science, University of Lagos",
      ],
      experience: "6+ years",
      location: "Lagos, Nigeria",
      skills: [
        "Qualitative Research",
        "Focus Groups",
        "Ethnography",
        "Cultural Analysis",
      ],
      achievements: [
        "Conducted 500+ focus groups",
        "Multi-language research expert",
        "Cultural insights specialist",
        "Qualitative Excellence Award 2022",
      ],
      contact: {
        email: "bola@psi-reseach.net",
        linkedin: "linkedin.com/in/aminadiallo",
      },
    },
  ];

  const departments = [
    "All",
    "Executive",
    "Research",
    "Operations",
    "Analytics",
  ];
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredMembers =
    selectedDepartment === "All"
      ? teamMembers
      : teamMembers.filter(
          (member) => member.department === selectedDepartment
        );

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
                  <Badge
                    variant="outline"
                    className="mb-4 text-primary border-primary"
                  >
                    Meet Our Team
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                    The Minds Behind
                    <span className="text-primary"> Nigeria's </span>
                    Leading Research
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Our diverse team of researchers, analysts, and field experts
                    brings together local insights and international standards
                    to deliver exceptional results.
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
                    variant={
                      selectedDepartment === dept ? "default" : "outline"
                    }
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
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                            style={{
                              backgroundImage: `url(${member.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          ></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="text-xl font-bold mb-1">
                              {member.name}
                            </h3>
                            <p className="text-sm opacity-90">
                              {member.position}
                            </p>
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
                              <Badge
                                key={skill}
                                variant="outline"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                            {member.skills.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{member.skills.length - 2} more
                              </Badge>
                            )}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full group"
                          >
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
                      <img
                        className="aspect-[3/4] bg-gradient-primary rounded-xl"
                        src={selectedMember.image}
                      />

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">
                            Contact Information
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-primary" />
                              <a
                                href={`mailto:${selectedMember.contact.email}`}
                                className="hover:text-primary"
                              >
                                {selectedMember.contact.email}
                              </a>
                            </div>
                            {selectedMember.contact.phone && (
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-primary" />
                                <a
                                  href={`tel:${selectedMember.contact.phone}`}
                                  className="hover:text-primary"
                                >
                                  {selectedMember.contact.phone}
                                </a>
                              </div>
                            )}
                            {selectedMember.contact.linkedin && (
                              <div className="flex items-center gap-2 text-sm">
                                <Linkedin className="h-4 w-4 text-primary" />
                                <a
                                  href={`https://${selectedMember.contact.linkedin}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-primary"
                                >
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
                        <h3 className="text-xl font-bold mb-2">
                          {selectedMember.position}
                        </h3>
                        <Badge variant="secondary" className="mb-4">
                          {selectedMember.department}
                        </Badge>
                        <p
                          className="text-muted-foreground leading-relaxed"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {selectedMember.bio}
                        </p>
                      </div>

                      {/* <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          Education
                        </h3>
                        <ul className="space-y-1">
                          {selectedMember.education.map((edu, index) => (
                            <li
                              key={index}
                              className="text-sm text-muted-foreground"
                            >
                              • {edu}
                            </li>
                          ))}
                        </ul>
                      </div> */}

                      {/* <div>
                        <h3 className="font-semibold mb-3">Core Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div> */}

                      {/* <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          Key Achievements
                        </h3>
                        <ul className="space-y-1">
                          {selectedMember.achievements.map(
                            (achievement, index) => (
                              <li
                                key={index}
                                className="text-sm text-muted-foreground"
                              >
                                • {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div> */}
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
