import React, { useState } from 'react';

const TextEditor = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.download = 'textFile.txt';
    a.href = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Arial, sans-serif', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <button
          style={{
            padding: '10px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div style={{ flexGrow: 1, padding: '20px', background: '#f4f4f4', overflowY: 'auto', overflow: 'hidden' }}>
        <textarea
          value={text}
          onChange={handleChange}
          style={{
            width: '100%',
            height: '100%',
            resize: 'none',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            lineHeight: '1.5',
          }}
          placeholder="Type Here..."
        />
      </div>
    </div>
  );
};

export default TextEditor;
