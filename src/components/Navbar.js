import React, { useState, useEffect } from 'react';
import devLogo from '../images/Logo.png';

function NavbarComponent() {
  const [isTop, setIsTop] = useState(true);

  const navbarHeight = 250; // Adjust this value based on your actual navbar height

  const navbarStyle = {
    backgroundColor: isTop ? 'transparent' : 'white',
    position: 'fixed',
    width: '100%',
    zIndex: '10',
    height: '100px',
    transition: 'background-color 0.3s ease',
  };

  const linkStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    padding: '5px 10px',
    textDecoration: 'none',
    fontFamily: '"Teachers", sans-serif',
    opacity: '0',
    animation: 'fadeIn 0.5s forwards',
  };

  const toggleButtonStyle = {
    color: 'black', // Change this to make the toggle button icon more visible
  };

  const customScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = navbarHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }

    // Close the navbar on mobile after a link is clicked
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse) {
      navbarToggler.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
        <div className="container">
          <img
            src={devLogo}
            height="108"
            alt="Logo"
            loading="lazy"
            style={{ marginTop: '-1px' }}
            className="me-5"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={toggleButtonStyle}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link button-pop-out"
                  style={linkStyle}
                  onClick={() => customScroll('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link button-pop-out"
                  style={linkStyle}
                  onClick={() => customScroll('aboutus')}
                >
                  About
                </button>
              </li>
            </ul>
            <div className="ms-lg-auto d-flex align-items-center justify-content-end">
              <button
                id='notify'
                className="btn btn-dark px-3 button-pop-out text-light"
                style={{ backgroundColor: '#16918b', ...linkStyle }}
                onClick={() => customScroll('contact')}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
      <style>{`
        @media (max-width: 992px) {
          .collapse.navbar-collapse {
            background-color: transparent;
          }
          .nav-link, .btn {
            background-color: rgba(255, 255, 255, 0.8); /* Slightly transparent background */
            margin-bottom: 0.5rem; /* Space between links */
            text-align: right; /* Align text to the right */
            opacity: 0;
            animation: fadeIn 0.5s forwards;
          }
          .navbar-nav {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end; /* Align links to the right */
          }
          .ms-lg-auto {
            margin-left: auto; /* Ensure Contact button is aligned to the right */
          }
        }
        @media (min-width: 992px) {
          .collapse.navbar-collapse {
            background-color: transparent !important;
            padding: 0;
            display: flex;
            justify-content: space-between;
          }
          .nav-link {
            background-color: transparent; /* Fully transparent background for desktop view */
            opacity: 1; /* Ensure opacity is set to 1 for desktop view */
          }
          .navbar-nav {
            flex-direction: row; /* Align links in a row */
            align-items: center; /* Align links vertically */
          }
          .ms-auto {
            margin-left: auto; /* Push Contact button to the right */
          }
        }
      `}</style>
    </div>
  );
}

export default NavbarComponent;
