import {React, useEffect, useMemo} from "react";
import Landscaping from "../images/WildBergamot.png";
import Yoga from "../images/YogaTemplate.png";
import Handyman from "../images/HandymanTemplate.png";
import UnderConstruction from "../images/UnderConstruction.png";

function Home() {
  const items = useMemo(
    () => [
      { id: 1, image: Yoga },
      { id: 2, image: Landscaping },
      { id: 3, image: Handyman },
      { id: 4, image: UnderConstruction },
      // Add more items as needed
    ],
    []
  );

  // Duplicate the items for looping effect
  const duplicatedItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const createCarouselItems = () => {
      let totalItems = items.length;
      let slides = Math.ceil(totalItems / 4);

      let tempCarouselItems = [];

      for (let i = 0; i < slides; i++) {
        let startIdx = i * 4;
        let endIdx = startIdx + 4;
        let slideItems = items.slice(startIdx, endIdx);

        tempCarouselItems.push(slideItems);
      }
    };
    createCarouselItems();
  }, [items]);
  return (
    <div>
<section class="text-center">
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
<div className="container text-center my-3">
        <div id="recipeCarousel" style={{marginTop: '200px'}} className="carousel slide slideInBottom" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner" role="listbox">
            {duplicatedItems.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="row">
                  {[0, 1, 2, 3].map((colIndex) => {
                    const currentIndex = index + colIndex;
                    const carouselItem = duplicatedItems[currentIndex % duplicatedItems.length];
                    return (
                      <div className="col-md-3" key={colIndex}>
                        <div className="card">
                          <div className="card-img">
                            <img
                              src={carouselItem.image}
                              className="img-fluid"
                              alt={`Slide ${carouselItem.id}`}
                            />
                          </div>
                        </div>
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
        <div style={{marginTop: '400px'}}>
        </div>
    </center>    
      </div>
  );
}

export default Home;
