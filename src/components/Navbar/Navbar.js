import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../utils';

const NavbarContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
  padding: 0px 5vw;
  background: white;
`;

const NavbarList = styled.div`
  display: flex;
`;

const Brand = styled(Link)`
  font-size: 32px;
  color: #017a75;
`;

const Nav = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 0 30px;
  height: 64px;
`;

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuthToken('');
    setUser(null);
    alert('登出成功');
    navigate('/');
  };

  return (
    <NavbarContainer>
      <Brand to="/" children="React Blog" />
      <NavbarList>
        <Nav to="about-me" children="關於我" />
        <Nav to="posts" children="文章列表" />
        {user && <Nav to="new-post" children="發佈文章" />}
        {user && <Nav to="/" onClick={handleLogout} children="登出" />}
        {!user && <Nav to="login" children="登入" />}
        {!user && <Nav to="register" children="註冊" />}
      </NavbarList>
    </NavbarContainer>
  );
}
