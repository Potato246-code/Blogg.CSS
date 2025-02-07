import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import ProfilePage from "./pages/ProfilePage"
import NewPostPage from "./pages/NewPostPage"

function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post/new" element={<NewPostPage />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App