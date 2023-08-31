import "./cartCard.scss"
import { Button } from "../buttons/buttons";
import { CardProductProps } from "@/types/main-types";
import { useState } from "react";

const CartCard: React.FC<CardProductProps> = (props) => {
  const {quantity, product, onDelete, onUpdateInpt} = props
  const {idProduct, imgUrl, name, price, discount} = product;
  const [quantityProd, setQuantityProd] = useState(quantity);
  const [isValidQuantity, changeIsValidQuantity] = useState(quantity > 0);

  function handleClose() {
    onDelete(product.idProduct);
  }

  function handleInptChange(event: React.ChangeEvent<HTMLInputElement>) {
    let newQuantity = Number(event.target.value);
    if (event.target.value === '') {
      newQuantity = 1;
    }
    
    setQuantityProd(newQuantity);

    if(newQuantity > 0) {
      changeIsValidQuantity(true);
      onUpdateInpt(idProduct, newQuantity);

    } else if (newQuantity === 0) {
      onDelete(product.idProduct);

    } else {
      changeIsValidQuantity(false);
    }
  }

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
            value={quantityProd}
            onChange={handleInptChange}
            style={{ borderColor: isValidQuantity ? 'initial' : '#ff0000' }}
          />
          <Button className="cart-card__btn-close" text="X" onClick={handleClose} />
        </div>
    </div>
  );
}

export default CartCard;