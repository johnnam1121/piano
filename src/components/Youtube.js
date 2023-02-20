import React, { Component } from 'react';

const API = 'AIzaSyBjz1KrnlXtaREQKbCmTwv-smz5_KpxTTg';
const playlistID = 'PLp-SYUSsVXsbH35VfVaxYWWRPpDJGmhKC';
const channel = 'purpleschala;'
const result = 2;

// var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&playlistItems=${playlistID}&part=snippet,id&channelID=${channel}&order=date&maxResults=${result}`
// var finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=2&playlistId=${playlistID}&key=${API}`
var finalURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${result}&playlistId=${playlistID}&key=${API}`

// 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&mine=true&key=[YOUR_API_KEY]' \

export class Youtube extends Component {
  constructor(props) {
    super(props)

    this.state = {
      youtube: []
    };
  }

  componentDidMount() {
    return fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const youtube = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        this.setState({ youtube });

      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.youtube)
    return (
      <div>
        {this.state.youtube.map((data, i) => {
          var frame = <iframe key={i} width="560" height="315" src={data} frameBorder="0" allowFullScreen></iframe>
          return frame
        })}
        {/* {this.frame} */}
      </div>
    )
  }
}

export default Youtube

// function Youtube() {
//   return (
//     <div>
//       <iframe
//         width="560"
//         height="315"
//         src="https://www.youtube.com/embed/videoseries?list=PLp-SYUSsVXsbH35VfVaxYWWRPpDJGmhKC"
//         title="YouTube video player"
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowfullscreen>
//       </iframe>
//     </div>
//   )
// }

// export default Youtube