import { createContext, useContext, useState } from "react"
import { CartProductsProps } from "@/types/main-types";

const ProductProviderContext = createContext();

function ProductProvider({children}) {
	const [getProducts, setProducts] = useState([]);

  function saveProduct(props: CartProductsProps) {
    const quantity = props.quantity;
    const product = props.product;
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