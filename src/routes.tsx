import { createBrowserRouter } from 'react-router-dom'
import Error from './pages/Error'
import NotFound from './pages/NotFound404'
import AuthLayout from './pages/_layouts/AuthLayout'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Hero from './pages/_layouts/Hero'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <AuthLayout />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
