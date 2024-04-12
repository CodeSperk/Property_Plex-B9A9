import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./map.css";
import { Icon } from 'leaflet';
import MarkerClusterGroup from "react-leaflet-cluster"

const positions = [
  {
    geocode : [23.797, 90.413],
    popUp : "Versatile Art Gallery"
  },
  {
    geocode : [23.839, 90.256],
    popUp : "Grand Convention Center"
  },
  {
    geocode : [23.874, 90.384],
    popUp : "Contemporary Art Gallery"
  },
  {
    geocode : [23.74, 90.394],
    popUp : "Sacred Gathering Place"
  },
  {
    geocode : [23.811, 90.27],
    popUp : "Modern Hospital"
  }
];

const customIcon = new Icon({
  iconUrl:"/estate.png",
  iconSize: [28, 28]
})

const LeafletMap = () => {
  return (
    <MapContainer center={[23.797, 90.413]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MarkerClusterGroup>
      {
        positions.map((marker, idx) => <Marker position={marker.geocode} icon={customIcon} key={idx}>
          <Popup>
            <h4>{marker.popUp}</h4>
          </Popup>
        </Marker>)
      }
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default LeafletMap;