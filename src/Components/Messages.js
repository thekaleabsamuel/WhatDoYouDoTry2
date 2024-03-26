import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/Archive')
      .then(response => {
        setMessages(response.data);
      });
  }, []);

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