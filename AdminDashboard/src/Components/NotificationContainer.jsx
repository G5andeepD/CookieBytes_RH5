import { useContext } from "react"
import { NotificationContext } from "../context";


export function NotificationContainer() {
    const [notifications, setNotification] = useContext(NotificationContext);//eslint-disable-line
    //loop over notifications to create many toasts
    console.log(notifications)
    return (
        <div className="toast">
            {notifications.map(([notification, type], index) => {
                switch (type) {
                    case "success":
                        return (
                            <div key={index} className="alert alert-success">
                                <span>{notification}</span>
                            </div>
                        )
                    case "error":
                        return (
                            <div key={index} className="alert alert-error">
                                <span>{notification}</span>
                            </div>
                        )
                }
            })}
        </div >
    )
}