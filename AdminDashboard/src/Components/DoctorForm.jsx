import axios from "axios";
import { CREATE_DOCTOR } from "../Constant";
import { get_auth_token } from "../Utilities/authentication";
import { useContext } from "react";
import { NotificationContext } from "../context";
import { setupNotification } from "../Utilities/NotificationHandler";

export default function CreateDoctor() {
    const [notifications, setNotification] = useContext(NotificationContext);//eslint-disable-line
    function formSubmit(e) {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const value = Object.fromEntries(formData.entries());
        const data = {
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            contactNo: value.contactNo,
            licenseNo: value.licenseNo,
            specialty: value.specialty
        };

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${get_auth_token()}`,
                'accept': '*/*' // 'accept' changed to 'Accept' for consistency
            }
        };
        console.log(config);

        axios.post(CREATE_DOCTOR, data, config)
            .then(response => {
                console.log(response.data);
                setupNotification(setNotification, "Doctor Created Successfully", "success")
            })
            .catch(error => {
                console.error(error);
                setupNotification(setNotification, "Doctor Creation Failed", "error")
            });
    }
    return (
        <form onSubmit={formSubmit} className="flex flex-col gap-y-3 gap-x-3 content-center p-6 ">
            <h1 className="text-3xl font-bold">Create Doctor</h1>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">First Name</span>
                </div>
                <input name="firstName" type="text" placeholder="Jhonny" className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Last Name</span>
                </div>
                <input name="lastName" type="text" placeholder="English" className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input name="email" type="email" placeholder="doctor@gmail.com" className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">SLMC Number</span>
                </div>
                <input name="licenseNo" type="text" placeholder="SLMC No" className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Contact Number</span>
                </div>
                <input name="contactNo" type="tel" placeholder="+94xxxxxxxxx" className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Contact Number</span>
                </div>
                <input name="specialty" type="text" placeholder="Cardiologist" className="input input-bordered w-full max-w-xs" />
            </label>
            <button className="btn btn-wide" type="submit" >Create</button>
        </form>
    )

}