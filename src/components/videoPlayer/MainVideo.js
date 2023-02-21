import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'

function MainVideo(props) {
  return (
    <Container>
      <Row>
        <ReactPlayer
          controls
          url={props.mainVideo}
          // height="75%"
          playing={props.videoCounter > 0 ? true : false}
          width="100%"
          onEnded={() => {
            props.onVideoEnded(props.videoCounter)
            // console.log("ended")
          }}
        />
      </Row>
      <Row>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </Row>
    </Container>
  )
}

export default MainVideo