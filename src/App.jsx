import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState('bg-lavender-700');

  const bgChange = (bgColor) => {
    if(bgColor == 'black' || bgColor == 'white') {
      setColor(`bg-${bgColor}`);
      return;
    }
    setColor(`bg-${bgColor}-700`);
  }

  return (
    <>
      <div className={`${color} w-screen h-screen relative`}>
        <ul className='flex flex-row flex-wrap justify-center items-center gap-2 w-100 h-100 bg-white p-2 border rounded-2xl fixed bottom-10 left-10 right-10'>
          <li><button className='bg-red-700 px-4 py-1 border rounded-2xl' onClick={() => bgChange('red')}>Red</button></li>
          <li><button className='bg-blue-700 px-4 py-1 border rounded-2xl' onClick={() => bgChange('blue')}>Blue</button></li>
          <li><button className='bg-green-700 px-4 py-1 border rounded-2xl' onClick={() => bgChange('green')}>Green</button></li>
          <li><button className='bg-slate-700 px-4 py-1 border rounded-2xl' onClick={() => bgChange('slate')}>Slate</button></li>
          <li><button className='bg-gray-700 px-4 py-1 border rounded-2xl' onClick={() => bgChange('gray')}>Gray</button></li>
          <li><button className='bg-yellow-700 px-4 py-1 border rounded-2xl' onClick={() => bgChange('yellow')}>Yellow</button></li>
          <li><button className='bg-pink-700 px-4 py-1 border rounded-2xl' onClick={() => bgChange('pink')}>Pink</button></li>
          <li><button className='bg-purple-700 px-4 py-1 border rounded-2xl' onClick={() => bgChange('purple')}>Purple</button></li>
          <li><button className='bg-lavender-700 px-4 py-1 border rounded-2xl' onClick={() => bgChange('lavender')}>Lavender</button></li>
          <li><button className='bg-white px-4 py-1 border rounded-2xl text-black border-black' onClick={() => bgChange('white')}>White</button></li>
          <li><button className='bg-black px-4 py-1 border rounded-2xl' onClick={() => bgChange('black')}>Black</button></li>
        </ul>
      </div>
    </>
  )
}

export default App

