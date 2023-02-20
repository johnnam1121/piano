import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainVideo from './MainVideo';
import VideoPlaylist from './VideoPlaylist';

const API = 'AIzaSyBjz1KrnlXtaREQKbCmTwv-smz5_KpxTTg';
const playlistID = 'PLp-SYUSsVXsbH35VfVaxYWWRPpDJGmhKC';
const result = 35;

// var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&playlistItems=${playlistID}&part=snippet,id&channelID=${channel}&order=date&maxResults=${result}`
// var finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=2&playlistId=${playlistID}&key=${API}`
var finalURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${result}&playlistId=${playlistID}&key=${API}`

// 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&mine=true&key=[YOUR_API_KEY]' \

export class Youtube extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mainVideo: [],
      playlist: [],
      videoCounter: 0,
    };
  }

  componentDidMount() {
    return fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        const firstLink = responseJson.items[18].snippet.resourceId.videoId;
        const mainVideo = "https://www.youtube.com/embed/" + firstLink;
        this.setState({ mainVideo });
        const playlist = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.snippet.resourceId.videoId);
        this.setState({ playlist })

      })
      .catch((error) => {
        console.log(error)
      })
  }

  onVideoSelect = (video) => {
    this.setState({
      mainVideo: video.videoURL,
      mainVideoTitle: video.title,
      mainVideoDescription: video.description,
      mainVideoTags: video.tags,
    });

    console.log(video);
  }
  onVideoEnded = (videoCounter) => {
    this.setState({
      videoCounter: this.state.videoCounter + 1,
      mainVideoURL: this.state.dataList[0][videoCounter],
      // mainVideoTitle: this.state.dataList[1][videoCounter],
      // mainVideoDescription: this.state.dataList[2][videoCounter],
      // mainVideoTags: this.state.dataList[4][videoCounter],
    });
    console.log(videoCounter)
  }

  render() {
    return (
      <Container fluid>
        <Row className='mt-3'>
          <Col md={{ span: 8 }}>
            <MainVideo
              video={this.state.mainVideo}
              videoCounter={this.state.videoCounter}
              onVideoEnded={this.onVideoEnded}
            />
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <VideoPlaylist
              playlist={this.state.playlist}
              onVideoSelect={this.onVideoSelect}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Youtube