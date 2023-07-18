
import React, {Component} from 'react';
import './App.css';

import DrawSeptagon from './components/Practice/DrawOctagon'
import DrawOctagon from './components/Practice/DrawOctagon';

class App extends Component{
  render(){
    return (
      <div className="App">
    <DrawOctagon />
    </div>
    )
  }
}
export default App;
