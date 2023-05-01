import React, { useEffect } from "react";

export const GoTop = () => {
  useEffect(() => {
    const btn = document.querySelector(".goTop");
    btn?.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btn?.classList.add("show");
      } else {
        btn?.classList.remove("show");
      }
    });
  }, []);

  return <div className="goTop">Subir</div>;
};
