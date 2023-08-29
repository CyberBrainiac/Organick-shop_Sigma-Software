import { Button, ButtonLink } from "../buttons/buttons"
import "./modalProductCard.scss"
import { ModalProductCardProps } from "@/types/main-layout-types"
import Star from "../stars/Star"
import { useState } from "react"
import { MouseEventHandler } from "react"

const ModalProductCard: React.FC<ModalProductCardProps> = (props) => {
  const {
    categories, imgUrl, name, price, discount, stars, 
    shortDescription, productDescription, additionalInfo,
  } = props.product;

  if(!props.isOpen) {
    return null;
  }

  let starsList = [];
  for(let i = 0; i < stars; i++) {
    starsList.push(<Star key={i} filled={true} />);
  }
  if (starsList.length < 5) {
    const filledStars = starsList.length;

    for (let i = filledStars + 1; i <= 5; i++) {
      starsList.push(<Star key={i} filled={false} />);
    }
  }

  const [productCount, setProductCount] = useState(1);
  const [isValid, setIsValid] = useState(true);

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    const isValidNumber = (() => {
      if(/^\d+$/.test(inputValue) && Number(inputValue) > 0) {
        return true;
      }
      return false;
    })();

    setProductCount(Number(inputValue));
    setIsValid(isValidNumber);
  };

  const buttonDescription_handler= (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
    
  }

  /**Calculate size after resizing window*/
  let modalWindowStyle = {height: innerHeight};
  let modalProductContainerStyle = {};

  return(
    <div style={modalWindowStyle} className="modal-product">
      <div className="modal-product_top-decore"></div>
      <div className="modal-product__container">
        <div className="modal-product__content">
          <div className="modal-product__img-container">
            <img src={imgUrl} alt={name} />
            <div className="modal-product__categories-wrap">
              {categories.map((category, index) => {
                return(
                  <div key={index} className="modal-product__category">{category}</div>
                )
              })}
            </div>
          </div>

          <div className="modal-product__description-wrap">
            <h3 className="modal-product__heading">{name}</h3>
            <div className="modal-product__stars">{starsList}</div>
            <div className="modal-product__price-wrap">
              <span 
                className={(discount) ? 'modal-product__price_cancel' : 'modal-product__price'}>
                ${price.toFixed(2)}
              </span>
              {!!discount && <span>${(price - discount).toFixed(2)}</span>}
            </div>
            <div className="modal-product__short-description">
              {shortDescription}
            </div>

            <div className="modal-product__quantity-wrap">
              <p className="modal-product__quantity-text">Quantity :</p>
              <input
                className="modal-product__inpt"
                type="text"
                value={productCount}
                onChange={handleNumberChange}
                style={{ borderColor: isValid ? 'initial' : '#ff0000' }}
              />
              <ButtonLink className="modal-product__btn-to-shop" text="Add To Cart" href={isValid ? "/shop" : "#"} />
            </div>
          </div>
        </div>

        <div className="modal-product__description">
          <div className="modal-product__buttons-wrap">
            <Button 
              className="modal-product__btn modal-product__btn_active" 
              text="Product Description" 
              onClick={buttonDescription_handler} 
            />
            <Button 
              className="modal-product__btn" 
              text="Additional Info" 
              onClick={buttonDescription_handler} 
            />
          </div>
          <div className="modal-product__product-description-wrap">
            <div className="modal-product__product-description">{productDescription}</div>
            <div className="modal-product__product-description">{additionalInfo}</div>
          </div>
        </div>

        <Button className="modal-product__btn-close" text="X" onClick={props.onClose} />
      </div>
      <div className="modal-product_bottom-decore"></div>
    </div>
  );
}

export default ModalProductCard;