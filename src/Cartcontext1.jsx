import {createContext, useEffect ,useState} from "react";
import productosstock from "./Productos.json";

export const CartContext = createContext(null);
//creo la variable de context que alamcena 
const getDefaultCart = () => {
    let carrito = {};
    for (let i = 1; i < productosstock.length +1; i++) {
    carrito[i] = 0;
    }
    return carrito;
};
export const CartContextProvider = ({ children }) => {
        const [cartItems, setCartItems] = useState(() => {
        const cartItemsFromStorage = localStorage.getItem("cartItems");
        if (cartItemsFromStorage) {
            return JSON.parse(cartItemsFromStorage);
        } else {
        return getDefaultCart();
        }
        });
        useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }, [cartItems]);
    
    

        const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
        let itemInfo = productosstock.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
        }
    }
    return totalAmount;
    };
    const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); 
    };
    const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const checkout = () => {
    setCartItems(getDefaultCart());

    };

    const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    };
    return (
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
    );
    
    }


