import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const toYMDLocal = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
};

export default function PrenotaPage() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [selectedDate, setSelectedDate] = useState("");
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState("");
    const [availableDays, setAvailableDays] = useState([]);
    const [selectedDateObj, setSelectedDateObj] = useState(null);


    const token = new URLSearchParams(window.location.search).get("token");



    // verifica token
    useEffect(() => {
        const validate = async () => {
            try {
                const res = await fetch(
                    `http://localhost:3000/api/bookings/token/validate?token=${encodeURIComponent(token)}`
                );

                const json = await res.json();

                if (!json.valid) {
                    setError(json.error);
                } else {
                    setData(json.data);
                }

            } catch (e) {
                console.error("Errore fetch:", e);
                setError("Errore di rete");
            }
        };

        if (token) validate();

    }, [token]);

    useEffect(() => {
        const loadAvailableDays = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/bookings/available-days");
                const json = await res.json();
                if (json.ok) setAvailableDays(json.days || []);
            } catch (err) {
                console.error("Errore caricamento giorni:", err);
            }
        };
        loadAvailableDays();
    }, []);


    // carica slot disponibili
    const loadSlots = async (date) => {

        try {

            const res = await fetch(
                `http://localhost:3000/api/bookings/available-slots?date=${date}`
            );

            const json = await res.json();

            if (json.ok) {
                setSlots(json.availableSlots);
            } else {
                alert(json.error);
            }

        } catch (err) {
            console.error(err);
            alert("Errore caricamento slot");
        }
    };

    const filterAvailableDays = (dateObj) => {
        const ymd = toYMDLocal(dateObj);

        // caso 1: array di stringhe ["2026-03-19", ...]
        if (typeof availableDays?.[0] === "string") {
            return availableDays.includes(ymd);
        }

        // caso 2: array di oggetti [{date, available}, ...]
        const dayInfo = availableDays?.find((x) => x.date === ymd);
        return (dayInfo?.available || 0) > 0;
    };

    // prenotazione
    const schedule = async () => {

        if (!selectedDate || !selectedSlot) {
            alert("Seleziona data e orario");
            return;
        }

        const scheduledAt = `${selectedDate}T${selectedSlot}`;

        setLoading(true);

        try {

            const res = await fetch(
                "http://localhost:3000/api/bookings/schedule",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token, scheduledAt }),
                }
            );

            const json = await res.json();

            if (json.ok) {

                window.location.href = `/confermata?bookingId=${json.bookingId}`;

            } else {

                alert("Errore: " + json.error);

            }

        } catch (e) {

            console.error("Errore fetch:", e);
            alert("Errore di rete");

        } finally {

            setLoading(false);

        }
    };



    if (!token) return <div>Token mancante</div>;
    if (error) return <div>Errore: {error}</div>;
    if (!data) return <div>Caricamento...</div>;

    return (
        <div className="m-20 mt-30">

            <h1 className="text-center text-page-size font-bold mb-20 mt-30">
                PRENOTAZIONE COLLOQUIO MEDICO
            </h1>


            <div className="mt-10">

                <label className="font-bold mb-3 block">
                    Scegli il giorno della visita
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
                    maxDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)}

                    dateFormat="yyyy-MM-dd"

                    className="border p-3 rounded"
                />

            </div>



            <div className="mt-8">
                <h2 className="font-bold text-lg mb-4">Orari disponibili</h2>

                {selectedDate && slots.length === 0 && (
                    <p className="text-gray-500">
                        Nessuno slot disponibile per questo giorno.
                    </p>
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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



            {selectedSlot && (
                <p className="mt-4 font-bold">
                    Orario selezionato: {selectedDate} {selectedSlot}
                </p>
            )}

            {selectedDate && selectedSlot && (
                <div className="mt-8 p-4 rounded-xl border bg-gray-50">
                    <h3 className="font-bold mb-2">Riepilogo prenotazione</h3>
                    <p>
                        <span className="font-semibold">Data:</span> {selectedDate}
                    </p>
                    <p>
                        <span className="font-semibold">Orario:</span> {selectedSlot}
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span> {data.email}
                    </p>
                    <p>
                        <span className="font-semibold">Tipo visita:</span> {data.visitType}
                    </p>
                </div>
            )}

            <p className="mt-10">Email: {data.email}</p>
            <p>Tipo visita: {data.visitType}</p>



            <button
                type="button"
                className={`mt-8 px-6 py-3 rounded-2xl font-bold transition ${loading || !selectedSlot
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                onClick={schedule}
                disabled={loading || !selectedSlot}
            >
                {loading ? "Confermo..." : "Conferma prenotazione"}
            </button>

        </div>
    );
}