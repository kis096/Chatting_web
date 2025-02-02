import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import Cart from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';
import Single_product from './Components/Single_product';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Components/GlobalStyle';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error from './Components/Error';


function App() {
  const theme ={
    colors:{
      heading: "black",
      text: "rgba(29, 29, 29, .8)",
      black: "#212529",
      helper: "#8490ff",



      bg:"#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98,84,243,0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg,rgb(132,144,255)0%, rgb(98 189, 252) 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px , rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",

    },
    media:{
      mobile: "768px",
      tab: "998px"
    }
  }
  return (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Product />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="single/:id" element={<Single_product />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
