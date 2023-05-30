import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export const Navegacion = ()=>{
    return(
        <nav  className="navegacion">
        
        <div className="links">
        <Link to="/"> Tienda  </Link>
        <br/>
        <Link to="/cart">Carrito de compra</Link>
    </div>
    </nav>
  );
};