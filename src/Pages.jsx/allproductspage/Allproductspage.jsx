import React from "react";
import Allproducts from "../../Componentes/Allproducts/Allproducts";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";


const Allproductspage = ({ allProductsData, addToCart }) => {
  return (
    <>
      <Header  />
      <Allproducts allProductsData={allProductsData} addToCart={addToCart} />
      
      <Footer/>
    </>
  );
};

export default Allproductspage;
