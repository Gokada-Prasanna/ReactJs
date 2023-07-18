import axios from "axios"
import { useEffect, useState } from "react"
const Fetch  = () =>{
     const [info,setInfo] = useState([]) 
     useEffect (() =>{
        axios.get('https://api.covid19api.com/summary').then((res) =>{ 
            setInfo(res)

        }).catch((err) =>{
            console.log(err.message)
        })

     },[info])

     console.log(info)
    return(

        <div style={{width :"80vw"}}>
            {info.data && info.data.Countries ? <table >

                <thead >
                    <tr>
                        <th>Country</th>
                        <th>NewConfirmed</th> 
                        <th>NewDeath</th>
                        <th>TotalDeaths</th>
                    </tr>
                </thead>
                <tbody>
                    {info.data.Countries.map((item,index) => <tr key={index} style={index %2===0 ? {backgroundColor:"gray"} :{backgroundColor:"yellow"} } >
                        <td>{item.Country}</td>
                        <td>{item.NewConfirmed}</td>
                        <td>{item.NewDeaths}</td>
                        <td>{item.TotalDeaths}</td>
                        
                    </tr>)}
                </tbody>
            </table> : null} 
            
        </div>
    )
}

export default Fetch