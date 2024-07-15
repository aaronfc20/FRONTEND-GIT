import React from "react";
import Allproducts from "../../Componentes/Allproducts/Allproducts";
import Productnew from "../../Componentes/Allproducts/Productnew";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";

const Homepage = ({ allProductsData, addToCart, productnewdata }) => {
  return (
    <>
      <Header />
      <Allproducts allProductsData={allProductsData} addToCart={addToCart} />
      
      <Productnew productnewdata={productnewdata} />
      <Footer/>
    </>
  );
};

export default Homepage;

/*import React, { useState, useEffect } from 'react';
import Allproducts from "../../Componentes/Allproducts/Allproducts";
import Productnew from "../../Componentes/Allproducts/Productnew";
import Offerproducts from '../../Componentes/Allproducts/Offerproducts';
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer";
import productApi from '../../api/producto';


const Homepage = ({ addToCart }) => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [productnewdata, setProductnewdata] = useState([]);
  const [offerproductsdata, setOfferproductsdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await productApi.findAll();
      setAllProductsData(products);
      setProductnewdata(products.filter(product => product.isNew));
      setOfferproductsdata(products.filter(product => product.onOffer));
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Allproducts allProductsData={allProductsData} addToCart={addToCart} />
      <Productnew productnewdata={productnewdata} addToCart={addToCart} />
      <Offerproducts offerproductsdata={offerproductsdata} />
      <Footer />
    </div>
  );
};

export default Homepage;
*/