import { useContext } from "react";
import { CartContext } from "./Cartcontext1";


export const Product = (props) => {
  const { id, productName, price,productImage} = props.data;
  const { addToCart, cartItems } = useContext(CartContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="Producto">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="añadir al carro" onClick={() => addToCart(id)}>
        Agregar a Carrito {cartItemCount > 0 && <> ({cartItemCount})</>}
        
      </button>
    </div>
  ); 
};
