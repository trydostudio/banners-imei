import bannersJson from "../content/banners.json" assert { type: "json" };

export const headerContent = {
  Agência: "Propeg",
  Cliente: "Embratur",
  Campanha: "Europa 2022",
  Data: "outubro/2022",
};

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
            return {
              name: item.name,
              path: `${item.path.replace("public/", "")}/index.html`,
              width: item.name.split("x")[0],
              height: item.name.split("x")[1],
            };
          }),
    };
  });
