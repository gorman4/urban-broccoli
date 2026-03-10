import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type  { LatLngExpression } from "leaflet";

type MapProps = {
  lat: number;
  lng: number;
};

export default function MapComponent({ lat, lng }: MapProps) {

  const position: LatLngExpression = [lat, lng];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>Package location</Popup>
      </Marker>
    </MapContainer>
  );
}