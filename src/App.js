import './App.css';
import NavBar from './Components/NavBar';
import Card from "./Components/Card"
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
