import { Button, ButtonLink } from "../buttons/buttons"
import "./modalProductCard.scss"
import { ModalProductCardProps } from "@/types/main-types"
import { useState } from "react"
import createStarsList from "../stars/createStarsList"
import { useCount } from "../contexts/CounterProvider"

const ModalProductCard: React.FC<ModalProductCardProps> = (props) => {
  const {
    categories, imgUrl, name, price, discount, stars, 
    shortDescription, productDescription, additionalInfo,
  } = props.product;

  if(!props.isOpen) {
    return null;
  }

  /**Create Stars*/
  const starsList = createStarsList(stars);

  /**Product Count Handler*/
  const [productCount, setProductCount] = useState(1);
  const [isValid, setIsValid] = useState(true);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  /**Toggle description text and button*/
  const [activeDescription, setActiveDescription] = useState("product-description");
  const buttonDescription_handler= (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentButton = event.target as HTMLButtonElement;

    if(!currentButton.classList.contains("modal-product__btn_active")) {
      const descriptionValue = ["product-description", "additional-info"];
      const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".modal-product__btn");
      [...buttons].forEach((button) => {
        button.classList.toggle("modal-product__btn_active");
      });
      if(activeDescription === descriptionValue[0]) {
        setActiveDescription(descriptionValue[1]);
      } else {
        setActiveDescription(descriptionValue[0]);
      }
    }
  }

  /**Providers*/
  const { addProdVal } = useCount();

  function provideQuantity() {
    const buttonCover = document.querySelector(".modal-product__btn-to-shop_cover") as HTMLDivElement;
    const message = document.querySelector(".modal-product__message") as HTMLDivElement;
    
    addProdVal(productCount);
    
    /**Animation after user action*/
    buttonCover.style.display = "block";
    message.classList.toggle("modal-product__message_active");

    setTimeout(() =>{
      buttonCover.style.display = "none";
      message.classList.toggle("modal-product__message_active");
    }, 2500);
  }

  return(
    <div className="modal-product">
      <div className="modal-product_top-decore" onClick={props.onClose}></div>
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
                type="number"
                value={productCount}
                onChange={handleInput}
                style={{ borderColor: isValid ? 'initial' : '#ff0000' }}
              />
              <div className="modal-product__add-to-cart">
                <ButtonLink 
                  className="modal-product__btn-to-shop" 
                  text="Add To Cart" 
                  onClick={isValid ? provideQuantity : undefined}
                  href="#"
                />
                <div className="modal-product__btn-to-shop_cover"></div>
                <div className="modal-product__message">
                  Product has been added to cart
                </div>
              </div>
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
            {
              (activeDescription === "product-description") ?
              <div className="modal-product__product-description">{productDescription}</div> :
              null
            }
            {
              (activeDescription === "additional-info") ?
              <div className="modal-product__product-description">{additionalInfo}</div> :
              null
            }
          </div>
        </div>

        <Button className="modal-product__btn-close" text="X" onClick={props.onClose} />
      </div>
      <div className="modal-product_bottom-decore" onClick={props.onClose}></div>
    </div>
  );
}

export default ModalProductCard;