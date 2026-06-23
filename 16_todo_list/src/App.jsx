import React, { useState } from 'react'

const App = () => {
  const [data, setdata] = useState("")
  const [todos, settodos] = useState([])
  function onChangeValue(val) {
    setdata(val)
  }
  function submitHandler(evt) {
    evt.preventDefault();
    settodos([...todos, data])
    console.log(todos)
    setdata("")

  }

  function deleteTask(index) {
    console.log("delete task")
    let newtodos = todos.filter((data, idx) => {
      return idx !== index
    })

    settodos(newtodos)
  }

  return (
    <div>

      <form onSubmit={(evt) => {
        submitHandler(evt)
      }}>
        <input onChange={(evt) => {
          onChangeValue(evt.target.value)
        }
        } value={data} type='text' />
        <button >click me</button>
      </form>
      <ul>
        {todos.map((data, index) => {
          return (<li key={index} >{data}
            <button onClick={() => {
              deleteTask(index)
            }}>delete</button>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default App
