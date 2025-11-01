import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  title: string;
  content: string;
  rating?: number;
}

export default function Testimonial({ name, title, content, rating = 5 }: TestimonialProps) {
  return (
    <Card className="hover-elevate">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#C9A227] text-[#C9A227]" />
          ))}
        </div>
        <p className="text-foreground mb-6 italic">"{content}"</p>
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{title}</div>
        </div>
      </CardContent>
    </Card>
  );
}
