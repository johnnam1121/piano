import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainVideo from './MainVideo';
import VideoPlaylist from './VideoPlaylist';

const API = 'AIzaSyBjz1KrnlXtaREQKbCmTwv-smz5_KpxTTg';
const playlistID = 'PLp-SYUSsVXsbH35VfVaxYWWRPpDJGmhKC';
const result = 35;

var url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${result}&playlistId=${playlistID}&key=${API}`

export class Youtube extends Component {
  constructor(props) {
    super(props)

    this.state = {
      featuredVideo: [],
      featuredDescription: [],
      featuredTitle: [],
      playlist: [],
      title: '',
      description: [],
      thumbnails: '',
      videoCounter: 0,
    };
  }

  componentDidMount() {
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        let featuredVideo = "https://www.youtube.com/embed/" + responseJson.items[18].snippet.resourceId.videoId;
        this.setState({ featuredVideo })
        let featuredDescription = responseJson.items[18].snippet.description;
        this.setState({ featuredDescription })
        let featuredTitle = responseJson.items[18].snippet.title;
        this.setState({ featuredTitle })

        // console.log('responseJson', responseJson)
        const playlist = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.snippet.resourceId.videoId);
        this.setState({ playlist });
        const description = responseJson.items.map(obj => obj.snippet.description);
        this.setState({ description });
        const thumbnails = responseJson.items.map(obj => obj.snippet.thumbnails.default.url);
        this.setState({ thumbnails });
        const title = responseJson.items.map(obj => obj.snippet.title);
        this.setState({ title });
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onVideoSelect = (video) => {
    this.setState({
      featuredVideo: video.videoURL,
      featuredTitle: video.title,
      featuredDescription: video.description,
      mainVideoTags: video.tags,
    });

    // console.log(video);
  }

  onVideoEnded = (videoCounter) => {
    this.setState({
      videoCounter: this.state.videoCounter + 1,
      featuredVideo: this.state.playlist[videoCounter],
      featuredTitle: this.state.title[videoCounter],
      featuredDescription: this.state.description[videoCounter],
      // mainVideoTags: this.state.dataList[4][videoCounter],
    });
    console.log(videoCounter)
  }

  render() {
    return (
      <Container fluid fetchData>
        <Row className='mt-3'>
          <Col md={8} >
            <MainVideo
              mainVideo={this.state.featuredVideo}
              title={this.state.featuredTitle}
              description={this.state.featuredDescription}
              videoCounter={this.state.videoCounter}
              onVideoEnded={this.onVideoEnded}
            />
          </Col>
          <Col md={4} className='mb-3'>
            <VideoPlaylist
              playlist={this.state.playlist}
              title={this.state.title}
              description={this.state.description}
              thumbnails={this.state.thumbnails}
              onVideoSelect={this.onVideoSelect}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Youtube