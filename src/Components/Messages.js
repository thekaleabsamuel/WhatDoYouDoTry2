import React, { useEffect, useState } from 'react';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/Archive')
      .then(response => response.json())
      .then(data => {
        const messages = data.filter(item => item.message && item.image);
        setMessages(messages);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleClick = message => {
    setSelectedMessage(message);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Messages</h1>
      {messages.map(message => (
        <div key={message.id} onClick={() => handleClick(message)}>
          <h2>{message.title}</h2>
          <img src={message.image} alt={message.title} /> {/* Display the image */}
          <p>{message.message}</p> {/* Display the message */}
          <p>Date: {message.date}</p> {/* Display the date */}
        </div>
      ))}
      {selectedMessage && (
        <div>
          <h2>{selectedMessage.title}</h2>
          <img src={selectedMessage.image} alt={selectedMessage.title} />
          <p>{selectedMessage.message}</p> {/* Display the selected message */}
          <p>Date: {selectedMessage.date}</p> {/* Display the date of the selected message */}
          {/* Display other details of the selected message */}
        </div>
      )}
    </div>
  );
}

export default Messages;