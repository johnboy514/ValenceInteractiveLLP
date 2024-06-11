import {React, useEffect, useRef} from "react";
import Landscaping from "../images/WildBergamot.png";
import Yoga from "../images/BreeYoga.png";
import Handyman from "../images/HandymanTemplate.png";
import DogWalker from "../images/LudlowDogWalker.png";
import Hero from "../images/hero.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        // reveals[i].classList.remove("active");
      }
    }
  }  
  window.addEventListener("scroll", reveal);

  const formRef = useRef(null);

  useEffect(() => {
      const formElement = formRef.current;

      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  formElement.classList.add('animated-form');
                  observer.unobserve(formElement); // Stop observing after the animation is added
              }
          });
      }, {
          threshold: 0.1
      });

      if (formElement) {
          observer.observe(formElement);
      }

      // Cleanup the observer on component unmount
      return () => {
          if (formElement) {
              observer.unobserve(formElement);
          }
      };
  }, []);
  const projectsCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable auto scroll
    autoplaySpeed: 3000, // Set auto scroll speed to 3 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const headerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable auto scroll
    autoplaySpeed: 2500, // Set auto scroll speed to 3 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
<section class="text-center" id="home">
  <div class="p-5 bg-image" style={{
        backgroundImage: `url(${Hero})`,
        height: "900px",
        backgroundSize: "cover",
        filter: 'brightness(100%)'
        }}></div>

  <div class="card1 mx-4 mx-md-1 slideInLeft" style={{
        marginTop: "-725px",
        background: "hsla(0, 0%, 100%, 0.0)",
        border: 'none',
        maxWidth: '900px',
        }}>
  
      <div class="row d-flex justify-content-left">
        <div class="col-lg-8" style={{fontFamily: '"Teachers", sans-serif'}}>
          <h2 class=" mb-5" style={{fontSize: '50px', color: 'black'}}>Allow us to <br />
          <Slider {...headerSettings}>
        <div className="container">
        <div className="col-md-12">         
          <span style={{color: '#16918b'}}>Develop</span>
        </div>
        </div>
        <div className="container">
        <div className="col-md-12">         
          <span style={{color: '#16918b'}}>Design</span>
        </div>
        </div>
        <div className="container">
        <div className="col-md-12">         
          <span style={{color: '#16918b'}}>Build</span>
        </div>
        </div>
      </Slider>
          <span style={{color: 'black'}}>Your Website.</span>
          </h2>

        </div>
    </div>
  </div>
</section>
<center>
    
        <div className="text-center reveal" id="projects" style={{marginTop: "400px"}}>
          <center>
          <div style={{maxWidth: "800px", fontFamily: '"Teachers", sans-serif'}}>
        <h3>Our Work</h3>
        <p>Explore a selection of websites we've built, 
          each demonstrating our skills in design, functionality, 
          and user experience. From sleek and modern interfaces 
          to robust and dynamic applications, these projects 
          highlight our commitment to quality and innovation.</p>
          </div>
          </center>
      <Slider {...projectsCarouselSettings} className="reveal">
      <a href="https://rjo6615.github.io/breeyoga/" target="_blank" rel="noreferrer">
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src={Yoga} alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
          </div>
        </div>
        </div>
        </a>
        <a href="https://wildbergamot.net/" target="_blank" rel="noreferrer">
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src={Landscaping} alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
          </div>
        </div>
        </div>
        </a>
        <a href="https://buildingonexperience.com/" target="_blank" rel="noreferrer">
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src={Handyman} alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
          </div>
        </div>
        </div>
        </a>
        <a href="https://ludlowdogwalker.com/" target="_blank" rel="noreferrer">
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src={DogWalker} alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
          </div>
        </div>
        </div>
        </a>
      </Slider>
    </div>
    </center> 
    <section class="text-center reveal" id="pricing" style={{marginTop: '100px'}}>
  <div class="btn-group mb-4" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-dark active">Monthly billing</button>
    <button type="button" class="btn btn-light">
      Annual billign <small>(2 months FREE)</small>
    </button>
  </div>
