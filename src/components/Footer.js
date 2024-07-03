import devLogo from '../images/Logo.png';

function Footer() {
    return (       
<div>
<footer class="text-center text-lg-start text-muted" style={{backgroundColor: 'hsla(0, 100%, 100%, 0.0)'}}>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4 d-flex align-items-center justify-content-center text-center">
          <img
            src={devLogo}
            height="108"
            alt="Valence Interactive LLP Logo"
            loading="lazy"
            style={{ marginTop: '-50px' }}
            className="me-3"
          />
          <p>
            Empower your online presence with our expert website development services, 
            where innovation meets functionality for a seamless and impactful digital experience.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-md-0 mb-4">
          <div className="d-flex flex-column align-items-center">
            <h6 className="text-uppercase fw-bold mb-4 text-center">Contact</h6>
            <div className="text-start">
              <p><i className="fas fa-home me-3 text-secondary"></i>United States</p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                valenceinteractivellp@gmail.com
              </p>
              {/* <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 555 555 5555</p> */}
            </div>
          </div>
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