import { useState } from 'react'
import './App.css'
import ShoppingCart from './Shopping cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingCart/>
    </>
  )
}

export default App
