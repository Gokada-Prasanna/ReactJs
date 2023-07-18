import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {useEffect, createContext, useState} from 'react'
// import axios from 'axios'



import Home from './components/Home'
import About from './components/About'
import Details from './components/Details'


export const SampleContext = createContext(null);


function App(){
console.log("In App Component")
const [sampleData, setSampleData] = useState([])

useEffect(() => {
  fetch('/appsList.json')
  .then(response => response.json())
  .then(data => setSampleData(data))
}, [])

  return (
    <BrowserRouter>
    <SampleContext.Provider value={sampleData}>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:id" element={<Details />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </SampleContext.Provider>
    </BrowserRouter>
  )
}

export default App 