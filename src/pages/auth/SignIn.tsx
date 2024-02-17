import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { ImSpinner2 } from 'react-icons/im'
import { SyntheticEvent, useState } from 'react'
import { Button } from '@/components/ui/Button'

function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <>
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Transforme sua rotina com Kanbanana!
            </p>
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <div className="relative z-0">
                <input
                  id="email"
                  type="email"
                  className="peer block h-9 w-full appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-light leading-none duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Seu e-mail
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative z-0 ">
                <input
                  id="password"
                  type="password"
                  className="peer block h-9 w-full appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-light leading-none duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Sua senha
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      value=""
                      className="h-4 w-4 rounded border text-primary accent-primary "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="font-light text-foreground"
                    >
                      Lembre-me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading
                  ? (console.log(isLoading),
                    (<ImSpinner2 className="mr-2 h-4 w-4 animate-spin" />))
                  : null}
                Entrar
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-light text-foreground">
                Não possui conta?{' '}
                <Link
                  to="/sign-up"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Clique aqui{' '}
                </Link>{' '}
                para se cadastrar
              </p>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                OU
              </span>
            </div>
          </div>
          <Button variant={'outline'} type="button" disabled={isLoading}>
            {isLoading ? (
              <ImSpinner2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <FaGithub className="mr-2 h-4 w-4" />
            )}{' '}
            Entrar com GitHub
          </Button>
        </div>
      </div>
    </>
  )
}

export default SignIn
