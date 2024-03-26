// Photos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Photos() { // Change to uppercase
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/Archive')
      .then(response => {
        setPhotos(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Photos</h1>
      {photos.map(photo => ( // Change to photos
        <div key={photo.id}>
          <h2>{photo.title}</h2>
          <p>{photo.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Photos; // Change to Photos