import { useState } from "react";
import { MapPin, Navigation, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onGeolocate: () => void;
}

const SearchBar = ({ onSearch, onGeolocate }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="container mx-auto px-4 mb-8">
      <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Digite seu endereço ou CEP"
            className="pl-10 h-12"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Button type="submit" className="h-12 gap-2">
          <Search className="h-5 w-5" />
          Buscar
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-12 gap-2 whitespace-nowrap"
          onClick={onGeolocate}
        >
          <Navigation className="h-5 w-5" />
          Usar minha localização
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
