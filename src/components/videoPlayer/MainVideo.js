import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'

function MainVideo(props) {
  return (
    <Container>
      <Row>
        <Col>
          <ReactPlayer
            controls
            url={props.video}
            // height="75%"
            playing={props.videoCounter > 0 ? true : false}
            width="100%"
            onEnded={() => {
              props.onVideoEnded(props.videoCounter)
              // console.log("ended")
            }}
          />

        </Col>
      </Row>
    </Container>
  )
}

export default MainVideo