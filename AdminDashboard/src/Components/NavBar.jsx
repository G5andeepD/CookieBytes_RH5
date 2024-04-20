
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IsLoggedContext } from "../context"
import { clear_token } from "../Utilities/authentication";
export default function NavBar() {
    const [isLogged, setLogged] = useContext(IsLoggedContext);
    let navigate = useNavigate();
    console.log(isLogged);
    function logOut() {
        setLogged(false);
        clear_token();
        navigate('/Login', { replace: true })
    }

    if (isLogged) {
        return (
            <div className="navbar bg-base-100   ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">CookieWatch</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>
                                    View
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none ">
                                    <li><Link to={"ViewDoctors"}>Doctor</Link></li>
                                    <li><Link to={"ViewMap"}>Map</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Create
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none ">
                                    <li><Link to={"CreateDoctor"}>Doctor</Link></li>
                                    <li><Link to={"CreatePHI"}>PHI</Link></li>
                                    <li><Link to={"CreateRisk"}>Risk</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a onClick={logOut}>Log Out</a>
                        </li>
                    </ul>
                </div>
            </div >
        )

    }
    else {
        return (
            <div className="navbar bg-base-100   ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">CookieWatch</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to={"Login"}>Log In</Link>
                        </li>
                    </ul>
                </div>
            </div >
        )
    }
}