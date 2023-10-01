import { Routes, Route } from "react-router-dom";

import Intro from "./Intro";
import Skillset from "./Skillset";
import RecentWork from "./RecentWork";
import Contact from "./Contact";

const ReactRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />}></Route>
      <Route path="/skillset" element={<Skillset />}></Route>
      <Route path="/recent-work" element={<RecentWork />}></Route>
      <Route path="/contact-me" element={<Contact />}></Route>
    </Routes>
  );
};

export default ReactRouter;
