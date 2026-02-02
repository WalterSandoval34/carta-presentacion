import React from "react";
import "./styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import Convert from "./Components/Convert";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Proyecto from "./Components/Proyecto";


function App(){
  return(
   <Router>
    
    <Header/>
      <main className="main">
        <Routes>
          <Route path="/" element={<Banner/> }/>
          <Route path="/Services" element={<Services />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Convert" element={<Convert />} />
          <Route path="/Proyecto" element={<Proyecto />} />
        </Routes>
      </main>
    <Footer/>  
   </Router>
  )
}

export default App;