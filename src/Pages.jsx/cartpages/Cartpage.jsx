import React from 'react';
import HeaderB from "../../Componentes/HeaderB/Header";
import Cart from '../../Componentes/cart/Cart';
import Footer from '../../Componentes/Footer/Footer';

function Cartpage({
  cartItems,
  handleAddToCart,
  deleteFromCart,
  checkOut,
  removeFromCart,
  AddCart,
}) {
  return (
      <>
          <HeaderB />
          <Cart 
              cartItems={Object.values(cartItems)} // Convertir cartItems a un array
              handleAddToCart={handleAddToCart}
              deleteFromCart={deleteFromCart}
              checkOut={checkOut}
              removeFromCart={removeFromCart}
              AddCart={AddCart}
          />
          <Footer />
      </>
  )
}

export default Cartpage; 
