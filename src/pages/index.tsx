import { AboutUsArea, Header, Main } from "components";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <AboutUsArea />
      </Main>
    </>
  );
};

export default Home;
