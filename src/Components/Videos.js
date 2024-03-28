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
    <div>
      <h1>Videos</h1>
      {videos.map(videoItem => (
        <div key={videoItem.id} onClick={() => handleClick(videoItem.id)}>
          <h2>{videoItem.title}</h2>
          {expandedVideoId === videoItem.id && (
            <div>
              {/* Display other details of the video */}
              <p>Date: {videoItem.date}</p>
              <p>Video:</p>
              <iframe
                width="560"
                height="315"
                src={videoItem.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Videos;