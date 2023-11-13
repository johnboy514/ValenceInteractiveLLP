import React, { useState } from 'react';
import devLogo from '../images/Logo.png';

function NavbarComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navbarHeight = 250; // Adjust this value based on your actual navbar height

  const navbarStyle = {
    backgroundColor: '#003459',
    position: 'fixed',
    width: '100%',
    zIndex: '10',
    height: `75px`
  };

  const linkStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: '5px 10px',
    textDecoration: 'none',
    fontFamily: 'Kanit, sans-serif'
  };

  const customScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = navbarHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
        <div className="container">
          <img
            src={devLogo}
            height="108"
            alt="Logo"
            loading="lazy"
            style={{ marginTop: "-1px" }}
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
                  onClick={() => customScroll('projects')}
                >
                  Projects
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link button-pop-out"
                  style={linkStyle}
                  onClick={() => customScroll('pricing')}
                >
                  Pricing
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link button-pop-out"
                  style={linkStyle}
                  onClick={() => customScroll('reviews')}
                >
                  Reviews
                </button>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-link px-3 me-2 text-capitalize button-pop-out"
                style={linkStyle}
                onClick={() => customScroll('aboutus')}
              >
                About
              </button>
              <button
                type="button"
                className="btn btn-link px-3 me-2 text-capitalize button-pop-out"
                style={linkStyle}
                onClick={() => customScroll('contactus')}
              >
                Contact
              </button>
              <button
                type="button"
                className="btn me-3 button-pop-out"
                style={{ backgroundColor: '#00A8E8', color: 'white' }}
              >
                Message Us
              </button>
              <button
                className="btn btn-dark px-3 button-pop-out"
                onClick={openModal}
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className={`modal fade ${isModalOpen ? 'show' : ''}`} tabIndex="-1" aria-hidden="true" style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <div className="modal-header" style={{ backgroundColor: 'rgba(0, 52, 89, 1)', color: 'white' }}>
              <h5 className="modal-title">GitHub Links</h5>
              <button
              type="button"
              className="btn-close-white"
              aria-label="Close"
              onClick={closeModal}
            ></button>
            </div>
            <div className="modal-body">
            <div class="d-flex mb-3">
            <a href="https://github.com/rjo6615" style={{textDecoration: 'none'}} className="button-pop-out">
              <div class="text-center mr-4">
                <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_beard_male_person_user-512.png"
                  class="rounded-circle img-fluid" alt="" style={{width: "100px"}} />
                <h4 class="mb-2">Robert J. Obernier</h4>
                <p class="text-muted mx-5">Owner/Developer <span class="mx-2"></span> WebDevBoyz</p>
              </div>
              </a>
              <a href="https://github.com/johnboy514" style={{textDecoration: 'none'}} className="button-pop-out">
              <div class="text-center">
                <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_beard_male_person_user-512.png"
                  class="rounded-circle img-fluid" alt="" style={{width: "100px"}} />
                <h4 class="mb-2">John Ifert-Miller</h4>
                <p class="text-muted mx-5">Owner/Developer <span class="mx-2"></span> WebDevBoyz</p>
              </div>
              </a>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* End GitHub Modal */}
    </div>
  );
}

export default NavbarComponent;
