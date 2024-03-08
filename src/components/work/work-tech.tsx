import { FC } from "react";
import "./work-tech.css";

const WorkTech: FC<{ techName: string }> = ({ techName }) => {
  return (
    <div className="work-tech">
      <p className="body3-medium">{techName}</p>
    </div>
  );
};

export default WorkTech;
