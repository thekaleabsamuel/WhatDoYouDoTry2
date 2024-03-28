import React, { useEffect, useState } from 'react';

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/Archive')
      .then(response => response.json())
      .then(data => {
        const photos = data.filter(item => item.title && item.photoImage);
        setPhotos(photos);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleClick = photo => {
    setSelectedPhoto(photo);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="photos-container">
      <h1>Photos</h1>
      {photos.map(photo => (
        <div key={photo.id} onClick={() => handleClick(photo)}>
          <h2>{photo.title}</h2>
          <img className="photo-image" src={photo.photoImage} alt={photo.title} /> {/* Display the photoImage */}
        </div>
      ))}
      {selectedPhoto && (
        <div>
          <h2>{selectedPhoto.title}</h2>
          <img className="photo-image" src={selectedPhoto.photoImage} alt={selectedPhoto.title} />
          {/* Display other details of the selected photo */}
        </div>
      )}
    </div>
  );
}

export default Photos;