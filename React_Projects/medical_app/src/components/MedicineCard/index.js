import {Link} from 'react-router-dom'

import MedicineDetails from '../MedicineDetails'


import './index.css'

function MedicineCard(props){

    const {medicineDetails} = props 
    const {id, img_url, name, price, discount} = medicineDetails 

    const original_price = parseFloat(price)
    const price_after_discount = (original_price * parseInt(discount)/100).toFixed(2)
    

    
return (
    <Link to={`/${id}`} className="link-item">
    <li key={id} className="medicines-list-item" onClick={() => <MedicineDetails />}>
        <div className="each-medicine">
            <p className="medicine-card-offer">{discount}% OFF</p>
            <img src={img_url} alt={name} className="medicine-card-image" />
            <div><h1 className="medicine-card-name">{name}</h1></div>
            <p className="medicine-card-discounted-price-text">Best Price* <span className="medicine-card-discounted-price">{price_after_discount}</span></p>
            <p className="medicine-card-original-price-text">MRP <span className="medicine-card-original-price">Rs. {original_price}</span></p>
        </div>
    </li>
    </Link>
)
}

export default MedicineCard