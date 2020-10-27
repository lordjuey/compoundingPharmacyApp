import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Compounding Pharmacy App</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/formulaList" className="nav-link">Formulas</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add New Formula</Link>
          </li>
          <li className="navbar-item">
          <Link to="/pharmacist" className="nav-link">Add Pharmacist</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}