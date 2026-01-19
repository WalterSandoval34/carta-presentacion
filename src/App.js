import React from "react";
import "./styles.css"

import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import Convert from "./Components/Convert";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App(){
  return(
    <div>
      <Header />
      <Banner />
      <Services />
      <Convert />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;