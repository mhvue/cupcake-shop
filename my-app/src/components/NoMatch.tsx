import * as React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';

const NoMatch = () => {
    return (
      <div>
      <h1 style={{textAlign: "center"}}>Cupcakes</h1>
      <NavBar />
        Sorry, no such page exist. Go back 
        <Link to="/"> home.</Link>
      </div>
    );
};

export default NoMatch;