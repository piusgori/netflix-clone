import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import ProductList from './pages/productList/ProductList';

function App() {
  return (
    <div className="container">
        <Topbar></Topbar>
        <Sidebar />
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path="/users" element={<UserList></UserList>}></Route>
            <Route path='/user/:userId' element={<User></User>}></Route>
            <Route path="/newUser" element={<NewUser></NewUser>}></Route>
            <Route path='/products' element={<ProductList></ProductList>}></Route>
            <Route path='/product/:producId' element={<Product></Product>}></Route>
            <Route path='/newProduct' element={<NewProduct></NewProduct>}></Route>
        </Routes>
    </div>
  );
}

export default App;