import './App.css';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';
import styled from 'styled-components';

import { Watch } from 'react-loader-spinner';
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
}
  
`;

const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const HomeView = lazy(() => import('./views/HomeView'));
export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Box>
          <Watch
            color=" #ff6b08"
            height={300}
            width={400}
            ariaLabel="loading"
          />
        </Box>
      ) : (
        <>
          <AppBar />
          <Suspense
            fallback={
              <Box>
                <Watch
                  color=" #ff6b08"
                  height={300}
                  width={400}
                  ariaLabel="loading"
                />
              </Box>
            }
          >
            <Routes>
              {' '}
              <Route
                exact
                path="/"
                element={
                  <PublicRoute restricted>
                    <HomeView />{' '}
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <ProtectedRoute>
                    <ContactsView />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
