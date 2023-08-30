import "./cart.scss"
import { ButtonCommon, ButtonLink } from "@/components/buttons/buttons"
import { useState } from "react";

const Cart: React.FC = () => {
  // const product = props.product;
  const [isFormDisplay, setFormDisplay] = useState(false);

  function showForm() {
    setFormDisplay(true);
  }

  return <section className="cart">
    <div className="cart__decore">
      <div className="cart__decore_bg-left"></div>
      <div className="cart__decore_bg-right"></div>
      <div className="cart__decore_garlic"></div>
      <div className="cart__decore_strawberries"></div>
      <h1 className="cart__heading">Cart</h1>
    </div>
    <div className="cart__wrap">
      {isFormDisplay && <div>SHOW FORM</div>}
      {isFormDisplay && <ButtonCommon className="cart__btn-confirm" text="Confirm" href="#" />}
      {!isFormDisplay && <ButtonLink className="cart__btn-order" text="To order" onClick={showForm} href="/completedOrder" />}
    </div>
  </section>
}

export default Cart;