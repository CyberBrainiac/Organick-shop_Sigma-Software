import "./product-card.scss"
import { ProductCardProps} from "@/types/main-layout-types";

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {categories, imgUrl, name, price, discount, stars} = props.product;

  return(
    <div className="product-card">
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
            className="product-card__price ${(discount) ? 'product-card__price_cancel' : ''}">
            ${price}
          </span>
          {discount && <span className="product-card__discount">${discount}</span>}
        </div>
        <p>Stars: {stars}</p>
      </div>
    </div>
  );
}

export default ProductCard;