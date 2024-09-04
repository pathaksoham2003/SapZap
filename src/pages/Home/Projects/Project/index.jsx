import React from 'react'
import { AI } from '../../../../images'


const Project = ({item}) => {
  return (
    <div className='flex flex-col m-2'>
        <div className='rounded-3xl bg-subheading/20 aspect-video overflow-hidden'>
            <div onClick={()=>window.open(item.url,"__blank")} className='pt-14 px-5 hover:-translate-y-4 transition-transform ease-in-out duration-500  h-full w-full'>
              <div className='w-full flex justify-between bg-gray-900 h-5 rounded-t-lg rounded-tr-lg'>
                <div className='flex items-center'>
                  <div className='bg-red-800 rounded-full ml-2 w-2 h-2'>
                  </div>
                  <div className='bg-yellow-800 rounded-full ml-2 w-2 h-2'>
                  </div>
                  <div className='bg-green-800 rounded-full ml-2 w-2 h-2'>
                  </div>
                </div>
              </div>
            <img className='flex-1 h-full w-full' src={item.hero}/>
            </div>
            
        </div>
        <div className='p-3'>
            <h2 className='text-heading text-2xl font-semibold'>{item.title}</h2>
            <h2 className='text-heading'>{item.description}</h2>
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