import {createContext, useState, useContext} from 'react'
import "./index.css"

const ThemeContext = createContext(null)

function UseContext(){
    const [theme, setTheme] = useState('light')
    console.log("Component rendered")
    return (

        <ThemeContext.Provider value={theme}>
            <div className="main-container">
        <Form />
            <label>
                <input type="checkbox"
                checked={theme === 'dark'}
                onChange={e=>{setTheme(e.target.checked? "dark":"light")}}
                />
                Use Dark Mode
            </label>
            </div>
        </ThemeContext.Provider>
   
    )
    
}


function Form({children}){
    function onClick(text){
        return alert(`${text} Button Clicked`)
    }
    return (
        <Panel title="Welcome">
            <Button onClick={onClick}>Sign in</Button>
            <Button onClick={onClick}>Log in</Button>
        </Panel>
    )
}

function Panel({title, children}){
    const theme = useContext(ThemeContext)
    const ClassName='panel-'+ theme
    
    return (
        <section className={ClassName}>
        <h1>{title}</h1>
        <div className="buttons-container">{children}</div>
        </section>
    )
}


function Button({children, onClick}){
    const theme = useContext(ThemeContext)
    const ClassName = 'button-'+theme
    return (
    <button type="button" onClick={(e) => {e.stopPropagation(); onClick(children)}} className={ClassName}>{children}</button>
    )
}


export default UseContext