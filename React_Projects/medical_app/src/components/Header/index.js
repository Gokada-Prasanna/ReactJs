import {Link} from 'react-router-dom'
import {useContext} from 'react'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {RxHamburgerMenu} from 'react-icons/rx'
import {FaUserCircle} from 'react-icons/fa'
import {MdLocationPin, MdNotificationsNone} from 'react-icons/md'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'

import {CartListContext} from '../../App'


import './index.css'

const links_list = ["Health Store", "Pharmacy", "Diagnostics", "Doctors", "MedPlus Advantage", "MedPlus Payback Points", "Promotions", "Healthy Life"]


function Header(props){

const {cartList}  = useContext(CartListContext)

  return (
    <>
    <div className="header-container-desktop">
      <nav className="navbar navbar1">
        <Link to="/" style={{textDecoration:"none"}}><h1 className="logo-image">KLocPharma</h1></Link>
        <div className="text-right">
          <ul className="nav-items-list">
            <li className="nav-item">Call 040-67006700 for help!</li>
            <li className="nav-item">Store Finder</li>
          </ul>
          <div className="user-login">
            <p className="login-text">Login / Sign up</p>
            <FaUserCircle className="user-icon"/>
          </div>
        </div>
      </nav>
<nav className="navbar navbar2">
  <div className="location-container">
    <button type="button" className="location-button">
  <MdLocationPin className="location-icon" />
  </button>
  <p className="address">Flat No.: 502, Raghavendra Apartments, Nallurhalli, Whitefield, Bangalore, 560066.</p>
  </div>
  <div className="search-bar-upload-container-desktop">
<div className="search-bar">
  <input type="search" className="search-box" placeholder="Search for the medicine"
  
  onBlur={(e)=>props.onChangeSearchInput(e.target.value)} 
  onKeyDown={(e)=>{
    if(e.key === "Enter"){
      props.onChangeSearchInput(e.target.value)
    }
  }}/>
  <button type="button" className="search-button"><AiOutlineSearch className="search-icon"/></button>
</div>
<button type="button" className="upload-button">Upload</button>
</div>
<div className="bell-cart-icons-container">
  <MdNotificationsNone className="notification-icon"/>
  <Link to="/cart" style={{textDecoration:"none"}}>
    <div className="cart-desktop">
    <AiOutlineShoppingCart className="cart-icon"/>
    <p className="cart-list-number-desktop">{cartList.length > 0 ? cartList.length : ""}</p>
    </div>
    </Link>
</div>
</nav>
<nav className="navbar">
  <Popup trigger={<button type="button" className="hamburger-button"><RxHamburgerMenu className="hamburger-menu"/></button>} position="bottom left">
    <div className="hamburger-menu-list-container">
      <ul className="hamburger-menu-list">
        {links_list.map(item => <li><p className="menu-list-item">{item}</p></li>)}
      </ul>
    </div>
  </Popup>
  <ul className="nav-list">
    {links_list.map(item => <li className="list-item"><p>{item}</p></li>)}
  </ul>
</nav>
    </div>
    <div className="header-container-mobile">
    <Popup trigger={<button type="button" className="hamburger-button"><RxHamburgerMenu className="hamburger-menu"/></button>} position="bottom left">
    <div className="hamburger-menu-list-container">
      <ul className="hamburger-menu-list">
        {links_list.map(item => <li><p className="menu-list-item">{item}</p></li>)}
      </ul>
    </div>
  </Popup>
  <Link to="/" style={{textDecoration:"none"}}><h1 className="logo-image-mobile">KLocPharma</h1></Link>
    <div className="search-bar-upload-container-mobile">
<div className="search-bar">
  <input type="search" className="search-box" placeholder="Search for the medicine"
  
  onBlur={(e)=>props.onChangeSearchInput(e.target.value)} 
  onKeyDown={(e)=>{
    if(e.key === "Enter"){
      props.onChangeSearchInput(e.target.value)
    }
  }}/>
  <button type="button" className="search-button"><AiOutlineSearch className="search-icon"/></button>
</div>
</div>
<Link to="/cart" style={{textDecoration:"none"}}>
    <div className="cart-icon-container-mobile">
    <AiOutlineShoppingCart className="cart-icon-mobile"/>
    <p className="cart-list-number-mobile">{cartList.length > 0 ? cartList.length : ""}</p>
    </div>
    </Link>
    </div>
    </>
  )
}

export default Header