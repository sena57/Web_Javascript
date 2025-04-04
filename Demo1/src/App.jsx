import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import List from './components/List'
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='bg-green-400 p-4 text-center'>Hello</h1>
        <div className='flex flex-col items-start'>
          <List />
          <Card name={"Lenz"} jobtitle={"AV"} />
          <Card name={"Riedmann"} jobtitle={"Lehrer"} />
          <Button name={"Sendar"}/>
      </div>
    </>
  )
}

export default App
