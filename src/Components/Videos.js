// Videos.js
import React, { useEffect, useState } from 'react'; 

function Videos() {
  const [video, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/Archive')
      .then(response => response.json())
      .then(data => {
        setVideos(data);
      });
  }, []);

  return (
    <div>
      <h1>Videos</h1>
      {video.map(videoItem => (
        <div key={videoItem.id}>
          <h2>{videoItem.title}</h2>
          <p>{videoItem.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Videos;