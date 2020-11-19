import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../contexts';
import { getAuthToken } from '../../utils';
import { getMe } from '../../WebAPI';
import styled from 'styled-components';
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getAuthToken() !== '') {
      getMe().then((response) => {
        if (response.ok) {
          setUser(response.data);
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
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
    </AuthContext.Provider>
  );
}

export default App;
