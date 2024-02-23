import { Header } from '@/components/Header/header'
import SideBar from '@/components/SideBar'
import { Outlet } from 'react-router-dom'

function AppLayout() {
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

export default AppLayout
