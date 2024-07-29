import {React, useEffect, useRef, useState} from "react";
// import Landscaping from "../images/WildBergamot.png";
// import Yoga from "../images/BreeYoga.png";
// import Handyman from "../images/HandymanTemplate.png";
// import DogWalker from "../images/LudlowDogWalker.png";
import Hero from "../images/hero.jpg";
import AboutUs from "../images/aboutUs.jpg";
import OurProcess from "../images/OurProcess.svg";
import reviewsBG from "../images/reviewsbg.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import emailjs from '@emailjs/browser';

function Home() {

  const [showAlert, setShowAlert] = useState(false);

  const alertTest = () => {
    setShowAlert(true);
    // Optionally hide the alert after a certain time
    setTimeout(() => {
      setShowAlert(false);
      window.location.reload(false);
    }, 3000); // hide after 3 seconds
  };

  const emailJsService = process.env.REACT_APP_EMAILJS_SERVICE;
  const emailJsTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE;
  const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const nameFirst = useRef();
  const nameLast = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
      if (nameFirst.current.value === '') {
      setVisible(true);
    } if (nameLast.current.value === '') {
      setVisible1(true);
    } if (email.current.value === '') {
      setVisible2(true);
    } if (phone.current.value === '') {
      setVisible3(true);
    } if (message.current.value === '') {
      setVisible4(true);
    } else {
      sendMail();
    }
  };

  (function () {
    emailjs.init(emailJsPublicKey);
  })();

  function sendMail() {
    if (nameFirst.current.value && nameLast.current.value && email.current.value) {
      var params = {
        from_nameFirst: nameFirst.current.value,
        from_nameLast: nameLast.current.value,
        from_email: email.current.value,
        reply_to: email.current.value,
        from_phone: phone.current.value,
        from_message: message.current.value,
      };
      emailjs.send(emailJsService, emailJsTemplate, params).then(function (res) {});
      alertTest();
    } else {
      alert('Failed to send message');
    }
  };


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
  // const projectsCarouselSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true, // Enable auto scroll
  //   autoplaySpeed: 3000, // Set auto scroll speed to 3 seconds
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

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

  // const reviewsSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true, // Enable auto scroll
  //   autoplaySpeed: 3000, // Set auto scroll speed to 3 seconds
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
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

<section>
<div
  className="row"
  id="process"
  style={{
    maxWidth: "800px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    margin: "300px auto 0px"
  }}
>
  <div className="our-process-container">
    <img src={OurProcess} alt="Our Process" className="our-process-image" />
    <div className="blur-overlay"></div>
  </div>
</div>


