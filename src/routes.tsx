import { createBrowserRouter } from 'react-router-dom'
import { Error } from './pages/Error'
import { NotFound } from './pages/NotFound404'
import { AuthLayout } from './pages/_layouts/AuthLayout'
import { SignIn } from './pages/auth/SignIn'
import { SignUp } from './pages/auth/SignUp'
import { HeroLayout } from './pages/_layouts/HeroLayout'
import { AppLayout } from './pages/_layouts/AppLayout'
import { Board } from './pages/app/board/Board'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroLayout />,
    errorElement: <Error />,
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <Error />,
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
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/board',
        element: <Board />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
