import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './agregarserie.css';  

const Agregarserie = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className="containerrr">
                <div className="sidebar">
                    <h3>Admin</h3>
                    <ul>
                        <Link to="/paneladmin"><li>Dashboard</li></Link>
                        <Link to="/usuariosregister"><li>Usuarios registrados</li></Link>
                        <Link to="/productosadmin"><li>Productos</li></Link>
                        <Link to="/orders"><li>Ordenes</li></Link>
                        <Link to="/productsell"><li>Productos más vendidos</li></Link>
                        <Link to="/series"><li>Series</li></Link>
                    </ul>
                </div>
                <div className="main-content">
                    <h3><strong>Agregar serie</strong></h3>
                    <div className="form-group">
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder='Nombre' />
                        <input type="text" placeholder='Descripción' />
                    </div>

                    <div>
                        <div>
                            <h4>Productos en la serie</h4>
                            <button onClick={openModal}>+</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Modal de Página"
                                className="modal-content"
                            >
                                <div className="modal-header">
                                    <h2><strong>Agregar Producto</strong></h2>
                                </div>
                                <div className="form-group">
                                    <input type="text" />
                                    <button>Buscar</button>
                                </div>
                                <div className="modal-product-list">
                                    <ul>
                                        <li>ID</li>
                                        <li>Descripción</li>
                                        <li>Acción</li>
                                    </ul>
                                    <ul>
                                        <li>ID</li>
                                        <li>Manga dragon ball</li>
                                        <li><a href="">Agregar</a></li>
                                    </ul>
                                </div>
                                <button onClick={closeModal}>Cerrar</button>
                            </Modal>
                        </div>
                        <div className="product-list">
                            <ul>
                                <li>ID</li>
                                <li>Descripción</li>
                                <li>Acción</li>
                            </ul>
                            <ul>
                                <li>ID</li>
                                <li>Manga dragon ball</li>
                                <li><a href="">Remover</a></li>
                            </ul>
                            <ul>
                                <li>ID</li>
                                <li>Manga dragon ball</li>
                                <li><a href="">Remover</a></li>
                            </ul>
                        </div>
                    </div>
                    <button>Guardar</button>
                </div>
            </div>
            
        </>
    );
};

export default Agregarserie;

/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import serieApi from '../../api/serie'; // Asegúrate de que la ruta sea correcta
import productApi from '../../api/producto'; // Asegúrate de que la ruta sea correcta
import './agregarserie.css';  

const Agregarserie = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [serieName, setSerieName] = useState('');
    const [serieDescription, setSerieDescription] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSearch = async () => {
        const results = await productApi.findByName(searchQuery);
        setSearchResults(results);
    };

    const handleAddProduct = (product) => {
        setSelectedProducts([...selectedProducts, product]);
    };

    const handleRemoveProduct = (productId) => {
        setSelectedProducts(selectedProducts.filter(product => product.id !== productId));
    };

    const handleSave = async () => {
        const newSerie = {
            name: serieName,
            description: serieDescription,
            products: selectedProducts.map(product => product.id),
        };
        await serieApi.create(newSerie);
        // Redirige o muestra un mensaje de éxito
    };

    return (
        <>
            <div className="containerrr">
                <div className="sidebar">
                    <h3>Admin</h3>
                    <ul>
                        <Link to="/paneladmin"><li>Dashboard</li></Link>
                        <Link to="/usuariosregister"><li>Usuarios registrados</Link></li>
                        <Link to="/productosadmin"><li>Productos</Link></li>
                        <Link to="/orders"><li>Ordenes</Link></li>
                        <Link to="/productsell"><li>Productos más vendidos</Link></li>
                        <Link to="/series"><li>Series</Link></li>
                    </ul>
                </div>
                <div className="main-content">
                    <h3><strong>Agregar serie</strong></h3>
                    <div className="form-group">
                        <input type="text" value={serieName} onChange={(e) => setSerieName(e.target.value)} placeholder='Nombre' />
                        <input type="text" value={serieDescription} onChange={(e) => setSerieDescription(e.target.value)} placeholder='Descripción' />
                    </div>

                    <div>
                        <div>
                            <h4>Productos en la serie</h4>
                            <button onClick={openModal}>+</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Modal de Página"
                                className="modal-content"
                            >
                                <div className="modal-header">
                                    <h2><strong>Agregar Producto</strong></h2>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                    <button onClick={handleSearch}>Buscar</button>
                                </div>
                                <div className="modal-product-list">
                                    <ul>
                                        <li>ID</li>
                                        <li>Descripción</li>
                                        <li>Acción</li>
                                    </ul>
                                    {searchResults.map(product => (
                                        <ul key={product.id}>
                                            <li>{product.id}</li>
                                            <li>{product.description}</li>
                                            <li><a href="#" onClick={() => handleAddProduct(product)}>Agregar</a></li>
                                        </ul>
                                    ))}
                                </div>
                                <button onClick={closeModal}>Cerrar</button>
                            </Modal>
                        </div>
                        <div className="product-list">
                            <ul>
                                <li>ID</li>
                                <li>Descripción</li>
                                <li>Acción</li>
                            </ul>
                            {selectedProducts.map(product => (
                                <ul key={product.id}>
                                    <li>{product.id}</li>
                                    <li>{product.description}</li>
                                    <li><a href="#" onClick={() => handleRemoveProduct(product.id)}>Remover</a></li>
                                </ul>
                            ))}
                        </div>
                    </div>
                    <button onClick={handleSave}>Guardar</button>
                </div>
            </div>
        </>
    );
};

export default Agregarserie;
*/