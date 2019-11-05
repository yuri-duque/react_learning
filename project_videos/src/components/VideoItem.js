import React from 'react';

import './VideoItem.css';

const VideoItem = ({ video }) => {
  // props.video

  return (
    <div className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        {/* <div className="description">{video.snippet.description}</div> */}
      </div>
    </div>
  );
}

export default VideoItem;