import React from 'react';
import Headerlogad from "../../Componentes/HeaderLoginadmin/Headerlogad";
import Footer from '../../Componentes/Footer/Footer';

import Cartadmin from '../../Componentes/Cartadmin/Cartadmin';

function Cartpagesadmin({
  cartItems,
  handleAddToCart,
  deleteFromCart,
  checkOut,
  removeFromCart,
  AddCart,
}) {
  return (
      <>
          <Headerlogad />
          <Cartadmin 
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

export default Cartpagesadmin; 