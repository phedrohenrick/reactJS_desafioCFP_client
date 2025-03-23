import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPaperComponent from './components/ListPaperComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreatePaperComponent from './components/CreatePaperComponent';
import UpdatePaperComponent from './components/UpdatePaperComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/list" element = {<ListPaperComponent />} />
                          <Route path = "/Paper" element = {<ListPaperComponent />} /> 
                          <Route path = "/" element = {<CreatePaperComponent />} />
                          <Route path = "/update-Paper/:id" element = {<UpdatePaperComponent/>} />
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;