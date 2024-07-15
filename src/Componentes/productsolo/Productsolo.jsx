import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductoSolo.css";


const Productsolo = ({ 
  quantity, 
  allProductsData, 
  handleAddToCart, 
  handleIncrement , 
  handleDecrement,
}) => {
  
  let {id } = useParams();

  return (
    <>
      {allProductsData.map((product, index) => {
        if (product.id == id) {
          return (
            <div key={index}>
              <section>
                <div id="nombre">
                  <div id="nombre1">{product.name}</div>
                  <di>{product.serie}</di>
                </div>
                <hr />
                
                <div className="principal" >
                  <div id="principal1">
                    <div>
                      <img id="img" src={product.img} alt={product.name} />
                      
                    </div>
                  </div>
              
                  <div className="principal2">
                    <h3 id="disp">DISPONIBLE</h3>
                    <h2 id="precio">S/{product.price}</h2>
                    <button id="carrito" onClick={() => handleAddToCart(product)}>AÑADIR AL CARRITO</button>
                    <br></br>
                    <h4 id="cantidad">Cantidad:</h4>
                    <br></br>
                    <div className="botones">
                      <button onClick={handleDecrement}>-</button>
                      <span>{quantity}</span>
                      <button onClick={handleIncrement}>+</button>
                    </div>
                    <strong id="envio"><u><a href="">Ver métodos de envio disponibles</a></u></strong>
                  </div>
                  
                </div>

          
                
                <div className="descrip">
                  <h3>Descripción</h3>
                  {product.desc}
                </div>

                <div id="caracteristicas">
                    <h5 id="titulo">
                        <strong>Caracterisiticas del Producto: </strong>
                    </h5>
                    <ul id="carac">
                      <li>Modelo: {product.caracteristicas.Modelo}</li>
                      <li>Capacidad: {product.caracteristicas.Capacidad}</li>
                      <li>Tipo: {product.caracteristicas.Tipo}</li>
                      <li>Voltaje: {product.caracteristicas.Voltaje}</li>
                      <li>Velocidad: {product.caracteristicas.Velocidad}</li>
                      <li>Latencia: {product.caracteristicas.Latencia}</li>
                      <li>Número de módulos: {product.caracteristicas.Número_de_módulos}</li>
                      <li>Formato: {product.caracteristicas.Formato}</li>
                    </ul>
                </div>
              </section>
            </div>
          );
        }
      })}
    </>
  );
};

export default Productsolo;


/*
import React from "react";
import { useParams } from "react-router-dom";
import "./ProductoSolo.css";

const Productsolo = ({ 
  quantity, 
  allProductsData, 
  handleAddToCart, 
  handleIncrement, 
  handleDecrement,
}) => {
  let { id } = useParams();
  const product = allProductsData.find(product => product.id.toString() === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <section>
        <div id="nombre">
          <div id="nombre1">{product.name}</div>
          <div>{product.serie}</div>
        </div>
        <hr />
        <div className="principal">
          <div id="principal1">
            <img id="img" src={product.img} alt={product.name} />
          </div>
          <div className="principal2">
            <h3 id="disp">DISPONIBLE</h3>
            <h2 id="precio">S/{product.price}</h2>
            <button id="carrito" onClick={() => handleAddToCart(product)}>
              AÑADIR AL CARRITO
            </button>
            <h4 id="cantidad">Cantidad:</h4>
            <div className="botones">
              <button onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            <strong id="envio">
              <u>
                <a href="#">Ver métodos de envío disponibles</a>
              </u>
            </strong>
          </div>
        </div>
        <div className="descrip">
          <h3>Descripción</h3>
          <p>{product.desc}</p>
        </div>
        <div id="caracteristicas">
          <h5 id="titulo">
            <strong>Caracteristicas del Producto: </strong>
          </h5>
          <ul id="carac">
            <li>Modelo: {product.caracteristicas.Modelo}</li>
            <li>Capacidad: {product.caracteristicas.Capacidad}</li>
            <li>Tipo: {product.caracteristicas.Tipo}</li>
            <li>Voltaje: {product.caracteristicas.Voltaje}</li>
            <li>Velocidad: {product.caracteristicas.Velocidad}</li>
            <li>Latencia: {product.caracteristicas.Latencia}</li>
            <li>Número de módulos: {product.caracteristicas.Número_de_módulos}</li>
            <li>Formato: {product.caracteristicas.Formato}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Productsolo;

*/