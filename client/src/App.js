
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Details from './components/Details'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/detail/:idproduct" element={<Details/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<h1>Form de registro</h1>} />
      </Routes>
    </div>
  );
}

export default App;
