import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords = "İspir kuru fasulyesi, dut pekmezi, coğrafi işaret, doğal gıda, Erzurum, MİSPİR GIDA",
  ogImage = "/og-image.jpg",
  ogUrl = "https://mispirgida.com"
}: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | MİSPİR GIDA`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph tags
    updateMetaTag("og:title", `${title} | MİSPİR GIDA`, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", ogUrl, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:locale", "tr_TR", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", `${title} | MİSPİR GIDA`);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
}
