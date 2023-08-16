import { ButtonLink } from "@/components/buttons/buttons";
import "./hero.scss"

function Hero() {
	return(
		<div className="hero">
			<div className="hero__background">
				<div className="hero__background_main-bg"></div>
				<div className="hero__background_garlic"></div>
				<div className="hero__background_half-of-leaf"></div>
				<div className="hero__background_nut"></div>
				<div className="hero__background_oak-leaf"></div>
				<div className="hero__background_small-leaf"></div>
				<div className="hero__background_strawberry"></div>
				<div className="hero__background_two-leafs"></div>
			</div>
			<div className="hero__content">
				<p className="hero__tegline">100% natural food</p>
				<h1>Choose the best<br/>healthier way<br/>of life</h1>
				<ButtonLink className="hero__btn" text="explore now" href="#" />
			</div>
		</div>
	);
}

export default Hero;