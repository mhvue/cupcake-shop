import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Cupcake from './components/Cupcake';
import Contact from './components/Contact';
import NavBar from './components/Navbar';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
          <Route exact path="/" component={About} />

          <Route exact path="/cupcakes" component={Cupcake} />

          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
  );
}

export default App;
