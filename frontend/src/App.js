
import React from 'react';
import './App.css';
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Register from './Register.js'
import Login from './Login.js'
import UserMain from './user/ProductCard.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './admin/ProductManager.js'
import ProductCard from './user/ProductCard.js'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import PrivateRoute from "./TokenCheck.js"; 


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main className="Main-container d-flex flex-wrap justify-content-center align-content-md-around gap-3 p-3 fs-6 bg-dark text-white ">


        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/admin" element={<PrivateRoute component={Admin} />} />
          <Route path="/user" element={<PrivateRoute component={UserMain} />} />
          
        </Routes>


        </main>
        <footer className="d-flex align-items-center justify-content-center">
          <Footer/>
        </footer>
      </div>
    </Router>

  );
}

export default App;


