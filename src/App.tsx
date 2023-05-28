import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AuthRegPage from './pages/AuthRegPage/AuthRegPage';
import MainPage from './pages/MainPage/MainPage';
import ProtectedRoute from './helper/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { RoutePath } from './routes/route';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RoutePath.HOME}
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
            path={RoutePath.SIGN_UP}
            element={
              <ProtectedRoute isReg={true}>
                <ErrorBoundary>
                  <AuthRegPage />
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route
            path={RoutePath.LOGIN}
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
            path={RoutePath.EDITOR}
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
