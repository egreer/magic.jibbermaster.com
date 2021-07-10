// Hook
// https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
// https://usehooks-typescript.com/react-hook/use-local-storage
import { useEffect, useState } from "react";

export const useLocalState = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);
    if (stickyValue === null && defaultValue) {
      setValue(defaultValue);
    }
  }, [key, defaultValue]);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);
    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
