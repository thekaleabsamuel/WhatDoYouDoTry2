import React, { useEffect, useState } from 'react';


function Photos() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3030/Archive')
      .then(response => {
        setPhotos(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Photos</h1>
      {photos.map(photo => (
        <div key={photo.id}>
          <h2>{photo.title}</h2>
          <p>{photo.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Photos;