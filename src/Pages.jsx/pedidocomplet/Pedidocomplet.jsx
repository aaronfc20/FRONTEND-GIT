import React from 'react'
import Footer from "../../Componentes/Footer/Footer";
import HeaderC from "../../Componentes/HeaderC/Header";
import Thanks from '../../Componentes/Thanks/Thanks';


const Homepage = ({allProductsData}) => {
    return (
      <>
        <HeaderC/>
        <Thanks allProductsData={allProductsData}/>
        
        <Footer/>
      </>
    );
  };
  
  export default Homepage;
  