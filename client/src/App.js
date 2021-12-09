
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Details from './components/Details'
import Nav from './components/Nav'
import s from "./assets/styles/login.module.css"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail/:idproduct" component={Details}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register">
          <h1>Form de registro</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
