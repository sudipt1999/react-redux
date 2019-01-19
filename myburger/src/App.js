import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout/layout';
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder';
import Checkout from './containers/checkout/checkout';
import Orders from './containers/orders/orders';

import { Route, withRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Layout>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/" exact component={BurgerBuilder} />
      </Layout>
    );
  }
}

export default withRouter(App);