</section>
{/* <center>
    
        <div className="text-center reveal" id="projects" style={{marginTop: "400px"}}>
          <center>
          <div style={{maxWidth: "800px", fontFamily: '"Teachers", sans-serif'}}>
        <h3>Our Work</h3>
            <p>
              Explore a selection of websites we've built,
              this can be helpful when designing your site to get ideas.
              From sleek and modern interfaces 
              to robust and dynamic applications, these projects 
              highlight our commitment to quality and innovation.
            </p>
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
    </center>  */}
    {/* <section class="text-center reveal" id="pricing">
</section> */}
{/* <div class="row">
  <div class="col-md-3 reveal">
    <div class="card">
      <div class="mx-2 card-body" style={{fontFamily: '"Teachers", sans-serif'}}>
        <h5 class="card-title my-2">Hobby</h5>
        <p class="text-muted mb-2">
          All the essentials for starting a business
        </p>
        <p class="h2 fw-bold">$12<small class="text-muted" style={{fontSize: "18px"}}>/mo</small></p>
        <a href="#/" style={{backgroundColor: "#16918b"}} class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Hobby</a>
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
      <div class="mx-2 card-body" style={{fontFamily: '"Teachers", sans-serif'}}>
        <h5 class="card-title my-2 ">Freelancer</h5>
        <p class="text-muted">
          All the essentials for starting a business
        </p>
        <p class="h2 fw-bold">$20<small class="text-muted" style={{fontSize: "18px"}}>/mo</small></p>
        <a href="#/" style={{backgroundColor: "#16918b"}} class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Freelancer</a>
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
      <div class="mx-2 card-body" style={{fontFamily: '"Teachers", sans-serif'}}>
        <h5 class="card-title my-2 ">Startup</h5>
        <p class="text-muted">
          All the essentials for starting a business
        </p>
        <p class="h2 fw-bold">$40<small class="text-muted" style={{fontSize: "18px"}}>/mo</small></p>
        <a href="#/" style={{backgroundColor: "#16918b"}} class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Startup</a>
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
      <div class="mx-2 card-body" style={{fontFamily: '"Teachers", sans-serif'}}>
        <h5 class="card-title my-2 ">Enterprise</h5>
        <p class="text-muted">
          All the essentials for starting a business
        </p>
        <p class="h2 fw-bold">$55<small class="text-muted" style={{fontSize: "18px"}}>/mo</small></p>
        <a href="#/" style={{backgroundColor: "#16918b"}} class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Enterprise</a>
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
</div>  */}
{/* --------------------------------Review Section------------------------------------ */}
 <div className="bg-image" style={{ backgroundImage: `url('${reviewsBG}')`, opacity: 0.05, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
{/* <center className="reveal">
  <div style={{ maxWidth: "800px", fontFamily: '"Teachers", sans-serif', marginTop: "100px" }}>
    <h3>Hear What Our Customers Say</h3>
    <p>Discover the unparalleled experiences shared by our valued clients.
       Dive into a collection of authentic testimonials, each a testament to 
       our commitment to excellence. From inspiring success stories to heartfelt 
       praise, explore the journey of trust and satisfaction our clients embark on with us.</p>
  </div>
</center>
<Slider {...reviewsSettings} className="my-5">
  <div className="text-center reveal py-5">
    <div className="d-flex justify-content-center " id="reviews">
      <div className="container col-lg-8 button-pop-out mx-5">
        <h5 className="mb-3">Anna Deynah</h5>
        <p>UX Designer</p>
        <p className="text-muted">
          <i className="fas fa-quote-left pe-2"></i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
          officiis hic tenetur quae quaerat ad velit ab hic tenetur.
        </p>
        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="fas fa-star fa-sm"></i></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center reveal py-5">
    <div className="d-flex justify-content-center " id="reviews">
      <div className="container col-lg-8 button-pop-out mx-5">
        <h5 className="mb-3">John Doe</h5>
        <p>Web Developer</p>
        <p className="text-muted">
          <i className="fas fa-quote-left pe-2"></i>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid commodi.
        </p>
        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="fas fa-star fa-sm"></i></li>
          <li>
            <i className="fas fa-star-half-alt fa-sm"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center reveal py-5">
    <div className="d-flex justify-content-center " id="reviews">
      <div className="container col-lg-8 button-pop-out mx-5">
        <h5 className="mb-3">Maria Kate</h5>
        <p>Photographer</p>
        <p className="text-muted">
          <i className="fas fa-quote-left pe-2"></i>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti.
        </p>
        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="fas fa-star fa-sm"></i></li>
          <li><i className="far fa-star fa-sm"></i></li>
        </ul>
      </div>
    </div> 
  </div> 
</Slider> */}
<section>
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: 'hsla(0, 100%, 100%, 0.0)', fontFamily: '"Teachers", sans-serif'}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="my-5 display-3 fw-bold ls-tight">
            Top Solutions <br />
            <span style={{color: "#16918b"}}>for your business</span>
          </h1>
          <p style={{color: "black", fontSize: "20px"}}>
          Site Design that matches your business's specific needs
          At Valence Interactive LLP, we work closely with customers every step of the way.
          Collaborate with us today to create your ideal digital footprint!
          </p>
        </div>
        <div class="col-lg-6 mb-5 mb-lg-0"  id="contact">
            <div class="card" ref={formRef}>
                <div class="card-body py-5 px-md-5">
                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div data-mdb-input-init class="formOutline">
                                    <input type="text" ref={nameFirst} id="form3Example1" class="form-control" />
                                    <label class="form-label" for="form3Example1" style={{ fontSize: '14px' }}>First name</label>
                                    {visible && <div className="text-danger">Please enter your first name</div>}
                                </div>                        
                            </div>
                            <div class="col-md-6 mb-4">
                                <div data-mdb-input-init class="formOutline">
                                    <input type="text" ref={nameLast} id="form3Example2" class="form-control" />
                                    <label class="form-label" for="form3Example2" style={{ fontSize: '14px' }}>Last name</label>
                                    {visible1 && <div className="text-danger">Please enter your last name</div>}
                                </div>
                            </div>                   
                        </div>
                        <div data-mdb-input-init class="formOutline mb-4">
                            <input type="email" ref={email} id="form3Example3" class="form-control" />
                            <label class="form-label" for="form3Example3" style={{ fontSize: '14px' }}>Email address</label>
                            {visible2 && <div className="text-danger">Please enter your email</div>}
                        </div>                
                        <div data-mdb-input-init class="formOutline mb-4">
                            <input type="phone" ref={phone} id="form3Example4" class="form-control" />
                            <label class="form-label" for="form3Example4" style={{ fontSize: '14px' }}>Phone Number</label>
                            {visible3 && <div className="text-danger">Please enter your phone</div>}
                        </div>                
                        <div data-mdb-input-init class="formOutline mb-4">
                            <textarea rows="4" ref={message} id="form3Example4" class="form-control"></textarea>
                            <label class="form-label" for="form3Example4" style={{ fontSize: '14px' }}>How can we help you?</label>
                            {visible4 && <div className="text-danger">Please enter your message</div>}
                        </div>     
                      
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-block mb-4" style={{backgroundColor: "#16918b", color: "white"}}>
                          <center> Submit </center>
                        </button>
                      
                    </form>
                    <center>
                    {showAlert && (
              <span className="alert alert-success fade-in" role="alert">
                Thanks for contacting us we will be back to you shortly!
              </span>
                )}
                </center>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-center">
  <div className="bg-image" style={{ backgroundColor: '#16918b', height: '150px' }}></div>
  <div className="row" id="aboutus">
    <div className="col-md-12 reveal">
      <div className="mt-5 d-flex flex-row" style={{ backgroundColor: 'hsla(0, 100%, 100%, 0.0)', height: 'auto' }}>
        <div className="py-5 px-md-5 d-flex w-100">
          <div className="row w-100 mb-5">
            <div className="col-lg-6 d-flex flex-column" style={{ fontFamily: '"Teachers", sans-serif' }}>
              <h1 className="mb-3 text-center text-light">About Us</h1>
              <div style={{ textAlign: 'left' }}>
                <div className="mt-2 mx-2" style={{ fontSize: "20px" }}>
                    At Valence Interactive LLP, we believe in more than just lines of code;
                    we believe in crafting strong connections between businesses and their audiences. Our philosophy
                    centers around a collaborative approach, where we work closely with our clients to understand
                    their unique needs and aspirations as a company. Every project we undertake is tailored meticulously to reflect
                    the distinct brand identity of our clients.<br /><br />
                    Whether you are a dynamic startup aiming to make a bold entrance into the market or an established 
                    enterprise seeking a comprehensive digital facelift, Valence Interactive LLP is your dedicated partner.
                    We are committed to transforming your web development visions into reality. Allow us to help make sure your digital 
                    presence is up-to-date and what you're really looking for.
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center" style={{ marginTop: '0' }}>
              <div className="skew-container">
                <img
                  src={AboutUs} alt="about us"
                  style={{
                    width: '100%',
                    height: 'auto',
                    transform: 'skewX(30deg)',
                    border: 'none'
                  }}
                />
              </div>
            </div>
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