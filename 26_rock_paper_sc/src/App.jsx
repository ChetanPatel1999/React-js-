import React, { useState } from 'react'
import paperImg from "./assets/papper.jpg";
import rockImg from "./assets/rock.jpg";
import scissorImg from "./assets/scissors.jpg";
const App = () => {

  const [userScore, setuserScore] = useState(0)
  const [compScore, setcompScore] = useState(0)
  const [res, setres] = useState("play your game")
  const [color, setcolor] = useState("bg-blue-950")

  function playGame(userChoise) {
    let arr = ["paper", "rock", "scissor"];
    let compChoise = arr[parseInt(Math.random() * 3)];
    console.log("userChoise = " + userChoise)
    console.log("compChoise = " + compChoise)

    if (userChoise == compChoise) {
      setres("Match is draw")
      setcolor("bg-blue-950");
    }
    else if (userChoise == "rock" && compChoise == "paper" || userChoise == "paper" && compChoise == "scissor" || userChoise == "scissor" && compChoise == "rock") {
      setres("Computer is Winner")
      setcompScore(prev => prev + 1)
      setcolor("bg-red-600");
    }
    else {
      setres("User is Winner !" + userChoise + " beats " + compChoise)
      setuserScore(prev => prev + 1)
      setcolor("bg-green-700")
    }
  }
  return (
    <div >
      <div className='bg-blue-950 text-center p-4 font-bold text-white text-2xl' >
        <h1 >Make by Hello Wolrd Institute</h1>
        <h1 >Rock Paper Scissors</h1>
      </div>
      <div className='flex justify-center items-center mt-20 gap-20 '>
        <img onClick={() => playGame("paper")} className='w-40 h-40 rounded-full object-cover hover:scale-110 hover:opacity-70' src={paperImg} />
        <img onClick={() => playGame("rock")} className='w-40 h-40 rounded-full object-cover hover:scale-110 hover:opacity-70' src={rockImg} />
        <img onClick={() => playGame("scissor")} className='w-40 h-40 rounded-full object-cover hover:scale-110 hover:opacity-70' src={scissorImg} />
      </div>
      <div className='flex justify-center m-10 gap-20 font-bold text-2xl'>
        <div>
          <p className='text-center'>{userScore}</p>
          <p>you</p>
        </div>
        <div>
          <p className='text-center'>{compScore}</p>
          <p>comp</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <h1 className={color + " p-2 rounded text-white text-2xl font-bold"}> {res}</h1>
      </div>
    </div>
  )
}

export default App
