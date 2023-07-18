import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {name, brand, img_url, price} = productDetails

  return (
    <li className="similar-product-item">
      <img
        src={img_url}
        className="similar-product-image"
        alt={`similar product ${name}`}
      />
      <div className="medicine-content">
      <p className="similar-product-title">{name}</p>
      <p className="similar-products-brand">by {brand}</p>
      <p className="similar-product-price">Rs {price}/-</p>
      </div>
    </li>
  )
}

export default SimilarProductItem