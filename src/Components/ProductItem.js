import React from 'react';
import { NavLink }  from 'react-router-dom';


function ProductItem(props) {
	
	let { product, index } = props;	
	let status      = (product.status)? "Còn Hàng" : "Hết hàng";
	let classStatus = (product.status)? "primary" : "danger";

	function handleDelete(){
		//phải thêm dòng eslink... mới xóa được
		if(confirm("bạn có chắc chắn muốn xóa")){ //eslint-disable-line
			props.onClickDelete(product.id)
		}			
	}
	
	return (
		<tr>
			<td>{ index + 1}</td>  
			<td>{ product.id}</td>
			<td>{ product.name}</td>
			<td>{ product.price}</td>
			<td>
				<span className={`label label-${classStatus}`}>{  status}</span>
			</td>
			<td>
				<NavLink className="btn btn-large  btn-danger mr-10" exact= {false} to={`/products/${product.id}/edit`} >
					Sửa
				</NavLink>					
				<button onClick = { handleDelete} type="button" className="btn btn-large  btn-primary"> Xóa </button>
			</td>
		</tr>
	);
}

export default ProductItem;
