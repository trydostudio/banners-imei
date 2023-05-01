import React from "react";
import { IconMoon } from "./IconMoon";
import { IconSun } from "./IconSun";

export const ToggleTheme = () => {
  React.useEffect(() => {
    var toggle = document.getElementById("toggleTheme");

    var storedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    if (storedTheme)
      document.documentElement.setAttribute("data-theme", storedTheme);

    toggle!.onclick = function () {
      var currentTheme = document.documentElement.getAttribute("data-theme");
      var targetTheme = "light";

      if (currentTheme === "light") {
        targetTheme = "dark";
      }

      document.documentElement.setAttribute("data-theme", targetTheme);
      localStorage.setItem("theme", targetTheme);
    };
  }, []);

  return (
    <div id="toggleTheme" className="toggleTheme">
      <span>
        <IconMoon />
      </span>
      <span>
        <IconSun />
      </span>
    </div>
  );
};
