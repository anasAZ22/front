import React,{useRef} from 'react';
import {FaBars  } from "react-icons/fa";
import ".././Styles/main.css";
import {Link} from 'react-router-dom';
function Navbar(){
    const navRef= useRef();
    const showNavbar = ()=> {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h3>Mon Application</h3>
            <nav ref={navRef}>
                <a  href="#">Acceuil</a>
                <a  href="#">Produit</a>
                <a   href="#">Vente</a>
                <Link to="/Clients">
                    <> Client</>
                </Link>
                <Link to="/Contact">
                    <button type="button"  className="btn btn-default btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"><span className="glyphicon glyphicon-user"></span>User Login</button>
                </Link>
                <button  className="nav-btn nav-close-btn"onClick ={showNavbar}>FaTimes/></button >
            </nav>

            <button className="nav-btn" onClick ={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}
export default Navbar;