import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate();
    
  return (
    <div className='py-4 px-6 border-b' style={{ backgroundColor: '#0e7490', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
      <div className='container mx-auto flex flex-wrap items-center justify-center gap-3'>
        <button 
          onClick={() => {
            navigate('/')
          }}   
          className='font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 active:scale-95 hover:shadow-lg'
          style={{ backgroundColor: '#f59e0b', color: '#000' }}
        >
          <span className='flex items-center gap-2'>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
            </svg>
            Home
          </span>
        </button>

        <button   
          className='font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 active:scale-95 hover:shadow-lg' 
          style={{ backgroundColor: '#f59e0b', color: '#000' }}
          onClick={() => {
            navigate(-1)
          }}
        >
          <span className='flex items-center gap-2'>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
            </svg>
            Previous
          </span>
        </button>

        <button   
          className='font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 active:scale-95 hover:shadow-lg' 
          style={{ backgroundColor: '#f59e0b', color: '#000' }}
          onClick={() => {
            navigate(+1)
          }}
        >
          <span className='flex items-center gap-2'>
            Next
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Navbar2