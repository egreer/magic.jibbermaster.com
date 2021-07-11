import { getSetting } from "../util/settings";

export const DevTools = ({ children }) => {
  const devTools = getSetting("devTools");
  if (devTools) {
    return (
      <div className="my-4">
        <h5 className="text-center noselect">Dev Tools</h5>
        {children}
      </div>
    );
  }

  return null;
};
