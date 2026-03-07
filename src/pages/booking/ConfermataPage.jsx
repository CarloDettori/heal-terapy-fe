import { useEffect, useState } from "react";

export default function ConfermataPage() {
    const [booking, setBooking] = useState(null);
    const [error, setError] = useState(null);

    const bookingId = new URLSearchParams(window.location.search).get("bookingId");

    useEffect(() => {
        const load = async () => {
            try {
                if (!bookingId) {
                    setError("bookingId mancante");
                    return;
                }

                const res = await fetch(`http://localhost:3000/api/bookings/${bookingId}`);
                const json = await res.json();

                if (!json.ok) setError(json.error || "Errore");
                else setBooking(json.booking);
            } catch (e) {
                setError("Errore di rete", e);
            }
        };

        load();
    }, [bookingId]);

    if (error) return <div className="m-20">Errore: {error}</div>;
    if (!booking) return <div className="m-20">Caricamento…</div>;

    return (
        <div className="m-20">
            <h1 className="text-2xl font-bold mb-6">Prenotazione confermata ✅</h1>

            <p><b>Email:</b> {booking.email}</p>
            <p><b>Tipo visita:</b> {booking.visit_type}</p>
            <p><b>Stato:</b> {booking.status}</p>
            <p>
                <b>Data e ora:</b>{" "}
                {booking.scheduled_at ? new Date(booking.scheduled_at).toLocaleString("it-IT") : "Non impostata"}
            </p>

            <div className="mt-6">
                <button
                    className="px-5 p-3 rounded-3xl border-theme text-(--theme) font-bold hover:text-white hover:bg-(--theme)"
                    onClick={() => (window.location.href = "/")}
                >
                    Torna alla Home
                </button>
            </div>
        </div>
    );
}