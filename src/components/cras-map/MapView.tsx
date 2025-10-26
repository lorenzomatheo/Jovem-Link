import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { CrasData } from "@/data/crasData";

interface MapViewProps {
  center: LatLngExpression;
  zoom: number;
  markers: CrasData[];
}

const MapView = ({ center, zoom, markers }: MapViewProps) => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[400px] md:h-[500px] bg-muted rounded-lg overflow-hidden border border-border">
          <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="w-full h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker) => (
              <Marker key={marker.id} position={marker.position}>
                <Popup>
                  <b>{marker.name}</b>
                  <br />
                  {marker.address}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapView;
