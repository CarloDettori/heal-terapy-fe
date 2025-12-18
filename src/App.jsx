


import { GlobalProvider } from "./context/GlobalContext.jsx";
import DefaultLayout from "../src/layout/DefaultLayout.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import UsPage from "./pages/UsPage.jsx";
import ReservePage from "./pages/ReservePage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import OzonoterapiaPage from "./pages/infoPages/OzonoterapiaPage.jsx"
import ScramblerTreapyPage from "./pages/infoPages/ScramblerPage.jsx"
import AestheticPage from "./pages/infoPages/AestheticPage.jsx"
import RigenerazioneArticolarePage from "./pages/infoPages/RigenerazioneArticolarePage.jsx"
import FibromialgiaPage from "./pages/infoPages/FibromialgiaPage.jsx"

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/us" element={<UsPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/info/1" element={<OzonoterapiaPage />} />
            <Route path="/info/2" element={<OzonoterapiaPage />} />
            <Route path="/info/3" element={<AestheticPage />} />
            <Route path="/info/4" element={<ScramblerTreapyPage />} />
            <Route path="/info/5" element={<FibromialgiaPage />} />
            <Route path="/info/6" element={<RigenerazioneArticolarePage />} />
            <Route path="/contact" element={<ReservePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;