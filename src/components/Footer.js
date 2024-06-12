function Footer() {
  const customScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 250;
      const offset = navbarHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };
  const linkStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    padding: '5px 10px',
    textDecoration: 'none',
    fontFamily: 'Kanit, sans-serif'
  };
    return (       
<div>
<footer class="text-center text-lg-start text-muted" style={{backgroundColor: 'hsla(0, 100%, 100%, 0.0)'}}>
{/* <section className="d-flex justify-content-center p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section> */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Valence Interactive LLP
          </h6>
          <p>
           Empower your online presence with our expert website development services, 
           where innovation meets functionality for a seamless and impactful digital experience.
          </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Technology
          </h6>
          <p>
            <a href="https://en.wikipedia.org/wiki/React_(software)" class="text-reset">React</a>
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" class="text-reset">Bootstrap</a>
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/JavaScript" class="text-reset">Javascript</a>
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/CSS" class="text-reset">CSS</a>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Navigation
          </h6>
          <p>
          <button
                type="button"
                className="btn btn-link  text-capitalize button-pop-out"
                style={linkStyle}
                onClick={() => customScroll('home')}
              >
                Home
          </button>
          </p>
          <p>
          <button
                type="button"
                className="btn btn-link  text-capitalize button-pop-out"
                style={linkStyle}
                onClick={() => customScroll('pricing')}
              >
                Pricing
          </button>
          </p>
          <p>
          <button
                type="button"
                className="btn btn-link  text-capitalize button-pop-out"
                style={linkStyle}
                onClick={() => customScroll('reviews')}
              >
                Reviews
          </button>
          </p>
          <p>
          <button
                type="button"
                className="btn btn-link  text-capitalize button-pop-out"
                style={linkStyle}
                onClick={() => customScroll('aboutus')}
              >
                About Us
          </button>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i>United States</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            valenceinteractivellp@gmail.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 555 555 5555</p>
        </div>
      </div>
    </div>
  </section>
  <div class="text-center p-4 text-white" style={{backgroundColor: "#16918b"}}>
    © 2024 Copyright:
    <a class="text-reset fw-bold mx-2" href="/">Valence Interactive LLP</a>
  </div>
</footer>
</div>
    )
}

export default Footer;