import React from 'react';

import HomePage    from './Pages/HomePage';
import ProductPage  from './Pages/ProductPage';
import NotFoundPage    from './Pages/NotFoundPage';
import ProductActionPage from './Pages/ProductActionPage';

const Routers = [
    {
        path: '/',
        exact: true,
        main: ()=> <HomePage />
    },
    {
        path: '/products',
        exact: true,
        main: ({match})=> <ProductPage  match = { match}  />
    },
    {
        path: '/products/add',
        exact: false,
        main: ({ history })=> <ProductActionPage history = { history}  />
    },
    {
        path: '/products/:id/edit',
        exact: false,
        main: ({match, history})=> <ProductActionPage match = { match} history = {history} />
        //nếu k truyền history khi nhấn trở lại nó bị lỗi do nó k nhớ 
    },    
    { 
        path: '',
        exact: false,
        main: ()=> <NotFoundPage />
    }
]


export default Routers;