import React from "react";
import Productnew from "../../Componentes/Allproducts/Productnew";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";


const Newproductpage = ({ productnewdata , addToCart }) => {
  return (
    <>
      <Header  />
      <Productnew productnewdata={productnewdata} />
      <Footer/>
    </>
  );
};

export default Newproductpage;
