import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./landing.css";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import my_photo from "../../assets/images/my_pic.jpeg";

const Landing = () => {
  return (
    <div className="landing" id="landing">
      <div className="container">
        <div className="info">
          <h1 className="heading-h1 ">Hi, I'm Khaled 👋</h1>
          <p className="overview body2">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="location">
            <FontAwesomeIcon className="location-icon" icon={faLocation} />
            <p className="body2">Hadhramaut, Yemen</p>
          </div>
          <div className="available">
            <div className="green-dot"></div>
            <p className="body2">Available for new projects</p>
          </div>
          <div className="social">
            <a href="https://github.com/nakqeeb" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/nakqeeb" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/nakqeeb" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="image">
          <img src={my_photo} alt="Khaled" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
