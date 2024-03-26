// Videos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Videos() {
  const [video, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/Archive')
      .then(response => {
        setVideos(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Videos</h1>
      {video.map(videoItem => ( // Change to video
        <div key={videoItem.id}>
          <h2>{videoItem.title}</h2>
          <p>{videoItem.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Videos;