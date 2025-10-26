import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface BenefitCardProps {
  icon: React.ReactNode;
  iconColor: "primary" | "secondary" | "warning";
  title: string;
  description: string;
  badges: {
    label: string;
    variant: "primary" | "secondary" | "success" | "info" | "warning";
  }[];
  onClick: () => void;
}

const BenefitCard = ({ icon, iconColor, title, description, badges, onClick }: BenefitCardProps) => {
  const iconColorVariants = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    warning: "bg-warning/10 text-warning",
  };

  return (
    <Card className="hover:border-primary/60 transition-all cursor-pointer" onClick={onClick}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconColorVariants[iconColor]}`}>
            {icon}
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          {badges.map((badge, index) => (
            <Badge key={index} variant={badge.variant as any}>
              {badge.label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const BenefitCardSkeleton = () => (
  <Card>
    <CardContent className="p-6 space-y-4">
      <div className="flex items-start gap-4">
        <Skeleton className="w-16 h-16 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-16" />
      </div>
    </CardContent>
  </Card>
);

BenefitCard.Skeleton = BenefitCardSkeleton;

export { BenefitCard };
