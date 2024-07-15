import React from 'react'
import Footer from "../../Componentes/Footer/Footer";
import HeaderC from "../../Componentes/HeaderC/Header";

import Loginadmin from '../../Componentes/loginadmin/Loginadmin';


const Loginpage= () => {
    return (
      <>
        <HeaderC/>
        <Loginadmin/>
        <Footer/>
      </>
    );
  };
  
  export default Loginpage;