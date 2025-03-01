import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Products from './Products';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
        <BrowserRouter>
        <Routes>
          <Route path='' element={<Login/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Products' element={<Products/>}/> 
          <Route path='/Home' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
