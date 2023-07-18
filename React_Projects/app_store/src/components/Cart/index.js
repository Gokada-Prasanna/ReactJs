import AppItem from '../AppItem'
import './index.css'

function Cart(props){
    const {appsList, selectedApps} = props 
    const selectedAppsArray = {'SOCIAL':[], 'GAMES':[], 'NEWS':[], 'FOOD':[]}
    selectedApps.map(id => selectedAppsArray[(appsList.find(app => app.appId === id).category)].push(appsList.find(app => app.appId === id)))

    
return (
    <div className="cart-container">
    <h1 className="cart-heading">Cart Items</h1>
    
    <div className="fields-container">
    <div>
        {selectedAppsArray.SOCIAL.length !== 0 ? (<div className="field-container"> <p className="filed-heading">Social: </p> <div className="list-container">{selectedAppsArray.SOCIAL.map(item => <AppItem appDetails={item} />)}</div></div>) : ""}
    </div>
    <div>
        {selectedAppsArray.GAMES.length !== 0 ? (<div className="field-container"> <p className="filed-heading">Games: </p> <div className="list-container">{selectedAppsArray.GAMES.map(item => <AppItem appDetails={item} />)}</div></div>) : ""}
    </div>
    <div>
        {selectedAppsArray.NEWS.length !== 0 ? (<div className="field-container"> <p className="filed-heading">News: </p> <div className="list-container">{selectedAppsArray.NEWS.map(item => <AppItem appDetails={item} />)}</div></div>) : ""}
    </div> 
    <div>
        {selectedAppsArray.FOOD.length !== 0 ? (<div className="field-container"> <p className="filed-heading">Food: </p> <div className="list-container">{selectedAppsArray.FOOD.map(item => <AppItem appDetails={item} />)}</div></div>) : ""}
    </div>
    </div>
    </div>
)
}

export default Cart