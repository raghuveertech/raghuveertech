import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Skillset from "./Skillset";
import RecentWork from "./RecentWork";
import Contact from "./Contact";

const ReactRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about-me" element={<About />}></Route>
      <Route path="/my-skills" element={<Skillset />}></Route>
      <Route path="/my-recent-work" element={<RecentWork />}></Route>
      <Route path="/contact-me" element={<Contact />}></Route>
    </Routes>
  );
};

export default ReactRouter;
