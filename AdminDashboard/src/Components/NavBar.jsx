
import { useContext } from "react"
import { Link } from "react-router-dom"
import { IsLoggedContext } from "../context"
export default function NavBar() {
    const [isLogged, setLogged] = useContext(IsLoggedContext);
    console.log(isLogged);

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
                            <Link to={"Login"}>Log Out</Link>
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