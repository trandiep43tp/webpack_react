import * as types from '../constrants/actionType';
import CallApi      from '../../Services/ApiCaller';
import "@babel/polyfill";  //phải có cái này thì ansyn  await mới chạy được

//lấy dữ liệu từ nơi lưu trữ về và lưu vào trong store
export const actFecthProductsRequest = () =>{
    return (dispacth) =>{
          return CallApi('products', 'GET', null).then( (res) => {
                dispacth(actFecthProducts(res.data))
          });
    };
}

export const actFecthProducts = (products) =>{
    return {
        type: types.FECTH_PRODUCTS,
        products
    }    
}

// xóa product trong store và trên chỗ lưu trữ
export const actDeleteProductRequest = (id) =>{
    return (dispacth) =>{
        return CallApi(`products/${id}`, 'DELETE', null).then( (res) => {
            dispacth(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) =>{
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

//thêm product trong store và trên server
export const actAddProductRequest = (product) =>{    
    return ( dispacth) => {
        return CallApi('products', 'POST', product).then( (res) => {
            dispacth(actAddProduct(res.data))
        })   
    }
}

export const actAddProduct = (product) =>{
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

//edit product
export const actEditProductRequest = (product) => {
    let id = product.id;
    let data = {
        name: product.name,
        price: product.price,
        status: product.status
    }
    return (dispacth) =>{
        return CallApi(`products/${id}`, 'PUT', data).then ( (res) => {
            dispacth(actEditProduct(res.data));
        })
    }
}

export const actEditProduct = (product) => {    
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}

//lấy product có id để edit
export const actGetProductRequest = (id) => {
   // console.log(id)
    return async (dispacth) =>{
        return await CallApi(`products/${id}`, 'GET', null).then( (res) => {            
            dispacth(actGetProduct(res.data))
        })
    }
}

export const actGetProduct = (product) =>{    
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}

