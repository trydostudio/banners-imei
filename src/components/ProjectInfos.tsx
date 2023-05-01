import React from "react";

import bannersJson from "../content/banners.json" assert { type: "json" };

let totalBanners = 0;

export const itemsContent = bannersJson.children
  .filter((banner) => banner.name != ".DS_Store")
  .map((banner) => {
    return {
      category: banner.name,
      banners:
        banner.children &&
        banner.children
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
  });

export const ProjectInfos = () => {
  return (
    <div className="projectInfos">
      <strong>Agência:</strong> DEBRITO <br />
      <strong>Cliente:</strong> SEBRAE <br />
      <strong>Campanha:</strong> IMEI <br />
      <strong>Data:</strong> abril/2023 <br />
    </div>
  );
};
