import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border rounded-md text-center size-[300px] flex flex-col justify-center p-4 space-y-4">
        <h1 className="font-bold text-xl">Counter</h1>
        <p className="text-4xl">{count}</p>
        <button
          className="bg-blue-500 p-2 rounded-md hover:bg-blue-300 text-white text-center"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default App
