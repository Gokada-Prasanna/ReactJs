import '../ReviewsCarousel/index.css'

function ReviewCard(props){
    const {cardDetails} = props
    const {imgUrl, username, companyName, description} = cardDetails
    return (
        <div className="review-container">
          <img src={imgUrl} alt={username} className="reviewImage" />
          <p className="username">{username}</p>
          <p className="companyName">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      )
}

export default ReviewCard