import React, { useState } from 'react'

// if else rendering
function UserStatus() {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  }
  return <h1>Please Login</h1>;
}

// ternary rendering
function UserStatus2() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <h1> Welcome User</h1 >
        : <h1>Please Login</h1>
      }
    </div>
  )
}

// logical operator rendering
function App1() {
  const isAdmin = false;
  return (
    <div>
      <h1>User Dashboard</h1>
      {isAdmin && <button>Delete User</button>}
    </div>
  );
}

// switch case 
function App2() {
  const role = "user";
  switch (role) {
    case "admin":
      return <h1>Admin Panel</h1>;
    case "user":
      return <h1>User Dashboard</h1>;
    case "guest":
      return <h1>Guest Area</h1>;
    default:
      return <h1>Access Denied</h1>;
  }
}

//  show hide components
const App3 = () => {
  const [show, setshow] = useState(true)
  function showElement() {
    setshow(!show);
  }
  return (
    <div>
      <button onClick={showElement}>show/hide</button>
      {show && <h1>hay brother lets play game</h1>}
    </div>
  )
}

const App4 = () => {
  const [show, setshow] = useState("visible")
  function showElement() {
    if (show == "visible") {
      setshow("hidden");
    }
    else {
      setshow("visible");
    }
  }
  return (
    <div>
      <h1 style={{ visibility: show }}>hay brother lets play game</h1>
      <button onClick={showElement}>show/hide</button>
    </div>
  )
}

const App5 = () => {
  const [show, setshow] = useState(true)
  function showElement() {
    setshow(!show)
  }
  return (
    <div>
      <h1 style={{ visibility: show ? "visible" : "hidden" }}>hay brother lets play game</h1>
      <button onClick={showElement}>show/hide</button>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <App5 />
    </div>
  )
}

export default App
