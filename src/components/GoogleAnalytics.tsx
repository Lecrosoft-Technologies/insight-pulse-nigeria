// Google Analytics and Tag Manager Integration
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Configuration - update with your tracking IDs
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
const GTM_CONTAINER_ID = import.meta.env.VITE_GTM_CONTAINER_ID || 'GTM-XXXXXXX';

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Tag Manager
    if (GTM_CONTAINER_ID && GTM_CONTAINER_ID !== 'GTM-XXXXXXX') {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
      document.head.appendChild(script1);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
    }

    // Initialize Google Analytics (fallback if not using GTM)
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      const script2 = document.createElement('script');
      script2.async = true;
      script2.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script2);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  // Track page views
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }

    // GTM page view tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

// Analytics event tracking utilities
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }

  // Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
};

// Predefined tracking events for PSI
export const analytics = {
  // Form submissions
  trackProposalRequest: (data: { projectType?: string; country?: string; timeline?: string }) => {
    trackEvent('proposal_request_submitted', {
      form_type: 'proposal_request',
      project_type: data.projectType,
      country: data.country,
      timeline: data.timeline,
    });
  },

  trackContactForm: (data: { subject?: string }) => {
    trackEvent('contact_form_submitted', {
      form_type: 'contact',
      subject: data.subject,
    });
  },

  trackNewsletterSignup: (source: string = 'hero') => {
    trackEvent('newsletter_signup', {
      source,
    });
  },

  // User interactions
  trackServiceView: (serviceName: string) => {
    trackEvent('service_viewed', {
      service_name: serviceName,
    });
  },

  trackSectorView: (sectorName: string) => {
    trackEvent('sector_viewed', {
      sector_name: sectorName,
    });
  },

  trackMethodView: (methodName: string) => {
    trackEvent('method_viewed', {
      method_name: methodName,
    });
  },

  trackBlogPostView: (postTitle: string, postSlug: string) => {
    trackEvent('blog_post_viewed', {
      post_title: postTitle,
      post_slug: postSlug,
    });
  },

  // CTA interactions
  trackCTAClick: (ctaType: string, location: string) => {
    trackEvent('cta_clicked', {
      cta_type: ctaType,
      location,
    });
  },

  trackPhoneCall: () => {
    trackEvent('phone_call_initiated', {
      contact_method: 'phone',
    });
  },

  trackWhatsAppClick: () => {
    trackEvent('whatsapp_clicked', {
      contact_method: 'whatsapp',
    });
  },

  trackCalendlyClick: () => {
    trackEvent('calendly_clicked', {
      contact_method: 'calendly',
    });
  },

  // File downloads
  trackDownload: (fileName: string, fileType: string) => {
    trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType,
    });
  },

  // Scroll depth tracking
  trackScrollDepth: (percentage: number) => {
    trackEvent('scroll_depth', {
      percentage,
    });
  },
};

export default GoogleAnalytics;