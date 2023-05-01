import type { NextPage } from "next";
import { GoTop } from "../components/GoTop";
import { ShowBanners } from "../components/ShowBanners";
import { itemsContent } from "../content/contents";

const Home: NextPage = () => {
  return (
    <>
      <div id="luxy">
        <ShowBanners items={itemsContent} />
      </div>
      <GoTop />
    </>
  );
};

export default Home;
