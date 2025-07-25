import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'


import './App.css'
import router from './routes/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
