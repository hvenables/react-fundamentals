// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useState, useRef } from 'react';

function UsernameForm({onSubmitUsername}) {
  let inputRef = useRef(null);
  const [usernameError, setUsernameError] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitUsername(inputRef.current.value);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = value === value.toLowerCase();
    setUsernameError(isValid ? null : 'Username must be lower case');
  }

  const isDisabled = () => usernameError !== null

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={inputRef} onChange={handleChange} />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {usernameError}
      </div>
      <button disabled={isDisabled()} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
