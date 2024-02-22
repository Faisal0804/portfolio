import TopBanner from "./components/TopBanner/TopBanner";

import TopNav from "./components/TopNav/TopNav";
import About from "./components/Aboout/about";

import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import TopPage from "./Pages/TopPage/TopPage";

import AboutPage from "./Pages/AboutPage/AboutPage";
import SkillPage from "./Pages/SkillPage/SkillPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import WorkPage from "./Pages/WorkPage/WorkPage";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";




function App() {
  return (
    <BrowserRouter>
     <AppRoute/>
  </BrowserRouter>
  );
}

export default App;
