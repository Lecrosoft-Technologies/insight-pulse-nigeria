import { motion } from "framer-motion";
import afro from "@/assets/afro.png";
import uniOxford from "@/assets/uni_oxford.png";
import cocacola from "@/assets/Coca-Cola-Logo-PNG.png";
import BritishCouncil from "@/assets/BritishCouncil.png";
import Cadbury from "@/assets/Cadbury-e1530908732920.png";
import LagosStateGovernment from "@/assets/Lagos-State-Government.jpg";
import nbc from "@/assets/clients_nbc.jpg";
import aecom from "@/assets/aecom.png";
const BrandLogos = () => {
  const brands = [
    {
      name: "Afro Barometer",
      logo: afro,
      colorLogo:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNGRkNDMDAiLz48dGV4dCB4PSI1MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TVROPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      name: "Uni Oxford",
      logo: uniOxford,
      colorLogo:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNFRTAwMDAiLz48dGV4dCB4PSI1MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWlydGVsPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      name: "Coca-Cola",
      logo: cocacola,
      colorLogo:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNEMDIwOTAiLz48dGV4dCB4PSI1MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGFuZ290ZTwvdGV4dD48L3N2Zz4=",
    },
    {
      name: "British Council",
      logo: BritishCouncil,
      colorLogo:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiMwMDc4RDAiLz48dGV4dCB4PSI1MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VW5pbGV2ZXI8L3RleHQ+PC9zdmc+",
    },
    {
      name: "Cadbury",
      logo: Cadbury,
      colorLogo:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNBMzBEMjMiLz48dGV4dCB4PSI1MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TmVzdGzDqTwvdGV4dD48L3N2Zz4=",
    },
    {
      name: "Lagos-State-Government",
      logo: LagosStateGovernment,
      colorLogo:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNGQjQwNDAiLz48dGV4dCB4PSI1MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q29jYS1Db2xhPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      name: "NBC",
      logo: nbc,
      colorLogo:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiMwMDY3QjEiLz48dGV4dCB4PSI1MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI5IiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GaXJzdCBCYW5rPC90ZXh0Pjwvc3ZnPg==",
    },
    {
      name: "AECOM",
      logo: aecom,
      colorLogo:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNGRjY2MDAiLz48dGV4dCB4PSI1MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI5IiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BY2Nlc3MgQmFuazwvdGV4dD48L3N2Zz4=",
    },
  ];

  // Duplicate for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground">
            We've helped Nigeria's top companies make better decisions with data
          </p>
        </div>

        <div className="relative overflow-hidden mask-fade">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="group relative flex-shrink-0 w-36 h-20 flex items-center justify-center bg-background rounded-lg shadow-soft hover:shadow-medium transition-all duration-500 cursor-pointer border border-border/50"
              >
                {/* Grayscale logo */}
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-12 w-auto object-contain group-hover:opacity-0 transition-opacity duration-500 filter grayscale"
                />

                {/* Color logo on hover */}
                <img
                  src={brand.colorLogo}
                  alt={`${brand.name} logo in color`}
                  className="absolute inset-0 m-auto h-12 w-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {brand.name}
                  </span>
                </div> */}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Join 500+ companies that trust PSI for market insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
