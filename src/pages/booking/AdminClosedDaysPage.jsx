import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const toYMDLocal = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
};

export default function AdminClosedDaysPage() {
    const [items, setItems] = useState([]);
    const [selectedDateObj, setSelectedDateObj] = useState(null);
    const [date, setDate] = useState("");
    const [reason, setReason] = useState("");
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);

    const showToast = (message, type = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const load = async () => {
        try {
            const res = await fetch(`${API_URL}/api/admin/closed-days`, {
                credentials: "include",
            });

            const json = await res.json();

            if (json.ok) {
                setItems(json.items || []);
            } else {
                showToast(json.error || "Errore caricamento giorni chiusi", "error");
            }
        } catch (e) {
            console.error("Errore load closed days:", e);
            showToast("Errore di rete", "error");
        }
    };

    useEffect(() => {
        load();
    }, []);

    const addClosedDay = async () => {
        if (!date) {
            showToast("Seleziona una data", "error");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/admin/closed-days`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ date, reason }),
            });

            const json = await res.json();

            if (json.ok) {
                setSelectedDateObj(null);
                setDate("");
                setReason("");
                showToast("Giorno bloccato con successo");
                load();
            } else {
                showToast(json.error || "Errore", "error");
            }
        } catch (e) {
            console.error("Errore add closed day:", e);
            showToast("Errore di rete", "error");
        } finally {
            setLoading(false);
        }
    };

    const removeClosedDay = async (id) => {
        try {
            const res = await fetch(`${API_URL}/api/admin/closed-days/${id}`, {
                method: "DELETE",
                credentials: "include",
            });

            const json = await res.json();

            if (json.ok) {
                showToast("Giorno sbloccato con successo");
                load();
            } else {
                showToast(json.error || "Errore", "error");
            }
        } catch (e) {
            console.error("Errore remove closed day:", e);
            showToast("Errore di rete", "error");
        }
    };

    const isAlreadyClosed = (dateObj) => {
        const ymd = toYMDLocal(dateObj);
        return items.some((item) => item.date === ymd);
    };

    const logout = async () => {
        try {
            await fetch(`${API_URL}/api/auth/logout`, {
                method: "POST",
                credentials: "include",
            });
            window.location.href = "/admin/login";
        } catch (e) {
            console.error("Errore logout:", e);
            showToast("Errore logout", "error");
        }
    };

    return (
        <div className="m-10">
            <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
                <h1 className="text-2xl font-bold">Giorni chiusi / ferie</h1>

                <button
                    className="px-4 py-2 rounded border text-red-600 border-red-300 hover:bg-red-50"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm mb-8">
                <h2 className="text-lg font-bold mb-4">Blocca un giorno</h2>

                <div className="mb-4">
                    <label className="block font-semibold mb-2">Seleziona la data</label>

                    <DatePicker
                        selected={selectedDateObj}
                        onChange={(dateObj) => {
                            setSelectedDateObj(dateObj);
                            setDate(toYMDLocal(dateObj));
                        }}
                        minDate={new Date()}
                        dateFormat="yyyy-MM-dd"
                        className="border p-3 rounded w-full max-w-sm"
                        filterDate={(dateObj) => !isAlreadyClosed(dateObj)}
                    />
                </div>

                {date && (
                    <div className="mb-4 p-3 rounded-xl bg-gray-50 border">
                        <p>
                            <span className="font-semibold">Data selezionata:</span> {date}
                        </p>
                    </div>
                )}

                <div className="mb-4">
                    <label className="block font-semibold mb-2">Motivo (facoltativo)</label>
                    <input
                        type="text"
                        className="border p-3 rounded w-full max-w-lg"
                        placeholder="Es. ferie, congresso, chiusura ambulatorio..."
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    />
                </div>

                <button
                    className={`px-5 py-3 rounded-xl font-bold ${loading || !date
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                    onClick={addClosedDay}
                    disabled={loading || !date}
                >
                    {loading ? "Salvo..." : "Blocca giorno"}
                </button>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold mb-4">Giorni già bloccati</h2>

                <table className="border w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2 text-left">Data</th>
                            <th className="p-2 text-left">Motivo</th>
                            <th className="p-2 text-left">Azioni</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((d) => (
                            <tr key={d.id} className="border-b">
                                <td className="p-2">{d.date}</td>
                                <td className="p-2">{d.reason || "—"}</td>
                                <td className="p-2">
                                    <button
                                        className="px-3 py-1 rounded border text-red-600 border-red-300 hover:bg-red-50"
                                        onClick={() => removeClosedDay(d.id)}
                                    >
                                        Sblocca
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {items.length === 0 && (
                            <tr>
                                <td className="p-3" colSpan={3}>
                                    Nessun giorno bloccato
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {toast && (
                <div
                    className={`fixed bottom-6 right-6 px-5 py-3 rounded-xl shadow-lg text-white z-50 ${toast.type === "error" ? "bg-red-600" : "bg-green-600"
                        }`}
                >
                    {toast.message}
                </div>
            )}
        </div>
    );
}