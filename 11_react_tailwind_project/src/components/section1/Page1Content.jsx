import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
    // console.log(props.users)
    return (
        <div className='flex justify-between items-center gap-10 pt-2 pb-8 px-18 h-[85vh]'>
            <LeftContent />
            <RightContent users={props.users}/>
        </div>
    )
}

export default Page1Content
