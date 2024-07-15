import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Homepage from "../Pages.jsx/homepage/Homepage";
import Error404 from "../Componentes/Error404/Error404";
import ScrollTOP from "../Componentes/ScrollTOP";
import Allproductspage from "../Pages.jsx/allproductspage/Allproductspage";
import Newproductpage from "../Pages.jsx/newproduct/Newproductpage"
import Offerpage from "../Pages.jsx/offerpage/Offerpage";
import Busquedapage from "../Pages.jsx/busquedapage/Busquedapage";
import Productsolopage from "../Pages.jsx/productsolopage/Productsolopage";
import Cartpage from "../Pages.jsx/cartpages/Cartpage";
import Checkoutpage from "../Pages.jsx/checkoutpage/Checkoutpage"
import Pedidocomplet from "../Pages.jsx/pedidocomplet/Pedidocomplet"
import Registerpage from "../Pages.jsx/registerpage/Registerpage"
import Loginpage from "../Pages.jsx/loginpage/Loginpage";
import Recuperacionpage from "../Pages.jsx/recuperacionpage/Recuperacionpage";
import Loginadminpage from "../Pages.jsx/Loginadminpage/Loginadminpage"
import Usuariologinpage from "../Pages.jsx/usuariologinpage/Usuariologinpage";
import Cartpageslogin from "../Pages.jsx/cartpageslogin/Cartpageslogin";
import Checkoutloginpage from "../Pages.jsx/checkoutloginpage/Checkoutloginpage"
import Adminloginpage from "../Pages.jsx/adminloginpage/Adminloginpage"
import Datosregistropage from "../Pages.jsx/datosregistropage/Datosregistropage";
import Passwordchangepage from "../Pages.jsx/passwordchangepage/Passwordchangepage"
import Cartpagesadmin from "../Pages.jsx/cartpagesadmin/Cartpagesadmin";
import Usuariosregistrados from "../Pages.jsx/usuariosregistrados/Usuariosregistrados"
import Detalleuserregister from "../Pages.jsx/detalleuserregisterpage/Detalleuserregister";
import Productosadminpage from "../Pages.jsx/Productosadminpage/Productosadminpage"
import Ordenespage from "../Pages.jsx/ordenespage/Ordenespage"
import Productadminpage from "../Pages.jsx/productadminpage/Productadminpage"
import Seriesadminpage from "../Pages.jsx/Seriesadminpage/Seriesadminpage";
import Mantenimientoseriespage from "../Pages.jsx/mantenimientoseriespage/Mantenimientoseriespage";

const AllRoutes = ({
  handleIncrement,
  quantity, 
  handleDecrement, 
  cartItems,
  allProductsData,
  productnewdata, 
  offerproductsdata,
  productbusquedadata, 
  handleAddToCart,
  deleteFromCart,
  checkOut,
  removeFromCart,
  AddCart,
  complet,
}) => {
  return (
    
    <>
      <BrowserRouter>
        <ScrollTOP/>
        <Routes>
            <Route
            path="/"
            element={
              <Homepage 
              cartItems={cartItems} allProductsData={allProductsData} productnewdata={productnewdata}
              />
              
            }
            />
          <Route
            path="/home"
            element={
              <Homepage 
              cartItems={cartItems} allProductsData={allProductsData} productnewdata={productnewdata}
              />
              
            }
          />
          <Route
            path="/all-products"
            element={
              <Allproductspage
                cartItems={cartItems}
                allProductsData={allProductsData}
                
              />
            }
          />
          <Route
            path="/new-product"
            element={
                <Newproductpage cartItems={cartItems} productnewdata={productnewdata} />
            }
          />

            <Route
            path="/offer-product"
            element={
                <Offerpage cartItems={cartItems} offerproductsdata={offerproductsdata} />
            }
          />
          <Route
            path="/busqueda"
            element={
                <Busquedapage productbusquedadata={productbusquedadata}/>
            }
          />
          <Route
            path="/all-products/:id"
            element={
              <Productsolopage
                cartItems={cartItems}
                allProductsData={allProductsData}
                handleAddToCart={handleAddToCart}
                handleIncrement ={handleIncrement}
                handleDecrement ={handleDecrement}
                quantity={quantity}  
                AddCart ={AddCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cartpage 
              cartItems ={cartItems}
              handleAddToCart={handleAddToCart}
              deleteFromCart={deleteFromCart}
              checkOut={checkOut}
              removeFromCart={removeFromCart}
              AddCart={AddCart}

              />
            }
          />

          
          <Route
            path="/checkout"
            element={
              <Checkoutpage cartItems={cartItems} complet={complet}/>
            }
          />

          <Route
            path="/completed"
            element={
              <Pedidocomplet allProductsData={allProductsData}/>
            }
          />  
          <Route
            path="/register"
            element={
              <Registerpage/>
            }
          />  
          <Route
            path="/login"
            element={
              <Loginpage/>
            }
          /> 
          <Route
            path="/loginadmin"
            element={
              <Loginadminpage/>
            }
          /> 
          <Route
            path="/recuperacion"
            element={
              <Recuperacionpage/>
            }
          />
          <Route
            path="/principalusuario"
            element={
              <Usuariologinpage />
            }
          />
          <Route
            path="/paneladmin"
            element={
              <Adminloginpage />
            }
          />
          <Route
            path="/series"
            element={
              <Mantenimientoseriespage />
            }
          />


          <Route
            path="/cartlogin"
            element={
              <Cartpageslogin 
              cartItems ={cartItems}
              handleAddToCart={handleAddToCart}
              deleteFromCart={deleteFromCart}
              checkOut={checkOut}
              removeFromCart={removeFromCart}
              AddCart={AddCart}

              />
            }
          />

          <Route
            path="/checkoutlogin"
            element={
              <Checkoutloginpage cartItems={cartItems} complet={complet}/>
            }
          />
          <Route
            path="/datosregistro"
            element={
              <Datosregistropage/>
            }
          />
          <Route
            path="/passwordchange"
            element={
              <Passwordchangepage/>
            }
          />
          <Route
            path="/cartadmin"
            element={
              <Cartpagesadmin
              cartItems={Object.values(cartItems)}
              handleAddToCart={handleAddToCart}
              deleteFromCart={deleteFromCart}
              checkOut={checkOut}
              removeFromCart={removeFromCart}
              AddCart={AddCart}
              />
            }
          />
          <Route
            path="/usuariosregister"
            element={
              <Usuariosregistrados/>
            }
          />
          <Route
            path="/detuserregister"
            element={
              <Detalleuserregister/>
            }
          />
          <Route
            path="/productadmin"
            element={
              <Productosadminpage/>
            }
          />
          <Route
            path="/orders"
            element={
              <Ordenespage/>
            }
          />
          <Route
            path="/productosadmin"
            element={
              <Productadminpage/>
            }
          />
          <Route
            path="/series"
            element={
              <Seriesadminpage/>
            }
          />
          <Route
            path="/agregarserie"
            element={
              <Seriesadminpage/>
            }
          />



          

          <Route path="*" element={<Error404 cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllRoutes;