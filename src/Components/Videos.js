import React, { useEffect, useState } from 'react'; 

function Videos() {
  const [videos, setVideos] = useState([]);
  const [expandedVideoId, setExpandedVideoId] = useState(null);

  const convertToEmbedUrl = url => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    fetch('http://localhost:3000/Archive')
      .then(response => response.json())
      .then(data => {
        const videosWithEmbedUrls = data
          .filter(video => video.video && video.video.trim() !== '')
          .map(video => ({
            ...video,
            video: convertToEmbedUrl(video.video),
          }));
        setVideos(videosWithEmbedUrls);
      });
  }, []);

  const handleClick = videoId => {
    setExpandedVideoId(prevVideoId => prevVideoId === videoId ? null : videoId);
  };

  return (
    <div className="videos-container">
      <h1>Videos</h1>
      {videos.map(videoItem => (
        <div className="video-item" key={videoItem.id} onClick={() => handleClick(videoItem.id)}>
          <h2>{videoItem.title}</h2>
          {expandedVideoId === videoItem.id && (
            <div className="video-details">
              <p>Date: {videoItem.date}</p>
              <p>Video:</p>
              <iframe
                className="video-iframe"
                width="560"
                height="315"
                src={videoItem.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
                    <img className="videos-gif" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGwxdThjcTJncWR2cGI1bDFjbzRsaXh2Z2F4dGV5cmVmNWNpaWU5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RH1ZaPgt6M0iZmuwFl/giphy.gif" alt="Videos animation" />

    </div>

  );
}


export default Videos;