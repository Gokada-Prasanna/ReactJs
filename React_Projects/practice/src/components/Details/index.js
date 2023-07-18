import {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {SampleContext} from '../../App'

function Details(){
const sampleData = useContext(SampleContext)


const id = useParams().id

console.log(id)

console.log(sampleData.find(item => item.appId === id))

return <h1>Details</h1>
}

export default Details