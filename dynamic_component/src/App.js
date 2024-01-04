import React, { useState } from 'react';
import Input from './Components/Input';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  return (
    <div>
      <h1> Input Component Example</h1>
      <Input
        type="text"
        label="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <Input
        type="text"
        label="Enter your email"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
      />
    </div>
  );
}

export default App;



