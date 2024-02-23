import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { signUp } from '@/api/signUp'

import { Button } from '@/components/ui/Button'
import { ImSpinner2 } from 'react-icons/im'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

const signUpFormSchema = z.object({
  name: z.string().min(3, 'O nome deve conter pelo menos 3 caracteres'),
  email: z.string().email('O email deve ser um email valido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

type SignUpForm = z.infer<typeof signUpFormSchema>

const SignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
  })

  const { mutateAsync: signUpFn } = useMutation({
    mutationFn: signUp,
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      setIsLoading(true)
      await signUpFn({
        name: data.name,
        email: data.email,
        password: data.password,
      })

      setIsLoading(false)
      alert('Conta criada com sucesso!')
      navigate(`/sign-in?email=${data.email}`)
    } catch (error) {
      setIsLoading(false)
      alert('Erro ao cadastrar usuário. Tente novamente mais tarde!')
    }
  }
  return (
    <>
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Kanbanana: A receita perfeita para uma rotina organizada!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <div className="relative z-0 ">
                <input
                  id="name"
                  type="text"
                  className="peer block h-9 w-full appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  {...register('name')}
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-light leading-none duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Seu nome
                </label>
                {errors.name && (
                  <span className="mt-2 text-xs text-destructive">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative z-0 ">
                <input
                  id="email"
                  type="email"
                  className="peer block h-9 w-full appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  {...register('email')}
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-light leading-none duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Seu e-mail
                </label>
                {errors.email && (
                  <span className="mt-2 text-xs text-destructive">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative z-0 ">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="peer block h-9 w-full appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  autoComplete="new-password"
                  {...register('password')}
                />
                <label
                  htmlFor="password"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-light leading-none duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Sua senha
                </label>
                <button
                  type="button"
                  className="absolute right-0 top-3 flex items-center pr-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
                </button>
                {errors.password && (
                  <span className="mt-2 text-xs text-destructive">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading && isSubmitting}
            >
              {isLoading ? (
                <ImSpinner2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Finalizar Cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a
                href=""
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                termos de serviço
              </a>{' '}
              e{' '}
              <a
                href=""
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                políticas de privacidade.
              </a>
            </p>
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
          <div className="space-y-2">
            <p className="text-center text-sm font-light text-foreground">
              Já tem uma conta?{' '}
              <Link
                to="/sign-in"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Clique aqui{' '}
              </Link>{' '}
              para entrar
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export { SignUp }
