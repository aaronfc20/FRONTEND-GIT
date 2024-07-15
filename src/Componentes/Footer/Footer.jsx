import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const Footer = () => {
  return (
    <section className='foot'>
        <div>
            <ul>
                <li><h2><Link to="/home">LA TIENDITA DEL ABUELO</Link></h2></li>
                <li>© 2010 - 2024</li>
                <li>Privacy - terms</li>
            </ul>

        </div>


        <div>
            <ul>
                <li><strong>Cuenta</strong></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/registro">Registro</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
            </ul>

        </div>


        <div>
            <ul>
                <li><strong>Productos</strong></li>
                <li><Link  to="/all-products">Más Vendidos</Link></li>
                <li><Link to="/new-product">Nuevos</Link></li>
                <li><Link to="/offer-product">Ofertas</Link></li>
            </ul>

        </div>


        <div>
            <ul>
                <li><strong>Ayuda</strong></li>
                <li><Link to="/Aboutus">Acerca de Nosotros</Link></li>
                <li><Link to="/sendpot">Póliticas de Envío</Link></li>
                <li><Link to="/questions">FAQ</Link></li>
            </ul>


        </div>


        <div className='redes'>
            <ul>
                <li><a href="" target="_blank"><img id='fb' src="img/sm/fb.png" alt="F"  /></a></li>
                <li><a href="" target="_blank"><img id='ig' src="img/sm/ig.png" alt="I"  /></a></li>
                <li><a href="" target="_blank"><img id='tw' src="img/sm/tw.png" alt="X"  /></a></li>
                <li><a href="" target="_blank"><img id='yt' src="img/sm/yt.png" alt="Y"  /></a></li>
            </ul>

        </div>





    </section>
  )
}

export default Footer