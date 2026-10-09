import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Posts from './pages/Post'
import AddPost from './pages/AddPost'
import  { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <>
              <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                <Route path="/h" element={<Home/>}></Route>
               <Route path="/p" element={<Posts/>}></Route>
               <Route path="/a" element={<AddPost/>}></Route>
            </Routes>
           
            </BrowserRouter>
          </div>
    
    </>
  )
}

export default App
