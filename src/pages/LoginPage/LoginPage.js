import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { setAuthToken } from '../../utils';
import { login, getMe } from '../../WebAPI';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts';

const Root = styled.div`
  height: 80vh;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin: 10px 0;
`;

const PageWrapper = styled.form`
  width: 400px;
  height: 250px;
  margin: 5vh auto;
  padding: 20px;
  background: whitesmoke;
`;

const InputWrapper = styled.div`
  margin: 20px 0;
  & input {
    border-radius: 10px;
    outline: none;
    border: 1px solid grey;
    padding: 5px 10px;
    font-size: 16px;
    letter-spacing: 8px;
    color: #808080;
  }
`;

const LoginButton = styled.button`
  padding: 5px 10px;
  margin: 0 auto;
  border-radius: 10px;
  border: transparent;
  background: #ccc;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    filter: brightness(90%);
  }
`;

export default function LoginPage() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password)
      .then((data) => {
        if (data.ok === 0) {
          return setErrorMessage(data.message);
        }
        setAuthToken(data.token);
        getMe()
          .then((response) => {
            if (response.ok !== 1) {
              setAuthToken(null);
              return setErrorMessage(response.toString);
            }
            setUser(response.data);
            navigate('/');
          })
          .catch((err) => {
            alert(err);
            navigate('/');
          });
      })
      .catch((err) => {
        return setErrorMessage(err);
      });
  };

  return (
    <Root>
      <PageWrapper onSubmit={handleSubmit}>
        <Title>請登入部落格</Title>
        <InputWrapper>
          帳號：{' '}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setErrorMessage(null)}
          />
        </InputWrapper>
        <InputWrapper>
          密碼：{' '}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setErrorMessage(null)}
          />
        </InputWrapper>
        <LoginButton>登入</LoginButton>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </PageWrapper>
    </Root>
  );
}
