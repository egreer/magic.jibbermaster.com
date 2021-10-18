import React, { useCallback, useContext, useEffect } from "react";
import GitInfo from "react-git-info/macro";
import store from "store/dist/store.modern";
import { useLocalState } from "../hooks/useLocalState";

const gitInfo = GitInfo();
export const SettingsContext = React.createContext({});
export const useSettings = () => useContext(SettingsContext);

const s = (key: string) => `setting-${key}`;

export const SettingsProvider = ({ children }: { children: any }) => {
  const [disclaimerDismissed, setDisclaimerDismissed] = useLocalState(
    s("disclaimerDismissed"),
    false
  );
  const [displayText, setDisplayText] = useLocalState(s("displayText"), false);
  const [displayImages, setDisplayImages] = useLocalState(
    s("displayImages"),
    true
  );
  const [devTools, setDevTools] = useLocalState(s("devTools"), false);
  const [displayGatherer, setDisplayGatherer] = useLocalState(
    s("displayGatherer"),
    false
  );

  const getSetting = useCallback((setting: string) => {
    return store.get(s(setting));
  }, []);

  const setSetting = useCallback((setting: string, value: any) => {
    return store.set(s(setting), value);
  }, []);

  const toggleSetting = (setting: string) => {
    const value = getSetting(setting);
    return setSetting(setting, !value);
  };

  useEffect(() => {
    const versionCheck = () => {
      // const version = getSetting("version");
      // if (version && version !== gitInfo.commit.shortHash) {
      //   // TODO: Future refine this reset
      //   store.clearAll();
      // }
      setSetting("version", gitInfo.commit.shortHash);
    };

    versionCheck();
  }, [getSetting, setSetting]);

  return (
    <SettingsContext.Provider
      value={{
        getSetting,
        setSetting,
        toggleSetting,
        disclaimerDismissed,
        setDisclaimerDismissed,
        displayText,
        setDisplayText,
        displayImages,
        setDisplayImages,
        devTools,
        setDevTools,
        displayGatherer,
        setDisplayGatherer,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
