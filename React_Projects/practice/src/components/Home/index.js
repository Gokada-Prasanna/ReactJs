import {useContext} from 'react'
import {SampleContext} from '../../App'


const Home = () => {
    const sampleData = useContext(SampleContext)
    console.log("In Home Page")

    console.log(sampleData)

    return <h1>Home</h1>
}

export default Home