import React from 'react'
import Productbusqueda from '../../Componentes/productbusqueda/Productbusqueda'
import HeaderB from '../../Componentes/HeaderB/Header'
import Footer from '../../Componentes/Footer/Footer'
import Barrapagbus from '../../Componentes/Barrapagbus/Barrapagbus'


const Busqueda = ({productbusquedadata}) => {
  return (
    <>
    <HeaderB />
    <Productbusqueda productbusquedadata={productbusquedadata}/>
    <Barrapagbus/>
    <Footer/>
    
    </>
  )
}

export default Busqueda