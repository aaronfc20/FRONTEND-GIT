import React from 'react';
import Productsolo from '../../Componentes/productsolo/Productsolo';
import HeaderB from "../../Componentes/HeaderB/Header";
import Footer from '../../Componentes/Footer/Footer';

function productsolopage({
  quantity, 
  cartItems, 
  handleDecrement, 
  allProductsData, 
  handleAddToCart, 
  handleIncrement,
  AddCart, 
}) {

  return (

    <>
    
    <HeaderB />
    <Productsolo 
    allProductsData={allProductsData} 
    handleAddToCart={handleAddToCart} 
    handleIncrement ={handleIncrement}
    handleDecrement ={handleDecrement}
    quantity={quantity}
    AddCart ={AddCart}
    />
    <Footer/>
    
    </>
  )
}

export default productsolopage