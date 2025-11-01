import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface ProductCardProps {
  name: string;
  image: string;
  features: string[];
  certified?: boolean;
  href: string;
}

export default function ProductCard({ name, image, features, certified, href }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate group" data-testid={`card-product-${name}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-product-${name}`}
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-serif text-2xl font-semibold text-foreground" data-testid={`text-product-name-${name}`}>
            {name}
          </h3>
          {certified && (
            <Badge variant="secondary" className="bg-[#5A2D82] text-white" data-testid="badge-certified">
              Coğrafi İşaret
            </Badge>
          )}
        </div>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-[#C9A227] mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <a href={href} className="w-full">
          <Button className="w-full" data-testid={`button-details-${name}`}>
            Detayları Gör
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
