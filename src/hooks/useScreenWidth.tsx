import React, { useState, useEffect, useMemo, useContext } from "react";

const isWindow = typeof window !== "undefined";
const getRawDesktopBreakpoint = () =>
  isWindow
    ? Number.parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--breakpoint-laptop",
        ),
      )
    : null;
const getDesktopBreakpoint = () => {
  const rawDesktopBreakpoint = getRawDesktopBreakpoint();
  return rawDesktopBreakpoint !== null && !isNaN(rawDesktopBreakpoint)
    ? rawDesktopBreakpoint
    : 1440;
};
const getIsDesktop = (width: number | undefined) => {
  const desktopBreakpoint = getDesktopBreakpoint();
  return width && desktopBreakpoint ? width >= desktopBreakpoint : undefined;
};

export interface IScreenWidth {
  windowWidth?: number;
  isDesktop?: boolean;
}

export default function useScreenWidth(): IScreenWidth {
  const getWidth = (): number | undefined =>
    isWindow ? window.innerWidth : undefined;
  const [windowWidth, setWindowWidth] = useState<number | undefined>(
    getWidth(),
  );
  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (isWindow) {
      const resize = () => {
        const width = getWidth();
        setWindowWidth(width);
        setIsDesktop(getIsDesktop(width));
      };
      resize();
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }
  }, []);

  return useMemo(() => ({ windowWidth, isDesktop }), [windowWidth, isDesktop]);
}

export const IsDesktopContext = React.createContext<boolean | undefined>(
  undefined,
);

export const useIsDesktopContext = () => useContext(IsDesktopContext);
