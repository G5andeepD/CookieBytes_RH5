import axios from "axios";
import { GET_DOCTORS } from "../Constant";
import { get_auth_header } from "../Utilities/authentication";
import { useEffect, useState } from "react";
function ViewTable({ data }) {//eslint-disable-line
    return (
        <div className="overflow-x-auto">
            <table className="table table-auto text-nowrap">
                {/* head */}
                <thead>
                    <tr className="text-xl ">
                        <th></th>
                        <th>Name</th>
                        <th>Specialty</th>
                        <th>License No</th>
                        <th>Email</th>
                        <th>Contact No</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((doctor, index) => {//eslint-disable-line
                            return (
                                <tr key={index} className="text-xl">
                                    <td>{index + 1}</td>
                                    <td>{doctor.firstName} {doctor.lastName}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>{doctor.licenseNo}</td>
                                    <td >{doctor.email}</td>
                                    <td>{doctor.contactNo}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export function ViewDoctors() {
    const [doctors, setDoctors] = useState(null);
    // const doctors = [
    //     {
    //         firstName: "Jhonny",
    //         lastName: "English",
    //         email: "hello@gmail.com",
    //         contactNo: "+94xxxxxxxxx",
    //         licenseNo: "SLMC123",
    //         specialty: "Heroine",
    //     },
    //     {
    //         firstName: "Jhon",
    //         specialty: "Doe",
    //         email: "Hello@gmail.com"
    //     }
    // ];
    useEffect(() => {
        axios.get(GET_DOCTORS, get_auth_header())
            .then(response => {
                console.log(response.data);
                setDoctors(response.data)
            })
            .catch(error => {
                console.error(error);
                setDoctors(null)
            });
    }, []);

    if (doctors === null) {
        return (
            <div className="flex flex-col gap-6 p-10 content-center">
                <h1 className="text-3xl font-bold">Doctors List</h1>
                <div className="skeleton w-screen h-screen "></div>
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-6 p-10">
            <h1 className="text-3xl font-bold">Doctors List</h1>
            <ViewTable data={doctors} />
        </div>
    )
}