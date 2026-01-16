import React from "react";
import "./styles.css"

import Header from "./Components/Header";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App(){
  return(
    <div>
      <Header />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;