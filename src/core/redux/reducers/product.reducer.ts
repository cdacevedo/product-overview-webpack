import {Action} from '../interfaces/redux.interface';

import initialState from '../initial-states/product.initial-state'

import {UPDATE_PRICE} from '../types/product.types';

const productReducer = (state = initialState, action: Action ) => {
  switch (action.type) {
    case UPDATE_PRICE:
      return {
        ...state,
        total: action.payload
      }
    default: return state;
  }
}

export default productReducer