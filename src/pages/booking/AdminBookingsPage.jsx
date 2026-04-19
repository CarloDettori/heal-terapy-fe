import { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const toYMDLocal = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
};

export default function AdminBookingsPage() {
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState("scheduled");
    const [q, setQ] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [toast, setToast] = useState(null);

    const [showRescheduleModal, setShowRescheduleModal] = useState(false);
    const [bookingToReschedule, setBookingToReschedule] = useState(null);

    const [availableDays, setAvailableDays] = useState([]);
    const [selectedDateObj, setSelectedDateObj] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState("");
    const [rescheduleLoading, setRescheduleLoading] = useState(false);

    const [showCancelModal, setShowCancelModal] = useState(false);
    const [bookingToCancel, setBookingToCancel] = useState(null);
    const [cancelLoading, setCancelLoading] = useState(false);

    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [detailsLoading, setDetailsLoading] = useState(false);

    const endpoint = useMemo(() => {
        const url = new URL(`${API_URL}/api/admin/bookings`);
        if (status) url.searchParams.set("status", status);
        if (q) url.searchParams.set("q", q);
        return url.toString();
    }, [status, q]);

    const showToast = (message, type = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const load = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(endpoint, {
                credentials: "include",
            });

            const json = await res.json();

            if (!res.ok || !json.ok) {
                setItems([]);
                setError(json?.error || `Errore (${res.status})`);
                return;
            }

            setItems(json.items || []);
        } catch (e) {
            console.error("Admin bookings fetch error:", e);
            setError("Errore di rete");
            setItems([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, [endpoint]);

    const loadAvailableDays = async () => {
        try {
            const res = await fetch(`${API_URL}/api/bookings/available-days`, {
                credentials: "include",
            });
            const json = await res.json();

            if (json.ok) {
                setAvailableDays(json.days || []);
            }
        } catch (e) {
            console.error("Errore caricamento giorni disponibili:", e);
        }
    };

    const loadSlots = async (date) => {
        try {
            const res = await fetch(
                `${API_URL}/api/bookings/available-slots?date=${date}`,
                {
                    credentials: "include",
                }
            );

            const json = await res.json();

            if (json.ok) {
                setSlots(json.availableSlots || []);
            } else {
                showToast(json.error || "Errore caricamento slot", "error");
            }
        } catch (e) {
            console.error("Errore caricamento slot:", e);
            showToast("Errore di rete", "error");
        }
    };

    const filterAvailableDays = (dateObj) => {
        const ymd = toYMDLocal(dateObj);
        const dayInfo = availableDays?.find((x) => x.date === ymd);
        return (dayInfo?.available || 0) > 0;
    };

    const confirmReschedule = async () => {
        if (!bookingToReschedule) return;

        if (!selectedDate || !selectedSlot) {
            showToast("Seleziona giorno e orario", "error");
            return;
        }

        const scheduledAt = `${selectedDate}T${selectedSlot}`;

        setRescheduleLoading(true);

        try {
            const res = await fetch(
                `${API_URL}/api/admin/bookings/${bookingToReschedule.id}/reschedule`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ scheduledAt }),
                }
            );

            const json = await res.json();

            if (json.ok) {
                setShowRescheduleModal(false);
                setBookingToReschedule(null);
                setSelectedDateObj(null);
                setSelectedDate("");
                setSelectedSlot("");
                setSlots([]);

                showToast("Prenotazione spostata con successo");
                load();
            } else {
                showToast(json.error || "Errore durante lo spostamento", "error");
            }
        } catch (e) {
            console.error("Errore reschedule:", e);
            showToast("Errore di rete", "error");
        } finally {
            setRescheduleLoading(false);
        }
    };

    const confirmCancel = async () => {
        if (!bookingToCancel) return;

        setCancelLoading(true);

        try {
            const res = await fetch(
                `${API_URL}/api/admin/bookings/${bookingToCancel.id}/cancel`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const json = await res.json();

            if (json.ok) {
                setShowCancelModal(false);
                setBookingToCancel(null);

                showToast("Prenotazione cancellata con successo");
                load();
            } else {
                showToast(json.error || "Errore durante la cancellazione", "error");
            }
        } catch (e) {
            console.error("Errore cancel:", e);
            showToast("Errore di rete", "error");
        } finally {
            setCancelLoading(false);
        }
    };

    const openDetailsModal = async (bookingId) => {
        setDetailsLoading(true);
        setShowDetailsModal(true);
        setBookingDetails(null);

        try {
            const res = await fetch(`${API_URL}/api/bookings/${bookingId}`, {
                credentials: "include",
            });

            const json = await res.json();

            if (json.ok) {
                setBookingDetails(json.booking);
            } else {
                showToast(json.error || "Errore caricamento dettagli", "error");
                setShowDetailsModal(false);
            }
        } catch (e) {
            console.error("Errore dettagli booking:", e);
            showToast("Errore di rete", "error");
            setShowDetailsModal(false);
        } finally {
            setDetailsLoading(false);
        }
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
        <section>
            <div className="mt-30 flex items-center justify-between mb-6 gap-4 flex-wrap">
                <h1 className="text-2xl font-bold">PRENOTAZIONI</h1>

                <div className="flex gap-3">
                    <button
                        className="px-4 py-2 rounded border-theme text-(--theme) font-bold hover:text-white hover:bg-(--theme)"
                        onClick={load}
                        disabled={loading}
                    >
                        {loading ? "Aggiorno..." : "Aggiorna"}
                    </button>

                    <button
                        className="px-4 py-2 rounded border text-red-600 border-red-300 hover:bg-red-50"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className="flex gap-3 items-center mb-6 flex-wrap">
                <select
                    className="border p-2 rounded"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="scheduled">scheduled</option>
                    <option value="confirmed">confirmed</option>
                    <option value="cancelled">cancelled</option>
                </select>

                <input
                    className="border p-2 rounded"
                    placeholder="Cerca per email..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            </div>

            {error && (
                <div className="mb-4 p-3 rounded border border-red-300 text-red-700">
                    {error}
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="border w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2 text-left">ID</th>
                            <th className="p-2 text-left">Email</th>
                            <th className="p-2 text-left">Tipo</th>
                            <th className="p-2 text-left">Stato</th>
                            <th className="p-2 text-left">Quando</th>
                            <th className="p-2 text-left">Pagamento</th>
                            <th className="p-2 text-left">Importo</th>
                            <th className="p-2 text-left">Azioni</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((b) => (
                            <tr key={b.id} className="border-b">
                                <td className="p-2">{b.id}</td>
                                <td className="p-2">{b.email}</td>
                                <td className="p-2">{b.visit_type}</td>
                                <td className="p-2">{b.status}</td>
                                <td className="p-2">
                                    {b.scheduled_at
                                        ? new Date(b.scheduled_at).toLocaleString("it-IT")
                                        : "—"}
                                </td>
                                <td className="p-2">{b.payment_status}</td>
                                <td className="p-2">
                                    {typeof b.amount === "number"
                                        ? `${(b.amount / 100).toFixed(2)}€`
                                        : "—"}
                                </td>
                                <td className="p-2 flex gap-2 flex-wrap">
                                    <button
                                        className="px-3 py-1 rounded border text-gray-700 border-gray-300 hover:bg-gray-50"
                                        onClick={() => openDetailsModal(b.id)}
                                    >
                                        Dettagli
                                    </button>

                                    <button
                                        className="px-3 py-1 rounded border text-blue-600 border-blue-300 hover:bg-blue-50"
                                        onClick={async () => {
                                            setBookingToReschedule(b);
                                            setShowRescheduleModal(true);

                                            setSelectedDateObj(null);
                                            setSelectedDate("");
                                            setSelectedSlot("");
                                            setSlots([]);

                                            await loadAvailableDays();
                                        }}
                                    >
                                        Sposta
                                    </button>

                                    <button
                                        className="px-3 py-1 rounded border text-red-600 border-red-300 hover:bg-red-50"
                                        onClick={() => {
                                            setBookingToCancel(b);
                                            setShowCancelModal(true);
                                        }}
                                    >
                                        Cancella
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {!loading && items.length === 0 && (
                            <tr>
                                <td className="p-3" colSpan={8}>
                                    Nessuna prenotazione trovata
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {showDetailsModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-xl">
                        <h2 className="text-xl font-bold mb-4">Dettagli prenotazione</h2>

                        {detailsLoading && <p>Caricamento...</p>}

                        {!detailsLoading && bookingDetails && (
                            <div className="space-y-3">
                                <p><span className="font-semibold">ID:</span> {bookingDetails.id}</p>
                                <p><span className="font-semibold">Email:</span> {bookingDetails.email}</p>
                                <p><span className="font-semibold">Tipo visita:</span> {bookingDetails.visit_type}</p>
                                <p><span className="font-semibold">Stato:</span> {bookingDetails.status}</p>
                                <p>
                                    <span className="font-semibold">Data e ora:</span>{" "}
                                    {bookingDetails.scheduled_at
                                        ? new Date(bookingDetails.scheduled_at).toLocaleString("it-IT")
                                        : "Non impostata"}
                                </p>
                                <p><span className="font-semibold">Pagamento:</span> {bookingDetails.payment_status}</p>
                                <p>
                                    <span className="font-semibold">Importo:</span>{" "}
                                    {typeof bookingDetails.amount === "number"
                                        ? `${(bookingDetails.amount / 100).toFixed(2)}€`
                                        : "—"}
                                </p>
                            </div>
                        )}

                        <div className="flex justify-end mt-6">
                            <button
                                className="px-4 py-2 rounded border"
                                onClick={() => {
                                    setShowDetailsModal(false);
                                    setBookingDetails(null);
                                }}
                            >
                                Chiudi
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showRescheduleModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-xl">
                        <h2 className="text-xl font-bold mb-4">Sposta prenotazione</h2>

                        {bookingToReschedule && (
                            <div className="mb-6 p-4 rounded-xl bg-gray-50 border">
                                <p>
                                    <span className="font-semibold">Paziente:</span>{" "}
                                    {bookingToReschedule.email}
                                </p>
                                <p>
                                    <span className="font-semibold">Tipo visita:</span>{" "}
                                    {bookingToReschedule.visit_type}
                                </p>
                                <p>
                                    <span className="font-semibold">Data attuale:</span>{" "}
                                    {bookingToReschedule.scheduled_at
                                        ? new Date(bookingToReschedule.scheduled_at).toLocaleString("it-IT")
                                        : "Non impostata"}
                                </p>
                            </div>
                        )}

                        <div className="mb-6">
                            <label className="block font-semibold mb-2">
                                Scegli il nuovo giorno
                            </label>

                            <DatePicker
                                selected={selectedDateObj}
                                onChange={(date) => {
                                    setSelectedDateObj(date);

                                    const formatted = toYMDLocal(date);
                                    setSelectedDate(formatted);
                                    setSelectedSlot("");

                                    loadSlots(formatted);
                                }}
                                filterDate={filterAvailableDays}
                                minDate={new Date()}
                                dateFormat="yyyy-MM-dd"
                                className="border p-3 rounded w-full"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block font-semibold mb-2">
                                Orari disponibili
                            </label>

                            {selectedDate && slots.length === 0 && (
                                <p className="text-gray-500">
                                    Nessuno slot disponibile per questo giorno.
                                </p>
                            )}

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {slots.map((slot) => (
                                    <button
                                        key={slot}
                                        type="button"
                                        className={`px-4 py-3 rounded-xl border font-semibold transition ${selectedSlot === slot
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-white text-gray-800 border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                                            }`}
                                        onClick={() => setSelectedSlot(slot)}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {selectedDate && selectedSlot && (
                            <div className="mb-6 p-4 rounded-xl border bg-blue-50">
                                <p className="font-semibold">Nuova data selezionata</p>
                                <p>
                                    {selectedDate} {selectedSlot}
                                </p>
                            </div>
                        )}

                        <div className="flex justify-end gap-3">
                            <button
                                className="px-4 py-2 rounded border"
                                onClick={() => {
                                    setShowRescheduleModal(false);
                                    setBookingToReschedule(null);
                                    setSelectedDateObj(null);
                                    setSelectedDate("");
                                    setSelectedSlot("");
                                    setSlots([]);
                                }}
                            >
                                Annulla
                            </button>

                            <button
                                className={`px-4 py-2 rounded font-bold ${rescheduleLoading || !selectedSlot
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                                    }`}
                                disabled={rescheduleLoading || !selectedSlot}
                                onClick={confirmReschedule}
                            >
                                {rescheduleLoading ? "Salvo..." : "Conferma spostamento"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showCancelModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-xl">
                        <h2 className="text-xl font-bold mb-4 text-red-600">
                            Cancella prenotazione
                        </h2>

                        {bookingToCancel && (
                            <div className="mb-6 p-4 rounded-xl bg-gray-50 border">
                                <p>
                                    <span className="font-semibold">Paziente:</span>{" "}
                                    {bookingToCancel.email}
                                </p>
                                <p>
                                    <span className="font-semibold">Tipo visita:</span>{" "}
                                    {bookingToCancel.visit_type}
                                </p>
                                <p>
                                    <span className="font-semibold">Data:</span>{" "}
                                    {bookingToCancel.scheduled_at
                                        ? new Date(bookingToCancel.scheduled_at).toLocaleString("it-IT")
                                        : "Non impostata"}
                                </p>

                                <p className="mt-3 text-sm text-gray-600">
                                    Questa azione annullerà la prenotazione e invierà una mail al paziente.
                                </p>
                            </div>
                        )}

                        <div className="flex justify-end gap-3">
                            <button
                                className="px-4 py-2 rounded border"
                                onClick={() => {
                                    setShowCancelModal(false);
                                    setBookingToCancel(null);
                                }}
                            >
                                Annulla
                            </button>

                            <button
                                className={`px-4 py-2 rounded font-bold ${cancelLoading
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-red-600 text-white hover:bg-red-700"
                                    }`}
                                disabled={cancelLoading}
                                onClick={confirmCancel}
                            >
                                {cancelLoading ? "Cancello..." : "Conferma cancellazione"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {toast && (
                <div
                    className={`fixed bottom-6 right-6 px-5 py-3 rounded-xl shadow-lg text-white z-50 ${toast.type === "error" ? "bg-red-600" : "bg-green-600"
                        }`}
                >
                    {toast.message}
                </div>
            )}
        </section>
    );
}