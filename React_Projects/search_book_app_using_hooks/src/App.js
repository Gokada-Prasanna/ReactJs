import {useState} from 'react'
import Search from './components/Search'
import './App.css'

function App() {
  const [bookList, setBookList] = useState([])
  return (
    <div className="App">
      <header>Books With Hooks</header>
      <Search />
    </div>
  );
}

export default App;
