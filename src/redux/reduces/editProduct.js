
import * as types   from '../constrants/actionType';


let initialState = {
    id: '',
    name: '',
    price: '',
    status: false
};
		
   
const EditProduct = (state = initialState, action) =>{  
    
    switch(action.type){          
        case types.EDIT_PRODUCT:             
        // console.log(action.product)              
            state = action.product;
            return state;

        default:
            return state;
    }
}

export default EditProduct;