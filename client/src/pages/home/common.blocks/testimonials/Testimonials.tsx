import "./testimonials.scss"
import { Testimonial } from "@/types/main-types"
import TestimonialsSlider from "@/components/slider/TestimonialsSlider"

const Testimonials: React.FC = () => {

  const testimonialData: Testimonial[] = [
    {
      id: 0, 
      avatarUrl: "src/assets/images/Sara-Taylor.png", 
      stars: 5, 
      testimonial: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      name: "Sara Taylor",
      role: "Consumer",
    },
    {
      id: 1, 
      avatarUrl: "src/assets/images/Ronald-Lake.jpg", 
      stars: 4, 
      testimonial: "Wow, I'm really impressed with this healthy food online market! This website definitely makes eating healthy much more convenient for me!",
      name: "Ronald Lake",
      role: "Consumer",
    },
    {
      id: 2, 
      avatarUrl: "src/assets/images/Marta-Levich.jpg", 
      stars: 5, 
      testimonial: "This platform is helping me make better food choices without any added stress. Thank you!",
      name: "Marta Levich",
      role: "Consumer",
    },
  ];

  return(
    <div className="testimonials">
      <div className="testimonials_decore-left"></div>
      <div className="testimonials_decore-right"></div>
      <div className="testimonials__content">
        <p className="testimonials__tegline">Testimonial</p>
        <h2>What Our Customer Saying?</h2>
        <div className="testimonials__slider-wrap">
          <TestimonialsSlider testimonials={testimonialData} />
        </div>

        <div className="testimonials__benefits-wrap">
          <div className="testimonials__benefit">
            <div className="testimonials__benefit_decore"></div>
            <div className="testimonials__benefit-wrap">
              <h2>100%</h2>
              <p className="testimonials__benefit-description">Organic</p>
            </div>
          </div>
          <div className="testimonials__benefit">
            <div className="testimonials__benefit_decore"></div>
            <div className="testimonials__benefit-wrap">
              <h2>285</h2>
              <p className="testimonials__benefit-description">Active Product</p>
            </div>
          </div>
          <div className="testimonials__benefit">
            <div className="testimonials__benefit_decore"></div>
            <div className="testimonials__benefit-wrap">
              <h2>350+</h2>
              <p className="testimonials__benefit-description">Organic Orchads</p>
            </div>
          </div>
          <div className="testimonials__benefit">
            <div className="testimonials__benefit_decore"></div>
            <div className="testimonials__benefit-wrap">
              <h2>25+</h2>
              <p className="testimonials__benefit-description">Years of Farming</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;