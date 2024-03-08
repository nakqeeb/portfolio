import HeadingTitle from "../../shared/components/heading-title";
import "./testimonials.css";
import user_icon from "../../assets/icons/icon-user.png";
import TestimonialCard from "./testimonial-card";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <HeadingTitle
        title="Testimonials"
        description="Nice things people have said about me:"
      />
      <div className="container">
        <TestimonialCard
          testimonialImage={user_icon}
          comment="“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”"
          testimonialName="John Doe"
          companyName={"Founder - xyz.com"}
        />
        <TestimonialCard
          testimonialImage={user_icon}
          comment="“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”"
          testimonialName="John Doe"
          companyName={"Founder - abc.com"}
        />
        <TestimonialCard
          testimonialImage={user_icon}
          comment="“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”"
          testimonialName="John Doe"
          companyName={"Freelancer"}
        />
      </div>
    </div>
  );
};

export default Testimonials;
