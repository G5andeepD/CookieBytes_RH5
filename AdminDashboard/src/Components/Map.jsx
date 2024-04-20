import { MapContainer, Marker, Popup, TileLayer, useMap, CircleMarker } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import { point } from "leaflet";
function MapModify() {
    const map = useMap();
    //setbounds to srilanka cordinates
    map.fitBounds([
        [5.9253, 79.6954],
        [9.9696, 81.7876]
    ]);
    //also set max-bounds to the same
    map.setMaxBounds([
        [5.9253, 79.6954],
        [9.9696, 81.7876]
    ]);

}
export function TestMap() {

    const position = [51.505, -0.09];
    const redOptions = { color: 'red' };
    //get an array of points of length 100 in the rectangle defined in setMaxBounds
    const points = Array.from({ length: 1000 }, () => [Math.random() * (-5.9253 + 9.9696) + 5.9253, Math.random() * (81.7876 - 79.6954) + 79.6954]);
    return (
        <div className="flex justify-center">
            <MapContainer
                center={
                    [7.8731, 80.7718]
                }
                zoom={1}
                scrollWheelZoom={true}
                className="h-screen w-3/5"
            >
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {points.map((point, index) => (
                    <CircleMarker key={index} center={point} radius={1} ></CircleMarker>
                ))}
                <MapModify />
            </MapContainer>
        </div>
    )
}