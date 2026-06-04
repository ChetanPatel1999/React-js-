import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  const users = [
    {
      username: "john_doe",
      age: 25,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      username: "emma_wilson",
      age: 28,
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      username: "michael_smith",
      age: 32,
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      username: "sophia_jones",
      age: 22,
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      username: "david_brown",
      age: 30,
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      username: "olivia_taylor",
      age: 27,
      image: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      username: "james_anderson",
      age: 35,
      image: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      username: "ava_martin",
      age: 24,
      image: "https://randomuser.me/api/portraits/women/8.jpg"
    }
  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='Perent'>
        {users.map(function (ele) {
          return <Card user={ele.username} age={ele.age} img={ele.image} />
        })}
      </div>
    </>
  )
}

// const App = () => {
//   let arr = [12, 34, 56, 78, 90]
//   return (
//     <div className='Perent'>
//       {arr.map(function(){
//         return <h1>hello</h1>
//       })}
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div className='Perent'>
//       <Card user="chetan" age={18} img='https://images.unsplash.com/photo-1580518337843-f959e992563b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWN0b3JzfGVufDB8fDB8fHww' />
//       <Card user="aman" age={22} img='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWN0b3JzfGVufDB8fDB8fHww' />
//       <Card user="Raj patel" age={35} img='https://images.unsplash.com/photo-1548251147-dda09867567a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFjdG9yc3xlbnwwfHwwfHx8MA%3D%3D' />
//     </div>
//   )
// }

export default App
