import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {
    const params = useParams()
    console.log(params.Id)
  return (
    <div>
      <h1 className='head'>{params.Id}Courses Details Page</h1>
    </div>
  )
}

export default CoursesDetails
