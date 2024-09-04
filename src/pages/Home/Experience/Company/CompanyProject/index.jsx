import React from 'react'

const CompanyProject = ({item}) => {
  return (
    <div className='w-full m-2 flex flex-col'>
        <h2 className='text-2xl font-semibold text-heading pt-4 pb-1'>{item.name}</h2>
        <div className='w-full flex justify-between'>
        <ul className='flex pl-10 flex-1 flex-col'>
            {item.implementations.map(item=><li className={`text-lg ${ item.id !== 0 ? "mt-2" : "mt-0"} list-disc text-subheading`}>{item}</li>)}
        </ul>
        <div className='flex flex-wrap border-l-2 pl-4 border-black items-start w-full max-w-[150px]'>
            <div className='flex flex-wrap items-start w-full max-w-[150px]'>
            {item.technologies.map(item=><h2 className='bg-primary/70 p-1 text-black rounded-lg font-semibold m-1'>{item}</h2>)}
            </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default CompanyProject