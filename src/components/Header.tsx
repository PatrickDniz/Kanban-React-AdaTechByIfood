import { LuBanana } from 'react-icons/lu'

import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Link } from 'react-router-dom'
import { Avatar } from './Avatar'

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg text-foreground"
        >
          <LuBanana className="h-5 w-5" />
          <span className="font-semibold">Kanbanana</span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Avatar />
        </div>
      </div>
    </div>
  )
}

export { Header }
