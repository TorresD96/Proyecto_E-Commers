import { useContext } from "react";
import { CartContext } from "./Cartcontext1";
import productosstock from "./Productos.json";
import { CartItem } from "./ItemsCarrito";
import { useNavigate } from "react-router-dom";


export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(CartContext);// desestrocturo los valores de Cartcontext1

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h2>Aquí ves tus productos seleccionados</h2>
      </div>
      <div className="carts">
        {productosstock.map((products) => {
          if (cartItems[products.id] !== 0) {
            return <CartItem key={products.id} data={products} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Total a Pagar: ${totalAmount} Pesos Colombianos</p>
          <button onClick={() => navigate("/")}> continuar comprado </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}>
            {" "}
            Comprar Ahora{" "}
          </button>
        </div>
      ) : (
<h3> Tu carro esta vació</h3>
      )}
    </div>
  );
};