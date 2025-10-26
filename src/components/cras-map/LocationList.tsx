import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CrasData } from "@/data/crasData";

interface LocationListProps {
  locations: CrasData[];
  onLocationSelect: (location: CrasData) => void;
}

const LocationList = ({ locations, onLocationSelect }: LocationListProps) => {
  return (
    <div className="space-y-4 h-[500px] overflow-y-auto">
      <h2 className="text-xl font-bold">Unidades CRAS</h2>
      {locations.map((location) => (
        <Card
          key={location.id}
          className="cursor-pointer transition-all hover:shadow-md"
          onClick={() => onLocationSelect(location)}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {location.name}
                </h3>
                <p className="text-sm text-muted-foreground">{location.address}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LocationList;
