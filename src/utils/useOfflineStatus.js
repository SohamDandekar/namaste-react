import { useState, useEffect, use } from "react";

const useOfflineStatus = () => {
    const [offlineStatus, setOfflineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setOfflineStatus(true);
        });

        window.addEventListener("offline", () => {
            setOfflineStatus(false);
        });
    }, []);

    return offlineStatus;
}

export default useOfflineStatus;