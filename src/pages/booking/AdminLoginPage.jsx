import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const json = await res.json();

            if (json.ok) {
                window.location.href = "/admin/prenotazioni";
            } else {
                alert(json.error || "Errore login");
            }
        } catch (e) {
            console.error(e);
            alert("Errore di rete");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Accesso Admin</h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="border p-3 rounded w-full mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="border p-3 rounded w-full mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className={`w-full py-3 rounded-xl font-bold ${loading
                        ? "bg-gray-300 text-gray-500"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                    disabled={loading}
                    onClick={login}
                >
                    {loading ? "Accesso..." : "Accedi"}
                </button>
            </div>
        </div>
    );
}