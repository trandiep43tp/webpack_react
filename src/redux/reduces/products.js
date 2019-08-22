
import * as types   from '../constrants/actionType';


let initialState = [];

function findIndex(products, id){
	let result = -1;
	products.forEach((product, index ) => {
		if(product.id === id){
			result = index;
		}
	});
	return result;
}
		
   
const products = (state = initialState, action) =>{
    
    let index = -1;
    let id = ''
    switch(action.type){     
        case types.FECTH_PRODUCTS: 
            state = action.products;
            return [...state];  

        case types.DELETE_PRODUCT:
             id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];

        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case types.UPDATE_PRODUCT:
            let { product } = action;
             id = action.product.id;
            index = findIndex(state, id);
            state[index] = product;      
            return [...state]; 

        default:
            return state;
    }
}

export default products;