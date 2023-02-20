import React, { Component } from 'react';

const API = 'AIzaSyBjz1KrnlXtaREQKbCmTwv-smz5_KpxTTg';
const playlistID = 'PLp-SYUSsVXsbH35VfVaxYWWRPpDJGmhKC';
const channel = 'purpleschala;'
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
      playlist: []
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
        this.setState({playlist})

      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <iframe
          src={this.state.mainVideo}
        />
        <iframe
        src={this.state.playlist[2]}
        />
      </div>
    )
  }
}

export default Youtube