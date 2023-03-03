import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ChatApp from "./pages/ChatApp/ChatApp";
import SoundDesign from "./pages/SoundDesign/SoundDesign";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/portfolio/chat-app" element={<ChatApp />} />
            <Route
              path="/portfolio/experiments"
              element={<ProjectPage projectPageName="experiments" />}
            />
            <Route
              path="/portfolio/sprints"
              element={<ProjectPage projectPageName="sprints" />}
            />
            <Route
              path="/portfolio/sound"
              element={<SoundDesign projectPageName="sound" />}
            />
            <Route
              path="/portfolio/composition"
              element={<ProjectPage projectPageName="music" />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
