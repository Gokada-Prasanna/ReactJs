import {useContext} from 'react'
import CartItem from '../CartItem'
import {CartListContext} from '../../App'

import './index.css'

const CartListView = () => {
  const {cartList} = useContext(CartListContext)
  console.log(cartList)

  var totalCost = 0

  for(let item of cartList){
    const price = parseFloat(item.price)
    const discount = parseInt(item.discount)
    const discount_price = parseFloat(price) - (parseFloat(price) * parseInt(discount)/100).toFixed(2)

    totalCost += parseFloat(discount_price)*parseInt(item.quantity)

  }
console.log(totalCost)
return (
        <>
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
        {cartList.length !== 0? (<div className="total-cost-container">
          <p className="total-text">Total : </p>
          <p className="cost">{totalCost}</p>
        </div>) : ""}
        </>
      )
    }

export default CartListView
