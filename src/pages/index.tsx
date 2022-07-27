import { AboutUsArea, Header, JobsArea, Main } from "components";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <AboutUsArea />
        <JobsArea />
      </Main>
    </>
  );
};

export default Home;
