import { createContext, useContext, useState } from "react"
import { 
  CartProductsProps,
  ProviderChildren,
  SavedProductType,
  ProductContextType,
} from "@/types/main-types";

const ProductProviderContext = createContext<ProductContextType>({
  getProducts: [],
  saveProduct: () => {},
});

function ProductProvider({children}: ProviderChildren) {
	const [getProducts, setProduct] = useState<SavedProductType[]>([]);

  function saveProduct(props: CartProductsProps) {
    const quantity = props.quantity;
    const product = props.product;
    const idProduct = product.idProduct;

    /**Is Duplicate?*/
    if(getProducts.find(({idProduct}) => {
      console.log("duplicate");
      idProduct === product.idProduct
    })) {
      return;
    }

    setProduct((prevProducts) => [...prevProducts, { idProduct, quantity, product }]);
  }

	const value = {
		getProducts,
		saveProduct,
	}

	return(
		<ProductProviderContext.Provider value={value}>
			{children}
		</ProductProviderContext.Provider>
	)
}


function useProduct() {
	return useContext(ProductProviderContext);
}

export {
	ProductProvider,
	useProduct,
}