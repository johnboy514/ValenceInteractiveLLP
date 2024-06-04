import {React} from "react";
import Landscaping from "../images/WildBergamot.png";
import Yoga from "../images/YogaTemplate.png";
import Handyman from "../images/HandymanTemplate.png";
import UnderConstruction from "../images/UnderConstruction.png";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
        marginTop: "-675px",
        background: "hsla(0, 0%, 100%, 0.0)",
        border: 'none',
        maxWidth: '900px',
        }}>
  
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8" style={{fontFamily: '"Teachers", sans-serif'}}>
          <h2 class=" mb-5" style={{fontSize: '50px', color: 'black'}}>Let us help you develop <br /><span style={{color: 'black'}}>your dream site!</span></h2>
            {/* <h3 class=" mb-3" style={{color: 'black'}}>Take a look at some of the sites we've made and get in contact!</h3> */}
        </div>
    </div>
  </div>
</section>
<center>
        {/* Carousel inside the card */}
        <div className="text-center" style={{marginTop: "350px"}}>
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
      <Slider {...settings}>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src={Yoga} alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Team Building</div>
              <div className="description">Enhance team bonding with our tailored Yoga & Sound Experience for team building events.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src={Landscaping} alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Leadership Events</div>
              <div className="description">Foster leadership skills and mindfulness in leadership events with our unique experience.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src={Handyman} alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Wellness Conferences</div>
              <div className="description">Elevate wellness conferences with our unique blend of yoga, sound, and meditation sessions.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src={UnderConstruction} alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Birthday Parties</div>
              <div className="description">Celebrate birthdays with a special Yoga + Sound Experience that adds joy and relaxation to the occasion.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src="https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2023/02/girls-night-in-ideas.jpg" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Girls Night In</div>
              <div className="description">Create unforgettable memories with your friends during a relaxing and fun Girls Night In event.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src="https://www.booksurfcamps.com/static/files/images/ir/nt/it/hk/content.jpg" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Beach Parties</div>
              <div className="description">Enjoy the soothing sounds of yoga and crystal bowls at beach parties for a unique and memorable experience.</div>
            </div>
          </div>
        </div>
        </div>
        <div className="container text-center my-3">
        <div className="col-md-12">
          <div className="card card1 card-body position-relative">
            <img className="img-fluid image1" src="https://bunniesbythebay.com/cdn/shop/articles/Baby_Shower_lifestyle-websize_1024x.jpg?v=1620627090" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div className="overlay">
              <div className="title">Baby Showers</div>
              <div className="description">Celebrate the upcoming arrival of a new life with a peaceful and rejuvenating Yoga & Sound Experience.</div>
            </div>
          </div>
        </div>
        </div>
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
<section class="text-center">
  <div class="p-5 bg-image" style={{
        backgroundColor: '#003459',
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
              <h6>"At WebDevBoyz, we believe in more than just lines of code –
                 we believe in creating meaningful connections between businesses and their 
                 audiences. With a collaborative approach, we work closely with our clients 
                 to understand their unique needs, tailoring every project to reflect their brand identity. 
                 Whether you're a startup looking to make a bold entrance or an established enterprise 
                 seeking a digital facelift, we're here to bring your web development dreams to life. 
                 Let's embark on this journey together and build a digital future that not only meets but exceeds your expectations."
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
        <p class="text-muted mx-5">Owner/Developer <span class="mx-2">|</span> WebDevBoyz</p>
      </div>
      <div class="text-center">
        <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_beard_male_person_user-512.png"
          class="rounded-circle img-fluid" alt="" style={{width: "100px"}} />
        <h4 class="mb-2">John Ifert-Miller</h4>
        <p class="text-muted mx-5">Owner/Developer <span class="mx-2">|</span> WebDevBoyz</p>
      </div>
    </div>
    <center>
      <button type="button" class="btn btn-rounded btn-lg button-pop-out" style={{maxWidth: '200px', backgroundColor: '#00A8E8', color: 'white'}}>
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