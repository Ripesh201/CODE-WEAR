import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import "antd/dist/antd.css"; 
import Contextprovider from "./context/Contextprovider";
import Footer from "./components/Footer"
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <main className=' bg-light-2' style={{ height: '100vh', overflowY: 'auto'}}>
      <BrowserRouter>
        <Contextprovider>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            {/* <Route exact path="/login" element={<Login/>} /> */}
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>

          {/* <About/>
    <Contact/> */}
    <Footer></Footer>
        </Contextprovider>
        <ToastContainer/>
      </BrowserRouter>
      </main>
    </>
  );
}

export default App;
