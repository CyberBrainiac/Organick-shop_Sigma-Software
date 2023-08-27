import "./products.scss"
import { ButtonLink } from "@/components/buttons/buttons"
import { LoadMoreType } from "@/types/main-layout-types"
import { useState } from "react"
import { ProductsProps } from "@/types/main-layout-types"
import ProductCard from "@/components/product-card/ProductCard"

function Products({products}: ProductsProps) {
  const [visibleMore, changeVisibleMore] = useState(false);

  const loadMore: LoadMoreType = (event) => {
    console.log(event.target);
    changeVisibleMore(prevValue => !prevValue);
  }

  return(
    <div className="products">
      <p className="products__tegline">Categories</p>
      <h2 className="products__heading">Our Products</h2>

      <div className="products__wrap">
        {products.map((product) => {
          return(
            <ProductCard key={product.idProduct} product={product} />
          )
        })}
      </div>

      <ButtonLink className="products__btn" href="#" text={visibleMore ? "Hide all" : "Load More"} onClick={loadMore} />
    </div>
  );
}

export default Products;