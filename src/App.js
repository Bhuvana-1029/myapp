//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//function App() {
  //return (
  // <div className="App"> 
    //    <BrowserRouter>
    //  <Routes>
        
      //    <Route path='/Home' element={<Home/>}/>
       // </Routes>
       // </BrowserRouter>
    //</div>
  //);
//}

//export default App;
import React from 'react';
import './App.css';
import Login from './login';

function App() {
  return (
    <Login />
  );
}

export default App;