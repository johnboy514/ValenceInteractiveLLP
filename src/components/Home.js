import {React, useEffect, useMemo} from "react";
import Landscaping from "../images/WildBergamot.png";
import Yoga from "../images/YogaTemplate.png";
import Handyman from "../images/HandymanTemplate.png";
import UnderConstruction from "../images/UnderConstruction.png";

function Home() {
  const items = useMemo(
    () => [
      { id: 1, image: Yoga, link: 'https://rjo6615.github.io/yogatemplate' },
      { id: 2, image: Landscaping, link: 'https://johnboy514.github.io/landscapingwildbergamot' },
      { id: 3, image: Handyman, link: 'https://rjo6615.github.io/handymantemplate' },
      { id: 4, image: UnderConstruction, link: '/' },
    ],
    []
  );
  const duplicatedItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const createCarouselItems = () => {
      let totalItems = items.length;
      let slides = Math.ceil(totalItems / 3);

      let tempCarouselItems = [];

      for (let i = 0; i < slides; i++) {
        let startIdx = i * 3;
        let endIdx = startIdx + 3;
        let slideItems = items.slice(startIdx, endIdx);

        tempCarouselItems.push(slideItems);
      }
    };
    createCarouselItems();
  }, [items]);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }  
  window.addEventListener("scroll", reveal);
  return (
    <div>
<section class="text-center" id="home">
  <div class="p-5 bg-image" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1531771686035-25f47595c87a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        height: "900px",
        backgroundSize: "cover",
        filter: 'brightness(50%)'
        }}></div>

  <div class="card mx-4 mx-md-5 slideInLeft" style={{
        marginTop: "-800px",
        background: "hsla(0, 0%, 100%, 0.0)",
        border: 'none',
        maxWidth: '900px',
        color: 'white'
        }}>
    <div class="card-body">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5" style={{fontSize: '50px', color: 'white'}}>Let us help you develop <br /><span style={{color: '#62b6cb'}}>your dream site!</span></h2>
            <h3 class="fw-bold mb-3" style={{color: '#bee9e8'}}>Take a look at some of the sites we've made and get in contact!</h3>
        </div>
      </div>
    </div>
  </div>
</section>
<center>
<div className="container text-center my-3" id="projects">
        <div id="recipeCarousel" style={{marginTop: '200px'}} className="carousel slide slideInBottom" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner" role="listbox">
            {duplicatedItems.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="row">
                  {[0, 1, 2].map((colIndex) => {
                    const currentIndex = index + colIndex;
                    const carouselItem = duplicatedItems[currentIndex % duplicatedItems.length];
                    return (
                      
                      <div className="col-md-4" key={colIndex}>
                        <a href={carouselItem.link}>
                        <div className="card">
                          <div className="card-img">
                            <img
                              src={carouselItem.image}
                              className="img-fluid"
                              alt={`Slide ${carouselItem.id}`}
                            />
                          </div>
                        </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev bg-transparent w-aut" type="button" data-bs-target="#recipeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next bg-transparent w-aut" type="button" data-bs-target="#recipeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
        <div style={{marginTop: '450px'}}>
        </div>
    </center> 
    <section class="text-center reveal" id="pricing" style={{marginTop: '-400px'}}>
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