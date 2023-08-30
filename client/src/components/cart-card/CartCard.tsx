import "./cartCard.scss"
import { Button } from "../buttons/buttons";
import { CardProductProps } from "@/types/main-types";

const CartCard: React.FC<CardProductProps> = (props) => {
  const {quantity, product, onClose} = props
  const {imgUrl, name, price, discount} = product;

  return(
    <div className="cart-card">
      <div className="cart-card__img-wrap">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="cart-card__description">
        <h3 className="cart-card__heading">{name}</h3>
        <div className="cart-card__price-wrap">
            <span 
              className={(discount) ? 'cart-card__price_cancel' : 'cart-card__price'}>
              ${price.toFixed(2)}
            </span>
            {!!discount && <span className="cart-card__discount">
              ${(price - discount).toFixed(2)}
            </span>}
        </div>
      </div>
        <div className="cart-card__quantity-wrap">
          <p className="cart-card__quantity-text">Quantity:</p>
          <input
            className="cart-card__inpt"
            type="number"
            value={quantity}
            disabled
          />
          <Button className="cart-card__btn-close" text="X" onClick={props.onClose} />
        </div>
    </div>
  );
}

export default CartCard;