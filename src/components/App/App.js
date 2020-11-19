import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import PostsPage from '../../pages/PostsPage';
import PostPage from '../../pages/PostPage';
import Navbar from '../Navbar';

const Root = styled.div`
  padding-top: 84px;
`;

const Footer = styled.div`
  background: whitesmoke;
  padding: 10px 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

function App() {
  return (
    <Root>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
        <Footer>Made with ❤️ by Nicolas</Footer>
      </Router>
    </Root>
  );
}

export default App;
