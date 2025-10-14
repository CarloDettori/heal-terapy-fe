


import { GlobalProvider } from "./context/GlobalContext.jsx";
import DefaultLayout from "../src/layout/DefaultLayout.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import ContentPage from "./pages/ContentPage.jsx";
import ReservePage from "./pages/ReservePage.jsx";



function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/reserve" element={<ReservePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;