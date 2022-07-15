import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import styled from 'styled-components';

import {
  Home,
  About,
  Auth,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

// const Button = styled.button`
//   background: green;
//   color: white;
// `;
//basically we are making html elements components with their css properties embeded
//styled.button meaning that we give it inherited button properties; could be div or any other element
// we can also  create classes within the styled componenents and there would be no name-collisions
//we can also have multiple idneticla classsnames without collision

// const Container = styled.div`
//   background: red;
//   color: white;
//   font-size: 2rem;
//   .hero {
//     font-size: 8rem;
//   }
// `;
