import "./product-card.scss"
import { useEffect, useState, useRef } from "react";
import { ProductCardProps} from "@/types/main-types";
import ModalProductCard from "./ModalProductCard";
import createStarsList from "../stars/createStarsList";

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {idProduct, categories, imgUrl, name, price, discount, stars} = props.product;
  const componentRef = useRef<HTMLDivElement>(null);

  /**Card animation handlers*/
  useEffect(() => {
    componentRef.current?.addEventListener("mouseenter", handleMouseEnter);
    componentRef.current?.addEventListener("mouseleave", handleMouseLeave);
    componentRef.current?.addEventListener("click", openModal);

    return(
      () => {
        componentRef.current?.removeEventListener("mouseenter", handleMouseEnter);
        componentRef.current?.removeEventListener("mouseleave", handleMouseLeave);
        componentRef.current?.removeEventListener("click", openModal);
      }
    );
  }, []);
  

  function handleMouseEnter(ev: Event) {
    const targetElem = ev.target as HTMLElement;
    const children = [...targetElem.children];

    children.forEach((elem) => {
      if(elem.classList.contains(`${elem.className.split(" ")[0]}_hover`)) {return};
      elem.classList.add(`${elem.className.split(" ")[0]}_hover`);
    })
  }

  function handleMouseLeave(ev: Event) {
    const targetElem = ev.target as HTMLElement;
    const children = [...targetElem.children];
    
    children.forEach((elem) => {
      if(elem.classList.contains(`${elem.className.split(" ")[0]}_hover`)) {
        elem.classList.remove(`${elem.className.split(" ")[0]}_hover`);
      };
    })
  }

  /**Card modal window handler*/
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const starsList = createStarsList(stars);
  
  return(
    <>
    <div ref={componentRef} className="product-card" id={`product-card-${idProduct}`}>
      <div className="product-card__wrap">
        <div className="product-card__categories-wrap">
          {categories.map((category, index) => {
            return(
              <div key={index} className="product-card__category">{category}</div>
            )
          })}
        </div>
        <div className="product-card__img-wrap">
          <img src={imgUrl} alt={name} />
        </div>

        <div className="product-card__description">
          <p className="product-card__name">{name}</p>
          <div className="product-card__description_hr"></div>
          <div className="product-card__price-wrap">
            <span 
              className={(discount) ? 'product-card__price_cancel' : 'product-card__price'}>
              ${price.toFixed(2)}
            </span>
            {!!discount && <span>${(price - discount).toFixed(2)}</span>}
          </div>
          <div className="product-card__stars">{starsList}</div>
        </div>
      </div>
      <div className="product-card__substrate"></div>
    </div>

    <ModalProductCard isOpen={isModalOpen} onClose={closeModal} product={props.product} />
    </>
  );
}

export default ProductCard;