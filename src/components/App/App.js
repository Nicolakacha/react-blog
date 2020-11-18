import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import Navbar from '../Navbar';

const Root = styled.div``;

function App() {
  return (
    <Root>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Root>
  );
}

export default App;
