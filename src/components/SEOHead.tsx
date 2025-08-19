import { Helmet } from "react-helmet-async"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  article?: boolean
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

const SEOHead = ({
  title = "Practical Sampling International (PSI) — Top Market Research Agency in Nigeria & West Africa",
  description = "PSI is a full-service market & social research firm in Nigeria with West Africa coverage. Quant & qual, fast fieldwork, rigorous QA. Get a free proposal.",
  keywords = "market research Nigeria, top research agencies Nigeria, market research West Africa, social research Nigeria, opinion polls Nigeria, FMCG research Nigeria, customer satisfaction Nigeria",
  canonicalUrl,
  ogImage = "/assets/og-image.jpg",
  article = false,
  author,
  publishedTime,
  modifiedTime
}: SEOHeadProps) => {
  const siteUrl = "https://psi-research.net"
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Practical Sampling International (PSI)" />
      <meta property="og:locale" content="en_NG" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Article specific tags */}
      {article && author && (
        <meta property="article:author" content={author} />
      )}
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geographic tags */}
      <meta name="geo.region" content="NG" />
      <meta name="geo.country" content="Nigeria" />
      <meta name="geo.placename" content="Nigeria" />
      
      {/* Business specific */}
      <meta name="rating" content="5" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Practical Sampling International (PSI)",
          "url": siteUrl,
          "logo": `${siteUrl}/assets/logo.png`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "NG",
            "addressRegion": "Nigeria"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "telephone": "+234-XXX-XXXXX",
            "email": "hello@psi-research.net",
            "areaServed": "NG"
          },
          "sameAs": [
            "https://www.linkedin.com/company/practical-sampling-international"
          ],
          "foundingLocation": "Nigeria",
          "serviceArea": ["Nigeria", "West Africa"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Research Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Market Research Services",
                  "description": "Quantitative and qualitative market research in Nigeria and West Africa"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEOHead