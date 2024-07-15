import React from 'react';
import HeaderLog from "../../Componentes/HeaderLogin/Headerlog";
import Footer from '../../Componentes/Footer/Footer';
import Cartlogin from '../../Componentes/Cartlogin/Cartlogin';

function Cartpageslogin({
  cartItems,
  handleAddToCart,
  deleteFromCart,
  checkOut,
  removeFromCart,
  AddCart,
}) {
  return (
      <>
          <HeaderLog />
          <Cartlogin 
              cartItems={Object.values(cartItems)}
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

export default Cartpageslogin; 