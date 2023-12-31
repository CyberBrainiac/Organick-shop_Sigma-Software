import "./nav.scss"
import { ButtonCommon } from "@/components/buttons/buttons"

function Nav() {
	return(
		<div className="nav">
			<ButtonCommon href="/" text="Home" />
			<ButtonCommon href="/about" text="About" />
			<ButtonCommon href="/pages" text="Pages" />
			<ButtonCommon href="/products" text="Shop" />
			<ButtonCommon href="/projects" text="Projects" />
			<ButtonCommon href="/news" text="News" />
		</div>
	)
}

export default Nav;