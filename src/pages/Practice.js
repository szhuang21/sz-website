import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter Something"
        />
        <button type="submit"></button>
      </form>

      {submittedValue && <p>You submitted: {submittedValue}</p>}
    </div>
  );
}
export default App;
