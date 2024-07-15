import React from 'react'
import Footer from "../../Componentes/Footer/Footer";
import Headerlog from "../../Componentes/HeaderLogin/Headerlog";
import Formlogincompra from '../../Componentes/Formlogincompra/Formlogincompra';

const Homepage = ({cartItems, complet,}) => {
    return (
      <>
        <Headerlog/>
        <Formlogincompra cartItems={cartItems} complet={complet}/>
        
        <Footer/>
      </>
    );
  };
  
  export default Homepage;