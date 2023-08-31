import "./cart.scss"
import { ButtonLink } from "@/components/buttons/buttons"
import CartCard from "@/components/cart-card/CartCard";
import { useProduct } from "@/components/contexts/CartProvider";
import { useEffect, useState } from "react";
import { useCount } from "@/components/contexts/CounterProvider";
import FormOrder from "@/components/form/FormOrder";

const Cart: React.FC = () => {
  const { getProducts, modifyProduct } = useProduct();
  const {	addProdVal, removeProdVal, setProdVal} = useCount();
  const [isFormDisplay, setFormDisplay] = useState(false);
  const isEmptyProducts = !getProducts.length;
  const [renderProdutcs, setRenderProducts] = useState(getProducts);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  /**Synchronize changes between renderProducts state and getProducts state*/
  useEffect(() => {
    setRenderProducts(getProducts);
  }, [getProducts]);

  function showForm() {
    setFormDisplay(true);
  }

  function onDelete(idProduct: number) {
    const action = "delete";

    /**Update quantity of all products*/
    const deletedProduct = renderProdutcs.find((product) => product.idProduct === idProduct)!;
    removeProdVal(deletedProduct.quantity);

    /**Update provider state*/
    modifyProduct({action, idProduct});
  }

  // const [productCount, setProductCount] = useState(0);
  useEffect(() => {
    const productCount = getProducts.reduce((count, product) => {
      return count + product.quantity;
    }, 0);

    setProdVal(productCount);
  } ,[getProducts]);

  function onUpdateInpt(idProduct: number, newQuantity: number) {
    const action = "update count";
    const modifiedProduct = renderProdutcs.find(product => product.idProduct === idProduct)!;
    const quantityDifference = newQuantity - modifiedProduct.quantity;

    /**Update quantity of all products*/
    (quantityDifference === 0) ? null : 
    (quantityDifference > 0) ? addProdVal(quantityDifference) : removeProdVal( Math.abs(quantityDifference));

    /**Update provider state*/
    modifyProduct({action, idProduct, quantityDifference});
  }

  /**Calc Cost, Discount*/
  useEffect(() => {
    const totalDiscount = renderProdutcs.reduce((sumDiscount, savedProduct) => {
      if(savedProduct.product.discount) {
        return sumDiscount + (savedProduct.product.discount) * savedProduct.quantity;
      } else {
        return sumDiscount;
      }
    }, 0);

    const totalPrice = renderProdutcs.reduce((sumCost, savedProduct) => {
      return sumCost + (savedProduct.product.price) * savedProduct.quantity;
    }, 0);
    const totalCost = totalPrice - totalDiscount;

    setTotalDiscount(totalDiscount);
    setTotalCost(totalCost);
  }, [renderProdutcs]);

  return <section className="cart">
    <div className="cart__decore">
      <div className="cart__decore_bg-left"></div>
      <div className="cart__decore_bg-right"></div>
      <div className="cart__decore_garlic"></div>
      <div className="cart__decore_strawberries"></div>
      <h1 className="cart__heading">Cart</h1>
    </div>

    <div className="cart__wrap">
      {(isEmptyProducts) ? 
        <div className="cart_empty"><h2>Your cart is empty</h2></div> :
        renderProdutcs.map(({idProduct, quantity, product}) => {
          return <CartCard
            key={idProduct}
            quantity={quantity}
            product={product}
            onDelete={onDelete}
            onUpdateInpt={onUpdateInpt}
          />
        })}

      <div className="cart__sum-info">
        <div className="cart__sum-info_container">
          <h3>Total Cost{" "}</h3>
          <h3>{totalCost}</h3>
          <h3>Discount{" "}</h3>
          <h3>{totalDiscount}</h3>
        </div>
      </div>

      {(isFormDisplay && getProducts.length) ? <FormOrder /> : null}
      {!isFormDisplay && 
        <ButtonLink 
          className="cart__btn-order" 
          text="To order" 
          onClick={(isEmptyProducts) ? undefined : showForm} 
          href="#" 
        />
      }
    </div>
  </section>
}

export default Cart;