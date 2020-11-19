import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { setAuthToken } from '../../utils';
import { login, getMe } from '../../WebAPI';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts';

const Root = styled.div`
  height: 80vh;
`;

export default function NewPostPage() {
  return <Root>發佈文章</Root>;
}
