import React from 'react'
import VideoListItem from './VideoListItem'
import { Container, Row, Col, Accordion } from 'react-bootstrap';

function VideoPlaylist(props) {
  const listOfVideos = props.playlist.map((element, index) =>
    <VideoListItem
      key={index}
      // thumbNailUrl={element}
      // tags={props.dataList[4][index]}
      // description={props.dataList[2][index]}
      // title={props.dataList[1][index]}
      videoURL={props.playlist[index]}
      onVideoSelect={props.onVideoSelect}
    />)
  const mainList = listOfVideos?.slice(0, 4);
  const loadMoreList = listOfVideos?.slice(5, listOfVideos.length);


  return (
    <Container>
      {mainList}
      < Accordion >
        <Accordion.Item eventKey='0'>
          <Accordion.Button>
            Load More...
          </Accordion.Button>
          <Accordion.Body>
            {loadMoreList}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion >
    </Container>
  )
}

export default VideoPlaylist