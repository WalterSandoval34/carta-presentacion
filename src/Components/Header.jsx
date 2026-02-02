import React from "react";
import "../styles.css";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <div className="container">
               
             
                    <ul>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/Services">Servicios</NavLink></li>
                        <li><NavLink to="/Gallery">Galería</NavLink></li>
                        <li><NavLink to="/Contact">Contacto</NavLink></li>
                        <li><NavLink to="/Convert">Conversor</NavLink></li>
                        <li><NavLink to="/Proyecto">Proyectos</NavLink></li>
                    </ul>
                
            </div>
        </header>
     )
}
export default Header;