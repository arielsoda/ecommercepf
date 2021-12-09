
import './App.css';
import {Switch, Route} from 'react-router-dom';

import {ShoppingCart} from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ShoppingCart}/>
        
        
      </Switch>
    </div>
  );
}

export default App;
