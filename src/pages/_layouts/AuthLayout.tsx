import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { LuBanana } from 'react-icons/lu'
import { Link, Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="grid min-h-screen antialiased md:grid-cols-2">
      <div className="hidden h-full flex-col justify-between p-10 text-muted-foreground md:flex md:border-r md:bg-primary">
        <div className="col-span-2">
          <Link
            to="/"
            className="flex items-center gap-3 text-lg text-foreground"
          >
            <LuBanana className="h-5 w-5" />
            <span className="font-semibold">Kanbanana</span>
          </Link>
        </div>

        <footer className="text-nowrap text-xs text-foreground sm:text-sm">
          Todos os direitos reservados &copy; Kanbanana -{' '}
          {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute right-8 top-8">
          <ThemeToggle />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export { AuthLayout }
