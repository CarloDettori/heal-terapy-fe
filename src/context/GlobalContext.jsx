import { createContext, useState } from "react"
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [showbar, setShowbar] = useState(false)
    const [sidebarLinks, setSidebarLinks] = useState([]);
    const [disintegrated, setDisintegrated] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [navMainLinks, setNavMainLinks] = useState([]);
    const [navSubLinks, setNavSubLinks] = useState([]);



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
        <GlobalContext.Provider value={{ navMainLinks, setNavMainLinks, navSubLinks, setNavSubLinks, showbar, setShowbar, sidebarLinks, setSidebarLinks, disintegrated, setDisintegrated, hidden, setHidden }}>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalProvider }