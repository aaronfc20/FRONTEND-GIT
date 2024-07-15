import React from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";


const Allproducts = ({ allProductsData}) => {
  return (
    <>
      <section>
        <h1 id="masven"className="page-header">Más vendidos</h1>

        <div className="producto">


            <div className="boxc">
              <div className="colec">

                <div className="img">
                  <img src="/img/shop-items/compu.jpg" alt="product-image" />
                </div>

                <div className="colec">
                <h3>Colección 1</h3>  
                </div>

              </div>
            </div>





            <div className="boxc">
              <div className="colec">

                <div className="img">
                  <img src="/img/shop-items/compu1.jpg" alt="product-image" />
                </div>

                <div className="colec">
                  <h3>Colección 2</h3>
                </div>

              </div>
            </div>




            <div className="boxc">
              <div className="colec">

                <div className="img">
                    <img src="/img/shop-items/compu2.jpg" alt="product-image" />
                </div>

                <div className="colec">
                  <h3>Colección 3</h3>  
                </div>

              </div>
            </div>
        
        



        </div>
      </section>



      
      <div className="productos">
          

        {allProductsData.map((product, index) => {
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

      



      

    </>
  );
};

export default Allproducts;

/*
import React from 'react';
import { Link } from 'react-router-dom';
import './allproducts.css';

const AllProducts = ({ allProductsData, addToCart }) => {
  return (
    <section>
      <h1 id="masvend" className="page-header">Más vendidos</h1>
      <div className="productos">
        {allProductsData.map((product, index) => (
          <div className="caja" key={index}>
            <div className="elemento">
              <img src={product.imageUrl} alt={product.nombre} />
              <h3>{product.nombre}</h3>
              <h5>Marca: {product.marca}</h5>
              <h5>Descripción: {product.descripcion}</h5>
              <h5>Características: {product.caracteristicas}</h5>
              <h5>Stock: {product.stock}</h5>
              <Link to={`/all-products/${product.id}`}>
                <h5>Learn more</h5>
              </Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
*/
