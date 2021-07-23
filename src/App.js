import './App.css';
import NavBar from './Components/NavBar';
import Card from "./Components/Card"
import ItemlistContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemList from './Components/ItemListContainer';
import Items from './Components/Item';

function App() {
  return (
    <div className="App">
      <ItemList/>
      <Items/>
    </div>
  );
}

export default App;
