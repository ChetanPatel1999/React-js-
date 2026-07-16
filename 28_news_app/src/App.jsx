import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import NewsBord from './components/NewsBord'

const App = () => {
  const [articles, setarticles] = useState([])
  const getNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setarticles(data.articles);
  }
  useEffect(() => {
    getNews()
  }, [])

  return (
    <div>
      <Navbar />
      <NewsBord articles={articles} />
    </div>
  )
}

export default App
