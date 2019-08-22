import {combineReducers }   from 'redux';
import products             from './products';
import editProduct          from './editProduct';

const myReduce = combineReducers({    
    products,
    editProduct
})

export default myReduce;
