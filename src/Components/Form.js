import React, { useState } from 'react';

function Form() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
   
    const handleSubmit = (event) => {
      event.preventDefault();
    
      const data = {
        title,
        body,
      };
    
      fetch('http://localhost:3030/Archive', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };
   
    return (
       <form onSubmit={handleSubmit}>
         <label>
           Title:
           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
         </label>
         <label>
           Body:
           <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
         </label>
         <button type="submit">Submit</button>
       </form>
    );
}

export default Form;