import "./product-card.scss"
import { useEffect, useState } from "react";
import { ProductCardProps} from "@/types/main-layout-types";
import Star from "../stars/Star";

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {idProduct, categories, imgUrl, name, price, discount, stars} = props.product;

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

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const productCardElemArr = document.querySelectorAll(".product-card");
    productCardElemArr?.forEach((productCard) => productCard.addEventListener("mouseenter", handleMouseEnter));
    productCardElemArr?.forEach((productCard) => productCard.addEventListener("mouseleave", handleMouseLeave));

    return(
      () => {
        productCardElemArr?.forEach((productCard) => productCard.removeEventListener("mouseenter", handleMouseEnter));
        productCardElemArr?.forEach((productCard) => productCard.removeEventListener("mouseleave", handleMouseLeave));
      }
    );
  }, []);

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
  console.log(props.product);
  
  return(
    <div className="product-card" id={`product-card-${idProduct}`}>
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
              ${price}
            </span>
            {!!discount && <span>${price - discount}</span>}
          </div>
          <div className="product-card__stars">{starsList}</div>
        </div>
      </div>
      <div className="product-card__substrate"></div>
    </div>
  );
}

export default ProductCard;