import { combineReducers } from 'redux';
import { products, cartProducts } from '../providers/data';

const initialState = {
    products,
    cartProducts
};

const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

const cartReducer = (state = initialState.cartProducts, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            return [...state, action.payload];
        }
    }
    return state;
}
