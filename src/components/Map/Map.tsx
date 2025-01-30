'use client'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const branches = [
  { lat: 19.0760, lng: 72.8777, name: "India" },
  { lat: 31.7683, lng: 35.2137, name: "Israel" },
  { lat: 25.276987, lng: 55.296249, name: "Dubai" },
];

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const Map = () => (
  <MapContainer
    center={[25.0, 45.0]} 
    zoom={3} 
    style={{ height: "500px", width: "100%" }}
    zoomControl={false} 
    scrollWheelZoom={false}
    dragging={false} 
    doubleClickZoom={false} 
  >
    <TileLayer
      url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
    />
    {branches.map(branch => (
      <Marker key={branch.name} position={[branch.lat, branch.lng]} icon={icon}>
        <Tooltip direction="top" offset={[0, -40]} opacity={1} permanent>
          {branch.name}
        </Tooltip>
      </Marker>
    ))}
  </MapContainer>
);

export default Map;
