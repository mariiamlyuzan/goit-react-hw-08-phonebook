import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import UserMenu from './UserMenu/UserMenu';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 2px solid #ff6b08;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const Link = styled(NavLink)`
  color: #ff6b08;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 20px;
  &.active {
    color: #ff7f00;
  }
`;

const Wrapper = styled.div`
  padding: 40px;
`;

const Box = styled.div``;
const Logo = styled(NavLink)`
  color: #ff6b08;
  font-weight: 500;
  font-size: 40px;
  text-decoration: none;
`;
const Title = styled.h1`
  color: #ff6b08;
  font-weight: 500;
  font-size: 40px;
`;

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav>
        {isLoggedIn ? (
          <>
            <Logo to="/contacts">Contacts</Logo>
            <UserMenu />
          </>
        ) : (
          <>
            <Title>Contacts</Title>
            <Box>
              <Link to="/register">Registration</Link>
              <Link to="/login"> Log In</Link>
            </Box>
          </>
        )}
      </Nav>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
