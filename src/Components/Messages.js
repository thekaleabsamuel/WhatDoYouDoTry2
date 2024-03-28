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
    <div className="messages-container">
      <h1>Messages</h1>
      {messages.map(message => (
        <div className="message-content" key={message.id} onClick={() => handleClick(message)}>
          <h2>{message.title}</h2>
          <img className="message-image" src={message.image} alt={message.title} />
          <p>{message.message}</p>
          <p>Date: {message.date}</p>
        </div>
      ))}
      {selectedMessage && (
        <div className="message-content">
          <h2>{selectedMessage.title}</h2>
          <img className="message-image" src={selectedMessage.image} alt={selectedMessage.title} />
          <p>{selectedMessage.message}</p>
          <p>Date: {selectedMessage.date}</p>
        </div>
      )}
    </div>
  );
}

export default Messages;