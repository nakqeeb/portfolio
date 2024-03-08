import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./switch-mode-button.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

const SwitchModeButton: FC<{onClick: any, checked: boolean}> = ({onClick, checked}) => {
    return <div className="switch-container">
     <input type="checkbox" id="switch" onClick={onClick} checked={checked} />
     <label htmlFor="switch">
        <FontAwesomeIcon className="fa-sun" icon={faSun} />
        <FontAwesomeIcon className="fa-moon" icon={faMoon} />
        <span className="ball"></span>
     </label>
  </div>
};

export default SwitchModeButton;