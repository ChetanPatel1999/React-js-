import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import NotFoundPage from './pages/NotFoundPage'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:Id' element={<CoursesDetails />} />
      </Routes>
    </div>
  )
}

export default App
