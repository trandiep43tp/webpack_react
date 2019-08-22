import { createStore, applyMiddleware }  from 'redux';
import myReduce         from  './reduces/index';
import thunk            from 'redux-thunk';  //đây là 1 middleware

const store = createStore(myReduce, applyMiddleware(thunk));
//console.log(store.getState())
export default store;