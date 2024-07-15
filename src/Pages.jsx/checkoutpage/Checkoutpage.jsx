import React from 'react'
import Footer from "../../Componentes/Footer/Footer";
import HeaderC from "../../Componentes/HeaderC/Header";
import Formcompra from '../../Componentes/Formcompra/Formcompra';

const Checkoutpage = ({cartItems, complet,}) => {
    return (
      <>
        <HeaderC/>
        <Formcompra cartItems={cartItems} complet={complet}/>
        
        <Footer/>
      </>
    );
  };
  
  export default Checkoutpage;
  


