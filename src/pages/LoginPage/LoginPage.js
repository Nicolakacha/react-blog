import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NormalButton from '../../components/NormalButton';
import {
  setUserErrorMessage,
  selectIsUserLoading,
  selectUserErrorMessage,
  login,
} from '../../redux/userSlice';

const Root = styled.div`
  margin: 0 10vw;
  min-height: calc(100vh - 143px);
`;

const Title = styled.h1`
  font-size: 24px;
`;

const LoginWrapper = styled.form`
  width: 360px;
  height: 290px;
  margin: 20px auto 0;
  padding: 20px;
  background: whitesmoke;
  transition: all linear 0.2s;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: all linear 0.2s;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);
  }
`;

const InputWrapper = styled.div`
  margin: 20px 0;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px 10px;
  border-bottom: 1px solid #909090;
  background: transparent;
  letter-spacing: 5px;
  color: #808080;
  font-size: 16px;
`;

const ShowPasswordRadio = styled.div`
  margin-top: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin: 10px 0;
`;

const Loading = styled.div`
  margin: 20px 0 10px 0;
  color: #909090;
`;

const SubmitButton = styled(NormalButton)`
  margin: 10px auto;
`;

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const userErrorMessage = useSelector(selectUserErrorMessage);
  const isUserLoading = useSelector(selectIsUserLoading);

  const setError = () => dispatch(setUserErrorMessage(null));
  const setValue = (setState) => (e) => setState(e.target.value);
  const togglePassword = () => setShowPassword(showPassword ? false : true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password })).then((userId) => {
      if (userId) navigate('/react-blog');
    });
  };

  useEffect(() => () => dispatch(setUserErrorMessage(null)), [dispatch]);

  return (
    <Root>
      <LoginWrapper onSubmit={handleSubmit}>
        <Title>請登入部落格</Title>

        <InputWrapper>
          帳號：
          <Input
            value={username}
            onChange={setValue(setUsername)}
            onFocus={setError}
          />
        </InputWrapper>

        <InputWrapper>
          密碼：
          <Input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={setValue(setPassword)}
            onFocus={setError}
          />
          <ShowPasswordRadio>
            <input type="checkbox" onClick={togglePassword} id="password" />
            <label htmlFor="password">顯示密碼 </label>
          </ShowPasswordRadio>
        </InputWrapper>

        {isUserLoading ? (
          <Loading>Loading...</Loading>
        ) : (
          <>
            <SubmitButton>登入</SubmitButton>
            {userErrorMessage && (
              <ErrorMessage>{userErrorMessage}</ErrorMessage>
            )}
          </>
        )}
      </LoginWrapper>
    </Root>
  );
}
