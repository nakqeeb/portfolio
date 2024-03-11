import HeadingTitle from "../../shared/components/heading-title";
import "./work.css";
import work_1 from "../../assets/my-work/work_1.png";
import html_1 from "../../assets/my-work/html_1.png";
import html_2 from "../../assets/my-work/html_2.png";
import html_3 from "../../assets/my-work/html_3.png";
import portfolio from "../../assets/my-work/portfolio.png";
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
          projectPreviewLink="https://portfolio-4o96gdtmq-nakqeeb.vercel.app/"
        />
        <WorkCard
          projectImage={work_1}
          projectTitle="Candleaf"
          projectInfo="Frontend Application with ReactJS, Redux Toolkit, and
          Vanilla CSS
          This frontend application builds upon the previous
          description by showcasing additional functionalities
          and advanced development practices. You can find the project source code in my CV."
          projectTechs={[
            "React",
            "Typescript",
            "CSS",
            "Figma",
            "Git",
          ]}
          projectPreviewLink="https://nakqeeb.github.io/candleaf/"
          isRTL={true}
        />
        <WorkCard
          projectImage={html_1}
          projectTitle="HTML_template_1"
          projectInfo="Hand­Crafted Websites using HTML & Vanilla CSS with a focus on clean code structure, user
          experience, and responsiveness for optimal performance
          across devices. You can find the project source code in my CV."
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
          across devices. You can find the project source code in my CV."
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
          across devices. You can find the project source code in my CV."
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
