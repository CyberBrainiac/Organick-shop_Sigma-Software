import { createContext, useContext, useEffect, useState } from "react"
import { 
  ProviderChildren,
  SavedProductType,
  ProductContextType,
  ModifyProductProps,
} from "@/types/main-types"
import UnvalidValueError from "@/utils/errorHandlers/typeErrors"

const ProductProviderContext = createContext<ProductContextType>({
  getProducts: [],
  addProduct: () => {},
  modifyProduct: () => {},
});

function ProductProvider({children}: ProviderChildren) {
	const [getProducts, setProduct] = useState<SavedProductType[]>([]);

 
  async function addProduct(props: SavedProductType) {
    const idProduct = props.idProduct;
    const quantity = props.quantity;
    const product = props.product;

    const existingProductIndex = getProducts.findIndex((product) => {
      return product.idProduct === idProduct;
    })

    /**Modify exiting product*/
    if(existingProductIndex !== -1) {
      const products = getProducts;
      
/**                                 I LOVE REACT ❤
 * Через оптимізаційні фішки React мені просто необхідно змінювати весь цільовий об'єкт, що підверхся змінам, бо, якщо просто змінити властивість в середині об'єкта, ця дія не викличе спрацьювання useEffect хуку, сам стан зміниться, проте без активації хуків навішаних на нього. Який же це кайф, розібратися з цим, після N^2 годин спроб 
 * */
      const modifidedProduct = products[existingProductIndex];
      const deepCloneProduct = JSON.parse( JSON.stringify(modifidedProduct));

      products.splice(existingProductIndex, 1);
      deepCloneProduct.quantity += quantity;
      products.push(deepCloneProduct);

      setProduct([...products]);
      return;
    }

    /**Add new product*/
    setProduct((prevProducts) => [...prevProducts, { idProduct, quantity, product }]);
  }


  function modifyProduct(props: ModifyProductProps) {
    const action = props.action;
    const quantityDifference = props.quantityDifference;
    const idProduct = props.idProduct;

    if(action === "delete") {
      const modifiedProducts = getProducts.filter(product => product.idProduct !== idProduct);
      setProduct(modifiedProducts);

    } else if(action === "update count") {
      if(!quantityDifference) {
        throw new UnvalidValueError(`modifyProduct() has unexpected value quantityDifference: ${quantityDifference}`);
      }

      const products = getProducts;
      const existingProductIndex = products.findIndex(product => product.idProduct === idProduct);
      const modifidedProduct = products[existingProductIndex];
      const deepCloneProduct = JSON.parse( JSON.stringify(modifidedProduct));

/**Variant 2, i can change old object to clone object, after dustruction all element in NEW array, this is trigger useEffect event*/
      deepCloneProduct.quantity += quantityDifference;
      products[existingProductIndex] = deepCloneProduct;

      setProduct([...products]);

    } else {
      throw new UnvalidValueError(`modifyProduct() has unexpected value action: ${action}`);
    }
  }

  function saveSessionProducts() {
    sessionStorage.setItem("user_saved_products", JSON.stringify(getProducts));
  }

  function getSessionProducts() {
    const savedSessionProductsJSON = sessionStorage.getItem("user_saved_products");
    if(!savedSessionProductsJSON || savedSessionProductsJSON === "[]") return;

    const savedSessionProducts = JSON.parse(savedSessionProductsJSON) as SavedProductType[];
    setProduct(savedSessionProducts);
  }

  useEffect(() => {
    getSessionProducts();
  }, []);

  useEffect(() => {
    saveSessionProducts();
  }, [getProducts]);

	const value = {
		getProducts,
    addProduct,
    modifyProduct,
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