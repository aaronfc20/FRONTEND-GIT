import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import './Formcompra.css';  

const Formcompra = ({ cartItems }) => {
    const [shippingOption, setShippingOption] = useState('Option 1'); 
    const [shippingCost, setShippingCost] = useState(10); 


    const [qrPayment, setQrPayment] = useState(true); 
    const [creditCardPayment, setCreditCardPayment] = useState(false); 


    const [address, setAddress] = useState({
        Linea1: '',
        Linea2: '',
        Distrito: '',
        Ciudad: '',
        País: ''
    });
    const [cardDetails, setCardDetails] = useState({
        nombreTarjeta: '',
        numeroTarjeta: '',
        expiracion: '',
        codigoSeguridad: ''
    });


    const navigate = useNavigate();

    

    const handleCheckboxChange = (e) => {
        const option = e.target.value;   
        setShippingOption(option);
        setShippingCost(option === 'Option 1' ? 10 : 17);
    };

    const handlePaymentCheckboxChange = (e) => {
        const paymentMethod = e.target.name;
        if (paymentMethod === 'qr') {
            setQrPayment(true);
            setCreditCardPayment(false);
        } else {
            setQrPayment(false);
            setCreditCardPayment(true);
        }
    };

    

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }));
    };

    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails((prevCardDetails) => ({
            ...prevCardDetails,
            [name]: value
        }));
    };

    const validateForm = () => {
        const addressComplete = Object.values(address).every(field => field.trim() !== '');
        const paymentComplete = qrPayment || (creditCardPayment && Object.values(cardDetails).every(field => field.trim() !== ''));
        return addressComplete && paymentComplete;
    };

    const handleCompleteOrder = (e) => {
        if (validateForm()) {
            navigate("/completed");
        } else {
            alert("Por favor, complete todos los campos requeridos.");
        }
    };




    const totalPrice = cartItems.reduce(
        (price, item) => price + item.qty * item.price,
        0
    );

    return (
        <div className="form-container">
            <h2>¡Casi listo! Tu orden no estará completa hasta que revises y presiones el botón "Completar orden" al final de la página.</h2>
            <div className="section-header">
                <h3>Datos de compra</h3>
            </div>

            <div className="form-section">
                <div>
                    <h3>Dirección de envío</h3>
                    <form>
                        <label>
                            <input type="text" name="Linea1" placeholder="Linea 1" value={address.Linea1} onChange={handleAddressChange} />
                        </label>
                        <label>
                            <input type="text" name="Linea2" placeholder="Linea 2" value={address.Linea2} onChange={handleAddressChange} />
                        </label>
                        <label>
                            <input type="text" name="Distrito" placeholder="Distrito" value={address.Distrito} onChange={handleAddressChange} />
                        </label>
                        <label>
                            <input type="text" name="Ciudad" placeholder="Ciudad" value={address.Ciudad} onChange={handleAddressChange} />
                        </label>
                        <label>
                            <input type="text" name="País" placeholder="País" value={address.País} onChange={handleAddressChange} />
                        </label>
                    </form>
                </div>
                <div>
                    <h3>Pago</h3>
                    <div>
                        <input type="checkbox" name="qr" onChange={handlePaymentCheckboxChange} checked={qrPayment} />
                        Pago con código QR
                    </div>
                    <div>
                        <input type="checkbox" name="creditCard" onChange={handlePaymentCheckboxChange} checked={creditCardPayment} />
                        Pago con tarjeta de crédito
                    </div>
                    <div className="payment-section">
                        <label>
                            <input type="text" name="nombreTarjeta" placeholder="Nombre en la tarjeta" disabled={!creditCardPayment} value={cardDetails.nombreTarjeta} onChange={handleCardDetailsChange} />
                        </label>
                        <label>
                            <input type="text" name="numeroTarjeta" placeholder="Número de tarjeta" disabled={!creditCardPayment} value={cardDetails.numeroTarjeta} onChange={handleCardDetailsChange} />
                        </label>
                        <div>
                        <label>
                            <input type="text" name="expiracion" placeholder="Fecha de expiración" disabled={!creditCardPayment} value={cardDetails.expiracion} onChange={handleCardDetailsChange} />
                        </label>
                        <label>
                            <input type="text" name="codigoSeguridad" placeholder="Código de seguridad" disabled={!creditCardPayment} value={cardDetails.codigoSeguridad} onChange={handleCardDetailsChange} />
                        </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shipping-options">
                <h3 style={{fontSize:"25px"}}>Método de Envío</h3>

                <div>
                <label>
                    
                    <input type="radio" name="shippingOption" value="Option 1" onChange={handleCheckboxChange} checked={shippingOption === 'Option 1'} />
                Envío Económico - S/10.00
                </label>
                <label>
                    
                    <input type="radio" name="shippingOption" value="Option 2" onChange={handleCheckboxChange} checked={shippingOption === 'Option 2'} />
                Envío prioritario (5 a 10 días) - S/17.00
                </label>
                </div>
            </div>

            <div className="cart-summary">
                <div>
                    <h3>Items en Pedido:</h3>
                    {cartItems.map((item) => {
                        const productQty = item.price * item.qty;
                        return (
                            <div className="cart-details" >
                                <div className="cart-list">
                                    <h4>{item.qty}x {item.name} - S/{item.price} S/{productQty}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <h3>Resumen de Orden:</h3>
                    <div className="cart-details">
                        <h4>Subtotal: S/{totalPrice}.00</h4>
                        <h4>Envío: S/{shippingCost}.00</h4>
                        <h4>Impuesto: S/18.00</h4>
                        <h4>Total: S/{18 + totalPrice + shippingCost}.00</h4>
                    </div>
                    <div className="complete-order-button">
                        <button onClick={handleCompleteOrder}>Completar Orden</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Formcompra;


/*
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import compraApi from '../../api/compra'; // Asegúrate de que la ruta sea correcta
import './Formcompra.css';  

const Formcompra = ({ cartItems }) => {
    const [shippingOption, setShippingOption] = useState('Option 1'); 
    const [shippingCost, setShippingCost] = useState(10); 
    const [qrPayment, setQrPayment] = useState(true); 
    const [creditCardPayment, setCreditCardPayment] = useState(false); 

    const [address, setAddress] = useState({
        Linea1: '',
        Linea2: '',
        Distrito: '',
        Ciudad: '',
        País: ''
    });
    const [cardDetails, setCardDetails] = useState({
        nombreTarjeta: '',
        numeroTarjeta: '',
        expiracion: '',
        codigoSeguridad: ''
    });

    const navigate = useNavigate();

    const handleCheckboxChange = (e) => {
        const option = e.target.value;   
        setShippingOption(option);
        setShippingCost(option === 'Option 1' ? 10 : 17);
    };

    const handlePaymentCheckboxChange = (e) => {
        const paymentMethod = e.target.name;
        if (paymentMethod === 'qr') {
            setQrPayment(true);
            setCreditCardPayment(false);
        } else {
            setQrPayment(false);
            setCreditCardPayment(true);
        }
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }));
    };

    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails((prevCardDetails) => ({
            ...prevCardDetails,
            [name]: value
        }));
    };

    const validateForm = () => {
        const addressComplete = Object.values(address).every(field => field.trim() !== '');
        const paymentComplete = qrPayment || (creditCardPayment && Object.values(cardDetails).every(field => field.trim() !== ''));
        return addressComplete && paymentComplete;
    };

    const handleCompleteOrder = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const orderData = {
                cartItems,
                address,
                paymentMethod: qrPayment ? 'QR' : 'Credit Card',
                cardDetails: creditCardPayment ? cardDetails : null,
                shippingOption,
                shippingCost,
                totalPrice: totalPrice + shippingCost + 18 // Incluyendo el impuesto
            };
            try {
                await compraApi.create(orderData);
                toast.success("Orden completada con éxito!");
                navigate("/completed");
            } catch (error) {
                toast.error("Hubo un error al completar la orden. Inténtalo de nuevo.");
            }
        } else {
            toast.error("Por favor, complete todos los campos requeridos.");
        }
    };

    const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price, 0);

    return (
        <div className="form-container">
            <h2>¡Casi listo! Tu orden no estará completa hasta que revises y presiones el botón "Completar orden" al final de la página.</h2>
            <div className="section-header">
                <h3>Datos de compra</h3>
            </div>

            <div className="form-section">
                <div>
                    <h3>Dirección de envío</h3>
                    <form>
                        <label>
                            <input type="text" name="Linea1" placeholder="Linea 1" value={address.Linea1} onChange={handleAddressChange} />
                        </label>
                        <label>
                            <input type="text" name="Linea2" placeholder="Linea 2" value={address.Linea2} onChange={handleAddressChange} />
                        </label>
                        <label>
                            <input type="text" name="Distrito" placeholder="Distrito" value={address.Distrito} onChange={handleAddressChange} />
                        </label>
                        <label>
                            <input type="text" name="Ciudad" placeholder="Ciudad" value={address.Ciudad} onChange={handleAddressChange} />
                        </label>
                        <label>
                            <input type="text" name="País" placeholder="País" value={address.País} onChange={handleAddressChange} />
                        </label>
                    </form>
                </div>
                <div>
                    <h3>Pago</h3>
                    <div>
                        <input type="checkbox" name="qr" onChange={handlePaymentCheckboxChange} checked={qrPayment} />
                        Pago con código QR
                    </div>
                    <div>
                        <input type="checkbox" name="creditCard" onChange={handlePaymentCheckboxChange} checked={creditCardPayment} />
                        Pago con tarjeta de crédito
                    </div>
                    <div className="payment-section">
                        <label>
                            <input type="text" name="nombreTarjeta" placeholder="Nombre en la tarjeta" disabled={!creditCardPayment} value={cardDetails.nombreTarjeta} onChange={handleCardDetailsChange} />
                        </label>
                        <label>
                            <input type="text" name="numeroTarjeta" placeholder="Número de tarjeta" disabled={!creditCardPayment} value={cardDetails.numeroTarjeta} onChange={handleCardDetailsChange} />
                        </label>
                        <div>
                        <label>
                            <input type="text" name="expiracion" placeholder="Fecha de expiración" disabled={!creditCardPayment} value={cardDetails.expiracion} onChange={handleCardDetailsChange} />
                        </label>
                        <label>
                            <input type="text" name="codigoSeguridad" placeholder="Código de seguridad" disabled={!creditCardPayment} value={cardDetails.codigoSeguridad} onChange={handleCardDetailsChange} />
                        </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shipping-options">
                <h3 style={{fontSize:"25px"}}>Método de Envío</h3>

                <div>
                <label>
                    
                    <input type="radio" name="shippingOption" value="Option 1" onChange={handleCheckboxChange} checked={shippingOption === 'Option 1'} />
                Envío Económico - S/10.00
                </label>
                <label>
                    
                    <input type="radio" name="shippingOption" value="Option 2" onChange={handleCheckboxChange} checked={shippingOption === 'Option 2'} />
                Envío prioritario (5 a 10 días) - S/17.00
                </label>
                </div>
            </div>

            <div className="cart-summary">
                <div>
                    <h3>Items en Pedido:</h3>
                    {cartItems.map((item) => {
                        const productQty = item.price * item.qty;
                        return (
                            <div className="cart-details" key={item.id}>
                                <div className="cart-list">
                                    <h4>{item.qty}x {item.name} - S/{item.price} S/{productQty}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <h3>Resumen de Orden:</h3>
                    <div className="cart-details">
                        <h4>Subtotal: S/{totalPrice}.00</h4>
                        <h4>Envío: S/{shippingCost}.00</h4>
                        <h4>Impuesto: S/18.00</h4>
                        <h4>Total: S/{18 + totalPrice + shippingCost}.00</h4>
                    </div>
                    <div className="complete-order-button">
                        <button onClick={handleCompleteOrder}>Completar Orden</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Formcompra;
*/