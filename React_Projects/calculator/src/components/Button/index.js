const Button = (props) => {
    const {value, handleMainTabClick, itemDetails, className} = props
    const {id, name}  = itemDetails
    return (
        <li>
            <button type="button" className={`${className} tab-button`} onClick={() => handleMainTabClick(id)}>{value}</button>
        </li>
    )
}

export default Button