import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
//import CallApi      from '../Utils/ApiCaller';
import { Link }     from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actEditProductRequest, actGetProduct } from '../redux/action/index';

function ProductActionPage(props) {
    const [id, setId ]        = useState('');
    const [name, setName ]    = useState('');
    const [price, setPrice ]  = useState('');
    const [status, setStatus] = useState(false);
    const history             = props.history;
    const match               = props.match? props.match : null; 
    

    useEffect( () => {    
        //console.log("aaaa")  
        let product = props.editProduct;        
        setId(product.id)
        setName(product.name);
        setPrice(product.price);
        setStatus(product.status);
    },[props.editProduct])


    // useEffect(() => {
    //     if(match){
    //         let id = match.params.id;
    //         //cách 1: phải gọi lên server để lấy dữ liệu
    //         CallApi(`products/${id}`, 'GET').then( res =>{
    //             let data = res.data;
    //             setId(data.id)
    //             setName(data.name);
    //             setPrice(data.price);
    //             setStatus(data.status);
    //         })        
    //     } 
    // },[match]);    
    
    //lấy product để edit
    useEffect( () => {        
        if(match){                    
            let id = match.params.id;           
            props.getProduct(id);
        }
       
    },[]) //eslint-disable-line 
   
    

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handlePriceChange(e){
        setPrice(+e.target.value)
    }

    function handleCheckboxChange(e){
       setStatus(e.target.checked)
    }

    // cách 1: làm trực tiếp trên trang này
    // function handleSubmit(e){
    //     e.preventDefault();
    //     if(id === ''){
    //          CallApi('products', 'POST', {
    //                 name,
    //                 price: +price,
    //                 status
    //             }).then( res => {
    //                 //thực hiện việc chuyển trang
    //                 history.goBack();
    //             })
    //     }else{
           
    //         CallApi(`products/${id}`, "PUT", {
    //             name,
    //             price: +price,
    //             status
    //         }).then( res => {
    //            history.goBack();
    //         })
    //     }       
    // }

    //cách 2: giao cho các action thực hiện
    function handleSubmit(e){
        e.preventDefault();
        let product = {
            id,
            name,
            price: +price,
            status
        }
        if(id === ''){
            props.addProductRequest(product);            
        }else{
            props.editProductRequest(product);           
        }  
        //set lại cho edit là rỗng
        props.setEditProduct({id: '', name: '', price: '', status: false})     
        history.goBack();   

    }
   

    return (
        
        <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = { handleSubmit } >
                    <legend style = {{ textAlign: "center"}}>THÊM SẢN PHẨM</legend>
                    <div className="form-group">
                        <label >Tên sản Phẩm</label>                        
                        <input value = {name} onChange = { handleNameChange} type="text" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label >Giá</label>
                        <input value = {price} onChange = { handlePriceChange} type="number" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label >Trạng Thái</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input value = {status}  checked = {status} onChange = { handleCheckboxChange} type="checkbox"  />
                                  Còn hàng
                        </label>
                    </div>
                    <Link to = "/products" className = "btn btn-success mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

const mapStatetoProps = state =>{   
    return {
         editProduct: state.editProduct
    }
}


const mapDispatchtoProps = ( dispatch, ownProps) =>{    
    return {  
        addProductRequest: (product) =>{
            dispatch(actAddProductRequest(product))
        },
        getProduct: (id) => {
            dispatch(actGetProductRequest(id))
        },
        editProductRequest: (product) =>{
            dispatch(actEditProductRequest(product))
        },
        setEditProduct: (product) =>{
            dispatch(actGetProduct(product));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (ProductActionPage);
