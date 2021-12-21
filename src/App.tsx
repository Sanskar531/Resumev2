import Nav from "./Components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import info from "./Content.js";

function App() {
  let currPath = window.location.pathname;
  currPath = currPath.slice(10);
  currPath = currPath.charAt(0).toUpperCase() + currPath.slice(1);
  return (
    <div className="App">
      <Nav />
      <p className="location"> &gt;{currPath === "" ? "Home" : currPath}</p>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Resumev2"
            element={<Home content={info.homepageInfo.content} />}
          />
          <Route
            path="/Resumev2/skills"
            element={<Skills content={info.skillInfo.content} />}
          />
          <Route
            path="/Resumev2/projects"
            element={<Projects content={info.ProjectInfo.content} />}
          />
        </Routes>
      </BrowserRouter>
      <div id="linkedIn">
        <a href="https://www.linkedin.com/in/sanskar-gauchan-b976b81b8/">
          Find me on linkedin
        </a>
      </div>
    </div>
  );
}

export default App;
