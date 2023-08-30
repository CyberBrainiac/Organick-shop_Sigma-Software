import "./cart.scss"
import { Button } from "@/components/buttons/buttons"
import { useCount } from "@/components/contexts/CounterProvider";
import { Link } from "react-router-dom";

const CartNav: React.FC = () => {
	const { countProd } = useCount()

	return(
		<Link to={"/cart"} >
			<div className="cartNav">
				<Button className="cartNav__btn" text="" />
				<p className="cartNav__name">Cart {" "}
					<span style={{color: (countProd > 0) ? "#FF0404" : "#274C5B"}}>
						({countProd})
					</span>
				</p>
			</div>
		</Link>
	)
}

export default CartNav;
