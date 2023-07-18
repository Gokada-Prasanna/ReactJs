import {useState} from 'react'
import {AiFillStar, AiOutlineStar} from  'react-icons/ai'
import {FaStarHalfAlt} from 'react-icons/fa'
import {Rate} from 'antd'
import './index.css'


const DisplayRating = (props) => {
return(
    <div className="displayRating">{
        [...Array(5)].map((star, index)=> <p key={index} className={index < props.rating ? "ON" : "OFF"}><AiFillStar /></p> )
        }</div>
)
}

// const ConsolidatedRating = (props) => {
//     const {ratingsList} = props 

//     const sumRatings = ratingsList.reduce((a,b)=>a+b,0)
//     const avgRating = String(Math.round(sumRatings/ratingsList.length*10)/10)

//     const decimalIndex = avgRatings.indexOf('.')

//     let integralPart
//     let diffIntegralDecimal

//     if(decimalIndex !== -1){
//     integralPart = parseInt(avgRatings.slice(0,decimalIndex))
    
//     diffIntegralDecimal= 4 - integralPart
// }
// else{
//     integralPart = parseInt(avgRatings)
    
//     diffIntegralDecimal = 0
// }
    

//     return(
//         // <div>
//         //     {
//         //         diffIntegralDecimal === 0 ? (
//         //             [...Array(5)].map((star, index)=>{
//         //                 index += 1;
//         //                 return <span className={index <= integralPart ? "ON" : "OFF"} key={index}><AiFillStar /></span>
//         //             })
//         //         )
//         //         : (
//         //             <>
//         //             {[...Array(integralPart)].map((star,index)=>{index += 1; return <span key={index}><AiFillStar /></span>})}
//         //             <span><FaStarHalfAlt /></span>
//         //             {[...Array(diffIntegralDecimal)].map((star, index)=>{index+=1; return <span key={index}><AiOutlineStar /></span>})}
//         //             </>
//         //         )
//         //     }
//         // </div>
//         <Rate allowHalf value={avgRating} />
//     )

// }

function StarRating(){
const [rating, setRating] = useState(0)
const [ratingsList, setRatingsList] = useState([])

const sumRatings = ratingsList.reduce((a,b)=>a+b,0)
const average = (Math.round(sumRatings/ratingsList.length*10)/10)

const addToRatingsList = () => {
    if(rating !== 0){
    setRatingsList([...ratingsList, rating]); setRating(0)
}
}

console.log(average)

    return (
        <div className="bg-container">
        <div className="first-section">
            <h1>Rate here</h1>
        <div>{[...Array(5)].map((star, index)=> {
            index += 1
            return (
            <button className={index <= rating ? "ON" : "OFF"} key={index} onClick={()=>setRating(index)} onDoubleClick={() => setRating(0)}><AiFillStar /></button>
            )
        })}</div>
        
        <button type="button" className="add_button" onClick={addToRatingsList}>Add Button</button>
        
        {ratingsList.length !== 0 ? (
            <div>
                {
                    ratingsList.map(eachRating => <DisplayRating rating={eachRating}/>)
                }
            </div>
        ) : ""}
        <p>{average}</p>
        </div> 
        <div className="second-section">
        <h1 classsName="consolidated-rating-heading">Consolidated Rating</h1>
        <Rate  value={average} allowHalf disabled/>
        </div>
        </div>
    )
}

export default StarRating

