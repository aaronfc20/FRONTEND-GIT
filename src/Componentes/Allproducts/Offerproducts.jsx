import React from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";


const Offerproducts = ({offerproductsdata}) => {
  return (
    <>

      <section>

      <h1 id="masven"className="page-header">OFERTAS</h1>
      <div className="productos">
          

        {offerproductsdata.map((product, index) => {
          return (
            <div className="caja" key={index}>
              <div className="elemento">

                <div >
                  
                  <img src={product.img} />

                </div>

                <div >

                  <h3>{product.name}</h3>

                  <Link to={`/all-products/${product.id}`}>
                    <h5>Learn more</h5>
                  </Link>
    
                </div>
                
              </div>
            </div>
          );
        })}



      </div>

      </section>

    </>
  );
};

export default Offerproducts ;

/*
import React from 'react';
import { Link } from 'react-router-dom';
import './allproducts.css';

const Offerproducts = ({ offerproductsdata }) => {
  return (
    <section>
      <h1 id="masvend" className="page-header">OFERTAS</h1>
      <div className="productos">
        {offerproductsdata.map((product, index) => (
          <div className="caja" key={index}>
            <div className="elemento">
              <img src={product.imageUrl} alt={product.nombre} />
              <h3>{product.nombre}</h3>
              <Link to={`/all-products/${product.id}`}>
                <h5>Learn more</h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerproducts;
*/
