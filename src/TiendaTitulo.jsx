import productosstock from "./Productos.json";
import {Product}from "./Product";
import React from "react";

export const Tienda = () => {
    return (
    <div className="Tienda">
        <div className="Titulo">
        <h1>Tienda de Tecnología</h1>
        </div>
        <div className="Products">
        {productosstock.map((Producto2) => (
        <Product key={Producto2.id} data={Producto2} />////key
        ))}
        </div>
    </div>
    );
};
export default Tienda;

