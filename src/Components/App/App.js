import React from 'react';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import Menu from '../Menu';
import routers       from '../../routerConfig';
import './App.css';

function App() {
	return (
		<HashRouter>                        
			<div className="App">
				<Menu />
			</div>
			<div className="container">
				< Switch>
					{ showRouter(routers)}
				</Switch>			
			</div>
		</HashRouter>
	);
}

function showRouter(routers){
	let xhtml = null;
	if(routers.length >0){
		xhtml = routers.map((router, index) =>{
			return <Route key={index} exact={router.exact} path={router.path} component={router.main} />
		})
	}

	return xhtml;
}

export default App;
