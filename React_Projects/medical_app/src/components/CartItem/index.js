import {useContext} from 'react'

import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import {MedicinesContext} from '../../App'
import {CartListContext} from '../../App'

import './index.css'

const CartItem = props => {
const {cartItemDetails} = props 
const {img_url, name, quantity, price, id, discount} = cartItemDetails 

const {onDecrementQuantity, onIncrementQuantity, resetQuantity} = useContext(MedicinesContext)
const {removeCartItem} = useContext(CartListContext)
const discount_price = parseFloat(price) - (parseFloat(price) * parseInt(discount)/100).toFixed(2)
const onClickDecrement = () => {
  let itemQuantity = parseInt(quantity) 
  if(itemQuantity !== 1){
    itemQuantity -= 1
    onDecrementQuantity(id, itemQuantity)
  }
  
}

const onClickIncrement = () => {
  onIncrementQuantity(id , parseInt(quantity) + 1)
}

const onClickRemoveButton = () => {
  resetQuantity(id)
  removeCartItem(id)
}




  return (
    <li className="cart-item">
      <img className="cart-product-image" src={img_url} alt={name} />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{name}</p>
        </div>
        <div className="cart-quantity-container">
          <button type="button" className="quantity-controller-button" onClick={onClickDecrement}>
            <BsDashSquare color="#52606D" size={12} />
          </button>
          <p className="cart-quantity">{quantity}</p>
          <button type="button" className="quantity-controller-button" onClick={onClickIncrement}>
            <BsPlusSquare color="#52606D" size={12} />
          </button>
        </div>
        <div className="total-price-delete-container">
          <p className="cart-total-price">Rs {discount_price * quantity}/-</p>
          <button className="remove-button" type="button" onClick={onClickRemoveButton}>
            Remove
          </button>
        </div>
      </div>
      <button className="delete-button" type="button" onClick={onClickRemoveButton}>
        <AiFillCloseCircle color="#616E7C" size={20} />
      </button>
    </li>
  )
}

export default CartItem