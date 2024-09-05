import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2 className='text-4xl text-pink-500 flex justify-center'>moikkuu</h2>
      </div>
      
      <div className="flex justify-center items-center h-screen">
        <button className='btn w-1/2 h-30 hover:h-full" rounded-full' onClick={() => setCount((count) => count - 1 * 27.45)}>
          count is {count}
        </button>       
      </div>      
    </>
  )
}

export default App
