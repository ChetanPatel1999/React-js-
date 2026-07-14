import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)
  const getData = async () => {
    const { data } = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
    console.log(data)
    setuserData(data);
  }
  useEffect(() => {
    getData();
  }, [index])

  let printUserData = <h1 className='font-bold text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200'>Loding...</h1>
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div className='h-60 '>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white overflow-auto p-4 pt-8'>
      <h1 className='bg-red-600 p-5 w-fit font-bold text-5xl fixed top-8 left-4'>{index}</h1>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-10 mt-5'>
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setindex(index - 1)
              setuserData([])

            }
          }}
          className='bg-amber-300 text-black active:scale-95 px-5 py-2 text-sm font-bold rounded'>Prev</button>
        page - {index}
        <button
          onClick={() => {
            setindex(index + 1)
            setuserData([])
          }}
          className='bg-amber-400 text-black active:scale-95 px-5 py-2 text-sm font-bold rounded'>Next</button>
      </div>
    </div>
  )
}

export default App
