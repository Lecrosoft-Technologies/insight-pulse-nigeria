// Advanced SEO Enhancements for PSI Market Research
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  noindex?: boolean;
}

export const SEOEnhancements = ({
  title = "Professional Market Research Services in Nigeria & West Africa | PSI",
  description = "Leading market research company in Nigeria offering quantitative, qualitative research, retail audits, and consumer insights across West Africa. ISO certified with 500+ studies completed.",
  keywords = [
    "market research Nigeria",
    "consumer research West Africa", 
    "retail audit Nigeria",
    "focus groups Lagos",
    "household surveys Nigeria",
    "mystery shopping",
    "customer satisfaction research",
    "FMCG research Nigeria",
    "opinion polls Nigeria",
    "data collection West Africa"
  ],
  canonicalUrl,
  ogImage = "/og-image.jpg",
  structuredData,
  noindex = false
}: SEOProps) => {
  const currentUrl = canonicalUrl || window.location.href;
  const keywordsString = keywords.join(", ");

  // Default structured data for the organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Practical Sampling International (PSI)",
    "description": "Leading market research and consumer insights company in Nigeria and West Africa",
    "url": "https://psi-research.com",
    "logo": "https://psi-research.com/logo.png",
    "foundingDate": "2010",
    "numberOfEmployees": "50-100",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nigeria",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-XXX-XXXXX",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hausa", "Yoruba", "Igbo"]
    },
    "sameAs": [
      "https://linkedin.com/company/psi-research",
      "https://twitter.com/psi_research"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Nigeria"
      },
      {
        "@type": "Country", 
        "name": "Ghana"
      },
      {
        "@type": "Country",
        "name": "Senegal"
      },
      {
        "@type": "Country",
        "name": "Ivory Coast"
      }
    ],
    "serviceType": [
      "Market Research",
      "Consumer Research", 
      "Retail Audit",
      "Focus Groups",
      "Household Surveys",
      "Mystery Shopping",
      "Customer Satisfaction Research"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Robots directive */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PSI Market Research" />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="author" content="Practical Sampling International" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#059669" />
      
      {/* Language and Geographic Targeting */}
      <meta name="geo.region" content="NG" />
      <meta name="geo.placename" content="Nigeria" />
      <meta name="geo.position" content="6.5244;3.3792" />
      <meta name="ICBM" content="6.5244, 3.3792" />
      
      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>

      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      
      {/* Bing Webmaster Tools */}
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* DNS Prefetch for faster loading */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

// Specific structured data generators
export const generateBlogPostStructuredData = (post: {
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  image?: string;
  slug: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "articleBody": post.content,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "PSI Market Research",
      "logo": {
        "@type": "ImageObject",
        "url": "https://psi-research.com/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "image": post.image || "https://psi-research.com/default-blog-image.jpg",
    "url": `https://psi-research.com/insights/${post.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://psi-research.com/insights/${post.slug}`
    }
  };
};

export const generateServiceStructuredData = (serviceName: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "PSI Market Research"
    },
    "areaServed": [
      "Nigeria",
      "Ghana", 
      "Senegal",
      "Ivory Coast"
    ],
    "serviceType": "Market Research"
  };
};

export const generateFAQStructuredData = (faqs: Array<{question: string; answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export default SEOEnhancements;