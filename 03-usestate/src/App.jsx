import React from 'react'

const App = () => {
  const [num, setNum] = React.useState(0)

  function counterboxInc(){
    setNum(num + 1)
  }
  function counterboxDec(){
    setNum(num - 1)
  }
  function counterboxJump5(){
    setNum(num + 5)
  }
  function counterboxReset(){
    setNum(0)
  }
  return (
    <div className='container'>
      <div className="card">
        <h1 className='title'>Counter : {num}</h1>

        <div className="button-container">
          <button onClick={counterboxInc} className='btn btn-green'>
            Increase</button>
            <button onClick={counterboxDec} className='btn btn-red'>decrease</button>
            <button onClick={counterboxJump5} className='btn btn-blue'>Jump To +5</button>
            <button onClick={counterboxReset} className='btn btn-gray'>Reset</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
