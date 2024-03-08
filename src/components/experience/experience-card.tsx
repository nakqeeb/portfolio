import { FC } from "react";
import "./experience-card.css";

const ExperienceCard: FC<{
  companyName: string;
  roleName: string;
  moreInfo: string[];
  date: string;
}> = ({ companyName, roleName, moreInfo, date }) => {
  return (
    <div className="experience-card">
      <div className="company-name">
        <p className="heading-h3">{companyName}</p>
      </div>
      <div className="exp-info">
        <p className="subtitle-semibold">{roleName}</p>
        <ul className="body2">
          {moreInfo.map((info: string) => (
            <li>{info}</li>
          ))}
        </ul>
      </div>
      <div className="date">
        <p className="body2">{date}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
