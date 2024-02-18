import { LuBanana } from 'react-icons/lu'

import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Link } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'
import { Button } from '../ui/Button'

export function Header() {
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
          <Button variant={'outline'} size={'icon'} className="rounded-md">
            <RxAvatar className="h-9 w-9" />
          </Button>
        </div>
      </div>
    </div>
  )
}
