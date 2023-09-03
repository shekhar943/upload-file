import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Formbody from './components/Formbody';
import FilesList from './components/FilesList';

const App = (props) => {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  exact path="/" element={<Formbody />} />
          <Route path="/list" element={<FilesList />} />
        </Routes>
      </Router>
    </>

  );
};

export default App;