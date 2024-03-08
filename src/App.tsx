import "./App.css";
import Header from "./components/header/header";
import useLocalStorage from "use-local-storage";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Work from "./components/work/work";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "./shared/hooks/useWindowDimensions";

function App() {
  const { height, width } = useWindowDimensions();
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const [isTop, setIsTop] = useState(true);
  const [position, setPsition] = useState(1);

  useEffect(() => {
    function updatePosition() {
      setPsition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  useEffect(() => {
    setIsTop(position === 0)
  }, [position]);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="app" data-theme={theme}>
      {!isTop && <FontAwesomeIcon className="scroll-btn" onClick={scrollToTop} icon={faAnglesUp} />}
      <Header onClick={switchTheme} checked={theme === "light"} />
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
