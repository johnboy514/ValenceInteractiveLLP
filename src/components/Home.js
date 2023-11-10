import React from "react";
import {Card, Container, Row}from 'react-bootstrap';
import Landscaping from "../images/WildBergamot.png";
import Yoga from "../images/YogaTemplate.png";
import Handyman from "../images/HandymanTemplate.png";

function Home() {
  return (
    <div>
<section class="text-center">
  <div class="p-5 bg-image" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1531771686035-25f47595c87a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        height: "900px",
        backgroundSize: "cover",
        filter: 'brightness(50%)'
        }}></div>

  <div class="card mx-4 mx-md-5" style={{
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
      <Container style={{marginTop: '150px'}}>
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
  </div>
  );
}

export default Home;
