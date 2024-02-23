import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { RxAvatar } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import { signOut } from '@/api/signOut'
import { getUser } from '@/api/getUser'
import { useQuery, useMutation } from '@tanstack/react-query'

const Avatar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: Infinity,
  })

  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true })
    },
  })

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  return (
    <>
      <div className="relative">
        <Button
          id="dropdownUserAvatarButton"
          data-dropdown-toggle="dropdownAvatar"
          data-dropdown-placement="bottom"
          type="button"
          variant={'outline'}
          size={'icon'}
          className="relative me-0 flex rounded-md text-sm focus:ring-2 focus:ring-ring"
          onClick={toggleDropdown}
        >
          <RxAvatar className="h-9 w-9" />
        </Button>
        <div
          id="dropdownAvatar"
          data-popper-placement="bottom"
          className={`absolute z-10 ${isDropdownOpen ? 'block' : 'hidden'} right-0 mt-2 w-44 divide-y divide-border rounded-lg bg-popover shadow`}
        >
          {isLoadingUser ? (
            <div role="status" className="max-w-sm animate-pulse px-4 py-3">
              <div className="mb-4 h-2.5 w-24 rounded-full bg-secondary"></div>
              <div className="h-2 w-32 rounded-full bg-secondary"></div>
            </div>
          ) : (
            <div className="px-4 py-3 text-sm text-foreground">
              <div>{user?.name}</div>
              <div className="truncate font-medium">{user?.email}</div>
            </div>
          )}

          <div className=" py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-foreground hover:bg-secondary"
            >
              Gerenciar conta
            </a>
          </div>
          <ul className="py-2" aria-labelledby="dropdownUserAvatarButton">
            <li className="block px-4 py-2 text-sm text-foreground">
              Kanbanana
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-foreground hover:bg-secondary"
              >
                Ajuda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-foreground hover:bg-secondary"
              >
                Atalhos
              </a>
            </li>
          </ul>
          <div className="py-2w-full hover:rounded-md hover:bg-secondary">
            <button
              disabled={isSigningOut}
              onClick={() => signOutFn()}
              className="px-4 py-2 text-sm text-foreground"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export { Avatar }
