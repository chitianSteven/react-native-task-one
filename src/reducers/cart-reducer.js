import  { ADD_TO_CART }  from '../actions/cart-actions';

export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}

export function updateCart(product, quantity, unitCost) {
    return {
      type: UPDATE_CART,
      payload: {
        product,
        quantity,
        unitCost
      }
    }
  }
  
  export function deleteFromCart(product) {
    return {
      type: DELETE_FROM_CART,
      payload: {
        product
      }
    }
  }

export default function(state=initialState, action) {
    switch (action.type) {
      case ADD_TO_CART: {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        }
      }
  
      case UPDATE_CART: {
        return {
          ...state,
          cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
        }
      }
  
      case DELETE_FROM_CART: {
        return {
          ...state,
          cart: state.cart.filter(item => item.product !== action.payload.product)
        }
      }

      default:
        return state;
    }
  }