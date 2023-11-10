// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import { useState } from 'react';

function NavbarComponent() {
  const navbarStyle = {
    backgroundColor: '#003459',
    position: 'fixed',
    width: '100%',
    zIndex: '10',
    height: '75px'
  };

  const linkStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: '5px 10px',
    textDecoration: 'none',
    fontFamily: 'Kanit, sans-serif'
  };
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
  <div class="container">
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="16"
        alt="MDB Logo"
        loading="lazy"
        style={{marginTop: "-1px"}}
      />
    </a>
    <h1 className='me-5' style={{color: 'white', fontFamily: 'Lobster, sans-serif'}}>WebDevBoyz</h1>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link button-pop-out" style={linkStyle} href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link button-pop-out" style={linkStyle} href="/">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link button-pop-out" style={linkStyle} href="/">Services</a>
        </li>       
      </ul>
      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-link px-3 me-2 text-capitalize button-pop-out" style={linkStyle}>
          About Us
        </button>
        <button type="button" class="btn me-3 button-pop-out" style={{backgroundColor: '#00A8E8', color: 'white'}}>
          Contact Us
        </button>
        <a
          class="btn btn-dark px-3 button-pop-out"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
</nav>    
    </div>
  );
}

export default NavbarComponent;