</section>
<div class="row">
  <div class="col-md-3 reveal">
    <div class="card">
      <div class="mx-2 card-body">
        <h5 class="card-title my-2">Hobby</h5>
        <p class="text-muted mb-2">
          All the essentials for starting a business
        </p>
        <p class="h2 fw-bold">$12<small class="text-muted" style={{fontSize: "18px"}}>/mo</small></p>
        <a href="#/" class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Hobby</a>
      </div>
      <div class="card-footer">
        <p class="text-uppercase fw-bold" style={{fontSize: "12px"}}>What's included</p>
        <ol class="list-unstyled mb-0 px-4">
          <p class="my-3 fw-bold text-muted text-center">
          </p>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="col-md-3 reveal">
    <div class="card border border-dark">
      <div class="mx-2 card-body">
        <h5 class="card-title my-2 ">Freelancer</h5>
        <p class="text-muted">
          All the essentials for starting a business
        </p>
        <p class="h2 fw-bold">$20<small class="text-muted" style={{fontSize: "18px"}}>/mo</small></p>
        <a href="#/" class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Freelancer</a>
      </div>
      <div class="card-footer">
        <p class="text-uppercase fw-bold" style={{fontSize: "12px"}}>What's included</p>
        <ol class="list-unstyled mb-0 px-4">
          <p class="my-3 fw-bold text-muted text-center">
          </p>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="col-md-3 reveal">
    <div class="card">
      <div class="mx-2 card-body">
        <h5 class="card-title my-2 ">Startup</h5>
        <p class="text-muted">
          All the essentials for starting a business
        </p>
        <p class="h2 fw-bold">$40<small class="text-muted" style={{fontSize: "18px"}}>/mo</small></p>
        <a href="#/" class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Startup</a>
      </div>
      <div class="card-footer">
        <p class="text-uppercase fw-bold" style={{fontSize: "12px"}}>What's included</p>
        <ol class="list-unstyled mb-0 px-4">
          <p class="my-3 fw-bold text-muted text-center">
          </p>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="col-md-3 reveal">
    <div class="card">
      <div class="mx-2 card-body">
        <h5 class="card-title my-2 ">Enterprise</h5>
        <p class="text-muted">
          All the essentials for starting a business
        </p>
        <p class="h2 fw-bold">$55<small class="text-muted" style={{fontSize: "18px"}}>/mo</small></p>
        <a href="#/" class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Enterprise</a>
      </div>
      <div class="card-footer">
        <p class="text-uppercase fw-bold" style={{fontSize: "12px"}}>What's included</p>
        <ol class="list-unstyled mb-0 px-4">
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
          <li class="mb-3">
            <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>   
<div id="carouselMultiItemExample" class="carousel slide carousel-dark text-center reveal" data-bs-ride="carousel">
  <div class="d-flex justify-content-center mb-4" id="reviews">
    <button class="carousel-control-prev position-relative" type="button"
      data-bs-target="#carouselMultiItemExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next position-relative" type="button"
      data-bs-target="#carouselMultiItemExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="carousel-inner py-4">
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 button-pop-out">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"
              style={{width: "150px"}} />
            <h5 class="mb-3">Anna Deynah</h5>
            <p>UX Designer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
            </ul>
          </div>

          <div class="col-lg-4 button-pop-out d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
              style={{width: "150px"}} />
            <h5 class="mb-3">John Doe</h5>
            <p>Web Developer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li>
                <i class="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 button-pop-out d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
              style={{width: "150px"}} />
            <h5 class="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="far fa-star fa-sm"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 button-pop-out">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="avatar"
              style={{width: "150px"}} />
            <h5 class="mb-3">John Doe</h5>
            <p>UX Designer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
            </ul>
          </div>

          <div class="col-lg-4 button-pop-out d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar"
              style={{width: "150px"}} />
            <h5 class="mb-3">Alex Rey</h5>
            <p>Web Developer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li>
                <i class="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 button-pop-out d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp" alt="avatar"
              style={{width: "150px"}} />
            <h5 class="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="far fa-star fa-sm"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 button-pop-out">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp" alt="avatar"
              style={{width: "150px"}} />
            <h5 class="mb-3">Anna Deynah</h5>
            <p>UX Designer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
            </ul>
          </div>

          <div class="col-lg-4 button-pop-out d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp" alt="avatar"
              style={{width: "150px"}} />
            <h5 class="mb-3">John Doe</h5>
            <p>Web Developer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li>
                <i class="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 button-pop-out d-none d-lg-block">
            <img class="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp" alt="avatar"
              style={{width: "150px"}} />
            <h5 class="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="far fa-star fa-sm"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<section id="contact">
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="my-5 display-3 fw-bold ls-tight">
            The best offer <br />
            <span style={{color: "#16918b"}}>for your business</span>
          </h1>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>
        <div class="col-lg-6 mb-5 mb-lg-0">
    <div class="card" ref={formRef}>
        <div class="card-body py-5 px-md-5">
            <form>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div data-mdb-input-init class="formOutline">
                            <input type="text" id="form3Example1" class="form-control" />
                            <label class="form-label" for="form3Example1">First name</label>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div data-mdb-input-init class="formOutline">
                            <input type="text" id="form3Example2" class="form-control" />
                            <label class="form-label" for="form3Example2">Last name</label>
                        </div>
                    </div>
                </div>
                <div data-mdb-input-init class="formOutline mb-4">
                    <input type="email" id="form3Example3" class="form-control" />
                    <label class="form-label" for="form3Example3">Email address</label>
                </div>
                <div data-mdb-input-init class="formOutline mb-4">
                    <input type="phone" id="form3Example4" class="form-control" />
                    <label class="form-label" for="form3Example4">Phone Number</label>
                </div>
                <div data-mdb-input-init class="formOutline mb-4">
                    <textarea rows="4" id="form3Example4" class="form-control"></textarea>
                    <label class="form-label" for="form3Example4">How can we help you?</label>
                </div>
                <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-block mb-4" style={{backgroundColor: "#16918b", color: "white"}}>
                    Submit
                </button>
            </form>
        </div>
    </div>
