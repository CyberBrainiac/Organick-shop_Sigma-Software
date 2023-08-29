import ProductCard from "@/components/product-card/ProductCard";
import { productLoader } from "@/utils/loaders/productsLoader";
import "./offer.scss";
import { useEffect, useState } from "react";

const Offer: React.FC = () => {
  const [showingProductArr, setShowingProductArr] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const showingProductId = [13, 14, 15, 16];
    (async () => {
      const loadedProduct = await Promise.all( showingProductId.map(id => productLoader(id)));
      setShowingProductArr(loadedProduct.map((product) => {
        return(<ProductCard key={product.idProduct} product={product} />);
      }))
    })();
  },[]);

  return(
    <div className="offer">
      <p className="offer__tegline">Offer</p>
      <h2 className="offer__heading">We Offer Organic For You</h2>
      <div className="offer__products-wrap">
        {showingProductArr}
      </div>
    </div>
  );
}

export default Offer;