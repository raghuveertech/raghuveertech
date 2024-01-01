import { useRef } from "react";
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
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    resume: useRef(null),
    latestWork: useRef(null),
    contact: useRef(null),
  };
  return (
    <>
      <Layout>
        <MainNav sectionRefs={sectionRefs} />
        <MainContent>
          <div ref={sectionRefs.home}>
            <Home />
          </div>
          <div ref={sectionRefs.about}>
            <About />
          </div>
          <div ref={sectionRefs.resume}>
            <Resume />
          </div>
          <div ref={sectionRefs.latestWork}>
            <LatestWork />
          </div>
          <div ref={sectionRefs.contact}>
            <Contact />
          </div>
        </MainContent>
      </Layout>
    </>
  );
}

export default App;
