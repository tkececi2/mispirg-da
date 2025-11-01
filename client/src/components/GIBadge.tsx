import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

interface GIBadgeProps {
  number?: string;
  size?: "sm" | "md" | "lg";
}

export default function GIBadge({ number = "112", size = "md" }: GIBadgeProps) {
  const sizeClasses = {
    sm: "w-12 h-12 text-xs",
    md: "w-16 h-16 text-sm",
    lg: "w-20 h-20 text-base",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-[#5A2D82] border-4 border-[#C9A227] flex flex-col items-center justify-center text-white shadow-lg`}
      data-testid="badge-gi"
    >
      <Award className="h-4 w-4 mb-1" />
      <span className="font-bold">#{number}</span>
    </div>
  );
}
