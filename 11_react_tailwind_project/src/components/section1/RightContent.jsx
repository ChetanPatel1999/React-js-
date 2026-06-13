import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users)
    return (
        <div id="right" className='h-full w-3/4 p-6 flex gap-10 overflow-x-auto'>
            {props.users.map((ele,idx) => {
                return <RightCard key={idx} color={ele.color} id={idx} img={ele.image} tag={ele.tag} />
            })}
        </div>
    )
}

export default RightContent
