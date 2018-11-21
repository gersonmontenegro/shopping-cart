import { combineReducers } from 'redux';
import { products, cartProducts } from '../providers/data';

const initialState = {
    products,
    cartProducts
};
