import { useEffect } from "react";

export default function CookieBot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://consent.cookiebot.com/55b34c7d-edcf-48ab-9699-f43dc595ad2b/cd.js";
    script.id = "Cookiebot";
    script.setAttribute("data-cbid", "55b34c7d-edcf-48ab-9699-f43dc595ad2b");
    script.setAttribute("data-blockingmode", "auto");
    script.setAttribute("data-cookieconsent", "ignore");
    document.body.appendChild(script);
  }, []);

  return null;
}
