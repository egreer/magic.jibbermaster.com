import { useSettings } from "../hooks/useSettings";

export const DevTools = ({ children }) => {
  const settings = useSettings();

  if (settings.devTools) {
    return (
      <div className="my-4">
        <h5 className="text-center noselect">Dev Tools</h5>
        {children}
      </div>
    );
  }

  return null;
};