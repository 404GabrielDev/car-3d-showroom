import { useState } from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {

    const [sideBar, setSideBar] = useState(false);


    const showSideBar = () => {
        setSideBar(!sideBar);
    }

  return (
    <nav>
      <div id="titleProject">
        <p>CarbonDream</p>
      </div>

      <div className="container-navPage">
        <ul>
          <li>Shop</li>
          <li>Parts & Accesories</li>
          <li>Inspiration</li>
          <li>Service & Repair</li>
          <li>Event Rentals</li>
        </ul>
      </div>

      <button id="buttonNav">Find a Location</button>

      <p id="buttonAbout">
        <img src="icons/menuBurger.svg" alt="icon-menu" onClick={showSideBar}></img>
      </p>

      {/*SIDE BAR DO CELULAR */}

      <div className={`sideBar ${sideBar ? 'open' : ''}`}>
        <div className="titleProject">
          <p>CarbonDream</p>

          <p id="buttonAbout">
            <img src="icons/menuBurger.svg" alt="icon-menu" onClick={showSideBar}></img>
          </p>
        </div>

        <div className="nav-sideBar">
          <ul>
            <li>Shop</li>
            <li>Parts & Accesories</li>
            <li>Inspiration</li>
            <li>Service & Repair</li>
            <li>Event Rentals</li>
          </ul>
        </div>

        <div className="title-Autor">
          <p>Developer João Gabriel</p>
          <span>Full Stack</span>
        </div>

        <div className="container-socialMedias">
          <p>Contact Me!</p>

          <div className="socialMedias">
            <a
              href="https://github.com/404GabrielDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={35} color="#fff" />
            </a>

            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-s-b22407365/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={35} color="#0e76a8" />
            </a>

            <a
              href="https://wa.me/5561986641977"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={35} color="#25D366" />
            </a>
          </div>
        </div>
        <li className="sidebar-status">
          🚧 Project in progress
          <br />
          New features coming soon...
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
