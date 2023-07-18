import React, {useState, useRef, createContext, useEffect} from 'react'

import './App.css'
import Calculator from './components/Calculator'
import Button from './components/Button'
import Scientific from './components/Scientific'
import Converter from './components/Converter'

const tabGroupEntries = [
  {
    id:"Calc",
    name:"Calculator"
  },
  {
    id:"Sc-Calc",
    name:"Scientific Calculator"
  },
  {
    id:"Converter",
    name:"Converter"
  }
]

const App = () => {
  const [mainTab, setMainTab] = useState(tabGroupEntries[0].id)

const handleMainTabClick = (id) => {
  setMainTab(id)
}

  return (
    <>
    <ul className="tab-group">
      {tabGroupEntries.map(item => (
        <Button key={item.id} value={item.name} itemDetails={item} handleMainTabClick={handleMainTabClick}/>
      ))}
    </ul>
    <div>
    {mainTab === "Calc" ? (<Calculator />) : 
    mainTab === "Sc-Calc" ? (<Scientific />) : <Converter />
    }
    </div>
    </>
  )
}

export default App 