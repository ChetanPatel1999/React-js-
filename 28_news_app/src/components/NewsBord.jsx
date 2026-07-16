import React from 'react'
import NewsCard from './NewsCard'

const NewsBord = (props) => {
  let data = props.articles
  return (
    <div>
      <h1 className='text-center font-bold text-2xl'>Latest <span className='bg-red-500 text-white py-1 px-2 rounded text-lg'>News</span></h1>
      {data.map((article) => {
        return <NewsCard article={article} />
      })}

    </div>
  )
}

export default NewsBord
