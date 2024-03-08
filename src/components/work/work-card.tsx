import { FC } from "react";
import "./work-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WorkTech from "./work-tech";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

const WorkCard: FC<{
  projectImage: string;
  projectTitle: string;
  projectInfo: string;
  projectTechs: string[];
  projectPreviewLink: string;
  projectSourceLink?: string;
  isRTL?: boolean;
}> = ({
  projectImage,
  projectTitle,
  projectInfo,
  projectTechs,
  projectPreviewLink,
  projectSourceLink,
  isRTL = false,
}) => {
  const { height, width } = useWindowDimensions();
  return (
    <div
      className="work-card"
      style={{ flexDirection: width < 1024 ? "column" : isRTL ? "row-reverse" : "row" }}
    >
      <div className="image">
        <img src={projectImage} alt="" />
      </div>
      <div className="feature">
        <p className="subtitle-semibold work-title">{projectTitle}</p>
        <p className="body2 work-info">{projectInfo}</p>
        <div className="techs">
          {projectTechs.map((tech) => (
            <WorkTech techName={tech} />
          ))}
        </div>
        <div className="link">
          {projectPreviewLink && (
            <a href={projectPreviewLink} target="_blank">
              <FontAwesomeIcon
                className="link-icon"
                icon={faArrowUpRightFromSquare}
              />
            </a>
          )}
          {projectSourceLink && (
            <a href={projectSourceLink} target="_blank">
              <FontAwesomeIcon className="link-icon" icon={faGithub} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
