import React from 'react'

const MyButton = ({ title, icon }) => {
  return (
    <button className='px-2 py-2 md:px-5 md:py-4 rounded-lg text-white transition hover:opacity-80 flex items-center justify-between bg-indigo-800 mr-2'>
        <span className='mr-2'>{title}</span>
        <span>{icon}</span>
    </button>
  )
}

export default MyButton