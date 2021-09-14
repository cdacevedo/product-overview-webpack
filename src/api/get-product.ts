import axios from 'axios';

import ProductData from '../lib/interfaces/product.interface';

import config from '../config'

const getProduct = async (id: string): Promise<ProductData> => {
  return await axios.get(`${config.data}/products/${id}`)
    .then(({ data }) => data)
    .catch(error => console.error(error.toString()))
}

export default getProduct