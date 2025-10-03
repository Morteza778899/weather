import React, { useMemo } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { useLanguage } from "../context/language";

interface RTLProviderProps {
  children: React.ReactNode;
}

export const RTLProvider: React.FC<RTLProviderProps> = ({ children }) => {
  const { language } = useLanguage();
  const isRTL = language === "fa";

  const cache = useMemo(
    () =>
      createCache({
        key: "mui",
        stylisPlugins: isRTL ? [prefixer, rtlPlugin] : [prefixer],
      }),
    [isRTL]
  );

  return (
    <CacheProvider value={cache}>
      <div style={{ width: "100%" }}>{children}</div>
    </CacheProvider>
  );
};
