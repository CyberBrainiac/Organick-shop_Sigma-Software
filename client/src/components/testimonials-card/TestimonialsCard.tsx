import "./testimonialsCard.scss"
import { Testimonial } from "@/types/main-types"
import createStarsList from "../stars/createStarsList";

const TestimonialsCard: React.FC<Testimonial> = ({avatarUrl, stars, testimonial, name, role}) => {
  const starsList = createStarsList(stars);

  return(
    <div className="testimonialCard">
      <div className="testimonialCard__avatar">
        <img src={avatarUrl} alt={`${role} ${name} avatar`} />
      </div>
      <div className="testimonialCard__stars">
        {starsList}
      </div>
      <p className="testimonialCard__testimonial">{testimonial}</p>
      <h6 className="testimonialCard__name">{name}</h6>
      <p className="testimonialCard__role">{role}</p>
    </div>
  );
}

export default TestimonialsCard;