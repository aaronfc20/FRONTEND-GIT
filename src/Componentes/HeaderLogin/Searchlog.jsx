

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Search = ({productbusquedadata}) => {

  const history = useNavigate();
  const handleButtonClick = () => {
  history('/busquedalogin');
  };

  const [filteredProducts, setFilteredProducts] = useState(productbusquedadata);
  const [searchVisible, setSearchVisible] = useState(true);


  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOption === 'asc') {
        return a.price - b.price;
      } else if (sortOption === 'desc') {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  const getProductStyle = (product) => {
    return product.source === 'original' ? 'original-product-style' : 'new-product-style';
  };

  return (
    <>
      <section className="search">
      
        <div className="c_flex2">
          {searchVisible ? (
            <div className="barra">
            
              <input id="searchInput" type="text" placeholder="Buscar productos por nombres..."  />
              <button onClick={handleButtonClick}>Buscar</button>
            
            </div>
          ) : (
            <div className="sort-options">
              <label htmlFor="sort">Ordenar por precio: </label>
              <select id="sort" onChange={handleSortChange}>
                <option value="" disabled selected>Elegir opción...</option>
                <option value="asc">Menor a Mayor</option>
                <option value="desc">Mayor a Menor</option>
              </select>
            </div>
          )}
        </div>
        <div>
          {filteredProducts && filteredProducts.map((product, idx) => (
            <div key={idx} className={`${getProductStyle(product)}`}>
              <img src={product.img} alt="" />
              <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <div>
                  <p>${product.price}.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </>
  );
};

export default Search;
