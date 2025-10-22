

import { useState } from "react";
import { useRef } from "react";

export default function ReservePage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const thermsAndConditionRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dati inviati:", formData);
        alert("Messaggio inviato con successo!");
        setFormData({ name: "", email: "", message: "" });


        const subject = `Contatto da ${formData.name}`;
        const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.message}`;
        const mailtoLink = `mailto:dott.robertochessa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Apre il client di posta con i dati precompilati
        window.location.href = mailtoLink;
    };

    const toggleTerms = () => {
        thermsAndConditionRef.current.classList.toggle("hidden");
    }

    return (
        <section className="text-(--dark-theme) max-w-300 mx-auto">
            <h1 className="pt-20 font-bold text-center mb-12 text-(--dark-theme) text-page-size">HAI BISOGNO DI SCRIVERMI?</h1>

            <form id="form" onSubmit={handleSubmit} className=" flex flex-col rounded-xl  py-15 space-y-12 w-auto mx-auto">
                <div className="grid grid-cols-1 gap-12">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nome"
                        className="input p-4 rounded-full w-full w-auto mx-auto"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="input p-4 rounded-full w-full "
                        required
                    />
                </div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Messaggio"
                    className="input py-12 p-4 rounded-4xl w-full  "
                    required
                />
                <div id="therms-and-conditions" ref={thermsAndConditionRef} className="hidden padding bg-(--dark-theme) border rounded-4xl text-white p-10">
                    {/* intro */}
                    <h1>Informativa sulla Privacy</h1><br />
                    <p><strong>Ultimo aggiornamento: </strong>21/10/2025</p><br />
                    <p>L'ambulatorio di rigenerazione e terapia del dolore, con sede in Viale Umberto 123, 07100, Sassari, si impegna a
                        proteggere la privacy degli utenti che visitano il nostro sito web <a className="text-blue-600 dark:text-blue-500 hover:underline" href="">www.clinicachessa.it</a>. La presente
                        informativa descrive la raccolta, l'utilizzo e la protezione dei dati personali forniti dagli utenti
                        tramite la <strong>sezione di contatto</strong></p><br /><br />
                    <ol>
                        {/* punto 1 */}
                        <li>
                            <h1 className="text-xl"><strong>Tipologia di dati raccolti</strong></h1>
                            <p>Attraverso la sezione di contatto presente sul sito, vengono raccolti i seguenti dati personali forniti
                                volontariamente dagli utenti:</p>
                            <ul>
                                <li>Nome</li>
                                <li>Cognome</li>
                                <li>Indirizzo e-mail</li>
                            </ul>
                        </li><br /><br />
                        {/* punto 2 */}
                        <li>
                            <h1 className="text-xl"><strong>Finalità del trattamento</strong></h1>
                            <p>I dati raccolti vengono utilizzati esclusivamente per rispondere ai messaggi inviati tramite
                                la sezione di contatto. <strong>I dati non verranno utilizzati per finalità di marketing, newsletter o profilazione.</strong></p>
                        </li><br /><br />
                        {/* punto 3 */}
                        <li>
                            <h1 className="text-xl"><strong>Base giuridica del trattamento</strong></h1>
                            <p>Il trattamento dei dati avviene sulla base dell’interesse legittimo del Dott. Roberto Chessa di
                                rispondere alle richieste dei pazienti. Compilando la sezione di contatto e inviando il messaggio, l’utente fornisce
                                volontariamente i propri dati per essere ricontattato.
                            </p>
                        </li><br /><br />
                        {/* punto 4 */}
                        <li>
                            <h1 className="text-xl"><strong> Modalità di conservazione e sicurezza dei dat</strong></h1>
                            <p>I dati trasmessi attraverso il form di contatto <strong>non vengono archiviati su server o database</strong>, ma
                                restano esclusivamente nella casella di posta elettronica <strong>dott.robertochessa@gmail.com</strong>. Non si utilizzano
                                servizi di terze parti per la gestione dei dati raccolti.</p>
                        </li><br /><br />
                        {/* punto 5 */}
                        <li>
                            <h1 className="text-xl"><strong>Condivisione dei dati con terze parti</strong></h1>
                            <p>I dati raccolti non verranno condivisi con terze parti, salvo richieste specifiche delle autorità
                                competenti nei casi previsti dalla legge.</p>
                        </li><br /><br />
                        {/* punto 6 */}
                        <li>
                            <h1 className="text-xl"><strong>Diritti del paziente
                            </strong></h1>
                            <p>Dal momento che i dati non vengono archiviati o conservati su un server, non è prevista la possibilità
                                per l’utente di richiedere la modifica o la cancellazione dei propri dati dopo l’invio del messaggio.
                                Tuttavia, per qualsiasi richiesta o chiarimento in merito alla privacy, l’utente può contattare il Dott. Roberto Chessa
                                all’indirizzo <strong>dott.robertochessa@gmail.com</strong>.
                            </p>
                        </li><br /><br />
                        {/* punto 7 */}
                        <li>
                            <h1 className="text-xl"><strong>Cookie e strumenti di tracciamento</strong></h1>
                            <p>Questo sito <strong>non utilizza cookie di profilazione, pubblicitari o strumenti di tracciamento</strong> (come
                                Google Analytics o Facebook Pixel).</p>
                        </li><br /><br />
                        {/* punto 8 */}
                        <li>
                            <h1 className="text-xl"><strong>Modifiche alla presente informativa</strong></h1>
                            <p>Il Dott. Roberto Chessa si riserva il diritto di modificare la presente informativa sulla privacy in
                                qualsiasi momento. Le eventuali modifiche saranno pubblicate su questa pagina con la data di
                                aggiornamento.</p>
                        </li>
                    </ol><br /><br />
                    <h1 className="text-xl"><strong>Contatti</strong></h1>
                    <p>Per qualsiasi domanda relativa alla presente informativa sulla privacy, puoi contattarmi all’indirizzo email: <strong>info@clinicachessa.it</strong></p>
                </div>
                <div className="flex  items-center">
                    <input required id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-(--dark-theme)">Accetto l' <button onClick={toggleTerms} href="#" className="text-blue-600 dark:text-blue-500 underline hover:cursor-pointer">informativa sulla privacy</button>.</label>
                </div>
                <button
                    type="submit"
                    className="max-w-100 mx-auto bg-(--dark-theme) text-white text-2xl px-8 py-8  rounded-full w-full hover:bg-(--theme) transition"
                >
                    Invia Messaggio
                </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-30 text-center gap-20">

                <div>
                    <h2 className="text-3xl  mb-5 font-bold text-(--dark-theme)">Hai bisogno di supporto tecnico?</h2>
                    <p className="text-2xl text-(--theme) underline">support@clinicachessa.it</p>
                </div>

                <div>
                    <h2 className="text-3xl mb-5 font-bold text-(--dark-theme)">Vuoi lavorare con me? Manda il tuo CV</h2>
                    <p className="text-2xl text-(--theme) underline">careers@clinicachessa.it</p>
                </div>
            </div>


            {/* Social */}

            <div id="contact-icons-wrapper" className=" pb-50 flex text-6xl max-w-100 justify-between mt-40 text-(--dark-theme) mx-auto" >
                <a href=""><i className="project-social fa-brands fa-square-facebook"></i></a>
                <a href=""><i className="project-social fa-brands fa-square-instagram"></i></a>
                <a href=""><i className="project-social fa-brands fa-linkedin"></i></a>
            </div>
        </section>


    );
}