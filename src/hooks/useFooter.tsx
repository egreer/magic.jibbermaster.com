import React, { useContext, useState } from "react";

export const FooterContext = React.createContext({});
export const useFooter = () => useContext(FooterContext);

export const FooterProvider = ({ children }: { children: any }) => {
  const [footerText, setFooterText] = useState(null);

  return (
    <FooterContext.Provider
      value={{
        footerText,
        setFooterText,
      }}
    >
      {children}
    </FooterContext.Provider>
  );
};
