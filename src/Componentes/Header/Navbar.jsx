import React , { useState }from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {

  return (
    <>
      <section className="c_flex1" >
          <div className="izq">
            <div className="logs">
              <Link to="/home">
                <h1>TIENDA</h1>
              </Link>
            </div>
            <ul className="list">
              <li>
                <Link
                  className="link-hover"
                  to="/all-products"
                >
                  Más Vendidos
                </Link>
              </li>
              <li>
                <Link  className="link-hover" to="/new-product">
                  Nuevos
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Registration"
                  className="link-hover"
                  to="/offer-product"
                >
                  Ofertas
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="der">
          <ul  >

            <li className="cart"><Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                
              </Link></li>
            <li><Link to="/help">
              <p>Ayuda</p>
            </Link></li>
            <li><Link aria-label="Login page" to="/login">
              <button>Mi cuenta</button>
            </Link>
            </li>
            
          </ul> 
          </div>

      </section> 


    </>
  );
};

export default Navbar;