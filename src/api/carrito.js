import base from './base.js';

const endpoint = 'cart';

const findAll = async () => await base.get(endpoint);

const saveForLater = async (item) => await base.post(`${endpoint}/saveForLater`, item);

const moveToCart = async (item) => await base.post(`${endpoint}/moveToCart`, item);

const removeFromSaved = async (item) => await base.post(`${endpoint}/removeFromSaved`, item);

const addItem = async (item) => await base.post(`${endpoint}/addItem`, item);

const removeItem = async (item) => await base.post(`${endpoint}/removeItem`, item);

const cartApi = { findAll, saveForLater, moveToCart, removeFromSaved, addItem, removeItem };

export default cartApi;
