import { useContext } from "react"
import { NotificationContext } from "../context";

export function NotificationContainer() {
    const [notifications, setNotification] = useContext(NotificationContext);
    console.log(notifications);
    //loop over notifications to create many toasts
    return (
        <div className="toast">
            {notifications.map((notification, index) => (
                <div key={index} className="alert alert-info">
                    <span>{notification}</span>
                </div>
            ))}
        </div>
    )
}