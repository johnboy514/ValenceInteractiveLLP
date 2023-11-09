import React from "react";
import {Card, Container, Row, Carousel}from 'react-bootstrap';
import Landscaping from "../images/WildBergamot.png";
import Yoga from "../images/YogaTemplate.png";
import Handyman from "../images/HandymanTemplate.png";

function Home() {
  return (
    <div>
<section class="text-center">
  <div class="p-5 bg-image" style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp3147484.jpg')",
        height: "600px",
        backgroundSize: "cover",
        }}></div>

  <div class="card mx-4 mx-md-5 shadow-5-strong" style={{
        marginTop: "-300px",
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(30px)",
        }}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Let us help you develop your dream site!</h2>
            <h3 class="fw-bold mb-3">Take a look at some of the sites we've made and get in contact!</h3>
        </div>
      </div>
    </div>
  </div>
</section>
<center>
      <Container>
      <Row className="d-flex flex-wrap justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none' }}>
            <Card.Header className="image-hover image-size" style={{ width: '25rem', height: '25rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundImage: 'url(' + Landscaping + ')'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '30px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Landscaping Template</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none' }}>
            <Card.Header className="image-hover image-size" style={{ width: '25rem', height: '25rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundImage: 'url(' + Yoga + ')'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '30px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Yoga Template</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none' }}>
            <Card.Header className="image-hover image-size" style={{ width: '25rem', height: '25rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundImage: 'url(' + Handyman + ')'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '30px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Handyman Template</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
    </center>
{/* Hover Effect */}
{/* <section className="text-center">
  <div className="d-flex flex-column align-items-center">
    <div className="bg-image hover-overlay hover-zoom hover-shadow ripple m-3">
      <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="w-100" />
      <a href="#!">
        <div className="mask" style={{ backgroundColor: "hsla(195, 83%, 58%, 0.2)" }}></div>
      </a>
    </div>

    <div className="bg-image hover-overlay hover-zoom hover-shadow ripple m-3">
      <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="w-100" />
      <a href="#!">
        <div className="mask" style={{ backgroundColor: "hsla(195, 83%, 58%, 0.2)" }}></div>
      </a>
    </div>

    <div className="bg-image hover-overlay hover-zoom hover-shadow ripple m-3">
      <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="w-100" />
      <a href="#!">
        <div className="mask" style={{ backgroundColor: "hsla(195, 83%, 58%, 0.2)" }}></div>
      </a>
    </div>
  </div>
</section> */}
  </div>
  );
}

export default Home;
