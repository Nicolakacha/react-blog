import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext, LoadingContext } from '../../contexts';
import { getAuthToken } from '../../utils';
import { getMe } from '../../WebAPI';
import styled from 'styled-components';

import Navbar from '../Navbar';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import PostsPage from '../../pages/PostsPage';
import PostPage from '../../pages/PostPage';
import NewPostPage from '../../pages/NewPostPage';
import AboutMePage from '../../pages/AboutMePage';

const Root = styled.div`
  padding-top: 84px;
`;

const Footer = styled.div`
  background: rgb(49 49 49);
  padding: 6px 0;
  bottom: 0;
  width: 100%;
  color: whitesmoke;
  text-align: center;
`;

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGettingUser, setIsGettingUser] = useState(true);

  useEffect(() => {
    if (getAuthToken() === '') {
      return setIsGettingUser(false);
    }
    getMe().then((response) => {
      if (response.ok) {
        setUser(response.data);
        setIsGettingUser(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Root>
        <BrowserRouter>
          {!isGettingUser && <Navbar />}
          <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="posts" element={<PostsPage />} />
              <Route path="post/:id" element={<PostPage />} />
              <Route path="new-post" element={<NewPostPage />} />
              <Route path="about-me" element={<AboutMePage />} />
            </Routes>
          </LoadingContext.Provider>
          <Footer>Made with ❤️ by Nicolas</Footer>
        </BrowserRouter>
      </Root>
    </AuthContext.Provider>
  );
}

export default App;
