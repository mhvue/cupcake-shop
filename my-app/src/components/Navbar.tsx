import * as React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
      <div style={{textAlign: "center"}}>
        <Link to="/">About </Link>
        ||
        <Link to="/cupcakes"> Cupcakes </Link>
        ||
        <Link to="/contact"> Contact Us </Link>
        ||
        <Link to="/cart"> Cart </Link>
      </div>
    );
};

export default NavBar;