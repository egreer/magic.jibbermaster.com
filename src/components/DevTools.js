import { useSettings } from "../hooks/useSettings";

export const DevTools = ({ children }) => {
  const { devTools } = useSettings();

  if (devTools) {
    return (
      <div className="my-4">
        <h5 className="text-center noselect">Dev Tools</h5>
        <div className="d-grid gap-2">{children}</div>
      </div>
    );
  }

  return null;
};
