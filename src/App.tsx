import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AuthRegPage from './pages/AuthRegPage/AuthRegPage';
import MainPage from './pages/MainPage/MainPage';
import ProtectedRoute from './helper/ProtectedRoute';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="sign-up" element={<AuthRegPage />} />
          <Route path="sign-in" element={<AuthRegPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/editor"
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
