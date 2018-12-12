import {Cart} from '../../model/cart';
import {Actions, CREATE_CART, DELETE_CART} from '../action/cart.action';


const initialState: Cart = {
  id: '',
name: '',
price: '',
description: '',
image: '',
quantity: 0,
  category: ''
}

export function reducer(state: Cart[] = [initialState],
                        action: Actions) {
  switch (action.type) {
    case CREATE_CART:
      return [...state, action.payload];
      case DELETE_CART:
      return state.filter(({id}) => id !== action.id);
      default:
      return state;
  }
}
