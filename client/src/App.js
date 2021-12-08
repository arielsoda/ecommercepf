
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Details from './components/Details'
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/:idproduct" component={Details}/>
      </Switch>
    </div>
  );
}

export default App;
