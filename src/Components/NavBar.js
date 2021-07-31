import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import CartWidget from "./CartWidget";

export default function NavBar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
           <div class="container-fluid">
            <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <Link className="nav-link active"  to="/Home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Category">Category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Checkout">Checkout</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li>
            <CartWidget/>
        </li>
        </ul>
        </div>
        </div>
        </nav>
        </div>
    )

}

