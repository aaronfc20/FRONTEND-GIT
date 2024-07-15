import React from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";


const Productnew = ({productnewdata}) => {
  return (
    <>

      <section>


      <h1 id="nuevos" className="page-header">Nuevos</h1>

      <div className="productob">

        <ul className="mov">

        <li className="boxcs">


          <div className="colec">

            <div className="img">


                <img src="/img/shop-items/compu.jpg" alt="product-image" />

            </div>

            <div className="colec">

                <h3>Colección 1</h3>

                
                  
            </div>



          </div>



        </li>


        <li className="ji">

            <div className="boxc">

              <div className="coleccion2">

                <div className="img">


                  <img src="/img/shop-items/compu2.jpg" alt="product-image" />

                </div>


                <div className="colec">

                  <div className="text">

                  <h3 className="jo">Colección 2 de item variados</h3>
                  
                  </div>  
                </div>

              </div>

            </div>


          <div className="boxc">

            <div className="coleccion3">

              <div className="img">



                  <img id="compu" src="/img/shop-items/compu1.jpg" alt="product-image" />

              </div>

              <div className="colec">

              <div className="text">

                <h3 className="je">Colección 3 de item variados</h3>
                
                </div>
              </div>

            </div>

          </div>
        



        </li>

        </ul>

      </div>






      <div className="productos">
          

        {productnewdata.map((product, index) => {
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

export default Productnew;

/*import React from 'react';
import { Link } from 'react-router-dom';
import './allproducts.css';

const Productnew = ({ productnewdata, addToCart }) => {
  return (
    <section>
      <h1 id="nuevo" className="page-header">Nuevos</h1>
      <div className="productos">
        {productnewdata.map((product, index) => (
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

export default Productnew;
*/