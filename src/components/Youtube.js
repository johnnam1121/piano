import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Container, Row, Col } from 'react-bootstrap';

function Youtube() {
  return (
    <Container>
      <Row>
        <Col>
          <YouTube videoId="VWW8wvv82Ss" />
        </Col>


      </Row>
    </Container>
  )
}

export default Youtube