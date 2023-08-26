import "./testimonials.scss"

function Testimonials() {
  return(
    <div className="testimonials">
      <div className="testimonials_decore-left"></div>
      <div className="testimonials_decore-right"></div>
      <div className="testimonials__content">
        <p className="testimonials__tegline">Testimonial</p>
        <h2>What Our Customer Saying?</h2>
        <div className="testimonials__slider-wrap"></div>

        <div className="testimonials__benefits-wrap">
          <div className="testimonials__benefit">
            <h2>100%</h2>
            <p className="testimonials__benefit-description">Organic</p>
          </div>
          <div className="testimonials__benefit">
            <h2>285</h2>
            <p className="testimonials__benefit-description">Active Product</p>
          </div>
          <div className="testimonials__benefit">
            <h2>350+</h2>
            <p className="testimonials__benefit-description">Organic Orchads</p>
          </div>
          <div className="testimonials__benefit">
            <h2>25+</h2>
            <p className="testimonials__benefit-description">Years of Farming</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;