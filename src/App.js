import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </Router>
    )
}

export default App