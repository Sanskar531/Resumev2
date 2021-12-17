import Nav from "./Components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import info from "./Content.js";

function App() {
  let currPath = window.location.pathname;
  currPath = currPath.slice(1);
  currPath = currPath.charAt(0).toUpperCase() + currPath.slice(1);
  return (
    <div className="App">
      <Nav />
      <p className="location"> &gt;{currPath === "" ? "Home" : currPath}</p>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home content={info.homepageInfo.content} />}
          />
          <Route path="/skills" element={<Skills />} />
          <Route
            path="/projects"
            element={<Projects content={info.ProjectInfo.content} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
