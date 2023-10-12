import './index.css'
import ReactPlayer from 'react-player'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://youtu.be/F7o0upORtCw?si=n_B9l5-gJMpzSmwW" />
    </div>
  </div>
)

export default VideoPlayer
