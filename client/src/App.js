
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';

import s from "./assets/styles/login.module.css"

function App() {
  return (
    <div className="App">
      {/* borrar cuando termines */}
      <div className={s.navbar}></div>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register">
          <h1>Form de registro</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
