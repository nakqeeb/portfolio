import HeadingTitle from "../../shared/components/heading-title";
import "./work.css";
import work_1 from "../../assets/my-work/work_1.png";
import html_1 from "../../assets/my-work/html_1.png";
import html_2 from "../../assets/my-work/html_2.png";
import html_3 from "../../assets/my-work/html_3.png";
import portfolio from "../../assets/my-work/portfolio.png";
import landing_page from "../../assets/my-work/landing-page.png";
import WorkCard from "./work-card";

const Work = () => {
  return (
    <div className="work" id="work">
      <HeadingTitle
        title="Work"
        description="Some of the noteworthy projects I have built (My frontend work only)"
      />
      <div className="container">
        <WorkCard
          projectImage={portfolio}
          projectTitle="Portfolio"
          projectInfo="Interactive Portfolio Application with ReactJS and Light/Dark Mode
          This project showcases your skills in modern web
          development and design by building a personal portfolio
          website."
          projectTechs={[
            "React",
            "Typescript",
            "CSS",
            "Figma",
            "Git",
          ]}
          projectPreviewLink="https://nakqeeb.github.io/portfolio/"
        />
        <WorkCard
          projectImage={work_1}
          projectTitle="Candleaf"
          projectInfo="Frontend Application with ReactJS, Redux Toolkit, and
          Vanilla CSS
          This frontend application builds upon the previous
          description by showcasing additional functionalities
          and advanced development practices."
          projectTechs={[
            "React",
            "Typescript",
            'Redux.js',
            "CSS",
            "Figma",
            "Git",
          ]}
          projectPreviewLink="https://nakqeeb.github.io/candleaf/"
          isRTL={true}
        />
        <WorkCard
          projectImage={landing_page}
          projectTitle="LandingPage UI"
          projectInfo="Developed a responsive landing page using React.js, inspired by a Figma design. Utilized CSS animations to enhance visual appeal and user experience."
          projectTechs={[
            "React",
            "Typescript",
            "CSS",
            "Animation",
            "Figma",
            "Git",
          ]}
          projectPreviewLink="https://nakqeeb.github.io/landing-page/"
        />
        <WorkCard
          projectImage={html_1}
          projectTitle="HTML_template_1"
          projectInfo="Hand­Crafted Websites using HTML & Vanilla CSS with a focus on clean code structure, user
          experience, and responsiveness for optimal performance
          across devices."
          projectTechs={[
            "HTML",
            "CSS",
            "Git",
          ]}
          projectPreviewLink="https://nakqeeb.github.io/HTML_Template_1/"
        />
        <WorkCard
          projectImage={html_2}
          projectTitle="HTML_template_2"
          projectInfo="Hand­Crafted Websites using HTML & Vanilla CSS with a focus on clean code structure, user
          experience, and responsiveness for optimal performance
          across devices."
          projectTechs={[
            "HTML",
            "CSS",
            "Git",
          ]}
          projectPreviewLink="https://nakqeeb.github.io/HTML_Template_2/"
          isRTL={true}
        />
        <WorkCard
          projectImage={html_3}
          projectTitle="HTML_template_3"
          projectInfo="Hand­Crafted Websites using HTML & Vanilla CSS with a focus on clean code structure, user
          experience, and responsiveness for optimal performance
          across devices."
          projectTechs={[
            "HTML",
            "CSS",
            "Git",
          ]}
          projectPreviewLink="https://nakqeeb.github.io/HTML_Template_3/"
        />
      </div>
    </div>
  );
};

export default Work;
