import store from "store";
import defaultPlugin from "store/plugins/defaults";

store.addPlugin(defaultPlugin);

const SETTINGS = {
  "setting-disclaimerDismissed": false,
  "setting-displayText": false,
  "setting-displayImages": true,
  "setting-devTools": false,
  "setting-displayGatherer": false
};
store.defaults(SETTINGS);

export const getSetting = setting => {
  return store.get(`setting-${setting}`);
};

export const setSetting = (setting, value) => {
  return store.set(`setting-${setting}`, value);
};

export const toggleSetting = setting => {
  const value = getSetting(setting);
  return setSetting(setting, !value);
};
