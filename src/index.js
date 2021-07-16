import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'; //LIBRERIA IMPORTADA;
import form from './pages/form';
import ProductPage from './pages/ProductPage';


ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/form" component={form} />
    <Route exact path="/productos/:productId" component={ProductPage} />
  </Router>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
