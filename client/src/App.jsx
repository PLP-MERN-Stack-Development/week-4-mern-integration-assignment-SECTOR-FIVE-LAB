import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import PostList from './components/PostList';
import SinglePost from './components/SinglePost';
import PostForm from './components/PostForm';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog/:id" element={<SinglePost />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
      </Routes>
    </Router>
  )
}

export default App
