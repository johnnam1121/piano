import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function AboutMe() {
  return (
    <Container fluid>
      <Row className='align-items-center' style={{height:'80vh'}}>
        <Col md={{ span: 5, offset: 2 }}>
          <h1>Welcome to my website!</h1>
          <h3>This website is meant to showcase my talents?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis nisi non viverra ornare.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Nulla semper leo nec commodo commodo. Donec ultrices posuere sapien et efficitur.
            Nullam eu arcu hendrerit, aliquam tellus vel, consequat magna. Suspendisse mattis porta eleifend.
            Praesent maximus porttitor tincidunt. Vivamus tellus ex, dignissim vel suscipit quis, interdum ac urna.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutMe