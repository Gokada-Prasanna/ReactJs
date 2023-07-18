import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import {FaStarHalfAlt} from 'react-icons/fa'

import {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'

import {MedicinesContext} from '../../App'
import {CartListContext} from '../../App'

import SimilarProductItem from '../SimilarProductItem'
import Header from '../Header'

import './index.css'

const Rating = (props) => {
  const {rating} = props 

  const decimalIndex = rating.indexOf('.')

  let integralPart
  let diffIntegralDecimal

  if(decimalIndex !== -1){
  integralPart = parseInt(rating.slice(0,decimalIndex))
  
  diffIntegralDecimal= 4 - integralPart
}
else{
  integralPart = parseInt(rating)
  
  diffIntegralDecimal = 0
}
  

  return(
      <div>
          {
              diffIntegralDecimal === 0 ? (
                  [...Array(5)].map((star, index)=>{
                      index += 1;
                      return <span key={index}><AiFillStar /></span>
                  })
              )
              : (
                  <>
                  {[...Array(integralPart)].map((star,index)=>{index += 1; return <span key={index}><AiFillStar /></span>})}
                  <span><FaStarHalfAlt /></span>
                  {[...Array(diffIntegralDecimal)].map((star, index)=>{index+=1; return <span key={index}><AiOutlineStar /></span>})}
                  </>
              )
          }
      </div>
  )

}


function MedicineDetails(props){

    const {medicinesList, onDecrementQuantity, onIncrementQuantity} = useContext(MedicinesContext)
    const {addToCartItem} = useContext(CartListContext)


    const id = useParams().id
    console.log(medicinesList)

    const  medicine = medicinesList.find(item => item.id === id)
    const original_price = parseFloat(medicine.price)
const discount_price = original_price - (original_price * parseInt(medicine.discount)/100).toFixed(2)




const onAddToCart = () => {
    addToCartItem(medicine)
}

const onClickDecrement = () => {
    let itemQuantity = parseInt(medicine.quantity) 
    if(itemQuantity !== 1){
      itemQuantity -= 1
      onDecrementQuantity(id, itemQuantity)
    }
    
  }
  

  const onClickIncrement = () => {
    onIncrementQuantity(id , parseInt(medicine.quantity) + 1)
  }

const similarProductsData = medicinesList.filter(item => item.id !== id)


var settings = {
  dots: false,
  controls:true,
  infinite: true,
  speed: 100,
  slidesToShow: 4,
  slidesToScroll: 2
}
    return (
      <>
      <Header />
        <div className="product-details-success-view">
            <div className="product-img-details-container">
              <img src={medicine.img_url} alt="product" className="product-image" />
              <div className="product">
                <h1 className="product-name">{medicine.name}</h1>
                <p className="price-after-discount-details">Rs {discount_price}</p>
                <p className="price-details">MRP <span className="strike-price">Rs {parseFloat(medicine.price)}/-</span></p>
                <p className="product-description">{medicine.description}</p>
                <div className="rating-container">
                <Rating rating={medicine.rating} />
                </div>
                <div className="label-value-container">
                  <p className="label">Available:</p>
                  <p className="value">{medicine.availability}</p>
                </div>
                <div className="label-value-container">
                  <p className="label">Brand:</p>
                  <p className="value">{medicine.brand}</p>
                </div>
                <hr className="horizontal-line" />
                <div className="quantity-container">
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={onClickDecrement}
                  >
                    <BsDashSquare className="quantity-controller-icon" />
                  </button>
                  <p className="quantity">{medicine.quantity}</p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={onClickIncrement}
                  >
                    <BsPlusSquare className="quantity-controller-icon" />
                  </button>
                </div>

                <button
                  type="button"
                  className="button add-to-cart-btn"
                  onClick={onAddToCart}
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            <h1 className="similar-products-heading">Similar Products</h1>
            <ul className="similar-products-list-mobile">
              {similarProductsData.map(eachSimilarProduct => (
                <SimilarProductItem
                  productDetails={eachSimilarProduct}
                  key={eachSimilarProduct.id}
                />
              ))}
              </ul>
              <div className="similar-products-desktop">
              <Slider {...settings} dotsClass="slick-dots customized-dots">
              {similarProductsData.map((item, index) => <SimilarProductItem productDetails = {item} key={item.id}/>)}
              </Slider>
              </div>
          </div>
          </>
    )
}

export default MedicineDetails