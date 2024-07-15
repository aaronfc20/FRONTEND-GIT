import React from 'react';
import './barrapagbus.css';  

const Barrapagbus = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', background: 'rgb(202, 196, 196)',margin:'0' }}>
      <ul className="pagination">
        <li><a href="">Anterior</a></li>
        <li className="page-number"><a href="">1</a></li>
        <li className="page-number"><a href="">2</a></li>
        <li className="page-number"><a href="">3</a></li>
        <li className="page-number"><a href="">4</a></li>
        <li className="page-number"><a href="">5</a></li>
        <li><a href="">...</a></li>
        <li className="page-number"><a href="">11</a></li>
        <li><a href="">Siguiente</a></li>
      </ul>
    </div>
  );
}

export default Barrapagbus;
