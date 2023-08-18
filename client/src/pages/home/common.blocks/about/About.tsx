import { ButtonLink } from "@/components/buttons/buttons";
import "./about.scss"

function About() {{
	return(
		<div className="about">
			<div className="about__img"></div>
			<div className="about__content">
				<p className="about__tegline">about as</p>
				<h2>We Believe in Working Accredited Farmers</h2>
				<p className="about__description">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

				<div className="about__wrap">
					<div className="about__detail-img" id="about__detail-img-1"></div>
					<div className="about__detail-text">
						<h6>Organic Foods Only</h6>
						<p className="about__description">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
					</div>

					<div className="about__detail-img" id="about__detail-img-2"></div>
					<div className="about__detail-text">
						<h6>Quality Standards</h6>
						<p className="about__description">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
					</div>
				</div>
				<ButtonLink className="about__btn" text="Shop Now" href="#" />
			</div>
		</div>
	);
}}

export default About;