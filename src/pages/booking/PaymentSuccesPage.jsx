import { useEffect, useState } from "react";

export default function PaymentSuccesPage() {

    const [msg, setMsg] = useState("Conferma pagamento in corso…");
    const sessionId = new URLSearchParams(window.location.search).get("session_id");

    useEffect(() => {
        const run = async () => {
            if (!sessionId) {
                setMsg("Sessione mancante. Controlla la mail per completare la prenotazione.");
                return;
            }

            const res = await fetch(`http://localhost:3000/api/payments/session/${sessionId}`);
            const json = await res.json();

            if (json.ok) {
                window.location.href = json.bookingUrl; // ✅ redirect diretto
            } else {
                setMsg(json.error || "Non riesco a recuperare la prenotazione. Controlla la mail.");
            }
        };

        run();
    }, [sessionId]);

    return (
        <section>

            <h1 className="text-center text-page-size font-bold my-30">PAGAMENTO COMPLETATO CON SUCCESSO!</h1>

            <h1 className="text-center font-bold my-30">Controlla la tua email per completare la prenotazione.</h1>

            <div className="my-30">{msg}</div>
        </section>
    );

};