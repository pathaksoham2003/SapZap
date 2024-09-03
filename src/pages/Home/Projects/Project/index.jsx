import React from 'react'
import { AI } from '../../../../images'


const Project = ({item}) => {
  return (
    <div className='flex flex-col m-2'>
        <div className='rounded-3xl aspect-video overflow-hidden'>
            <img src={AI}/>
        </div>
        <div className='p-3'>
            <h2 className='text-heading text-xl'>{item.role}</h2>
            <h2 className='text-heading text-xl'>{item.companyName}</h2>
            <div className='flex items-end'>
                <h2 className='text-heading text-xl'>{item.end_date}</h2>
                <div className='w-3 h-1 mb-[10px] mx-2 rounded-lg bg-heading'></div>
                <h2 className='text-heading text-xl'>{item.start_date}</h2>
            </div>
        </div>
    </div>
  )
}

export default Project