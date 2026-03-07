import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function PrivateRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch(`${API_URL}/api/auth/me`, {
                    credentials: "include",
                });

                const json = await res.json();

                if (json.ok) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (e) {
                console.error("Errore verifica auth:", e);
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <div className="m-10">Controllo accesso...</div>;
    }

    if (!authenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
}