import { FC } from "react";
import "./testimonial-card.css";

const TestimonialCard: FC<{
  testimonialImage: string;
  comment: string;
  testimonialName: string;
  companyName: string;
}> = ({ testimonialImage, comment, testimonialName, companyName }) => {
  return (
    <div className="testimonial-card">
      <div className="user-image">
        <img src={testimonialImage} alt="Testimonial" />
      </div>
      <p className="body2 comment">{comment}</p>
      <p className="subtitle-semibold testimonial-name">{testimonialName}</p>
      <p className="body3 company-name">{companyName}</p>
    </div>
  );
};

export default TestimonialCard;
