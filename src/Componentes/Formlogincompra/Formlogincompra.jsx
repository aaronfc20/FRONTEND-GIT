import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";

const Formcompra = ({ cartItems }) => {
    const [shippingOption, setShippingOption] = useState('Option 1');
    const [shippingCost, setShippingCost] = useState(10);
    const [qrPayment, setQrPayment] = useState(true);
    const [creditCardPayment, setCreditCardPayment] = useState(false);
    
    const [cardDetails, setCardDetails] = useState({
        nombreTarjeta: '',
        numeroTarjeta: '',
        expiracion: '',
        codigoSeguridad: ''
    });

    const navigate = useNavigate();

    const handleCheckboxChange = (e) => {
        const option = e.target.value;
        if (shippingOption !== option) {
            setShippingOption(option);
            setShippingCost(option === 'Option 1' ? 10 : 17);
        }
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

    
    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails((prevCardDetails) => ({
            ...prevCardDetails,
            [name]: value
        }));
    };

    const validateForm = () => {
        
        const paymentComplete = qrPayment || (creditCardPayment && Object.values(cardDetails).every(field => field.trim() !== ''));
        return  paymentComplete;
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
        <>
            <h2>¡Casi listo! Tu orden no estará completa hasta que revises y presiones el botón "Completar orden" al final de la página.</h2>
            <div>
                <div>
                    <h3><strong>Datos de compra</strong></h3>
                </div>

                <div>
                    <div>
                        <h3><strong>Dirección de envío</strong></h3>

                        <div>
                            <p>Jiron huiracocha 2081 Departamento 922</p>
                            <br />
                            <p>Jesús Mería, Lima</p>
                            <p>Lima</p>
                            <p>Perú</p>
                        </div>
                    </div>
                    <div>
                        <h3><strong>Pago</strong></h3>
                        <label>
                            Pago con código QR
                            <input type="checkbox" name="qr" onChange={handlePaymentCheckboxChange} checked={qrPayment} />
                        </label>
                        <label>
                            Pago con tarjeta de crédito
                            <input type="checkbox" name="creditCard" onChange={handlePaymentCheckboxChange} checked={creditCardPayment} />
                        </label>
                        <label>
                            <input name="nombreTarjeta" placeholder="Nombre en la tarjeta" disabled={!creditCardPayment} value={cardDetails.nombreTarjeta} onChange={handleCardDetailsChange} />
                        </label>
                        <label>
                            <input name="numeroTarjeta" placeholder="Número de tarjeta" disabled={!creditCardPayment} value={cardDetails.numeroTarjeta} onChange={handleCardDetailsChange} />
                        </label>
                        <div>
                            <label>
                                <input name="expiracion" placeholder="Fecha de expiración" disabled={!creditCardPayment} value={cardDetails.expiracion} onChange={handleCardDetailsChange} />
                            </label>
                            <label>
                                <input name="codigoSeguridad" placeholder="Código de seguridad" disabled={!creditCardPayment} value={cardDetails.codigoSeguridad} onChange={handleCardDetailsChange} />
                            </label>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Método de Envío</h3>
                    <label>
                        Option 1
                        <input type="radio" name="shippingOption" value="Option 1" onChange={handleCheckboxChange} checked={shippingOption === 'Option 1'} />
                    </label>
                    <label>
                        Option 2
                        <input type="radio" name="shippingOption" value="Option 2" onChange={handleCheckboxChange} checked={shippingOption === 'Option 2'} />
                    </label>
                </div>

                <div>
                    <div>
                        <strong>Items en Pedido:</strong>
                    </div>
                    <div className="cart-details">
                        {cartItems.map((item) => {
                            const productQty = item.price * item.qty;
                            return (
                                <div className="cart-list product d_flex cart-responsive" key={item.id}>
                                    <div className="cart-details">
                                        <h3>{item.qty}</h3>
                                        <h3>{item.name}</h3>
                                        <h4>
                                            {item.price}.00 * {item.qty}
                                        </h4>
                                        <span>${productQty}.00</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <strong>Resumen de Orden</strong>
                        <div className="d_flex">
                            <h3>Subtotal: ${totalPrice}.00</h3>
                            <h3>Envío: ${shippingCost}.00</h3>
                            <h3>Impuesto: 18.00</h3>
                            <h3>Total: ${18 + totalPrice + shippingCost}.00</h3>
                        </div>
                    </div>
                    <button onClick={handleCompleteOrder}>Completar Orden</button>
                </div>
            </div>
        </>
    );
};

export default Formcompra;


/*
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";  

const Formcompra = ({ cartItems }) => {
    const [shippingOption, setShippingOption] = useState('Option 1');
    const [shippingCost, setShippingCost] = useState(10);
    const [qrPayment, setQrPayment] = useState(true);
    const [creditCardPayment, setCreditCardPayment] = useState(false);

    const [cardDetails, setCardDetails] = useState({
        nombreTarjeta: '',
        numeroTarjeta: '',
        expiracion: '',
        codigoSeguridad: ''
    });

    const navigate = useNavigate();

    // Manejar cambios en las opciones de envío
    const handleCheckboxChange = (e) => {
        const option = e.target.value;
        if (shippingOption !== option) {
            setShippingOption(option);
            setShippingCost(option === 'Option 1' ? 10 : 17);
        }
    };

    // Manejar cambios en las opciones de pago
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

    // Manejar cambios en los detalles de la tarjeta
    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails((prevCardDetails) => ({
            ...prevCardDetails,
            [name]: value
        }));
    };

    // Validar el formulario
    const validateForm = () => {
        const paymentComplete = qrPayment || (creditCardPayment && Object.values(cardDetails).every(field => field.trim() !== ''));
        return paymentComplete;
    };

    // Completar la orden
    const handleCompleteOrder = (e) => {
        if (validateForm()) {
            // Aquí puedes llamar a tu API para guardar la orden
            // Por ejemplo: await compraApi.create(orderData);
            toast.success("Orden completada con éxito!");  
            navigate("/completed");
        } else {
            toast.error("Por favor, complete todos los campos requeridos.");  
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
                    <div>
                        <p>Jiron huiracocha 2081 Departamento 922</p>
                        <br />
                        <p>Jesús Mería, Lima</p>
                        <p>Lima</p>
                        <p>Perú</p>
                    </div>
                </div>
                <div>
                    <h3>Pago</h3>
                    <label>
                        Pago con código QR
                        <input type="checkbox" name="qr" onChange={handlePaymentCheckboxChange} checked={qrPayment} />
                    </label>
                    <label>
                        Pago con tarjeta de crédito
                        <input type="checkbox" name="creditCard" onChange={handlePaymentCheckboxChange} checked={creditCardPayment} />
                    </label>
                    {creditCardPayment && (
                        <>
                            <label>
                                <input name="nombreTarjeta" placeholder="Nombre en la tarjeta" value={cardDetails.nombreTarjeta} onChange={handleCardDetailsChange} />
                            </label>
                            <label>
                                <input name="numeroTarjeta" placeholder="Número de tarjeta" value={cardDetails.numeroTarjeta} onChange={handleCardDetailsChange} />
                            </label>
                            <div>
                                <label>
                                    <input name="expiracion" placeholder="Fecha de expiración" value={cardDetails.expiracion} onChange={handleCardDetailsChange} />
                                </label>
                                <label>
                                    <input name="codigoSeguridad" placeholder="Código de seguridad" value={cardDetails.codigoSeguridad} onChange={handleCardDetailsChange} />
                                </label>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="shipping-options">
                <h3>Método de Envío</h3>
                <label>
                    Envío Económico - S/10.00
                    <input type="radio" name="shippingOption" value="Option 1" onChange={handleCheckboxChange} checked={shippingOption === 'Option 1'} />
                </label>
                <label>
                    Envío prioritario (5 a 10 días) - S/17.00
                    <input type="radio" name="shippingOption" value="Option 2" onChange={handleCheckboxChange} checked={shippingOption === 'Option 2'} />
                </label>
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
