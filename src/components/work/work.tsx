import HeadingTitle from "../../shared/components/heading-title";
import "./work.css";
import work_1 from "../../assets/my-work/work_1.png";
import WorkCard from "./work-card";

const Work = () => {
  return (
    <div className="work" id="work">
      <HeadingTitle
        title="Work"
        description="Some of the noteworthy projects I have built:"
      />
      <div className="container">
        <WorkCard
          projectImage={work_1}
          projectTitle="Fiskil"
          projectInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
          projectTechs={[
            "React",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Tailwindcss",
            "Figma",
            "Cypress",
            "Storybook",
            "Git",
          ]}
          projectPreviewLink="#"
        />
        <WorkCard
          projectImage={work_1}
          projectTitle="Fiskil"
          projectInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
          projectTechs={[
            "React",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Tailwindcss",
            "Figma",
            "Cypress",
            "Storybook",
            "Git",
          ]}
          projectPreviewLink="#"
          isRTL={true}
        />
        <WorkCard
          projectImage={work_1}
          projectTitle="Fiskil"
          projectInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
          projectTechs={[
            "React",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Tailwindcss",
            "Figma",
            "Cypress",
            "Storybook",
            "Git",
          ]}
          projectPreviewLink="#"
        />
        <WorkCard
          projectImage={work_1}
          projectTitle="Fiskil"
          projectInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
          projectTechs={[
            "React",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Tailwindcss",
            "Figma",
            "Cypress",
            "Storybook",
            "Git",
          ]}
          projectPreviewLink="#"
          isRTL={true}
        />
      </div>
    </div>
  );
};

export default Work;
