import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url}>
                <div className='h-53 w-52 rounded overflow-hidden'>
                    <img className='h-full w-full object-cover' src={props.elem.download_url} />
                </div>
                <h1 className='text-white font-bold text-sm'>{props.elem.author}</h1>
            </a>
        </div>
    )
}

export default Card
