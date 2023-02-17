import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaSpotify, FaYoutube, FaInstagram, FaItunes, FaAmazon } from "react-icons/fa";

function LandingPage() {
  return (
    <Container fluid>
      <Row className='align-items-center' style={{ height: '80vh' }}>
        <Col className='center-block text-center'>
          <img src={process.env.PUBLIC_URL + "/pictures/logo.jpg"} alt='front page logo' />
          <h3>PurplesChala</h3>
          <p>Mom, Pianist, Cosplayer, Gamer</p>
          <Row>
            <Col>
              <FaSpotify className='icon' size="25px" />
              <FaYoutube className='icon' size="25px" />
              <FaInstagram className='icon' size="25px" />
              <FaItunes className='icon' size="25px" />
              <FaAmazon className='icon' size="25px" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage