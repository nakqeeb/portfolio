import { FC, useEffect, useRef, useState } from "react";
import "./header.css";
import SwitchModeButton from "./switch-mode-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";

const Header: FC<{ onClick: any; checked: boolean }> = ({
  onClick,
  checked,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef<any>(null);
  const buttonRef = useRef<any>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleOutsideClick = (event: any) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <p>{"<Nakqeeb />"}</p>
        </div>
        <div className="navlinks-and-buttons">
          <div className="navlinks">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contacts">Contact</a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <SwitchModeButton onClick={onClick} checked={checked} />
            <button>Download CV</button>
          </div>
        </div>
        <div className="menu" ref={menuRef}>
          {!isSidebarOpen && <FontAwesomeIcon
            ref={buttonRef}
            onClick={toggleSidebar}
            className="menu-icon"
            icon={faBars}
          />}
          {isSidebarOpen && <FontAwesomeIcon
            ref={buttonRef}
            onClick={toggleSidebar}
            className="menu-icon"
            icon={faXmark}
          />}
          {isSidebarOpen && (
            <motion.div
              className="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="sidebar-links">
                <ul className="body2-medium">
                  <li>
                    <a href="#about" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>About</a>
                  </li>
                  <li>
                    <a href="#skills" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Skills</a>
                  </li>
                  <li>
                    <a href="#experience" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Experience</a>
                  </li>
                  <li>
                    <a href="#work" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Work</a>
                  </li>
                  <li>
                    <a href="#testimonials" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Testimonials</a>
                  </li>
                  <li>
                    <a href="#contacts" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Contact</a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-btn">
                <div className="theme-btn">
                  <p>Switch Theme</p>
                  <SwitchModeButton onClick={onClick} checked={checked} />
                </div>
                <button>Download CV</button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
