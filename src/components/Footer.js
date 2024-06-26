function Footer() {
    return (       
<div>
<footer class="text-center text-lg-start text-muted" style={{backgroundColor: 'hsla(0, 100%, 100%, 0.0)'}}>
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
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i>United States</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            valenceinteractivellp@gmail.com
          </p>
          {/* <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 555 555 5555</p> */}
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