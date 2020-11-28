import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext, LoadingContext } from '../../contexts';
import styled from 'styled-components';
import { getAuthToken } from '../../utils';
import { getMe } from '../../WebAPI';
import Navbar from '../Navbar';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import {
  AboutMePage,
  LoginPage,
  HomePage,
  NewPostPage,
  PostPage,
  PostsPage,
  RegisterPage,
} from '../../pages/';

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

  useEffect(() => {
    if (getAuthToken()) {
      getMe().then((response) => {
        if (response.ok) setUser(response.data);
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ user, setUser }}>
        <Root>
          <BrowserRouter>
            <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
              <Navbar />
              <Routes basename="/react-blog">
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/register'} element={<RegisterPage />} />
                <Route path={'/login'} element={<LoginPage />} />
                <Route path={'/posts'} element={<PostsPage />} />
                <Route path={'/post/:id'} element={<PostPage />} />
                <Route path={'/new-post'} element={<NewPostPage />} />
                <Route path={'/about-me'} element={<AboutMePage />} />
              </Routes>
            </LoadingContext.Provider>
            <Footer>Made with ❤️ by Nicolas</Footer>
          </BrowserRouter>
        </Root>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
