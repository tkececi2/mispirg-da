import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  height?: "full" | "large" | "medium";
}

export default function Hero({
  title,
  subtitle,
  imageUrl,
  primaryCta,
  secondaryCta,
  height = "full",
}: HeroProps) {
  const heightClass = {
    full: "h-[90vh]",
    large: "h-[60vh]",
    medium: "h-[40vh]",
  }[height];

  return (
    <div className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          data-testid="text-hero-title"
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            data-testid="text-hero-subtitle"
          >
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <a href={primaryCta.href}>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover-elevate active-elevate-2"
                  data-testid="button-primary-cta"
                >
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-background/20 backdrop-blur-md border-white/30 text-white hover:bg-background/30"
                  data-testid="button-secondary-cta"
                >
                  {secondaryCta.text}
                </Button>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
