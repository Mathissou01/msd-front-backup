import { useState, useEffect } from "react";

export default function useScreenWidth() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const isWindow = typeof window !== "undefined";
  const getWidth = () => (isWindow ? window.innerWidth : windowWidth);
  const getDesktopBreakpoint = () =>
    isWindow
      ? Number.parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--breakpoint-desktop",
          ),
        )
      : null;
  const resize = () => {
    const width = getWidth();
    const rawDesktopBreakpoint = getDesktopBreakpoint();
    // Set a default value of 1440 for the desktop breakpoint for Jest
    const desktopBreakpoint =
      rawDesktopBreakpoint !== null && !isNaN(rawDesktopBreakpoint)
        ? rawDesktopBreakpoint
        : 1440;
    setWindowWidth(width);
    setIsDesktop(
      width && desktopBreakpoint ? width >= desktopBreakpoint : false,
    );
  };

  useEffect(() => {
    if (isWindow) {
      resize();
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }
    //eslint-disable-next-line
  }, [isWindow]);

  return { windowWidth, isDesktop };
}
