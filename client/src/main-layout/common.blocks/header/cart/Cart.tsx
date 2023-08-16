import "./cart.scss"
import { FC } from "react";
import { ButtonCommon } from "@/components/buttons/buttons"
import { useCount } from "@/components/contexts/CounterProvider";

const Cart: FC = () => {
	const { countProd } = useCount()

	return(
		<div className="cart">
			<ButtonCommon className="cart__btn" text="" />
			<p className="cart__name">Cart ({countProd})</p>
		</div>
	)
}

export default Cart;
