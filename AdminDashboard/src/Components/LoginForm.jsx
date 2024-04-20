import { useContext } from "react";
import { IsLoggedContext } from "../context";
import axios from "axios";
import { AUTH_ADMIN } from "../Constant";
import { set_auth_token } from "../Utilities/authentication";
import { useNavigate } from "react-router-dom";
import { setupNotification } from "../Utilities/NotificationHandler";
import { NotificationContext } from "../context";
function LoginForm() {

    const [isLogged, setLogged] = useContext(IsLoggedContext);//eslint-disable-line
    const [notifications, setNotification] = useContext(NotificationContext);//eslint-disable-line
    const navigate = useNavigate();
    function formSubmit(e) {
        e.preventDefault()
        console.log(e);
        const form = e.target
        const formData = new FormData(form)
        const value = Object.fromEntries(formData.entries());
        const data = {
            email: value.email,
            password: value.password
        };
        console.log(data);
        const config = {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        };
        console.log(value);
        axios.post(AUTH_ADMIN, data, config).then(response => {
            console.log(response.data);
            set_auth_token(response.data.access_token);
            setLogged(true);
            navigate("/");
            setupNotification(setNotification, "Login Successful", "success")
        }).catch(error => {
            console.error(error);
            setLogged(false);
            setupNotification(setNotification, "Login Failed", "error")
        });
    }
    return (
        <form onSubmit={formSubmit} className="flex flex-col gap-y-3 content-center items-center pt-6">
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input name="email" type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input name="password" type="password" className="grow" />
            </label>
            <button className="btn btn-wide" type="submit">Login</button>
        </form>

    );
}

export default LoginForm