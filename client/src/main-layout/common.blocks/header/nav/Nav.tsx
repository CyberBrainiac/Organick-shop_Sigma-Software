import "./nav.scss"
import { ButtonNav } from "@/components/buttons/buttons"

function Nav() {
	return(
		<div className="nav">
			<ButtonNav text="Home" href="/" className="nav__btn" id="nav__home" />
			<ButtonNav text="About" href="/about" className="nav__btn" id="nav__about" />
			<ButtonNav text="Pages" href="/pages" className="nav__btn" id="nav__pages" />
			<ButtonNav text="Shop" href="/shop" className="nav__btn" id="nav__shop" />
			<ButtonNav text="Projects" href="/projects" className="nav__btn" id="nav__projects" />
			<ButtonNav text="News" href="/news" className="nav__btn" id="nav__news" />
		</div>
	)
}

export default Nav;