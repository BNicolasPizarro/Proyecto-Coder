//components
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemSum from './Components/ItemSum';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Pages
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import Product from "./Pages/Products";


function App() {
  return (
    <div className="App">
          <Router>
    <NavBar />
      <Switch>
        <Route exact path='/Home'>
          <Home />
        </Route>
        <Route exact path='/Category'>
          <Category />
        </Route>
        <Route exact path='/Checkout'>
          <Checkout />
        </Route>
        <Route exact path='/Products'>
          <Product />
        </Route>
      </Switch>
    </Router>
      <ItemSum/>
     <ItemDetailContainer/>
    </div>
  );
}

export default App;
