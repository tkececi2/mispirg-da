import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, MapPin, Phone } from "lucide-react";

interface ProductCardProps {
  name: string;
  tagline?: string;
  image: string;
  origin?: string;
  certificationNumber?: string;
  certified?: boolean;
  href: string;
  onContactClick?: () => void;
}

export default function ProductCard({ 
  name, 
  tagline,
  image, 
  origin,
  certificationNumber,
  certified, 
  href,
  onContactClick
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate group relative border-2 border-[#C9A227]/20" data-testid={`card-product-${name}`}>
      {certified && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-[#5A2D82] text-white px-4 py-2 rounded-md shadow-lg flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span className="text-sm font-semibold">Coğrafi İşaret</span>
          </div>
        </div>
      )}
      
      <div className="aspect-[4/3] overflow-hidden bg-[#EFE9E1]/30 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-testid={`img-product-${name}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-8 bg-[#EFE9E1]/10">
        <div className="mb-4">
          <h3 className="font-serif text-3xl font-bold text-foreground mb-2" data-testid={`text-product-name-${name}`}>
            {name}
          </h3>
          {tagline && (
            <p className="text-lg text-[#6B4E3D] font-medium italic" data-testid="text-product-tagline">
              {tagline}
            </p>
          )}
        </div>

        <div className="space-y-3 mb-6">
          {origin && (
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-medium">{origin}</span>
            </div>
          )}
          {certificationNumber && (
            <div className="flex items-center gap-3 text-muted-foreground">
              <Award className="h-5 w-5 text-[#C9A227] flex-shrink-0" />
              <span className="font-medium">Tescil No: {certificationNumber}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-8 pt-0 bg-[#EFE9E1]/10 flex flex-col gap-3">
        <a href={href} className="w-full">
          <Button className="w-full" size="lg" data-testid={`button-details-${name}`}>
            Ürün Detayları
          </Button>
        </a>
        {onContactClick && (
          <Button 
            variant="outline" 
            className="w-full" 
            size="lg"
            onClick={onContactClick}
            data-testid={`button-contact-${name}`}
          >
            <Phone className="h-4 w-4 mr-2" />
            Toptan Teklif Al
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
