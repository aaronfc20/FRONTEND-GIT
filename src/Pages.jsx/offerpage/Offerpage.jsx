import React from "react";
import Offerproducts from "../../Componentes/Allproducts/Offerproducts";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";

const Offerpage = ({ offerproductsdata , addToCart }) => {
  return (
    <>
      <Header  />
      <Offerproducts offerproductsdata={offerproductsdata} />
      <Footer/>
      
    </>
  );
};

export default Offerpage;