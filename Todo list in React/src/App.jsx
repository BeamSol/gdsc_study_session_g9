import { useState } from 'react'
import Student from './Student.jsx'
import './App.css'
import Todo from './Todo.jsx'
import React from 'react';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student/>
      <Todo/>
    </>
  )
}

export default App
