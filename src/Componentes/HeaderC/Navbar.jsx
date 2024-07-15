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

      </section> 


    </>
  );
};

export default Navbar;