import React from 'react'

const Chatperson = () => {
  return (
    <div>
      <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>

      {/* div that contain profile picture of the user and give its online status */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='user avatar' />
          </div>
        </div>

        {/* contains username, and emogi*/}
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>Pratyush</p>
            <span className='text-xl'>🎶</span>
          </div>
        </div>
      </div>

      <div className='my-0 py-0 divider h-1'/>
    </div>
  )
}

export default Chatperson