import "./testimonialsSlider.scss"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick"
import { Testimonial, TestimonialsSliderProps } from "@/types/main-types"
import TestimonialsCard from "../testimonials-card/TestimonialsCard"

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({testimonials}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((item: Testimonial) => (
        <div key={item.id} className="testimonial-item">
          <TestimonialsCard {...item} />
        </div>
      ))}
    </Slider>
  );
}

export default TestimonialsSlider;