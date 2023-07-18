const ConverterButton = (props) => {
    const { itemDetails, className, onClick} = props
    const {id, name}  = itemDetails
    return (
        <li>
            <button type="button" className={`${className} tab-button`} onClick={() => onClick(id)}>{name}</button>
        </li>
    )
}

export default ConverterButton