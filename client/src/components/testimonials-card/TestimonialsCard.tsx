import "./testimonialsCard.scss"
import { Testimonial } from "@/types/main-layout-types"
import Star from "../stars/Star";

const TestimonialsCard: React.FC<Testimonial> = ({avatarUrl, stars, testimonial, name, role}) => {
  let starsList = [];
  for(let i = 0; i < stars; i++) {
    starsList.push(<Star key={i} filled={true} />);
  }
  if (starsList.length < 5) {
    const filledStars = starsList.length;

    for (let i = filledStars + 1; i <= 5; i++) {
      starsList.push(<Star key={i} filled={false} />);
    }
  }

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