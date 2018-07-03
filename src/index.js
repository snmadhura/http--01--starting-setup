import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.defaults.headers.common[Authorization] = "Auth Token";
// axios.defaults.headers.post[Content-Type] = 'application/json'; 


//assign below interceptors to a var for removing using eject like this, var myInterceptor = axios.inter...
 axios.interceptors.request.use(request => {
    console.log(request);
    return request;
},
error => {
    console.log(error);
    return Promise.reject(error);
});

//axios.interceptors.request.eject(myInterceptor);

axios.interceptors.response.use(response =>{
    console.log(response);
    return response
}, error => {
    console.log(error);
    return Promise.reject(error);
});

//axios.interceptors.response.eject(myRespInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
