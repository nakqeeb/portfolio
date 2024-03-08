import { FC } from "react";
import "./heading-title.css";

const HeadingTitle: FC<{ title: string; description?: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="heading-title">
      <p className="body3-medium title">{title}</p>
      <p className="subtitle-normal description">{description}</p>
    </div>
  );
};

export default HeadingTitle;
