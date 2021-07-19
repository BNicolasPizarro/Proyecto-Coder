import react from "react";
import CartWidget from "./CartWidget";

function NavBar(){
    return(
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container-fluid'>
            <a className='navbar-brand'>
                <img href=""></img>
            </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
                <li className='nav-item'>
                    <a className='nav-link active'>Productos</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'>About us</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'>Contact</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link'>Cart</a>
                </li>
                <li className='nav-item'>
                <CartWidget/>
                </li>
            </ul>
        </div>
    </nav> 
   
    )
}

export default NavBar;
