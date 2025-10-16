import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Building, CheckCircle, ArrowRight } from "lucide-react";
import mapImage from "@/assets/west-africa-map.jpg";
import catiBrochure from "@/assets/brochures/psi-cati-brochure.pdf";
import { useState } from "react";
import RequestProposalModal from "./RequestProposalModal";

const Coverage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const countries = [
    { name: "Nigeria", status: "HQ", details: "" },
    { name: "Ghana", status: " ", details: "" },
    { name: "Senegal", status: "", details: "" },
    { name: "Liberia", status: "", details: "" },
    { name: "Cameroon", status: "", details: "" },
    { name: "Sierra Leone", status: "", details: "" },
    { name: "Togo", status: "", details: "" },
    { name: "Benin", status: "", details: "" },
  ];

  const capabilities = [
    {
      icon: Users,
      title: "Local Expertise",
      description: "Native researchers in every market",
    },
    {
      icon: Building,
      title: "Urban & Rural",
      description: "City centers to remote communities",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Consistent standards across regions",
    },
    {
      icon: MapPin,
      title: "Logistics Mastery",
      description: "Complex multi-country coordination",
    },
  ];

  const stats = [
    {
      number: "200M+",
      label: "Population Reach",
      description: "Across West Africa",
    },
    // { number: "15", label: "Countries", description: "Direct & partner coverage" },
    {
      number: "3,000+",
      label: "Field Teams",
      description: "Trained 7 certified",
    },
  ];

  return (
    <>
      {" "}
      <RequestProposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">West Africa</span>
              <br />
              <span className="text-primary">Coverage & Capability</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From Nigeria's megacities to rural villages across West Africa, we
              deliver consistent quality and deep local insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Map & Countries */}
            <div className="space-y-8">
              <div className="relative rounded-2xl overflow-hidden shadow-strong animate-scale-in">
                <img
                  src={mapImage}
                  alt="West Africa coverage map showing PSI research capabilities across Nigeria and neighboring countries"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>

                {/* Map Pins for all countries with labels */}
                {/* Nigeria - HQ */}
                <div className="absolute top-[45%] left-[58%] transform -translate-x-1/2 -translate-y-1/2 group">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pin-drop shadow-glow"></div>
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-soft">
                    Nigeria
                  </div>
                </div>
                {/* Ghana */}
                <div className="absolute top-[48%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 group">
                  <div
                    className="w-3 h-3 bg-primary rounded-full animate-pin-drop shadow-soft"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-soft">
                    Ghana
                  </div>
                </div>
                {/* Senegal */}
                <div className="absolute top-[35%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 group">
                  <div
                    className="w-3 h-3 bg-primary rounded-full animate-pin-drop shadow-soft"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-soft">
                    Senegal
                  </div>
                </div>
                {/* Liberia */}
                <div className="absolute top-[55%] left-[38%] transform -translate-x-1/2 -translate-y-1/2 group">
                  <div
                    className="w-3 h-3 bg-primary rounded-full animate-pin-drop shadow-soft"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-soft">
                    Liberia
                  </div>
                </div>
                {/* Cameroon */}
                <div className="absolute top-[50%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 group">
                  <div
                    className="w-3 h-3 bg-primary rounded-full animate-pin-drop shadow-soft"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-soft">
                    Cameroon
                  </div>
                </div>
                {/* Sierra Leone */}
                <div className="absolute top-[52%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 group">
                  <div
                    className="w-3 h-3 bg-primary rounded-full animate-pin-drop shadow-soft"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-soft">
                    Sierra Leone
                  </div>
                </div>
                {/* Togo */}
                <div className="absolute top-[50%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 group">
                  <div
                    className="w-3 h-3 bg-primary rounded-full animate-pin-drop shadow-soft"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-soft">
                    Togo
                  </div>
                </div>
                {/* Benin */}
                <div className="absolute top-[48%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 group">
                  <div
                    className="w-3 h-3 bg-primary rounded-full animate-pin-drop shadow-soft"
                    style={{ animationDelay: "0.7s" }}
                  ></div>
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-soft">
                    Benin
                  </div>
                </div>
              </div>

              {/* Countries List */}
              <div className="grid sm:grid-cols-2 gap-3">
                {countries.map((country, index) => (
                  <div
                    key={country.name}
                    className="flex items-center justify-between p-3 bg-white rounded-lg shadow-soft hover-lift animate-stagger"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div>
                      <div className="font-medium text-foreground">
                        {country.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {country.details}
                      </div>
                    </div>
                    {/* <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      country.status === "HQ"
                        ? "bg-accent text-accent-foreground"
                        : country.status === "Active"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {country.status}
                  </div> */}
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        country.status === "HQ"
                          ? "bg-accent text-accent-foreground"
                          : country.status === "Active"
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {country.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities & Stats */}
            <div className="space-y-8">
              {/* Capabilities */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Regional Capabilities</h3>
                <div className="grid gap-4">
                  {capabilities.map((capability, index) => (
                    <div
                      key={capability.title}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-soft hover-lift animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <capability.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {capability.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <Card className="border-0 shadow-medium">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">
                    Our Reach
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div
                        key={stat.label}
                        className="text-center animate-count-up"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                          {stat.number}
                        </div>
                        <div className="font-medium text-foreground text-sm">
                          {stat.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-medium">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Expand Your Research Across West Africa with Confidence?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need insights from a single market or coordinated
              research across multiple countries, we have the network and
              expertise to deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Discuss Your Project Button */}
              <Button
                variant="cta"
                size="xl"
                onClick={() => setIsModalOpen(true)}
                className="group"
              >
                Discuss Your Project
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* Brochure Download Button */}
              <a
                href={catiBrochure}
                download={catiBrochure}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" size="xl">
                  Download our CATI Brochure
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coverage;
