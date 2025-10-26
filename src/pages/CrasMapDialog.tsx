import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { crasData, CrasData } from "@/data/crasData";
import MapView from "@/components/cras-map/MapView";
import SearchBar from "@/components/cras-map/SearchBar";
import LocationList from "@/components/cras-map/LocationList";
import Footer from "@/components/cras-map/Footer";
import HeroSection from "@/components/cras-map/HeroSection";

const CrasMapDialog = () => {
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([-23.5505, -46.6333]);
  const [mapZoom, setMapZoom] = useState(12);
  const [filteredCras, setFilteredCras] = useState<CrasData[]>(crasData);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    const filtered = crasData.filter(
      (cras) =>
        cras.name.toLowerCase().includes(query.toLowerCase()) ||
        cras.address.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered results:", filtered);
    setFilteredCras(filtered);
    if (filtered.length > 0) {
      setMapCenter(filtered[0].position);
      setMapZoom(14);
    }
  };

  const handleGeolocate = () => {
    console.log("Attempting to geolocate...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Geolocation successful:", position.coords);
          setMapCenter([position.coords.latitude, position.coords.longitude]);
          setMapZoom(14);
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Erro ao obter a localização: " + error.message);
        }
      );
    } else {
      console.log("Geolocation not supported.");
      alert("Geolocalização não é suportada neste navegador.");
    }
  };

  const handleLocationSelect = (cras: CrasData) => {
    setMapCenter(cras.position);
    setMapZoom(15);
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <SearchBar onSearch={handleSearch} onGeolocate={handleGeolocate} />
        <div className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <MapView center={mapCenter} zoom={mapZoom} markers={filteredCras} />
            </div>
            <div>
              <LocationList
                locations={filteredCras}
                onLocationSelect={handleLocationSelect}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CrasMapDialog;
