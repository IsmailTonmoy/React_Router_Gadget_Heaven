import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
