import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AuthRegPage from './pages/AuthRegPage/AuthRegPage';
import MainPage from './pages/MainPage/MainPage';
import ProtectedRoute from './helper/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Layout />
            </ErrorBoundary>
          }
        >
          <Route
            index
            element={
              <ErrorBoundary>
                <WelcomePage />
              </ErrorBoundary>
            }
          />
          <Route
            path="sign-up"
            element={
              <ProtectedRoute isReg={true}>
                <ErrorBoundary>
                  <AuthRegPage />
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route
            path="sign-in"
            element={
              <ProtectedRoute isReg={false}>
                <ErrorBoundary>
                  <AuthRegPage />
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/editor"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <MainPage />
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
