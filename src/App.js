import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddProducts from './components/Admin/AddProducts/AddProducts';
import ManageProducts from './components/ManageProducts';
import Admin from './components/Admin/Admin';


export const UserContext = createContext();
export const ProductContext = createContext();
export const EachProductContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [product, setProduct] = useState({});
  const [orders, setOrders] = useState([])
  return (
    <UserContext.Provider value = {[user, setUser]}>
      <ProductContext.Provider value={[product, setProduct]}>
     <EachProductContext.Provider value = {[orders, setOrders]}>
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/checkout/:name">
          <Checkout />
        </PrivateRoute>
        <PrivateRoute path="/person/:email">
          <Order />
        </PrivateRoute>
        <PrivateRoute path="/person/">
          <Order />
        </PrivateRoute>
        <PrivateRoute path="/addProducts">
          <AddProducts />
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/manage">
          <ManageProducts />
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
      </Switch>
    </Router>
     </EachProductContext.Provider>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;