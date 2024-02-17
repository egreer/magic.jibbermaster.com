import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route
        path="/archenemy"
        exact
        render={(props) => (
          <GameProvider prefix="archenemy">
            <DeckProvider prefix="archenemy">
              <Archenemy {...props} />
            </DeckProvider>
          </GameProvider>
        )}
      />
      <Route
        path="/planechase"
        exact
        render={(props) => (
          <GameProvider prefix="planechase">
            <DeckProvider prefix="planechase">
              <Planechase {...props} />
            </DeckProvider>
          </GameProvider>
        )}
      />
      <Route path="/syb" exact render={(props) => <SYB {...props} />} />
      <Route path="/formats" exact render={(props) => <Formats {...props} />} />
      <Route
        path="/attractions"
        exact
        render={(props) => <Attractions {...props} />}
      />
      <Route
        path="/contraptions"
        exact
        render={(props) => <Contraptions {...props} />}
      />
      <Route
        path="/day-night"
        exact
        render={({ props }) => <DayNight {...props} />}
      />
      <Route path="/slivers" exact render={(props) => <Slivers {...props} />} />
      <Route
        path="/vanguard"
        exact
        render={(props) => <Vanguard {...props} />}
      />
      <Route
        path="/hike"
        exact
        render={(props) => (
          <GameProvider prefix="hikemode">
            <DeckProvider prefix="hikemode">
              <Hike {...props} />
            </DeckProvider>
          </GameProvider>
        )}
      />
      <Route path="/debug" exact render={(props) => <DebugPage {...props} />} />
    </Switch>
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
