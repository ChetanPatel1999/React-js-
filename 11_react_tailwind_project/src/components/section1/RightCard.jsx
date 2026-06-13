import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full w-[28%] rounded-4xl overflow-hidden relative shrink-0'>
            <img className='h-full w-full object-cover' src={props.img} />
            <div className='bg-black w-full h-full absolute left-0 top-0 opacity-40'></div>
            <RightCardContent id={props.id} tag={props.tag} color={props.color} />
        </div>
    )
}

export default RightCard
