import {
  AboutUsArea,
  FeedbacksArea,
  Footer,
  Header,
  JobsArea,
  Main,
} from "components";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <AboutUsArea />
        <JobsArea />
        <FeedbacksArea />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
