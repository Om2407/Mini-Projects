import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('') 
  const [details, setDetails] = useState('')
  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    if (title.trim() === '' || details.trim() === '') {
      alert('Please fill both fields!')
      return
    }

    const copyTask = [...tasks]
    copyTask.push({title, details})
    setTasks(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...tasks]
    copyTask.splice(idx, 1)
    setTasks(copyTask)
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-800 p-4 lg:p-10'>
      
      {/* MAIN CONTAINER WITH PERSPECTIVE */}
      <div className='max-w-7xl mx-auto perspective-1000'>
        
        {/* HEADER */}
        <div className='text-center mb-10 transform hover:scale-105 transition-all duration-300'>
          <h1 className='text-6xl font-black text-white mb-2 drop-shadow-2xl animate-pulse'>
            📝 Notes Manager
          </h1>
          <p className='text-gray-300 text-lg'>Organize your thoughts beautifully</p>
        </div>

        {/* GRID LAYOUT */}
        <div className='grid lg:grid-cols-2 gap-8'>
          
          {/* LEFT SIDE - ADD NOTES FORM */}
          <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:rotate-y-2 transition-all duration-500 hover:shadow-purple-500/50'>
            
            <h2 className='text-4xl font-bold text-white mb-6 flex items-center gap-3'>
              <span className='text-5xl'>✍️</span>
              Create Note
            </h2>

            {/* TITLE INPUT */}
            <div className='mb-5'>
              <label className='block text-white/80 font-semibold mb-2 text-sm uppercase tracking-wide'>
                📌 Title
              </label>
              <input
                type="text"
                placeholder='Enter your note title...'
                className='w-full px-5 py-4 bg-white/20 backdrop-blur-md text-white placeholder-white/50 rounded-2xl border-2 border-white/30 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-400/30 transition-all duration-300 font-medium'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* DETAILS TEXTAREA */}
            <div className='mb-6'>
              <label className='block text-white/80 font-semibold mb-2 text-sm uppercase tracking-wide'>
                📄 Details
              </label>
              <textarea
                className='w-full px-5 py-4 h-40 bg-white/20 backdrop-blur-md text-white placeholder-white/50 rounded-2xl border-2 border-white/30 outline-none resize-none focus:border-pink-400 focus:ring-4 focus:ring-pink-400/30 transition-all duration-300 font-medium'
                placeholder='Write your note details here...'
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            {/* ADD BUTTON */}
            <button
              onClick={submitHandler}
              className='w-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-pink-500/50 active:scale-95 transform transition-all duration-300 text-lg uppercase tracking-wider'
            >
              ✨ Add Note
            </button>
          </div>

          {/* RIGHT SIDE - NOTES DISPLAY WITH PERSPECTIVE */}
          <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20'>
            
            <h2 className='text-4xl font-bold text-white mb-6 flex items-center gap-3'>
              <span className='text-5xl'>📚</span>
              Your Notes
            </h2>

            {/* NOTES GRID WITH PERSPECTIVE */}
            <div className='h-150 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent'>
              
              {tasks.length === 0 ? (
                <div className='flex flex-col items-center justify-center h-full text-center'>
                  <div className='text-9xl mb-4 animate-bounce'>📭</div>
                  <p className='text-white/70 text-2xl font-bold'>No notes yet!</p>
                  <p className='text-white/50 text-sm mt-2'>Create your first note to get started</p>
                </div>
              ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000'>
                  {tasks.map((elem, idx) => (
                    <div 
                      key={idx} 
                      className='relative group'
                      style={{
                        transform: `perspective(1000px) rotateY(${idx % 2 === 0 ? '5deg' : '-5deg'})`,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* NOTE CARD WITH 3D EFFECT */}
                      <div className='bg-linear-to-br from-yellow-200 via-yellow-100 to-yellow-50 rounded-2xl p-6 shadow-2xl border-2 border-yellow-300 min-h-50 flex flex-col justify-between transform group-hover:scale-105 group-hover:rotate-0 transition-all duration-500 hover:shadow-yellow-400/50'>
                        
                        {/* STICKY NOTE EFFECT */}
                        <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-yellow-400/50 rounded-t-lg'></div>
                        
                        {/* CONTENT */}
                        <div className='flex-1 overflow-hidden'>
                          <h3 className='text-2xl font-black text-gray-800 mb-3 wrap-break-word leading-tight'>
                            {elem.title}
                          </h3>
                          <p className='text-sm font-semibold text-gray-700 wrap-break-word leading-relaxed overflow-y-auto max-h-24'>
                            {elem.details}
                          </p>
                        </div>

                        {/* DELETE BUTTON */}
                        <button 
                          onClick={() => deleteNote(idx)} 
                          className='mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-red-500/50 active:scale-95 transform transition-all duration-200 uppercase tracking-wide text-sm'
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM STYLES FOR PERSPECTIVE */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform.hover\\:rotate-y-2:hover {
          transform: rotateY(2deg);
        }
      `}</style>
    </div>
  )
}

export default App