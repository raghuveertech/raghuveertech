import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import MainNav from "./components/MainNav";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import LatestWork from "./components/sections/LatestWork";
import Resume from "./components/sections/Resume";
import "./scss/global.scss";

function App() {
  return (
    <>
      <Layout>
        <MainNav />
        <MainContent>
          <Home />
          <About />
          <Resume />
          <LatestWork />
          <Contact />
        </MainContent>
      </Layout>
    </>
  );
}

export default App;
