import React from "react";
import { Link } from "react-router-dom";
import './Thanks.css'; 

const Thanks = ({ allProductsData }) => {
  return (
    <div className="thanks-container">
      <div className="cent">
        <h1>¡Muchas gracias por tu pedido!</h1>
        <h2>Puedes ver el detalle y estado de tu pedido ingresando a tu <Link to="/login">CUENTA</Link></h2>
      </div>

      <h1>También te podría interesar...</h1>

      <div className="suggested-products">
        {allProductsData.map((productos) => (
          <div className="product-box">
            <div className="product">
              <div className="img">
                <img src={productos.img} alt="product-image" />
              </div>
              <div className="product-info">
                <h3>{productos.name}</h3>
                <Link to={`/all-products/${productos.id}`}>
                  <h5>Learn More</h5>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thanks;

/*

import React from "react";
import { Link } from "react-router-dom";
import './Thanks.css'; 

const Thanks = ({ allProductsData }) => {
  return (
    <div className="thanks-container">
      <div className="cent">
        <h1>¡Muchas gracias por tu pedido!</h1>
        <h2>Puedes ver el detalle y estado de tu pedido ingresando a tu <Link to="/login">CUENTA</Link></h2>
      </div>

      <h1>También te podría interesar...</h1>

      <div className="suggested-products">
        {allProductsData.slice(0, 5).map((producto) => (
          <div className="product-box" key={producto.id}>
            <div className="product">
              <div className="img">
                <img src={producto.img} alt="product" />
              </div>
              <div className="product-info">
                <h3>{producto.name}</h3>
                <Link to={`/all-products/${producto.id}`}>
                  <h5>Learn More</h5>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thanks;

*/