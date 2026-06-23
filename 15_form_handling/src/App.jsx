import React, { useState } from 'react'


function FormHandle() {
  function submitHandler(evt) {
    // evt.preventDefault();
    console.log("form is submited")

  }
  return (
    <div>
      <form onSubmit={(evt) => {
        submitHandler(evt)
      }}>
        <input type='text' />
        <button >click me</button>
      </form>
    </div>
  )
}



function TowWayBinding() {
  const [data, setdata] = useState("")
  const [title, settitle] = useState("here show data")
  function onChangeValue(val) {
    setdata(val)
  }
  function submitHandler(evt) {
    evt.preventDefault();
    console.log(data)
    settitle(data)
    setdata("")

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
      <h1>{title}</h1>
    </div>
  )
}



function MultipleInput() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={changeHandler}
        placeholder="Name"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={changeHandler}
        placeholder="Email"
      />

      <h3>{formData.name}</h3>
      <h3>{formData.email}</h3>
    </div>
  );
}


const App = () => {
  return (
    <div>
      <MultipleInput />
    </div>
  )
}

export default App
