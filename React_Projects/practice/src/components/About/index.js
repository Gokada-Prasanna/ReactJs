import {useContext} from 'react'
import {SampleContext} from '../../App'


const About = () => {
    const sampleData = useContext(SampleContext)
    console.log("In About Page")

    console.log(sampleData) 
    
    return <h1>About</h1>
}

export default About