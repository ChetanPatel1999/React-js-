import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [mynotes, setMynotes] = useState([])

  function submitHandler(evt) {
    evt.preventDefault();
    setMynotes([...mynotes, { title, details }])
    console.log(mynotes)
    setDetails("")
    setTitle("")
  }

  function deleteNote(deleteIndex) {
    mynotes.splice(deleteIndex, 1)
    setMynotes([...mynotes])
  }
  return (
    <div className='lg:flex gap-10 bg-black w-full h-screen text-white lg:py-8 lg:p-8 '>
      <form onSubmit={submitHandler}
        className='lg:w-1/2 flex flex-col gap-10 p-8 lg:p-0'>
        <h1 className='text-3xl font-bold text-center'>Note App</h1>
        <input onChange={(evt) => setTitle(evt.target.value)}
          className='outline-none rounded resize-none border border-white w-full py-3 px-4 text-xl font-medium'
          type='text' value={title} placeholder='Enter note heading...' />
        <textarea onChange={(evt) => setDetails(evt.target.value)}
          className='outline-none rounded resize-none h-40 border border-white w-full py-3 px-4 text-xl font-medium'
          type='text' value={details} placeholder='Enter notes content...' />
        <button className='outline-none active:scale-95 rounded resize-none border bg-white text-black border-white w-full py-3 px-4 text-xl font-medium'>
          Add Note</button>
      </form>
      <div className='lg:w-1/2 h-full bg-black w-full '>
        <h1 className='text-3xl font-bold text-center'>Recent Notes</h1>
        <div id="box" className='flex flex-wrap lg:gap-10 gap-5 justify-center lg:justify-start border-l-2 border-white w-full h-full p-6 overflow-auto'>
          {mynotes.map((note, idx) => {
            return (
              <div className=' lg:w-41 lg:h-60 w-60 h-70 rounded-xl p-0 overflow-hidden relative'>
                <img className='w-full h-full  object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOpaMi2ejUhIxkvuH8nmsPv9HCdfzFe5CChKvU_FhFQ&s=10' />
                <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-between items-center'>
                  <div>
                    <h1 className='text-black font-bold pt-6 text-center text-xl'>
                      {note.title}
                    </h1>
                    <p className='text-gray-900 font-bold pt-4 text-center'>
                      {note.details}
                    </p>
                  </div>
                  <button onClick={() => {
                    deleteNote(idx);
                  }}
                    className='bg-red-600 w-30 active:scale-95 rounded mb-4 font-medium'>Delete Note</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
