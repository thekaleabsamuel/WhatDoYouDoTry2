import React, { useState } from 'react';

function Upload() {
  const [title, setTitle] = useState('');
  const [photoImage, setPhotoImage] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [video, setVideo] = useState('');
  const [mp3, setMp3] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const item = {
      title,
      photoImage,
      image,
      date,
      video,
      mp3,
      message
    };

    fetch('http://localhost:3000/Archive', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
    .then(response => response.json())
    .then(() => {
      setTitle('');
      setPhotoImage('');
      setImage('');
      setDate('');
      setVideo('');
      setMp3('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>

      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Photo Image:
          <input type="text" value={photoImage} onChange={e => setPhotoImage(e.target.value)} />
        </label>
        <label>
          Image:
          <input type="text" value={image} onChange={e => setImage(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="text" value={date} onChange={e => setDate(e.target.value)} />
        </label>
        <label>
          Video:
          <input type="text" value={video} onChange={e => setVideo(e.target.value)} />
        </label>
        <label>
          MP3:
          <input type="text" value={mp3} onChange={e => setMp3(e.target.value)} />
        </label>
        <label>
          Message:
          <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
        <img className="upload-gif" src="https://media.tenor.com/xTujfMHupbEAAAAi/under-construction-lex.gif" alt="Upload animation" />

      </form>
    </div>
  );
}

export default Upload;