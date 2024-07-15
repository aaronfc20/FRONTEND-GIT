import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link,  useLocation, useNavigate} from 'react-router-dom';
import "./productbusqueda.css";

const Productbusqueda = ({ productbusquedadata }) => {
  const [filteredProducts, setFilteredProducts] = useState(productbusquedadata);
  const [sortOption, setSortOption] = useState(""); 

  const handleSortChange = (event) => {
    const option = event.target.value;
    setSortOption(option);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (option === 'asc') {
        return a.price - b.price;
      } else if (option === 'desc') {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };
  
 
    const history = useLocation ();
    const queryParams = new URLSearchParams(history.search);
    const productName = queryParams.get('productName')?.toLowerCase();
  
  
  const filteredResults = filteredProducts.filter(result => result.name.toLowerCase() === productName);

  
  return (
    <>
    <div className='junt'>
      <div className="sort-options">
        <label htmlFor="sort" style={{marginTop:'15px',marginRight:'10px'}}>Ordenar por precio: </label>
        <select style={{marginTop:'8px',marginRight:'20px'}} id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="">   ----------------</option>
          <option value="asc">Menor a Mayor</option>
          <option value="desc">Mayor a Menor</option>
        </select>
      </div>
      
        <h1 className='cuabusq'>Resultados de Búsqueda</h1>
      
      <div  className='contaiii'>
        {filteredResults.map((product, index) => (
          <div key={index} className='rec'>
            <div className='fle'>
              <div>
                <img src={product.img} alt="product-image" />
              </div>
              <div>
                <h3 style={{marginRight:'20px'}}>{product.name}</h3>
                <h6 style={{marginRight:'20px'}}>{product.serie}</h6>
                <Link to={`/all-products/${product.id}`}>
                  <h5 style={{marginRight:'20px'}}>Click here for more Info</h5>
                </Link>
                <h3 id='nbr' style={{marginRight:'20px'}}>S/{product.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Productbusqueda;

/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import './productbusqueda.css';

const Productbusqueda = ({ productbusquedadata }) => {
  const [filteredProducts, setFilteredProducts] = useState(productbusquedadata);
  const [sortOption, setSortOption] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('productName')?.toLowerCase();

  useEffect(() => {
    const results = productbusquedadata.filter(product =>
      product.name.toLowerCase().includes(productName)
    );
    setFilteredProducts(results);
  }, [productName, productbusquedadata]);

  const handleSortChange = (event) => {
    const option = event.target.value;
    setSortOption(option);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (option === 'asc') {
        return a.price - b.price;
      } else if (option === 'desc') {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className='junt'>
      <div className="sort-options">
        <label htmlFor="sort" style={{ marginTop: '15px', marginRight: '10px' }}>Ordenar por precio: </label>
        <select style={{ marginTop: '8px', marginRight: '20px' }} id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="">   ----------------</option>
          <option value="asc">Menor a Mayor</option>
          <option value="desc">Mayor a Menor</option>
        </select>
      </div>

      <h1 className='cuabusq'>Resultados de Búsqueda</h1>

      <div className='contaiii'>
        {filteredProducts.map((product, index) => (
          <div key={index} className='rec'>
            <div className='fle'>
              <div>
                <img src={product.img} alt="product" />
              </div>
              <div>
                <h3 style={{ marginRight: '20px' }}>{product.name}</h3>
                <h6 style={{ marginRight: '20px' }}>{product.serie}</h6>
                <Link to={`/all-products/${product.id}`}>
                  <h5 style={{ marginRight: '20px' }}>Click here for more Info</h5>
                </Link>
                <h3 id='nbr' style={{ marginRight: '20px' }}>S/{product.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productbusqueda;
*/