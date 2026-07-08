import { createContext, useState } from "react"
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [showbar, setShowbar] = useState(false)
    const [sidebarLinks, setSidebarLinks] = useState([]);
    const [disintegrated, setDisintegrated] = useState(false);
    const [hidden, setHidden] = useState(false);



    /*async function fetchData(url) {
        const response = await fetch(url)
        const dati = await response.json()
        return dati
    }

    useEffect(() => {
        fetchData("")
            .then(obj => setTrips(obj))
            .catch(error => console.error(error))
            .finally(console.log("fetch end"))
    }, [])*/

    return (
        <GlobalContext.Provider value={{ showbar, setShowbar, sidebarLinks, setSidebarLinks, disintegrated, setDisintegrated, hidden, setHidden }}>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalProvider }