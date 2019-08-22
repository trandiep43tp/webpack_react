import React, { useEffect, useState }       from 'react';
import { connect }  from 'react-redux';
import { NavLink }  from 'react-router-dom';
import ProductsList from '../Components/ProductsList';
import ProductItem  from '../Components/ProductItem';
//import CallApi      from '../Utils/ApiCaller';

import { actFecthProducts, actFecthProductsRequest, actDeleteProductRequest }  from '../redux/action/index';      

 
function ProductPage(props) {
	//const [endpoint ]  = useState('products') 	 
	const [products, setProducts ] = useState([]);
	
	useEffect( () =>{
		setProducts(props.products)
	},[props.products]);

	//trường hợp lấy dữ liệu trực tiếp rồi đổ ra
	// useEffect(() => {		
	// 	async function fetchData(){		 
	// 	  await	CallApi('products', 'GET', null).then( (res) => {
	// 		setProducts(res.data)
	// 		props.fecthAllProducts(res.data);
	// 		})			  
	// 	}
	// 	fetchData();
	// },[]);


	//trường hợp lấy dữ liệu rồi chuyển về reduce
	//eslint-disable
	// useEffect(() => {		
	// 	//console.log('aaa')	
	// 	async function fetchData(){		 
	// 		await	CallApi(endpoint, 'GET', null).then( (res) => { 
	// 			props.fecthAllProducts(res.data)
	// 		})			  
	// 	};		
		
	// 	fetchData();	
	// },[endpoint]); 

	//khi việc kết nối dữ liệu giao cho các action thực hiện thực hiện
	useEffect( () => {		
		 props.fecthProductsRequest();			

	},[]); //eslint-disable-line
	
	
	function deleteProduct(id){
		//cách 1: làm thủ công tại đây
			// CallApi(`products/${id}`, 'DELETE', null).then( (res) => {
			// 	//xóa product trong list products luôn để cho load lại trang
			// 	if(res.status === 200){
			// 		let index = findIndex(products, id);
			// 		products.splice(index, 1);
			// 		setProducts([...products])
			// 	}
				
			// })
		
		//cách 2 khi action thực hiện toàn bộ công việc xóa
			props.deleteProductRequest(id)
	}
	
		
	return (
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<NavLink className="btn btn-success mb-10" exact= {false} to="/products/add"  activeClassName="active">
					Thêm Sản Phẩm
				</NavLink>				
				<ProductsList >
					{ showProductsList(products)}
				</ProductsList>
			</div>
		</div>		
	);
 
	function showProductsList(products){
		let xhtml = null;
		if(products.length >0){
			xhtml = products.map((product, index) =>{
				return(
					<ProductItem 
						key = {index}   
						product = {product}
						index = { index}
						onClickDelete = { deleteProduct }						
					/>
				)
			})
		}
		return xhtml;
	}


}  



// function findIndex(products, id){
// 	let result = -1;
// 	products.forEach((product, index ) => {
// 		if(product.id === id){
// 			result = index;
// 		}
// 	});
// 	return result;
// }



const mapStatetoProps = state =>{   
    return {
       products: state.products
    }
}

const mapDispatchtoProps = ( dispatch, ownProps) =>{    
    return {
       fecthAllProducts: (products) =>{                 
          dispatch(actFecthProducts(products ));              
		},
		fecthProductsRequest: () =>{ 
			dispatch(actFecthProductsRequest())
		}, 
		deleteProductRequest: (id) =>{
			dispatch(actDeleteProductRequest(id));
		}
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (ProductPage);


