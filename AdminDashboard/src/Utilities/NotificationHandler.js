
export function setupNotification(setNotification, new_notification, class_type) {//just remove the first item after a timeout
    const new_element = [new_notification, class_type];
    setNotification((notification) => { return [...notification, new_element] });
    setTimeout(() => {
        setNotification(prev => prev.slice(1));
    }, 5000);

}