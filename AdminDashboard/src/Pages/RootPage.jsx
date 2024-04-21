import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { NotificationContainer } from "../Components/NotificationContainer";
import { useState } from "react";
import { IsLoggedContext, NotificationContext } from "../context";
export default function RootPage() {
    const [notification, setNotification] = useState([]);
    const [isLogged, setLogged] = useState(false);
    return (
        <IsLoggedContext.Provider value={[isLogged, setLogged]}>
            <NotificationContext.Provider value={[notification, setNotification]}>
                <NavBar />
                <NotificationContainer />
                <Outlet />
            </NotificationContext.Provider>
        </IsLoggedContext.Provider >
    )
}