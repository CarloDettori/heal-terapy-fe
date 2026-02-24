import { useEffect, useState } from "react";

export default function PrenotaPage() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const token = new URLSearchParams(window.location.search).get("token");

    useEffect(() => {
        const validate = async () => {
            const res = await fetch(
                `http://localhost:3000/api/bookings/token/validate?token=${token}`
            );
            const json = await res.json();

            if (!json.valid) {
                setError(json.error);
            } else {
                setData(json.data);
            }
        };

        validate();
    }, [token]);

    const consume = async () => {
        const res = await fetch(
            `http://localhost:3000/api/bookings/token/consume`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            }
        );

        const json = await res.json();

        if (json.consumed) {
            alert("Token confermato. Ora puoi scegliere la data.");
        } else {
            alert("Errore: " + json.error);
        }
    };

    if (!token) return <div>Token mancante</div>;
    if (error) return <div>Errore: {error}</div>;
    if (!data) return <div>Caricamento...</div>;
    return (
        <div className="m-20 mt-30">
            <h1 className="text-center text-page-size font-bold mb-20 mt-30">PRENOTAZIONE COLLOQUIO MEDICO</h1>

            <p>Email: {data.email}</p>
            <p>Tipo visita: {data.visitType}</p>

            <button className="flex px-5 p-3 rounded-3xl border-theme mt-5 text-(--theme) font-bold hover:text-white hover:bg-(--theme) cursor-pointer" onClick={consume}>
                Continua prenotazione
            </button>
        </div>
    );
}