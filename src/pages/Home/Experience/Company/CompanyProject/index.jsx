import React from 'react'

const CompanyProject = ({item}) => {
  return (
    <div className='w-full m-2 flex flex-col'>
        <h2 className='text-2xl text-heading py-4'>{item.name}</h2>
        <div className='w-full flex justify-between'>
        <div className='flex pl-3 flex-1 flex-col'>
            {item.implementations.map(item=><h2 className='text-lg list-disc text-subheading'>{item}</h2>)}
        </div>
        <div className='flex flex-wrap items-start w-full max-w-[150px]'>
            <div className='flex flex-wrap items-start w-full max-w-[150px]'>
            {item.technologies.map(item=><h2 className='bg-secondary/30 p-1 text-background rounded-lg font-semibold m-1'>{item}</h2>)}
            </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default CompanyProject