import "./cart.scss"
import { ButtonCommon, ButtonLink } from "@/components/buttons/buttons"
import CartCard from "@/components/cart-card/CartCard";
import { useProduct } from "@/components/contexts/CartProvider";
import { useState } from "react";

const Cart: React.FC = () => {
  const [isFormDisplay, setFormDisplay] = useState(false);
  const { getProducts } = useProduct();
  const isEmptyProducts = !getProducts.length;
  
  function showForm() {
    setFormDisplay(true);
  }

  function onClose() {

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
      {(isEmptyProducts) ? 
        <div className="cart_empty"><h2>Your cart is empty</h2></div> :
        getProducts.map(({idProduct, quantity, product}) => {
          return <CartCard
            key={idProduct}
            quantity={quantity}
            product={product}
            onClose={onClose}
          />
        })
      }

      {(isFormDisplay && getProducts.length) ? <div>SHOW FORM</div> : null}
      {!isFormDisplay && 
        <ButtonLink 
          className="cart__btn-order" 
          text="To order" 
          onClick={(isEmptyProducts) ? undefined : showForm} 
          href="#" 
        />
      }
      {isFormDisplay && <ButtonCommon className="cart__btn-confirm" text="Confirm" href="/completedOrder" />}
    </div>
  </section>
}

export default Cart;