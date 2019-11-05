import React from 'react'

const VideoItem = ({ video }) => {
  // props.video

  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
}

export default VideoItem;