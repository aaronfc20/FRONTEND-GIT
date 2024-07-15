import base from './base.js';

const endpoint = 'compra';

const create = async (payload) => await base.post(endpoint, payload);

const compraApi = { create };

export default compraApi;
