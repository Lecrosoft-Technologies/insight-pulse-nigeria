import { motion } from "framer-motion";

const BrandLogos = () => {
  const brands = [
    { name: "MTN", logo: "🟡", colorLogo: "🔸" },
    { name: "Airtel", logo: "🔴", colorLogo: "🔺" },
    { name: "Dangote", logo: "⚫", colorLogo: "🟢" },
    { name: "Unilever", logo: "⚪", colorLogo: "🔵" },
    { name: "Nestle", logo: "🟤", colorLogo: "🟣" },
    { name: "Coca-Cola", logo: "⚫", colorLogo: "🔴" },
    { name: "PZ Cussons", logo: "⚫", colorLogo: "🟡" },
    { name: "Guinness", logo: "⚫", colorLogo: "🟤" },
    { name: "First Bank", logo: "⚪", colorLogo: "🔵" },
    { name: "Access Bank", logo: "⚫", colorLogo: "🟠" }
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

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -50 * brands.length + "%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="group relative flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
              >
                {/* Grayscale logo */}
                <div className="text-4xl group-hover:opacity-0 transition-opacity duration-300">
                  {brand.logo}
                </div>
                
                {/* Color logo on hover */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.colorLogo}
                </div>
                
                <div className="absolute bottom-1 left-0 right-0 text-center">
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {brand.name}
                  </span>
                </div>
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