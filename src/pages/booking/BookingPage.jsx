import { useEffect, useState } from "react";

export default function BookingPage() {
    const [result, setResult] = useState(null);
    const [token] = useState(() => new URLSearchParams(window.location.search).get("token"));

    useEffect(() => {
        (async () => {
            const r = await fetch(`http://localhost:3000/api/bookings/token/validate?token=${encodeURIComponent(token)}`);
            const data = await r.json();
            setResult(data);
        })();
    }, [token]);

    const consume = async () => {
        const r = await fetch(`http://localhost:3000/api/bookings/token/consume`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        });
        return r.json();
    };

    if (!token) return <div>Token mancante.</div>;
    if (!result) return <div>Caricamento…</div>;
    if (!result.valid) return <div>Token non valido: {result.error}</div>;

    return (
        <div>
            <h1>Prenotazione</h1>
            <p>Tipo visita: {result.data.visitType}</p>

            <button onClick={async () => {
                const c = await consume();
                console.log(c);
                alert(c.consumed ? "Token consumato ✅" : `Errore: ${c.error}`);
            }}>
                Continua
            </button>
        </div>
    );
}