import React from 'react'

const btnClick = () => {
  console.log("hello react");
}
const mouseEnter = () => {
  console.log("mouse enter");
}
const inputChange = (val) => {
  console.log(val)
}
function pageScroling(val) {
  if (val < 0) {
    console.log("ulta scroling")
  }
  else {
    console.log("sheeda scroling")
  }
}
const App = () => {

  return (

    <div className='box' onWheel={(evt) => {
      pageScroling(evt.deltaY);
    }} >
      <button onMouseEnter={mouseEnter} onClick={btnClick}>click me!</button>
      <button onClick={btnClick} >new btn</button>
      <button onClick={() => {
        console.log("inside jsx html  ")
      }}>in react</button>

      {/* <input onChange={inputChange} type='text' placeholder='Enter here..' /> */}


      {/* <input onChange={() => {
        console.log("typing")
      }} type='text' placeholder='Enter here..' /> */}

      {/* <input onChange={(evt) => {
        console.log(evt.target.value);
      }} type='text' placeholder='Enter here..' /> */}

      <input onChange={(evt) => {
        inputChange(evt.target.value);
      }} type='text' placeholder='Enter here..' />

      <div onMouseMove={(evt) => {
        console.log(evt.clientY)
      }

      } className='my-div'>
      </div>

      <div className='aree'>

      </div>



      {/* event bubbling */}
      <div className='parent' onClick={() => {
        console.log("parent clicked")
      }
      }>
        <button onClick={(e) => {
          e.stopPropagation();
          console.log("button clicked")
        }}>click me </button>
      </div>

    </div >
  )
}

export default App
