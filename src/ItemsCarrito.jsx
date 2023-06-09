import { useContext } from "react";
import { CartContext } from "./Cartcontext1";


export const CartItem = (props) => {
    const { id, productName, price,productImage } = props.data; // productImage
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);

    
  
    return (
      <div className="cartItem">
        <img src={productImage} />
        <div className="description">
          <p>
            <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <div className="countHandler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)} > + </button>

        </div>
        </div>
    </div>
    );

};

export default CartItem;
// };

