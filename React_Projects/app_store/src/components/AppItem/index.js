import './index.css'

const AppItem = props => {
  const {appDetails, onClick} = props
  const {appId, imageUrl, appName} = appDetails

const handleClick = () => {
  
  onClick(appId)
}

  return (
    <li className="appItem" onClick={handleClick} key={appId}>
      <img src={imageUrl} alt={appName} className="appImage" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem