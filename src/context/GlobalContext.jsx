import { createContext, useState, useEffect } from "react"
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {


    const [theme, setTheme] = useState("light")


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
        <GlobalContext.Provider value={{ theme, setTheme }}>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalProvider }