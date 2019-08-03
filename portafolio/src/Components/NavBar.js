import React, { Component } from "react";
import "./Style.css/NavBar.css"
import M from "materialize-css";
import navPicture from "./img/lucero.jpg";

class NavBar extends Component {
componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }


  render() {
    return (
     <header>
        <nav >
    <div className="nav-wrapper">
      <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
      <li><a href="#about">Acerca de Mi</a></li>
    <li><a href="badges.html">Habilidades Técnicas</a></li>
    <li><a href="collapsible.html">Habilidades Personales</a></li>
    <li><a href="mobile.html">Proyectos</a></li>
    <li><a href="mobile.html">Contacto</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav menuMobile" id="mobile-demo">
    <li><a href="badges.html">Acerca de Mi</a></li>
    <li><a href="badges.html">Habilidades Técnicas</a></li>
    <li><a href="collapsible.html">Habilidades Personales</a></li>
    <li><a href="mobile.html">Proyectos</a></li>
    <li><a href="mobile.html">Intereses</a></li>
    <li><a href="mobile.html">Contacto</a></li>
  </ul>

     </header>
    );
  }
}


export default NavBar;