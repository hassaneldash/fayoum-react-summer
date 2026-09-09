import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import MainLayout from './layout/MainLayout';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FormPage from './pages/FormPage';

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <UsersPage />,
        },

        {
          path: 'login',
          element: <LoginPage />,
        },

        {
          path: 'register',
          element: <RegisterPage />,
        },

        {
          path: 'form',
          element: <FormPage />,
        },
      ],
    },
  ],
  {
    basename: '/fayoum-react-summer', // Todo: Deployment
  },
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);

// Zustand: npm i zustand
// 1. Create Store
