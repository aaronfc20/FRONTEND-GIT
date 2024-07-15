import React, { useState } from "react";
import './App.css'
import AllRoutes from "./AllRoutes/AllRoutes"
import AllProductsData from "./Componentes/Allproducts/allProductsData";
import Productnewdata from "./Componentes/Allproducts/productnewdata";
import Offerproductsdata from "./Componentes/Allproducts/offerproductsdata";
import Productbusquedadata from "./Componentes/productbusqueda/productbusquedadata";
import toast, { Toaster } from "react-hot-toast";

function App() {
  
  const { allProductsData } = AllProductsData;
  const { productnewdata } = Productnewdata;
  const { offerproductsdata } = Offerproductsdata;
  const { productbusquedadata } = Productbusquedadata;


  const [quantity, setQuantity] = useState(1);


  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 0));
  };



  const AddCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : item
        )
      );
      toast.success("Cantidad de item aumenta");
      
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      toast.success("Item añadido");
    }
    
  };

  const complet =()=>{
    
    setCartItems([]);
    
  }

  

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    
    const qua = quantity
    if (productExists) {
      
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty + qua }
            : item
        )
      );
      toast.success("Cantidad de item aumenta");
      
    } 
    
    else {
      setCartItems([...cartItems, { ...product, qty: qua }]);
      toast.success("Item añadido");
    }
    
  };


  


  const deleteFromCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.qty === 1) {
      const shouldRemove = window.confirm(
        "Seguro que lo quieres eliminar?"
      );

      if (shouldRemove) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        toast.success("Item removido");
      }
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty - 1 }
            : item
        )
      );
      toast.success("Cantidad de item disminuye");
    }
  };

  const removeFromCart = (product) => {
    
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    toast.success("Item removido");
    
  };


  return (
    <>
      <Toaster/>
      <AllRoutes 
      cartItems={cartItems}
      allProductsData={allProductsData}
      productnewdata={productnewdata}
      offerproductsdata={offerproductsdata}
      productbusquedadata= {productbusquedadata}
      handleAddToCart={handleAddToCart}
      handleDecrement={handleDecrement}
      handleIncrement={handleIncrement}
      quantity={quantity}
      deleteFromCart={deleteFromCart}
      complet ={complet}
      removeFromCart={removeFromCart}
      AddCart ={AddCart}
      
      />
     
      
    </>
  )
};

export default App
