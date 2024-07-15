import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Search = ({productbusquedadata}) => {

  const [productName, setProductName] = useState('');
  const history = useNavigate();

  const handleSearch = () => {
    history(`/busqueda?productName=${productName}`);
  };



  return (
    <>
    <section className="search">
      <div className="c_flex2">
        <div className="barra">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Search;
