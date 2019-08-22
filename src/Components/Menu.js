import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';


const menus = [
	{to: '/'		 , exact: true, name: 'Trang Chủ'},
	{to: '/products' , exact: true, name: 'Danh Sách Sản Phẩm'},  
	
];

function Menu() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavLink className="navbar-brand" exact={true} to="/">Call API</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">			
			    	{ showMenus(menus)}
			    </ul>	
            </div>		
		</nav>
	);
} 
 
const showMenus = (menus) => {
    let xhtml = null;
    if (menus.length > 0) {
        xhtml = menus.map((menu, index) => {
			return <MenuLink 
						key = {index} 
						label = {menu.name}
						to = {menu.to} 
						activeOnlyWhenExact = {menu.exact} 
					/>  
        })
    }
    return xhtml;
}

 
//custom link     //các lable, to, activeOnlyWhenExact là các props của MenuLink
const MenuLink = ({label, to, activeOnlyWhenExact }) =>{
	return (
		<Route
			path = { to} 
			exact = { activeOnlyWhenExact}
			children = {({ match }) =>{
				//console.log(match)
				let active = match ? "active" : '';
				return(
					<li className={`nav-item ${active} ` }>
						{/* khi custom link thì hay dùng Link */}
						<Link className="nav-link" to={ to} >{ label}</Link>                         
					</li>	
				)
			}}
		/>
	)
}

export default Menu;
