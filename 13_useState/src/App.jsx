import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(12)
  const [bgcolor, setbgcolor] = useState("red")
  const [color, setcolor] = useState("black")
  const [className, setclassName] = useState("")
  const [dark, setdark] = useState(true)
  const [arr, setarr] = useState([12, 34, 56])
  const [user, setuser] = useState({ name: "ram", age: 20 })

  // let num = 12;
  // function changeValue() {
  //   console.log(num);
  //   num = 50
  //   console.log(num);
  // }

  function changeValue() {
    setnum(prev => prev + 1);
    setnum(prev => prev + 1);

    // setnum(num + 1)
    // setnum(num + 1)

    setbgcolor("blue");
    setcolor("white");
    setclassName("active")
    setdark(!dark);

    // setarr([...arr, 90])
    let newarr = [...arr]
    newarr.push(90);
    console.log(newarr)
    setarr(newarr)

    // setuser({ ...user, age: 50 })

    // let newUser = { ...user };
    // newUser.age = 40;
    // setuser(newUser)
    setuser(prev=>({...prev,age:90}))

  }
  return (
    <div>
      <h1>{user.name}{user.age}</h1>
      <h1 style={{ backgroundColor: bgcolor, color: color }}>value of num = {num} {arr}</h1>
      <div className={dark ? "box" : "active-box"}>

      </div>
      <button className={className} onClick={changeValue}>change Value</button>
    </div>
  )
}

export default App
