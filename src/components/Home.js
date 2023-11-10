import {React, useEffect} from "react";
import {Card, Container, Row}from 'react-bootstrap';
import Landscaping from "../images/WildBergamot.png";
import Yoga from "../images/YogaTemplate.png";
import Handyman from "../images/HandymanTemplate.png";
import UnderConstruction from "../images/UnderConstruction.png";

function Home() {
  const items = [
    { id: 1, image: Yoga },
    { id: 2, image: Landscaping },
    { id: 3, image: Handyman },
    { id: 4, image: UnderConstruction }
    // Add more items as needed
  ];
  // Duplicate the items for looping effect
  const duplicatedItems = [...items, ...items];

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
      <Container style={{marginTop: '150px'}} className="slideInBottom">
      <Row className="d-flex flex-wrap justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <Card className="text-white mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem', height: '20rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '10%', paddingTop: '200px', backgroundSize: 'cover', display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundImage: 'url(' + Landscaping + ')'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'white', fontSize: '30px', fontFamily: 'Lobster, sans-serif' }} className='mb-4'>Landscaping Template</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <Card className="text-white mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem', height: '20rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '10%', paddingTop: '200px', backgroundSize: 'cover', display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundImage: 'url(' + Yoga + ')'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'white', fontSize: '30px', fontFamily: 'Lobster, sans-serif' }} className='mb-4'>Yoga Template</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <Card className="text-white mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem', height: '20rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '10%', paddingTop: '200px', backgroundSize: 'cover', display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundImage: 'url(' + Handyman + ')'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'white', fontSize: '30px', fontFamily: 'Lobster, sans-serif' }} className='mb-4'>Handyman Template</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
    </center>
    <div className="container text-center my-3">
        <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
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
      </div>
  );
}

export default Home;
