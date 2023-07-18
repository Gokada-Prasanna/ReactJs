import {useContext} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import CartListView from '../CartListView'

import {CartListContext} from '../../App'

import './index.css'
import EmptyCartView from '../EmptyCartView'

const Cart = () => {
const {cartList} = useContext(CartListContext)

return (
      <div className="cart-main-container">
        <Header />
        <div className="cart-container">
          <div className="cart-content-container">
            <h1 className="cart-heading">My Cart</h1>
            {cartList.length === 0? 
              <EmptyCartView />
             : <CartListView />}
            
          </div>
        </div>
      </div>
      )
}

export default Cart