import React from 'react';


function ProductsList(props) {
	let children = props.children;
	return (
		<div className="panel panel-primary">
			<div className="panel-heading">
				<h3 className="panel-title">Danh Sách Sản Phẩm</h3>
			</div>
			<div className="panel-body">
				<table className="table table-bordered table-hover">
					<thead>
						<tr>
							<th>Stt</th>
							<th>Mã Sp</th>
							<th>Tên Sản Phẩm</th>
							<th>Giá</th>
							<th>Trạng Thái</th>
							<th>Hành Động</th>
						</tr>
					</thead>
					<tbody>
						{ children}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ProductsList;
