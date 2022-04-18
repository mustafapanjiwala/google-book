import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from "./LoginPage"
import Home from "./Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<LoginPage />} />
        <Route path="/home" element= {<Home />} />
        <Route path ="*" />
      </Routes>
    </Router>
  )
}

export default App