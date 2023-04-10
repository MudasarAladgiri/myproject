// import logo from './logo.svg';
// import './App.css';

import Home from "./components/Home";
import Foods from "./components/Foods";
import Toys from "./components/Toys";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Medicine from "./components/Medicine";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Foods" element={<Foods />}></Route>
          <Route path="/Toys" element={<Toys />}></Route>
          <Route path="/Medicine" element={<Medicine />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
