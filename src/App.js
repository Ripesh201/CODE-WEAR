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
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Contextprovider from "./context/Contextprovider";

function App() {
  return (
    <>
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
          </Routes>

          {/* <About/>
    <Contact/> */}
        </Contextprovider>
      </BrowserRouter>
    </>
  );
}

export default App;
