import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login'
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App=()=> {
  return (
 // <div className="App"> 
       <BrowserRouter>
     <Routes>
        
         <Route path='/Home' element={<Home/>}/>
         <Route path='/home' element={<Home/>}/>
       </Routes>
       </BrowserRouter>
  
  );
};

export default App;
// import React from 'react';
// import './App.css';
// import Login from './login';

// function App() {
//   return (
//     <Login />
//   );
// }

//export default App;