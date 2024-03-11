import HeadingTitle from "../../shared/components/heading-title";
import ExperienceCard from "./experience-card";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <HeadingTitle
        title="Experience"
        description="Here is a quick summary of my most recent experiences:"
      />
      <div className="container">
        <ExperienceCard
          companyName="Neumtech"
          roleName="Web Developer"
          moreInfo={[
            "Worked on Rakaya project for monitoring food quality.",
            "Developed and implemented user­friendly and responsive web applications using React.js.",
            "Collaborated with cross­functional teams to define project requirements and deliver high­quality software solutions.",
            "Conducted code reviews and ensured adherence to coding standards and best practices.",
          ]}
          date="Jan 2023 - Jun 2023"
        />
        {/* <ExperienceCard
          companyName="Neumtech"
          roleName="Web Developer"
          moreInfo={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ]}
          date="Jan 2023 - Jun 2023"
        />
        <ExperienceCard
          companyName="Neumtech"
          roleName="Web Developer"
          moreInfo={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ]}
          date="Jan 2023 - Jun 2023"
        /> */}
      </div>
    </div>
  );
};

export default Experience;
