import { Link } from "react-router-dom";
import "./nav.scss"
import { ButtonCommon } from "@/components/buttons/buttons"

function Nav() {
	return(
		<div className="nav">
			<Link to={"/"}>
				<ButtonCommon text="Home" />
			</Link>
			<Link to={"/sifon"}>
				<ButtonCommon text="SIFOON" />
			</Link>
			<Link to={"/about"}>
				<ButtonCommon text="About" />
			</Link>
			<Link to={"/pages"}>
				<ButtonCommon text="Pages" />
			</Link>
			<Link to={"/shop"}>
				<ButtonCommon text="Shop" />
			</Link>
			<Link to={"/projects"}>
				<ButtonCommon text="Projects" />
			</Link>
			<Link to={"/news"}>
				<ButtonCommon text="News" />
			</Link>
		</div>
	)
}

export default Nav;