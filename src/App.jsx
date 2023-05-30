import "./App.css";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import { Cart} from "./VistadelCarrito";
import { CartContextProvider } from "./Cartcontext1";
import { Tienda } from "./TiendaTitulo";
import { Navegacion } from "./navegacion";


function App() {
  return (
    
      <CartContextProvider>
        <Router>
       <Navegacion/>
          <Routes>
            <Route path="/" element={<Tienda />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContextProvider>
    
  );
}

export default App;
