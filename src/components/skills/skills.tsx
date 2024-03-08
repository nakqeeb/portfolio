import HeadingTitle from "../../shared/components/heading-title";
import "./skills.css";
import javascript_icon from "../../assets/logos/icon-javscript.svg";
import typescript_icon from "../../assets/logos/icon-typescript.svg";
import react_icon from "../../assets/logos/icon-react.svg";
import nextjs_icon from "../../assets/logos/icon-nextjs.svg";
import nodejs_icon from "../../assets/logos/icon-nodejs.svg";
import express_icon from "../../assets/logos/icon-express.svg";
import nest_icon from "../../assets/logos/icon-nest.svg";
import socket_icon from "../../assets/logos/icon-socket.svg";
import postgresql_icon from "../../assets/logos/icon-postgresql.svg";
import mongodb_icon from "../../assets/logos/icon-mongodb.svg";
import sass_icon from "../../assets/logos/icon-sass.svg";
import tailwindcss_icon from "../../assets/logos/icon-tailwindcss.svg";
import figma_icon from "../../assets/logos/icon-figma.svg";
import cypress_icon from "../../assets/logos/icon-cypress.svg";
import storybook_icon from "../../assets/logos/icon-storybook.svg";
import git_icon from "../../assets/logos/icon-git.svg";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <HeadingTitle
        title="Skills"
        description="The skills, tools and technologies I am really good at:"
      />
      <div className="container">
        <div className="skill">
          <img src={javascript_icon} alt="" />
          <p className="body1">Javascript</p>
        </div>
        <div className="skill">
          <img src={typescript_icon} alt="" />
          <p className="body1">Typescript</p>
        </div>
        <div className="skill">
          <img src={react_icon} alt="" />
          <p className="body1">React</p>
        </div>
        <div className="skill">
          <img src={nextjs_icon} alt="" />
          <p className="body1">Next.js</p>
        </div>
        <div className="skill">
          <img src={nodejs_icon} alt="" />
          <p className="body1">Node.js</p>
        </div>
        <div className="skill">
          <img src={express_icon} alt="" />
          <p className="body1">Express.js</p>
        </div>
        <div className="skill">
          <img src={nest_icon} alt="" />
          <p className="body1">Nest.js</p>
        </div>
        <div className="skill">
          <img src={socket_icon} alt="" />
          <p className="body1">Socket.io</p>
        </div>
        <div className="skill">
          <img src={postgresql_icon} alt="" />
          <p className="body1">PostgreSQL</p>
        </div>
        <div className="skill">
          <img src={mongodb_icon} alt="" />
          <p className="body1">MongoDB</p>
        </div>
        <div className="skill">
          <img src={sass_icon} alt="" />
          <p className="body1">Sass/Scss</p>
        </div>
        <div className="skill">
          <img src={tailwindcss_icon} alt="" />
          <p className="body1">Tailwindcss</p>
        </div>
        <div className="skill">
          <img src={figma_icon} alt="" />
          <p className="body1">Figma</p>
        </div>
        <div className="skill">
          <img src={cypress_icon} alt="" />
          <p className="body1">Cypress</p>
        </div>
        <div className="skill">
          <img src={storybook_icon} alt="" />
          <p className="body1">Storybook</p>
        </div>
        <div className="skill">
          <img src={git_icon} alt="" />
          <p className="body1">Git</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
