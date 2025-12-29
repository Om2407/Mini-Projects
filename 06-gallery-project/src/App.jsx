import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card' // ← Ye import missing tha

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState(1) // ← 'S' capital + initial value
  
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)
    setUserdata(response.data)
  }
  
  useEffect(function (){
    getData()
  }, [index])

  let printUserData = <h3>Loading...</h3>

  if (userdata.length > 0) {
    printUserData = userdata.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white'>
      <div className='container mx-auto px-4 py-8 h-screen flex flex-col'>
        
        <div className='mb-6 text-center'>
          <h1 className='text-3xl font-bold gradient-text'>
  Gallery Project
</h1>
          {/* <h1 className='text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
            Image Gallery
          </h1> */}
           {/* <h1 className='text-3xl font-bold text-amber-400'>
  Gallery Project
</h1>  */}

          <p className='text-gray-400 text-sm mt-2'>Explore beautiful images</p>
        </div>

        <div className='flex-1 overflow-auto mb-6 rounded-lg'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4'>
            {printUserData}
          </div>
        </div>

        <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl'>
          <div className='flex justify-center items-center gap-8'>
            
            <button
              disabled={index === 1}
              className={`
                px-6 py-3 rounded-lg font-semibold text-sm
                transition-all duration-200 transform
                ${index === 1 
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-50' 
                  : 'bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:from-amber-500 hover:to-orange-600 active:scale-95 shadow-lg hover:shadow-amber-500/50'
                }
              `}
              onClick={() => {
                if (index > 1) {
                  setIndex(index - 1)
                  setUserdata([]) // ← lowercase 'd'
                }
              }}
            >
              ← Prev
            </button>

            <div className='flex items-center gap-3'>
              <span className='text-gray-400 text-sm'>Page</span>
              <div className='bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-lg px-4 py-2 rounded-lg min-w-[60px] text-center shadow-lg'>
                {index}
              </div>
            </div>

            <button
              className='
                px-6 py-3 rounded-lg font-semibold text-sm
                bg-gradient-to-r from-amber-400 to-orange-500 text-black
                hover:from-amber-500 hover:to-orange-600
                active:scale-95 transition-all duration-200 transform
                shadow-lg hover:shadow-amber-500/50
              '
              onClick={() => {
                setUserdata([]) // ← lowercase 'd'
                setIndex(index + 1)
              }}
            >
              Next →
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App