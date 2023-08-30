import "./cartCard.scss"
import { Button } from "../buttons/buttons";
import { CardProductsProps } from "@/types/main-types";

const CartCard: React.FC<CardProductsProps> = (props) => {
  const {idProduct, categories, imgUrl, name, price, discount, stars} = props.product;
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const quantity = props.quantity;
  
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
            {!!discount && <span>${(price - discount).toFixed(2)}</span>}
        </div>
        <div className="cart-card__quantity-wrap">
          <p className="cart-card__quantity-text">Quantity :</p>
          <input
            className="cart-card__inpt"
            type="number"
            value={quantity}
            disabled
          />
          <Button className="cart-card__btn-close" text="X" onClick={props.onClose} />
        </div>
      </div>
    </div>
  );
}