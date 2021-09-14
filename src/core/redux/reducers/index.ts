import { combineReducers } from 'redux'

import {Reducers} from 'core/redux/interfaces/redux.interface';

import productReducer from './product.reducer';

export default combineReducers<Reducers>({
  product: productReducer
})