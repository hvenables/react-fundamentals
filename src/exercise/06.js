// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState, useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  let inputRef = useRef(null)
  const [usernameError, setUsernameError] = React.useState(null)
  const [usernameInput, setUsernameInput] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(usernameInput)
  }

  const handleChange = e => {
    const value = e.target.value
    // const isValid = value === value.toLowerCase();
    // setUsernameError(isValid ? null : 'Username must be lower case');
    setUsernameInput(value.toLowerCase())
  }

  const isDisabled = () => usernameError !== null

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          ref={inputRef}
          value={usernameInput}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
