import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, settheme] = useState("blue")
  return (
    <div>
      <h1>app theme is {theme}</h1>
      <Navbar theme={theme} settheme={settheme} />
    </div>
  )
}

export default App
