import {useState, useMemo, useEffect} from 'react'

import {AiOutlineShoppingCart} from 'react-icons/ai'

import TabItem from '../TabItem'
import AppItem from '../AppItem'
import Cart from '../Cart'

import './index.css'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]



// Write your code here
function AppStore() {
const [appsList, setAppsList] = useState([])
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId)
  const [searchInput, setSearchInput] = useState("")
  const [selectedApps, setSelectedApps] = useState([])
  const [cartShowStatus, setCartShowStatus] = useState(false)
  
 

useEffect(() => {
  fetch("/appsList.json")
  .then(response => response.json())
  .then(data => {
    const appsData = data.data;
    setAppsList(appsData)
  })
},[])

  const clickTabItem = tabId => {
setActiveTabId(tabId)
  }

  const filteredApps = useMemo(() => {
    console.log("render")
    let filteredApps = []
    if ({searchInput} !== '') {
      filteredApps = appsList.filter(
        eachAppItem =>
          eachAppItem.category === activeTabId &&
          eachAppItem.appName.toLowerCase().includes(searchInput.toLowerCase()),
      )
    } else {
      filteredApps = appsList.filter(
        eachAppItem => eachAppItem.category === {activeTabId},
      )
    }
    return filteredApps
  }, [searchInput, activeTabId, appsList])


const onClickApp = (id) => {
  if(!selectedApps.includes(id)){
setSelectedApps([...selectedApps, id])  
}

}



    return (
      <>
      {!cartShowStatus &&
      (<div className="bg-container">
        <h1 className="heading">App Store</h1>
        <div className="input-tabs-container">
        <div className="inputContainer">
          <input type="search" className="searchBox" name="searchInput" onBlur={(e)=>setSearchInput(e.target.value)} onKeyDown={(e)=>{
            if(e.key === 'Enter'){
              setSearchInput(e.target.value)
            }
          }}/>
          <img
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            className="searchIcon"
            alt="search icon"
          />
        </div>
        <div className="tabs-cart-button-container">
        <ul className="tabItemsList">
          {tabsList.map(eachTabItem => (
            <TabItem
              key={eachTabItem.tabId}
              tabDetails={eachTabItem}
              clickTabItem={clickTabItem}
              isActive={activeTabId === eachTabItem.tabId}
            />
          ))}
        </ul>
        <div className="cart-button-container" >
          <button type="button" onClick={()=> setCartShowStatus(true)} className="cart-button"><AiOutlineShoppingCart className="cart"/></button>
          <span className="items-cart">{selectedApps.length> 0 ? selectedApps.length : ""}</span>
        </div>
        </div>
        </div>
        <ul className="appItemsContainer">
          {filteredApps.map(eachAppItem => (
            <AppItem key={eachAppItem.appId} appDetails={eachAppItem} onClick={onClickApp}/>
          ))}
        </ul>
      </div> ) }
      {cartShowStatus && <Cart appsList={appsList} selectedApps={selectedApps} />}
          </>
    )
  
}

export default AppStore