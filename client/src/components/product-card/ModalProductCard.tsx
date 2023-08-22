import { Button } from "../buttons/buttons";
import "./modalProductCard.scss"
import { ModalProductCardProps } from "@/types/main-layout-types"

const ModalProductCard: React.FC<ModalProductCardProps> = (props) => {
  const {
    id, categories, imgUrl, name, price, discount, stars, 
    shortDescription, productDescription, additionalInfo,
  } = props.product;

  if(!props.isOpen) {
    return null;
  }

  return(
    <div className="modal-product">
      <div className="modal-product__container">
        <div className="modal-product__content">
          <Button text="Close" onClick={props.onClose} />

        </div>
        <div className="modal-product__description">
          <div className="modal-product__buttons-wrap">
            <Button text="Additional Info" />
            <Button text="Product Description" />
          </div>
          <div className="modal-product__product-description">{productDescription}</div>
          <div className="modal-product__additional-info">{additionalInfo}</div>
        </div>
      </div>
    </div>
  );
}

export default ModalProductCard;