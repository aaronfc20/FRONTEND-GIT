import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import "./cartlogin.css";

const Cartlogin= ({ cartItems, AddCart, deleteFromCart, removeFromCart }) => {
  const [savedItems, setSavedItems] = useState([]);
  const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("El carrito está vacío");
    } else {
      navigate("/checkout");
    }
  };

  const handleSaveForLater = (item) => {
    setSavedItems([...savedItems, item]);
    removeFromCart(item);
    toast.success("Guardado para después");
  };

  const handleMoveToCart = (item) => {
    AddCart(item);
    setSavedItems(savedItems.filter(savedItem => savedItem.id !== item.id));
  };

  const handleRemoveSavedItem = (item) => {
    setSavedItems(savedItems.filter(savedItem => savedItem.id !== item.id));
    toast.success("Artículo eliminado de Guardado para después");
  };

  return (
    <section className="cart-container">
      <h1>{cartItems.length} Items en tu carrito de Compras</h1>
      <h2 className="cuadro">Items Disponibles para Envío</h2>
      <div className="cart-items">
        {cartItems.length === 0 && (
          <h1>No hay productos en el carro</h1>
        )}

        {cartItems.map((item) => {
          const productQty = item.price * item.qty;
          return (
            <div  className="cart-row">
              <div className="cart-item-image">
                <img src={item.img} alt="no hay imagen" />
              </div>

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <div className="cart-item-actions">
                  <button onClick={() => removeFromCart(item)}>Eliminar</button>
                  <p>|</p>
                  <button onClick={() => handleSaveForLater(item)}>Guardar para después</button>
                </div>
              </div>

              <div className="cart-item-qty">
                <div>
                <button onClick={() => AddCart(item)} className="qty-button">
                  +
                </button>
                </div>
                <div>
                <span>{item.qty}</span>
                </div>
                <div>
                <button onClick={() => deleteFromCart(item)} className="qty-button">
                  -
                </button>
                </div>
              </div>

              <div className="cart-item-pricing">
                <div>
                  <strong>Precio</strong>
                  <h4>S/ {item.price}.00</h4>
                </div>
                <div>
                  <strong>Subtotal</strong>
                  <h4>S/ {productQty}.00</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart-total">
        <h3>Total: S/ {totalPrice}.00</h3>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
      <h2 className="cuadro" > Guardado para después</h2>
      <div className="saved-items">
        
        {savedItems.map((item) => (
          <div key={item.id} className="cart-row">
            <div className="cart-item-image">
                <img src={item.img} alt="no hay imagen" />
              </div>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <div className="cart-item-actions">
              
                <button onClick={() => handleRemoveSavedItem(item)}>Eliminar</button>
                <p>|</p>
                <button onClick={() => handleMoveToCart(item)}>Mover al carrito</button>
                
              </div>
            </div>

            <div className="cart-item-qty">
              <span>{item.qty}</span>
            </div>

            <div className="cart-item-pricing">
              <div>
                <strong>Precio</strong>
                <h4>S/ {item.price}.00</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Cartlogin;

/*
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import cartApi from '../../api/cart'; // Asegúrate de que la ruta sea correcta
import "./cartlogin.css";

const Cartlogin = ({ cartItems, AddCart, deleteFromCart, removeFromCart }) => {
  const [savedItems, setSavedItems] = useState([]);
  const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("El carrito está vacío");
    } else {
      navigate("/checkout");
    }
  };

  const handleSaveForLater = async (item) => {
    setSavedItems([...savedItems, item]);
    removeFromCart(item);
    await cartApi.saveForLater(item);
    toast.success("Guardado para después");
  };

  const handleMoveToCart = async (item) => {
    AddCart(item);
    setSavedItems(savedItems.filter(savedItem => savedItem.id !== item.id));
    await cartApi.moveToCart(item);
  };

  const handleRemoveSavedItem = async (item) => {
    setSavedItems(savedItems.filter(savedItem => savedItem.id !== item.id));
    await cartApi.removeFromSaved(item);
    toast.success("Artículo eliminado de Guardado para después");
  };

  return (
    <section className="cart-container">
      <h1>{cartItems.length} Items en tu carrito de Compras</h1>
      <h2 className="cuadro">Items Disponibles para Envío</h2>
      <div className="cart-items">
        {cartItems.length === 0 && (
          <h1>No hay productos en el carro</h1>
        )}

        {cartItems.map((item) => {
          const productQty = item.price * item.qty;
          return (
            <div key={item.id} className="cart-row">
              <div className="cart-item-image">
                <img src={item.img} alt="no hay imagen" />
              </div>

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <div className="cart-item-actions">
                  <button onClick={() => removeFromCart(item)}>Eliminar</button>
                  <p>|</p>
                  <button onClick={() => handleSaveForLater(item)}>Guardar para después</button>
                </div>
              </div>

              <div className="cart-item-qty">
                <div>
                  <button onClick={() => AddCart(item)} className="qty-button">
                    +
                  </button>
                </div>
                <div>
                  <span>{item.qty}</span>
                </div>
                <div>
                  <button onClick={() => deleteFromCart(item)} className="qty-button">
                    -
                  </button>
                </div>
              </div>

              <div className="cart-item-pricing">
                <div>
                  <strong>Precio</strong>
                  <h4>S/ {item.price}.00</h4>
                </div>
                <div>
                  <strong>Subtotal</strong>
                  <h4>S/ {productQty}.00</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart-total">
        <h3>Total: S/ {totalPrice}.00</h3>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
      <h2 className="cuadro">Guardado para después</h2>
      <div className="saved-items">
        {savedItems.map((item) => (
          <div key={item.id} className="cart-row">
            <div className="cart-item-image">
              <img src={item.img} alt="no hay imagen" />
            </div>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveSavedItem(item)}>Eliminar</button>
                <p>|</p>
                <button onClick={() => handleMoveToCart(item)}>Mover al carrito</button>
              </div>
            </div>

            <div className="cart-item-qty">
              <span>{item.qty}</span>
            </div>

            <div className="cart-item-pricing">
              <div>
                <strong>Precio</strong>
                <h4>S/ {item.price}.00</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cartlogin;
*/