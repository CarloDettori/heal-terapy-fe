


import { GlobalProvider } from "./context/GlobalContext.jsx";
import DefaultLayout from "../src/layout/DefaultLayout.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import UsPage from "./pages/UsPage.jsx";
import ReservePage from "./pages/ReservePage.jsx";
import PaymentSuccesPage from "./pages/booking/PaymentSuccesPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import OzonoterapiaPage from "./pages/infoPages/OzonoterapiaPage.jsx"
import ScramblerTreapyPage from "./pages/infoPages/ScramblerPage.jsx"
import AestheticPage from "./pages/infoPages/AestheticPage.jsx"
import RigenerazioneArticolarePage from "./pages/infoPages/RigenerazioneArticolarePage.jsx"
import FibromialgiaPage from "./pages/infoPages/FibromialgiaPage.jsx"
import TratMininvasiviPage from "./pages/infoPages/TratMininvasiviPage.jsx"
import ScramblerStoryPage from "./pages/infoPages/scramblerPages/ScramblerStoryPage.jsx";
import ScramblerPeoplePage from "./pages/infoPages/scramblerPages/ScramblerPeoplePage.jsx";
import ScramblerMythsPage from "./pages/infoPages/scramblerPages/ScramblerMythPage.jsx";
import ScramblerAskPage from "./pages/infoPages/scramblerPages/ScramblerAskPage.jsx";
import ScramblerTutorialPage from "./pages/infoPages/scramblerPages/ScramblerTutorialPage.jsx";
import OzonoStoryPage from "./pages/infoPages/OzonoPages/OzonoStoryPage.jsx";
import OzonoPeoplePage from "./pages/infoPages/OzonoPages/OzonoPeoplePage.jsx";
import OzonoAskPage from "./pages/infoPages/OzonoPages/OzonoAskPage.jsx";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/us" element={<UsPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/info/1" element={<OzonoterapiaPage />} />
            <Route path="/info/1/2" element={<OzonoStoryPage />} />
            <Route path="/info/1/3" element={<OzonoPeoplePage />} />
            <Route path="/info/1/4" element={<OzonoAskPage />} />
            <Route path="/info/2" element={<OzonoterapiaPage />} />
            <Route path="/info/3" element={<AestheticPage />} />
            <Route path="/info/4" element={<ScramblerTreapyPage />} />
            <Route path="/info/4/2" element={<ScramblerStoryPage />} />
            <Route path="/info/4/3" element={<ScramblerPeoplePage />} />
            <Route path="/info/4/4" element={<ScramblerMythsPage />} />
            <Route path="/info/4/5" element={<ScramblerAskPage />} />
            <Route path="/info/4/6" element={<ScramblerTutorialPage />} />
            <Route path="/info/5" element={<FibromialgiaPage />} />
            <Route path="/info/6" element={<RigenerazioneArticolarePage />} />
            <Route path="/info/7" element={<TratMininvasiviPage />} />
            <Route path="/reserve" element={<ReservePage />} />
            <Route path="/success" element={<PaymentSuccesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;