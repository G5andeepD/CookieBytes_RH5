import { MapContainer, TileLayer, useMap, CircleMarker, Marker } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_DISEASES, GET_POINTS, GET_CLUSTERS } from "../Constant";
import { get_auth_header } from "../Utilities/authentication";
import { data } from "autoprefixer";
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
export function MapComponent({ points, centers }) { //eslint-disable-line
    const redOptions = { color: 'blue' };
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
                    <CircleMarker key={index} center={point} radius={1} pathOptions={redOptions}  ></CircleMarker>
                ))}
                {centers.map((center, index) => ( //estlint-disable-line
                    <Marker
                        key={index}
                        position={center}></Marker>
                ))}
                <MapModify />
            </MapContainer>
        </div>
    )
}

export function MapPage() {
    const [diseases, setDiseases] = useState(["Tuberculosis", "Malaria", "HIV/AIDS", "Influenza", "Lyme Disease"]);
    const [points, setPoints] = useState([]);
    const [centers, setCenters] = useState([]);
    useEffect(() => {
        //fetch diseases from the server
        axios.get(GET_DISEASES, get_auth_header()).then(
            response => {   //eslint-disable-line       
                setDiseases(response.data.map((disease) => disease.name));
                console.log(response.data.map((disease) => disease.name));
            }).catch(error => {
                console.log(error);
            })
    }, []);
    function submitDo(e) {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const value = Object.fromEntries(formData.entries());

        axios.post(GET_POINTS, { disease: value.disease, time_frame: value.time }, get_auth_header()).then((response) => {
            console.log(response.data);
            setPoints(response.data);
            setCenters([]);
        }).catch((error) => {
            console.error(error);
        });
    }
    function clusterDo() {
        let data = {
            n_cluster: 2,
            data: points
        }

        axios.post(GET_CLUSTERS, data,).then((response) => {
            console.log(response.data);
            setCenters(response.data.n_centers);
        }).catch((error) => {
            console.error(error);
        })

    }
    return (
        <div className="flex flex-col justify-center gap-10">
            <form className="join" onSubmit={submitDo}>
                <select name="disease" className="select select-bordered join-item">
                    {
                        diseases.map((disease, index) => (
                            <option key={index}>{disease}</option>
                        ))
                    }
                </select>
                <select name="time" className="select select-bordered join-item">
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                </select>
                <div className="indicator">
                    <button className="btn join-item" type='submit'>Search</button>
                </div>
            </form>
            <button className="btn btn-wide" onClick={clusterDo} >Create</button>
            <MapComponent points={points} centers={centers} />
        </div >
    )
}