import React, { useRef, useState } from 'react'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'
const Game = () => {

    const [data, setdata] = useState(["", "", "", "", "", "", "", "", ""])
    const [count, setcount] = useState(0)
    const [lock, setlock] = useState(false)
    const myref = useRef(null);

    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const box5 = useRef(null);
    const box6 = useRef(null);
    const box7 = useRef(null);
    const box8 = useRef(null);
    const box9 = useRef(null);

    const divs = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    const toggle = (e, num) => {
        if (lock) {
            console.log("i am run")
            return 0;
        }
        if (count % 2 == 0) {
            e.target.innerHTML = `<img className='w-35 h-35 object-cover' src=${circle_icon} />`
            setcount(count + 1);
            let mydata = [...data];
            mydata[num] = "o";
            setdata(mydata);
            winner(mydata);
        }
        else {
            e.target.innerHTML = `<img className='w-35 h-35 object-cover' src=${cross_icon} />`
            setcount(count + 1);
            let mydata = [...data];
            mydata[num] = "x";
            setdata(mydata);
            winner(mydata);
        }
    }
    function winner(data) {
        console.log(data)
        if (data[0] == data[1] && data[1] == data[2] && data[2] != "") {
            console.log("call")
            won(data[0])
        }
        else if (data[3] == data[4] && data[4] == data[5] && data[5] != "") {
            won(data[3])
        }
        else if (data[6] == data[7] && data[7] == data[8] && data[8] != "") {
            won(data[6])
        }
        else if (data[0] == data[3] && data[3] == data[6] && data[6] != "") {
            won(data[0])
        }
        else if (data[1] == data[4] && data[4] == data[7] && data[7] != "") {
            won(data[1])
        }
        else if (data[2] == data[5] && data[5] == data[8] && data[8] != "") {
            won(data[2])
        }
        else if (data[0] == data[4] && data[4] == data[8] && data[8] != "") {
            won(data[0])
        }
        else if (data[2] == data[4] && data[4] == data[6] && data[6] != "") {
            won(data[2])
        }
    }
    function won(win) {
        setlock(true);
        if (win == "x") {
            myref.current.innerHTML = `congratulation<img class='img' src=${cross_icon} />is winner `
        }
        else {
            myref.current.innerHTML = `congratulation <img class='img' src=${circle_icon} /> is winner `
        }
        setdata(["", "", "", "", "", "", "", "", ""]);
    }
    function reset() {
        myref.current.innerHTML = `Tic Tac Toe In
                <span class='my-span'> React</span>`
        divs.map((div) => {
            div.current.innerHTML = "";
        })
        setlock(false);
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 ref={myref} className='text-white text-3xl mb-4 font-bold text-center'>Tic Tac Toe In
                <span className='text-green-300' > React</span></h1>
            <div className='flex flex-col gap-1' >
                <div className='flex gap-1 justify-center items-center'>
                    <div ref={box1} onClick={(e) => toggle(e, 0)} className='w-30 h-30 bg-gray-700 rounded flex justify-center items-center' ></div>
                    <div ref={box2} onClick={(e) => toggle(e, 1)} className='w-30 h-30 bg-gray-700 rounded flex justify-center items-center' ></div>
                    <div ref={box3} onClick={(e) => toggle(e, 2)} className='w-30 h-30 bg-gray-700 rounded flex justify-center items-center' ></div>
                </div>
                <div className='flex gap-1 justify-center items-center'>
                    <div ref={box4} onClick={(e) => toggle(e, 3)} className='w-30 h-30 bg-gray-700 rounded flex justify-center items-center' >

                    </div>
                    <div ref={box5} onClick={(e) => toggle(e, 4)} className='w-30 h-30 bg-gray-700 rounded flex justify-center items-center' ></div>
                    <div ref={box6} onClick={(e) => toggle(e, 5)} className='w-30 h-30 bg-gray-700 rounded flex justify-center items-center' ></div>
                </div>
                <div className='flex gap-1 justify-center items-center'>
                    <div ref={box7} onClick={(e) => toggle(e, 6)} className='w-30 h-30 bg-gray-700 rounded flex justify-center items-center' ></div>
                    <div ref={box8} onClick={(e) => toggle(e, 7)} className='w-30 h-30 bg-gray-700 rounded flex justify-center items-center' ></div>
                    <div ref={box9} onClick={(e) => toggle(e, 8)} className='w-30 h-30 bg-gray-700 rounded flex justify-center items-center' ></div>
                </div>
            </div>
            <button onClick={reset}
                className='bg-gray-700 text-green-300 py-3 px-8 mt-4 font-medium   rounded-4xl'>Reset</button>
        </div>
    )
}

export default Game
