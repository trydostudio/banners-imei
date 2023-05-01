import { useEffect, useState } from "react";
import { IconFull } from "./IconFull";
import { IconRefresh } from "./IconRefresh";
import { LogoTrydo } from "./LogoTrydo";
import { ProjectInfos } from "./ProjectInfos";
import { ToggleTheme } from "./ToggleTheme";

interface Props {
  items?: {
    category?: string;
    banners?: {
      name?: string;
      path?: string;
      width?: string;
      height?: string;
    }[];
  }[];
}

export const ShowBanners = ({ items }: Props) => {
  useEffect(() => {
    const refreshBtn = document.querySelectorAll(".theBanner__refresh");

    refreshBtn.forEach((btn) => {
      const banner =
        btn.parentNode?.parentNode?.parentNode?.querySelector("iframe");
      btn.addEventListener("click", () => {
        banner!.src = banner!.src;
      });
    });
  }, []);

  return (
    <>
      <header className="theHeader">
        <div className="theHeader__container">
          <div className="theHeader__brand">
            <a
              href="https://trydo.com.br/siteTemp/"
              target="_blank"
              rel="noreferrer"
            >
              <LogoTrydo />
            </a>
          </div>

          <div className="theHeader__toggleTheme">
            <ToggleTheme />
          </div>
        </div>
      </header>

      <ProjectInfos />

      <div className="theBanners">
        {items &&
          items.map((item, index) => {
            return (
              <div className="theBanners__category" key={index + "a"}>
                <ul className="theBanners__list">
                  {item.banners &&
                    item.banners.map((banner, index) => {
                      return (
                        <li className="theBanners__item" key={index + "b"}>
                          <div className="theBanner">
                            <div
                              className="theBanner__header luxy-el"
                              data-speed-y="-2"
                              data-offset={23 * index}
                            >
                              {index + 1}
                            </div>
                            <div className="theBanner__body">
                              <iframe
                                src={banner.path}
                                width={banner.width}
                                height={banner.height}
                              ></iframe>
                            </div>
                            <div className="theBanner__footer">
                              <div className="theBanner__infos">
                                <span className="theBanner__separator">
                                  &#8226;
                                </span>
                                <span>Formato: {banner.name}</span>
                              </div>
                              <div
                                className="theBanner__controll luxy-el"
                                data-speed-y="2"
                                data-offset={-23 * index}
                              >
                                <span className="theBanner__refresh">
                                  <IconRefresh />
                                </span>
                                <span className="theBanner__full">
                                  <IconFull />
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
      </div>
    </>
  );
};
