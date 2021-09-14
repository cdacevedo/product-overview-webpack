import axios from 'axios'

import ProductData from '../lib/interfaces/product.interface';

import config from '../config'

const getProducts = async (): Promise<Array<ProductData>> => {
  return await axios.get(`${config.data}/products`)
    .then(({data}) => data)
    .catch(error => console.error(error.toString()))
}

export default getProducts