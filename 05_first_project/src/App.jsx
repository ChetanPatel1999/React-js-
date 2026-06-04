import React from 'react'

function hello() {
  return "ram ram ji";
}
const App = () => {
  return (
    <>
      <div>
        <h1 onClick={show} >{hello()}</h1>
        {/* <h3>brother</h3> */}
      </div>
      <div>
        new div
      </div>
    </>
  )
}
function show() {
  document.querySelector("h1").innerText = "black";
}

export default App
