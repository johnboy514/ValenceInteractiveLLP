import devLogo from '../images/Logo.png';

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
      <img
        src={devLogo}
        height="108"
        alt="Logo"
        loading="lazy"
        style={{marginTop: "-1px"}}
        className="me-5"
      />
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
          <a class="nav-link button-pop-out" style={linkStyle} href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link button-pop-out" style={linkStyle} href="#pricing">Pricing</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link button-pop-out" style={linkStyle} href="#reviews">Reviews</a>
        </li>       
      </ul>
      <div class="d-flex align-items-center">
        <a href="#aboutus"><button type="button" class="btn btn-link px-3 me-2 text-capitalize button-pop-out" style={linkStyle}>
          About Us
        </button></a>
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