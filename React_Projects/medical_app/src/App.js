import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState, createContext, useEffect} from 'react'

import HomePage from './components/HomePage'
import MedicineDetails from './components/MedicineDetails'
import Cart from './components/Cart'

export const MedicinesContext = createContext(null);
export const SlidersListContext = createContext(null);
export const CartListContext = createContext(null);

const sliders_list = [
  {
      text1:"Order Medicines",
      text2:"WhatsApp",
      img_url:"https://static2.medplusmart.com/live/bannerImage/Mart/f12259f428e8091f14a900f89b362543.jpg",
  },
  {
      text1:"Flat 20% off",
      text2:"On every medicine",
      img_url:"https://static2.medplusmart.com/live/bannerImage/Mart/2583118798827a98990b096141eca9cd.jpg",
  },
  {
      text1:"Cardiac CT Scan",
      text2:"Rs 4150 only",
      img_url:"https://static2.medplusmart.com/live/bannerImage/Mart/21f4a39678b392b04ecb894719111dc4.jpg",
  },
  {
      text1:"BMD 2 Regions Scan",
      text2:"Rs 750 only",
      img_url:"https://static2.medplusmart.com/live/bannerImage/Mart/3f8a685f2d2f030d5a31f05a67297bcb.jpg",
  },
  {
      text1:"Get 75% Off on",
      text2:"MedPlus Diagnostics",
      img_url:"https://static2.medplusmart.com/live/bannerImage/Mart/67c88574323d0bf6228161f3135fa361.jpg",
  },
  {
      text1:"Now Own Your",
      text2:"MedPlus Franchise",
      img_url:"https://static2.medplusmart.com/live/bannerImage/Mart/5523a002ab5d6c374d5d9d6ee2cf65ed.jpg",
  },
  {
      text1:"Baby Diapers",
      text2:"Upto Rs 390 Off",
      img_url:"https://static2.medplusmart.com/live/bannerImage/Mart/132cdda1d00a744a24e220d712826f6f.jpg",
  }
  ]

function App(){

  const [medicinesList, setMedicinesList] = useState([])
  const [slidersList, setSlidersList]   = useState(sliders_list)
  const [cartList, setCartList] = useState([])


useEffect(()=> {
  let ignore = true;

  fetch("/medicines.json")
  .then(response =>response.json())
  .then(data => {if(ignore){
    setMedicinesList(data)
  }
  });

  return () => {
    ignore = false;
  }
}, [])

console.log(medicinesList)

const addToCartItem = item => {
  const id = item.id 
  if((cartList.find(cartItem => cartItem.id === id) === undefined) && parseInt(item.quantity) !== 0){
    setCartList([...cartList, item])
  }
  else{
    cartList.map(cartItem => {
      if(cartItem.id === item.id){
        console.log(cartItem.quantity)
        cartItem.quantity += item.quantity
      }
      return cartItem 
    })

    setCartList([...cartList])
  }
}

const onDecrementQuantity = (id, quantity) => {

      medicinesList.map(item => {
          if(item.id === id){
              item.quantity = quantity
          }
          return item 
      })
  
      setMedicinesList([...medicinesList])
      
  }
  
  
  const onIncrementQuantity = (id, quantity) => {
      medicinesList.map(item => {
          if(item.id === id){
              item.quantity = quantity 
          }
          return item 
      })
  
      setMedicinesList([...medicinesList])
  }

const resetQuantity = (id) => {
  medicinesList.map(item => {
    if(item.id === id){
      item.quantity = 0 
    }
    return item 
  })

  setMedicinesList([...medicinesList])
}

const removeCartItem = id => {
  const newCartList = cartList.filter(item => item.id !== id)
  setCartList([...newCartList])
}

return (
  <BrowserRouter>
  <MedicinesContext.Provider value={{medicinesList, setMedicinesList, onDecrementQuantity, onIncrementQuantity, resetQuantity}}>
    <SlidersListContext.Provider value={slidersList}>
      <CartListContext.Provider value={{cartList, addToCartItem, removeCartItem}}>
      <Routes>
  <Route path="/" element= {<HomePage />} />
  <Route path="/:id" element={<MedicineDetails />} />
  <Route path="/cart" element={<Cart />} />
  </Routes>
  </CartListContext.Provider>
  </SlidersListContext.Provider>
  </MedicinesContext.Provider>
  </BrowserRouter>
)

}


export default App