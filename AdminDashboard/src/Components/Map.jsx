import { MapContainer, TileLayer, useMap, CircleMarker } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_DISEASES } from "../Constant";
import { get_auth_header } from "../Utilities/authentication";
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
export function MapComponent({ points }) { //eslint-disable-line

    return (
        <div >
            <MapContainer
                center={
                    [7.8731, 80.7718]
                }
                zoom={1}
                scrollWheelZoom={true}
                className="h-screen w-screen"
            >
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {points.map((point, index) => ( //estlint-disable-line
                    <CircleMarker key={index} center={point} radius={1} ></CircleMarker>
                ))}
                <MapModify />
            </MapContainer>
        </div>
    )
}

export function MapPage() {
    const points = Array.from({ length: 1000 }, () => [Math.random() * (-5.9253 + 9.9696) + 5.9253, Math.random() * (81.7876 - 79.6954) + 79.6954]);
    const [diseases, setDiseases] = useState(['Dengue', 'Malaria', 'Covid-19', 'Flu', 'Common Cold']);
    useEffect(() => {
        //fetch diseases from the server
        axios.get(GET_DISEASES, get_auth_header()).then(
            response => {   //eslint-disable-line       
                setDiseases(response.data.map((disease) => disease.name));
            }).catch(error => {
                console.log(error);
            })
    }, []);
    function submitDo(e) {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const value = Object.fromEntries(formData.entries());
        console.log(value);

    }
    return (
        <div className="flex flex-col justify-center gap-10">
            <form className="join" onSubmit={submitDo}>
                <select name="disease" className="select select-bordered join-item">
                    <option disabled selected>Disease</option>
                    {
                        diseases.map((disease, index) => (
                            <option key={index}>{disease}</option>
                        ))
                    }
                </select>
                <select name="time" className="select select-bordered join-item">
                    <option disabled selected>Date</option>
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                </select>
                <div className="indicator">
                    <button className="btn join-item" type='submit'>Search</button>
                </div>
            </form>
            <MapComponent points={points} />
        </div >
    )
}