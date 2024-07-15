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
          

          
          </div>
          <div className="der">
          <ul  >

            <li className="cart"><Link to="/cartadmin">
                <i className="fa fa-shopping-bag icon-circle"></i>
                
              </Link></li>
            <li><Link aria-label="Login page" to="/">
              <button>SIGNOUT</button>
            </Link></li>
            <li><Link aria-label="Login page" to="/paneladmin">
              <button>ADMIN</button>
            </Link>
            </li>
            
          </ul> 
          </div>

      </section> 


    </>
  );
};

export default Navbar;