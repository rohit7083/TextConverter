import React from 'react'
import { Link } from 'react-router-dom'
// import propTypes from 'prop-types';
import './nav.css';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"  >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >{props.about}</Link>
            </li>

          </ul>


          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <label className="form-check-label4" htmlFor="flexSwitchCheckDefault">Light </label>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" style={{cursor: 'pointer'}} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label3" htmlFor="flexSwitchCheckDefault">dark </label><br />
            
            <label className="form-check-label1" htmlFor="flexSwitchCheckDefault">orange</label>
            <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" style={{cursor: 'pointer'}} id="flexSwitchCheckDefault"/>
            <label className="form-check-label2" htmlFor="flexSwitchCheckDefault">Pink</label>
          </div>

        </div>
      </div>

    </nav>

  )
}
// Navbar.propTypes = {
//  title:propTypes.string.isRequired,
//  about:propTypes.string
//   };

Navbar.defaultProps = {
  title: 'set title here',
  about: 'About'
}