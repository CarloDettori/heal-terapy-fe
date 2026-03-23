import { useState } from "react";

export default function CheckoutPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const startCheckout = async () => {
        if (!email) return alert("Inserisci email");

        setLoading(true);
        try {
            const res = await fetch("http://localhost:3000/api/payments/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, visitType: "in_person" }),
            });

            const data = await res.json();

            if (!res.ok) return alert(data.error || "Errore checkout");
            window.location.href = data.url; // ✅ redirect a Stripe
        } catch (e) {
            console.error(e);
            alert("Errore di rete");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-30">
            <h1 className="text-center text-page-size font-bold mb-20 mt-30">PRENOTA UNA VISITA</h1>

            <h2 className="font-bold text-center text-(--theme)">puoi prenotare online una visita in clinica</h2>



            <div className="flex flex-col mx-auto p-20 max-w-180 h-full rounded-xl bg-white p-10 mt-10 gap-10">

                <h1 className="font-bold">PRENOTAZIONE ONLINE</h1>


                <h2>Inserisci la tua mail per prenotare una visita in ambulatorio. <br /> Per poter prenotare una visita è previsto un'acconto di <strong>30€</strong></h2>




                <div>
                    <label className="block mb-2">Email</label>
                    <input
                        className="border p-2 rounded w-full max-w-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nome@esempio.com"
                    />

                    <p className="mt-4">
                        Tipo visita: <b>In presenza</b> (visite online non disponibili)
                    </p>
                </div>
                <button
                    className="mt-6 px-5 p-3 rounded-3xl border-theme text-(--theme) font-bold hover:text-white hover:bg-(--theme)"
                    onClick={startCheckout}
                    disabled={loading}
                >
                    {loading ? "Reindirizzo..." : "Vai al pagamento"}
                </button>
            </div>
        </div>
    );
}