</div>
</div>
</div>
</div>
</section>
<section class="text-center">
  <div class="p-5 bg-image" style={{
        backgroundColor: '#16918b',
        height: "300px",
        marginBottom: "-150px"}}></div>
  <div class="row"  id='aboutus'>
    <div class="col-md-6 reveal">
      <div class="card mx-4 mx-md-5 shadow-5-strong mt-5" style={{
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          maxWidth: '800px',
          height: '420px'}}>
        <div class="card-body py-5 px-md-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h2 class="fw-bold mb-5">About Us</h2>
              <h6>At Valence Interactive LLP, we believe in more than just lines of code
                 we believe in creating meaningful connections between businesses and their 
                 audiences. With a collaborative approach, we work closely with our clients 
                 to understand their unique needs, tailoring every project to reflect their brand identity. 
                 Whether you are a startup looking to make a bold entrance or an established enterprise 
                 seeking a digital facelift, we're here to bring your web development dreams to life. 
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 reveal">
  <div class="card mx-4 mx-md-5 shadow-5-strong mt-5" style={{
      background: "hsla(0, 0%, 100%, 0.8)",
      backdropFilter: "blur(30px)",
      maxWidth: '800px',
      height: '420px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  }}>
    <div class="d-flex mb-3">
      <div class="text-center mr-4">
        <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_beard_male_person_user-512.png"
          class="rounded-circle img-fluid" alt="" style={{width: "100px"}} />
        <h4 class="mb-2">Robert J. Obernier</h4>
        <p class="text-muted mx-5">Owner/Partner <span class="mx-2">|</span> Web Developer</p>
      </div>
      <div class="text-center">
        <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_beard_male_person_user-512.png"
          class="rounded-circle img-fluid" alt="" style={{width: "100px"}} />
        <h4 class="mb-2">John Ifert-Miller</h4>
        <p class="text-muted mx-5">Owner/Partner <span class="mx-2">|</span> Web Developer</p>
      </div>
    </div>
    <center>
      <button type="button" class="btn btn-rounded btn-lg button-pop-out" style={{maxWidth: '200px', backgroundColor: '#16918b', color: 'white'}}>
        Message Us
      </button>
    </center>
    <div class="d-flex justify-content-between text-center mt-3 mx-5">
      <div>
        <p class="mb-2 h5">500M</p>
        <p class="text-muted mb-0">Years Experience</p>
      </div>
      <div class="px-3">
        <p class="mb-2 h5">852B</p>
        <p class="text-muted mb-0">Income amounts</p>
      </div>
      <div>
        <p class="mb-2 h5">0</p>
        <p class="text-muted mb-0">Total Transactions</p>
      </div>
    </div>
  </div>
</div>
</div>
</section>
</div>
  );
}

export default Home;