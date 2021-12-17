import Nav from "./Components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import info from "./Content.js";

function App() {
  return (
    <div className="App">
      <Nav />
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
