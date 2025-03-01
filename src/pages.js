import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './Home';

const Pages = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default Pages
 