import React from "react";

import bannersJson from "../content/banners.json" assert { type: "json" };

let totalBanners = 0;

export const itemsContent = bannersJson.children
  .filter((banner) => banner.name != ".DS_Store")
  .map((banner) => {
    return {
      country: banner.name,
      categories:
        banner.children &&
        banner.children
          .filter((banner) => banner.name != ".DS_Store")
          .map((category) => {
            return {
              name: category.name,
              banners: category.children
                ?.filter((banner) => banner.name != ".DS_Store")
                .map((item) => {
                  totalBanners++;
                  return {
                    name: item.name,
                    path: `${item.path.replace("public/", "")}/index.html`,
                    width: item.name.split("x")[0],
                    height: item.name.split("x")[1],
                  };
                }),
            };
          }),
    };
  });

export const ProjectInfos = () => {
  return (
    <div className="projectInfos">
      <strong>Agência:</strong> Propeg <br />
      <strong>Cliente:</strong> Embratur <br />
      <strong>Campanha:</strong> Europa 2022 <br />
      <strong>Data:</strong> outubro/2022 <br />
    </div>
  );
};
