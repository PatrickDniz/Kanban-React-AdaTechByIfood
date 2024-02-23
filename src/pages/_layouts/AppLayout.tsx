import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { api } from '@/lib/axios'

import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar'

const AppLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptor)
    }
  }, [navigate])
  return (
    <>
      <div className="flex min-h-screen flex-col antialiased">
        <Header />
        <div className="flex h-5/6 flex-1 gap-4 marker:flex-1">
          <SideBar />

          <Outlet />
        </div>
      </div>
    </>
  )
}

export { AppLayout }
