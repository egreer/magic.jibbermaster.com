import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";

import { Archenemy } from "./pages/archenemy";
import { Formats } from "./pages/formats";
import { Home } from "./pages/home";
import { Planechase } from "./pages/planechase";
import { SYB } from "./pages/syb";

import { Disclaimer } from "./components/Disclaimer";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { FooterProvider } from "./hooks/useFooter";
import { SettingsProvider } from "./hooks/useSettings";
import { DeckProvider } from "./mtg/DeckContext";
import { GameProvider } from "./mtg/GameContext";
import { Attractions } from "./pages/attractions/Attraction";
import { Contraptions } from "./pages/contraptions/Contraptions";
import { DayNight } from "./pages/day-night/DayNight";
import { DebugPage } from "./pages/DebugPage";
import { Hike } from "./pages/hike";
import { Slivers } from "./pages/slivers/Slivers";
import { Vanguard } from "./pages/vanguard/Vanguard";

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <SettingsProvider>
          <FooterProvider>{children}</FooterProvider>
        </SettingsProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

const Main = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route
        path="/archenemy"
        exact
        element={
          <GameProvider prefix="archenemy">
            <DeckProvider prefix="archenemy">
              <Archenemy />
            </DeckProvider>
          </GameProvider>
        }
      />
      <Route
        path="/planechase"
        exact
        element={
          <GameProvider prefix="planechase">
            <DeckProvider prefix="planechase">
              <Planechase />
            </DeckProvider>
          </GameProvider>
        }
      />
      <Route path="/syb" exact element={<SYB />} />
      <Route path="/formats" exact element={<Formats />} />
      <Route path="/attractions" exact element={<Attractions />} />
      <Route path="/contraptions" exact element={<Contraptions />} />
      <Route path="/day-night" exact element={<DayNight />} />
      <Route path="/slivers" exact element={<Slivers />} />
      <Route path="/vanguard" exact element={<Vanguard />} />
      <Route
        path="/hike"
        exact
        element={
          <GameProvider prefix="hikemode">
            <DeckProvider prefix="hikemode">
              <Hike />
            </DeckProvider>
          </GameProvider>
        }
      />
      <Route path="/debug" exact element={<DebugPage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Providers>
      <Helmet titleTemplate="%s - Jibbermaster" />
      <Navigation />
      <div className="app text-light bg-dark col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
        <Main />
        <Disclaimer />
        <Footer />
      </div>
    </Providers>
  );
};

export default App;
