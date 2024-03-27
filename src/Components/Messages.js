import React, { useEffect, useState } from 'react';


function Messages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3030/Archive')
      .then(response => {
        setMessages(response.data);
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
      <h1>Messages</h1>
      {messages.map(message => (
        <div key={message.id}>
          <h2>{message.title}</h2>
          <p>{message.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Messages;